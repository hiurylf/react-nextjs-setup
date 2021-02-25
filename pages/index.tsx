import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Setup React with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Setup React with Next.js, TypeScript, ESLint and Styled Components
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

      </main>

      <footer className={styles.footer}>

          Powered by

        <a href="https://github.com/hiurylf" target="_blank" rel="noopener noreferrer">
            &nbsp; Hiurylf
        </a>

      </footer>
    </div>
  )
}
