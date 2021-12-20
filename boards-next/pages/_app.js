import '../styles/globals.css';
import Layout from '../components/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const pageTitle = pageProps.pageTitle;
  return (
    <Layout>
      <Head>
        <title>{pageTitle ? pageTitle + ' | ' : null}League Boards Archive</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
