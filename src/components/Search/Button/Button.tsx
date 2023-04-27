import { IButton } from './Button.types';
import styled from './Button.module.sass';

const Button = ({ disabled, type, children, style, className, onClick }: IButton) => (
  <button
    type={type}
    className={`${styled.button} ${className}`}
    onClick={onClick}
    style={style}
    disabled={disabled ?? false}
  >
    {children}
  </button>
);

export default Button;
