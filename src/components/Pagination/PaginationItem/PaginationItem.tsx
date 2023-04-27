import ArrowIcon from '@/src/assets/icons/Arrow';
import Button from '../../Search/Button/Button';

import { IPaginationItem } from './PaginationItem.types';
import styles from './PaginationItem.module.sass';

const PaginationItem = ({
  disabled,
  type,
  value,
  onClick,
  className
}: IPaginationItem) => {
  return (
    <li>
      <Button
        onClick={onClick}
        className={`${styles.paginationItem} ${className}`}
        disabled={disabled ?? false}
      >
        {type === 'cell' ? (
          value?.toString() ?? '#'
        ) : type === 'leftArrow' ? (
          <ArrowIcon width={24} height={24} style={{ rotate: '180deg' }} />
        ) : (
          <ArrowIcon width={24} height={24} />
        )}
      </Button>
    </li>
  );
};

export default PaginationItem;
