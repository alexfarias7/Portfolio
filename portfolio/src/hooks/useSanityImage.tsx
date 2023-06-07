"use client";

import imageUrlBuilder from "@sanity/image-url";
import config from "../../sanity.config";

const useSanityImage = () => {
  const builder = imageUrlBuilder(config);

  const urlFor = (source: string) => {
    return builder.image(source);
  };

  return urlFor;
};

export default useSanityImage;
