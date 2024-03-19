import { FilterStatus } from '@/types';

export interface ButtonProps {
  type: 'button' | 'submit';
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: () => {
    payload: FilterStatus;
    type: 'filter/setStatusFilter';
  };
}
