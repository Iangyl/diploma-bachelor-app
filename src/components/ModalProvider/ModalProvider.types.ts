export type ModalType = 'loading' | 'modal' | 'error';
export interface IModalContext {
  openModal: (args: IOpenOptions) => void;
  closeModal: () => void;
}

export interface IOpenOptions {
  type: ModalType;
  content: string;
}
