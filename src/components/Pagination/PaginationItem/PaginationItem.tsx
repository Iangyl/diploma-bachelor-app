import ArrowIcon from '@/src/assets/icons/Arrow';
import Button from '../../Search/Button/Button';
import { IPaginationItem } from './PaginationItem.types';

const PaginationItem = ({ type, value, onClick }: IPaginationItem) => {
  return (
    <li>
      <Button onClick={onClick}>
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
