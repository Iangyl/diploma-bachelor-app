import { ModalType } from '../ModalProvider.types';

export interface IModalContainer {
  type: ModalType | null;
  isOpen: boolean;
  content: string;
  onClose: () => void;
}
