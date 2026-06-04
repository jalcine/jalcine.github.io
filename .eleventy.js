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
import EleventyPluginOgImage from "eleventy-plugin-og-image";
import { readFileSync } from "fs";
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

  for (const folderName of ["images", "videos", "files", "fonts", "scripts"]) {
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

  eleventyConfig.addPlugin(EleventyPluginOgImage, {
    satoriOptions: {
      fonts: [
        {
          name: "Alegreya",
          data: readFileSync("fonts/alegreya/webfonts/alegreya-latin-900-normal.woff"),
          weight: 900,
          style: "normal",
        },
        {
          name: "Alegreya",
          data: readFileSync("fonts/alegreya/webfonts/alegreya-latin-400-normal.woff"),
          weight: 400,
          style: "normal",
        },
      ],
    },
    async shortcodeOutput(ogImage) {
      const url = await ogImage.outputUrl();
      return `<meta name="twitter:image" content="${url}" />\n    <meta property="og:image" content="${url}" />`;
    },
  });

  eleventyConfig.addGlobalData("generated", () => {
    let now = new Date();
    return {
      human: new Intl.DateTimeFormat("en-US", {
        dateStyle: "full",
        timeStyle: "long",
      }).format(now),
      ts: now.valueOf(),
    };
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
      console.error(err);
      return 0;
    }
  });
}
