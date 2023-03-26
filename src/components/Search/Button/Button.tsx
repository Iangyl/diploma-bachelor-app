import { IButton } from './Button.types';
import styled from './Button.module.sass';

const Button = ({ type, children, style, className, onClick }: IButton) => (
  <button
    type={type}
    className={`${styled.button} ${className}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

export default Button;
