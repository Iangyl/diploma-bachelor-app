import usePagination from '@/src/hooks/usePagination';

import { IPagination } from './Pagination.types';

import styles from './Pagination.module.sass';
import PaginationItem from './PaginationItem/PaginationItem';
import { DOTS } from '@/src/utils/constants';

const Pagination = ({
  page,
  total,
  pageSize,
  className,
  siblingCount = 1,
  onPageChange,
}: IPagination) => {
  const paginationRange = usePagination({
    page,
    total,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (page === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(page + 1);
  };

  const onPrevious = () => {
    onPageChange(page - 1);
  };

  let lastPage = paginationRange![paginationRange!.length - 1];
  return (
    <ul className={`${styles.pagination} {className}`}>
      <PaginationItem type="leftArrow" onClick={onPrevious} />
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <PaginationItem type="cell" value="&#8230;" />;
        }

        return (
          <PaginationItem
            type="cell"
            value={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          />
        );
      })}
      <PaginationItem type="rightArrow" onClick={onNext} />
    </ul>
  );
};

export default Pagination;
