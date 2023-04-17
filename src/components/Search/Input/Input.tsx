import styled from './Input.module.sass';
import { ITextInput } from './Input.types';

const Input = ({ value, onChange, className, style }: ITextInput) => (
  <input
    type="text"
    className={`${styled.input} ${className}`}
    style={style}
    value={value}
    onChange={onChange}
    placeholder='Введіть текст'
  />
);

export default Input;
