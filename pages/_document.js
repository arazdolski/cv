import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="CV" />
        <meta name="author" content="Aleksandr Razdolski" />
        <meta property="og:url" content="https://arazdolski.xyz" />
        <meta
          property="og:title"
          content="Aleksandr Razdolski - CV"
          key="title"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Site Reliability Engineer at Bolt. Located in Tallinn, Estonia. Check his CV."
          key="description"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Aleksandr Razdolski - CV"
          key="title"
        />
        <meta
          name="twitter:description"
          content="Site Reliability Engineer at Bolt. Located in Tallinn, Estonia. Check his CV."
          key="description"
        />
      </Head>
      <body className="dark:bg-slate-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
