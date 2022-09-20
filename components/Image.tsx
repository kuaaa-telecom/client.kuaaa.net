import React from "react";
import { default as NextImage, ImageLoader, ImageProps } from "next/image"

/**
 * From https://developers.cloudflare.com/images/image-resizing/integration-with-frameworks/
 */

const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src;
};

const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

const Image: React.FC<ImageProps> = (props) => {
  return <NextImage loader={cloudflareLoader} {...props} />
}

export default Image