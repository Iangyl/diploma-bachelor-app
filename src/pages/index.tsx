import Head from 'next/head';

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
      <main>Hello world!</main>
    </>
  );
}
