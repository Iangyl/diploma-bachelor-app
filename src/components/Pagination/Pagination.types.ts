export interface IPagination {
  page: number;
  total: number;
  pageSize: number;
  siblingCount?: number;
  className?: string;
  onPageChange: (arg: number) => void;
}
