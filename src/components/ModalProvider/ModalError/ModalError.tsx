import CloseIcon from '@/src/assets/icons/Close';
import Button from '../../Search/Button/Button';

import styles from './ModalError.module.sass';

const ModalError = ({
  content,
  onClose,
}: {
  content: string;
  onClose: () => void;
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.topContainer}>
        <div className={styles.top}>
          <Button type="button" onClick={onClose}>
            <CloseIcon width={18} height={18} onClick={onClose} color="#FFFFFF" />
          </Button>
        </div>
        <h2 className={styles.errorTitle}>Error</h2>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default ModalError;
