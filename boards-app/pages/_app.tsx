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
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default MyApp;
