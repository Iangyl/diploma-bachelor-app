import Input from './Input/Input';
import Button from './Button/Button';
import SearchIcon from '@/src/assets/icons/Search';

import { IMainSearch } from './Search.types';

import styles from './Search.module.sass';

const Search = ({
  value,
  onChange,
  onClick,
  className,
  style,
}: IMainSearch) => {
  return (
    <div className={`${styles.search} ${className}`} style={style}>
      <Button onClick={onClick}>
        <SearchIcon />
      </Button>
      <Input value={value} onChange={onChange} />
    </div>
  );
};

export default Search;
