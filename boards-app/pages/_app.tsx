import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/templates/Layout';
import { Chakra } from '../contexts/Chakra';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const pageTitle = (
    pageProps.pageTitle
      ? pageProps.pageTitle + ' | '
      : ''
    ) + 'League Boards Archive';
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Head>
          <title>{pageTitle}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:image" content="https://archive2.runeterra.net/assets/images/logo.png" />
          <meta property="og:title" content={pageProps.pageTitle || "League Boards Archive"} />
          <meta property="og:description" content="An archive of the League of Legends Boards" />
          <meta property="og:site_name" content="League Boards Archive" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default MyApp;
