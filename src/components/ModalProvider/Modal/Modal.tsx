import CloseIcon from '@/src/assets/icons/Close';
import Button from '../../Search/Button/Button';

import styles from './Modal.module.sass';
import { ModalType } from '../ModalProvider.types';

const Modal = ({
  type,
  content,
  onClose,
}: {
  type: ModalType | null;
  content: string;
  onClose: () => void;
}) => {
  return (
    <div className={`${styles.modal} ${styles[type!]}`}>
      <div className={styles.top}>
        <Button type="button" onClick={onClose}>
          {type === 'error' ? (
            <CloseIcon width={18} height={18} onClick={onClose} color='#FFFFFF' />
          ) : (
            <CloseIcon width={18} height={18} onClick={onClose} />
          )}
        </Button>
      </div>
      {type === 'error' && <h2 className={styles.errorTitle}>Error</h2>}
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Modal;
