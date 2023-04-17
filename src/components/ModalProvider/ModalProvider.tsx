import { useState, useCallback, createContext, useContext } from 'react';
import { IModalContext, IOpenOptions } from './ModalProvider.types';
import ModalContainer from './ModalContainer/ModalContainer';

const ModalContext = createContext<IModalContext | null>(null);

const ModalProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');

  const openModal = useCallback(({ type, content }: IOpenOptions) => {
    setIsOpen(true);
    setContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <ModalContainer isOpen={isOpen} content={content} onClose={closeModal} />
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext)!;

export default ModalProvider;
