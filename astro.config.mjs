

import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: "5YkzWGmKQfvXx1L7QnNfKgtt",
      apiOptions: {
        cache: { clear: "auto", type: "memory" },
      },
      //bridge: true,
      components: {
        page: "storyblok/Page",
        feature: "storyblok/subfolder/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        blog: "storyblok/Blog",
        title: "storyblok/Title"
      },
    }),
    tailwind(),
  ],
});