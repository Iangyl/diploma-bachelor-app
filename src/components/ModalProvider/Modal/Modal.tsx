import CloseIcon from '@/src/assets/icons/Close';
import Button from '../../Search/Button/Button';

import styles from './Modal.module.sass';

const Modal = ({
  content,
  onClose,
}: {
  content: string;
  onClose: () => void;
}) => {
  const text = 'some text';
  return (
    <div className={styles.modal}>
      <div className={styles.top}>
        <Button type="button" onClick={onClose}>
          <CloseIcon width={18} height={18} onClick={onClose} />
        </Button>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Modal;
