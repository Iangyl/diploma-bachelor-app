export interface IModalContainer {
  isOpen: boolean;
  content: string;
  onClose: () => void;
}
