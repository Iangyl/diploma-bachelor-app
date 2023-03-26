import Head from 'next/head';
import styles from '@/styles/Home.module.sass';
import Link from 'next/link';
import Search from '../components/Search/Search';

export default function Home() {
  return (
    <>
      <Head>
        <title>Повнотекстовий пошук</title>
        <meta
          name="description"
          content="This project provides a powerful full-text search engine for Ukrainian-language texts. The search engine is designed to index and search large collections of documents written in the Ukrainian language, including books, articles, and web pages. Our technology uses advanced natural language processing algorithms to analyze the content of each document and provide accurate search results based on the user's query. Whether you're looking for specific phrases, keywords, or topics, our search engine can help you quickly find the information you need in Ukrainian-language texts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Повнотекстовий пошук</h1>
          <div>
            <Search />
          </div>
        </div>
      </main>
    </>
  );
}
