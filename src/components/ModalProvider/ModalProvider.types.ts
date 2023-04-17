export interface IModalContext {
  openModal: (args: IOpenOptions) => void;
  closeModal: () => void;
}

export interface IOpenOptions {
  type: 'loading' | 'modal';
  content: string;
}
