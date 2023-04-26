import { useMemo, useState } from 'react';
import RosterItem from './RosterItem/RosterItem';
import Pagination from '../Pagination/Pagination';

import IResSearch from '@/src/interfaces/IResSearch';

import styles from './Roster.module.sass';

const pageSize = 7;

const Roster = ({ files }: { files: IResSearch[] }) => {
  const [page, setPage] = useState(1);

  const currentRosterData = useMemo(() => {
    const firstPageIndex = (page - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return files.slice(firstPageIndex, lastPageIndex);
  }, [page]);

  return (
    <>
      <ul className={styles.roster}>
        {currentRosterData ? (
          currentRosterData.map((file, idx) => (
            <li key={idx}>
              <RosterItem fileName={file.fileName} content={file.content} />
            </li>
          ))
        ) : (
          <li>No files found!</li>
        )}
      </ul>
      <div>
        <Pagination
          page={page}
          pageSize={pageSize}
          total={files.length}
          onPageChange={setPage}
        />
      </div>
    </>
  );
};

export default Roster;
