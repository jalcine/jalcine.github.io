import { DateTime } from "luxon";
import markdownIt from "markdown-it";
import feedPlugin from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import readingTime from "eleventy-plugin-reading-time";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import footnote from "markdown-it-footnote";
import anchor from "markdown-it-anchor";
import smartarrows from "markdown-it-smartarrows";
import { compress } from "eleventy-plugin-compress";
import "dotenv/config";

const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;

export default function (eleventyConfig) {
  let options = {
    html: true,
    breaks: false,
    linkify: true,
  };

  const md = markdownIt(options).use(footnote).use(anchor).use(smartarrows);
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    let date = DateTime.fromJSDate(dateObj).setZone("America/New_York");
    return date.toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addFilter("temporalUrl", (dateObj) => {
    const date = DateTime.fromJSDate(dateObj).setZone("America/New_York");
    console.log(dateObj, date);
    const year = date.getYear();
    const month = date.getMonth();
    const day = date.getDay();
    return `${year}/${month}/${day}`;
  });

  eleventyConfig.addPassthroughCopy("*.css");
  for (const folder in ["images", "videos", "files", "fonts"]) {
    eleventyConfig.addPassthroughCopy(`${folder}/**/*`);
  }

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(feedPlugin);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp", "png"],
    witdths: ["600", "1200", "1800"],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  eleventyConfig.addPlugin(compress);

  eleventyConfig.addGlobalData("generated", () => {
    let now = new Date();
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(now);
  });

  eleventyConfig.addGlobalData("emailSubscriberCount", async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Token ${BUTTONDOWN_API_KEY}`,
      },
    };

    try {
      /** @type {import('node-fetch').Response} */
      const response = await fetch(
        "https://api.buttondown.com/v1/subscribers",
        options,
      );
      /** @type {{count: number}} */
      const json_resp = await response.json();
      return json_resp.count;
    } catch (err) {
      return console.error(err);
    }
  });
}
