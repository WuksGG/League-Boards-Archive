import Head from 'next/head';
import Layout from '../components/layout';
import { AppContextProvider } from '../store/AppContext';
import '../styles/globals.css';

function AppRoot({ Component, pageProps }) {
  const pageTitle = pageProps.pageTitle;
  return (
    <AppContextProvider>
      <Layout>
        <Head>
          <title>{pageTitle ? pageTitle + ' | ' : null}League Boards Archive</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}

export default AppRoot;
