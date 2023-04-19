import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';

import { IModalContainer } from './ModalContainer.types';

import styles from './ModalContainer.module.sass';
import { useRef, useState, useEffect } from 'react';

const ModalContainer = ({ isOpen, content, onClose }: IModalContainer) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#body');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          className={`${styles.container} ${
            isOpen ? styles.open : styles.close
          }`}
        >
          {isOpen && <Modal onClose={onClose} content={content} />}
        </div>,
        document.body
      )
    : null;
};

export default ModalContainer;
