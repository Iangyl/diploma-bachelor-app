import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { useModal } from '@/src/components/ModalProvider/ModalProvider';
import { clearSearch, setSearch } from '@/src/redux/searchSlice/searchSlice';
import { APP_ROUTES } from '@/src/utils/constants';

import Head from 'next/head';
import Search from '@/src/components/Search/Search';
import Roster from '@/src/components/Roster/Roster';

import IResSearch from '@/src/interfaces/IResSearch';

import styles from '@/styles/pages-styles/Roster.module.sass';

export default function RosterPage() {
  const router = useRouter();
  const { openModal } = useModal();
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const [files, setFiles] = useState<IResSearch[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    axios
      .post('/api/search', { search })
      .then((data) => {
        setFiles(data.data.data)
      })
      .catch((error) => openModal({ type: 'error', content: error.response.data.error }));
  };

  return (
    <>
      <Head>
        <title>Результати</title>
        <meta
          name="roster"
          content="The files roster that contains searched substring."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div>
            <h2
              className={styles.title}
              onClick={() => {
                dispatch(clearSearch());
                router.push(APP_ROUTES.HOME);
              }}
            >
              Повнотекстовий пошук
            </h2>
            <div>
              <Search
                value={search}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
          <Roster files={files} />
        </div>
      </main>
    </>
  );
}
