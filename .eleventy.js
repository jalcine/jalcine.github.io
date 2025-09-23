import { DateTime } from "luxon";
import markdownIt from "markdown-it";
import feedPlugin from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import readingTime from "eleventy-plugin-reading-time";
import { Image, eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import footnote from "markdown-it-footnote";
import anchor from "markdown-it-anchor";
import smartarrows from "markdown-it-smartarrows";
import { compress } from "eleventy-plugin-compress";
import "dotenv/config";

const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;

export default function (
  /** @type {import('@11ty/eleventy').EleventyConfig  */ eleventyConfig,
) {
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

  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("fonts");

  for (const folderName in ["images", "videos", "files", "fonts"]) {
    eleventyConfig.addPassthroughCopy(folderName);
    eleventyConfig.addPassthroughCopy(`${folderName}/*`);
    eleventyConfig.addPassthroughCopy(`${folderName}/**/*`);
  }

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(feedPlugin);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addPlugin(compress);

  eleventyConfig.addShortcode("imageUrl", async function (src) {
    const img = new Image(src, {
      widths: ["480"],
      formats: ["jpeg"],
      returnType: "html", // new in v6.0
    });
    const stats = img.getFullStats({ width: 480 });
    return stats.jpeg[0].url;
  });

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
