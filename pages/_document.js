import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content="CV" />
        <meta name="author" content="Aleksandr Razdolski" />
        <meta property="og:title" content="arazdolski.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arazdolski.xyz/" />
        <meta property="og:description" content="CV" />
        <meta property="og:image" content="http://keeb.ee/public/icon.svg" />
      </Head>
      <body className="dark:bg-slate-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
