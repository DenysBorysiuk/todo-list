import { Status } from '@/types';

export interface ButtonProps {
  type: 'button' | 'submit';
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: () => {
    payload: Status;
    type: 'filters/setStatusFilter';
  };
}
