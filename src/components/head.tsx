import React from "react";
import NextHead from "next/head";

const TITLE = "0width";
const DESCRIPTION = "";
const DOMAIN = "https://0width.com";
const OG_STATIC_IMAGE = `${DOMAIN}/og.png`;

const Head = () => {
  return (
    <NextHead>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={OG_STATIC_IMAGE} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={OG_STATIC_IMAGE} />
      <meta name="og:url" content={DOMAIN}></meta>
      <meta property="og:site_name" content={TITLE}></meta>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DOMAIN}></meta>
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_STATIC_IMAGE} />
    </NextHead>
  );
};

export default Head;
