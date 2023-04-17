import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';

import { IModalContainer } from './ModalContainer.types';

import styles from './ModalContainer.module.sass';

const ModalContainer = ({ isOpen, content, onClose }: IModalContainer) =>
  createPortal(
    <div className={styles.container}>
      {isOpen && <Modal onClose={onClose} content={content} />}
    </div>,
    document.body
  );

export default ModalContainer;
