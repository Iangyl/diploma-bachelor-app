import { ChangeEvent, useEffect, useState } from 'react';
import { useModal } from '../components/ModalProvider/ModalProvider';

import getFile from '../utils/getFile';
import findFile from '../utils/findFile';
import prepareText from '../utils/prepareText';

import Head from 'next/head';
import Search from '../components/Search/Search';

import styles from '@/styles/Home.module.sass';

export default function Home() {
  const [search, setSearch] = useState('');
  const [fileName, setFileName] = useState<string>();
  const { openModal } = useModal();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    const preparedText = prepareText(search);
    const searchedWords = preparedText.split('');
    const fileName = findFile(searchedWords, search);
    setFileName(fileName);
  };

  useEffect(() => {
    if (fileName) {
      const text = getFile(fileName);
      openModal({ type: 'modal', content: text });
    }
  }, [fileName]);

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
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Повнотекстовий пошук</h1>
          <div>
            <Search
              value={search}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>
    </>
  );
}
