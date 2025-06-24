import { Html, Head, Main, NextScript } from "next/document";
import { ThemeModeScript } from "flowbite-react";
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ThemeModeScript />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const getServerSideProps = async () => {
  const cache = createCache();
  const style = extractStyle(cache);
  
  return {
    props: {
      style,
    },
  };
}

export const getStaticProps = async () => {
  const cache = createCache();
  const style = extractStyle(cache);
  
  return {
    props: {
      style,
    },
  };
}

export const getInitialProps = async (ctx) => {
  const cache = createCache();
  const style = extractStyle(cache);
  
  return {
    ...ctx,
    style,
  };
}
