import { useModal } from '../../ModalProvider/ModalProvider';

import { textCutter } from '@/src/utils/helpers';

import styles from './RosterItem.module.sass'

const RosterItem = ({
  fileName,
  content,
}: {
  fileName: string;
  content: string;
}) => {
  const { openModal } = useModal();
  return (
    <div>
      <a className={styles.link} onClick={() => openModal({ type: 'modal', content })}>
        <h3>{fileName}</h3>
        <p className={styles.content}>{textCutter(content)}</p>
      </a>
    </div>
  );
};

export default RosterItem;
