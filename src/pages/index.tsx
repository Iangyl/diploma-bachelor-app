import { ChangeEvent, useEffect, useState } from 'react';
import { useModal } from '../components/ModalProvider/ModalProvider';

import Head from 'next/head';
import Search from '../components/Search/Search';

import styles from '@/styles/Home.module.sass';
import axios from 'axios';
import IResSearch from '../interfaces/IResSearch';
import { Data } from './api/search';

export default function Home() {
  const [search, setSearch] = useState('');
  const [document, setDocument] = useState<IResSearch>();
  const { openModal } = useModal();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    axios
      .post('/api/search', { search })
      .then((data) => {
        setDocument(data.data);
        setSearch('');
      })
      .catch((error) => console.log(error.error));
  };

  useEffect(() => {
    if (document) {
      openModal({ type: 'modal', content: document.content });
    }
  }, [document]);

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
