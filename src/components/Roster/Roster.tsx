import IResSearch from '@/src/interfaces/IResSearch';
import RosterItem from './RosterItem/RosterItem';

import styles from './Roster.module.sass';

const Roster = ({ files }: { files: IResSearch[] }) => {
  return (
    <ul className={styles.roster}>
      {files ? (
        files.map((file, idx) => (
          <li key={idx}>
            <RosterItem fileName={file.fileName} content={file.content} />
          </li>
        ))
      ) : (
        <li>No files found!</li>
      )}
    </ul>
  );
};

export default Roster;
