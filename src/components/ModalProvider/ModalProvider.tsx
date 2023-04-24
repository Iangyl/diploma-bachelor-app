import { useState, useCallback, createContext, useContext } from 'react';
import { IModalContext, IOpenOptions, ModalType } from './ModalProvider.types';
import ModalContainer from './ModalContainer/ModalContainer';

const ModalContext = createContext<IModalContext | null>(null);

const ModalProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [type, setType] = useState<ModalType | null>(null);

  const openModal = useCallback(({ type, content }: IOpenOptions) => {
    setIsOpen(true);
    setContent(content);
    setType(type)
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <ModalContainer
        type={type}
        isOpen={isOpen}
        content={content}
        onClose={closeModal}
      />
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext)!;

export default ModalProvider;
