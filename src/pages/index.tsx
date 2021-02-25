import Head from 'next/head';
import { AppProps } from 'next/app';
import { Container, Footer } from '../styles/pages/Home';

const Home: React.FC<AppProps> = ({ Component, pageProps }) => (
   <Container>
      <Head>
         <title>Setup React with Next.js</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
         <h1>
            This is a React Setup with Next.js, TypeScript, ESLint and Styled
            Components
         </h1>
      </main>

      <Footer>
         Powered by
         <a
            href="https://github.com/hiurylf"
            target="_blank"
            rel="noopener noreferrer"
         >
            &nbsp;Hiurylf
         </a>
      </Footer>
   </Container>
);

export default Home;
