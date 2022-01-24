import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/templates/Layout';
import { Chakra } from '../contexts/Chakra';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default MyApp;
