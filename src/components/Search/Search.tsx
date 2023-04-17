import { useState } from 'react';
import Input from './Input/Input';
import Button from './Button/Button';
import SearchIcon from '@/src/assets/icons/Search';

import { IMainSearch } from './Search.types';

import styles from './Search.module.sass';

const Search = ({
  value,
  onChange,
  onSubmit,
  className,
  style,
}: IMainSearch) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <form
      className={`${styles.search} ${className}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={style}
      onSubmit={onSubmit}
    >
      <Button type="submit">
        <SearchIcon width={24} height={24} />
      </Button>
      <Input value={value} onChange={onChange} />
    </form>
  );
};

export default Search;
