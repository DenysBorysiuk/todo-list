type Status = 'all' | 'active' | 'completed';

export interface ButtonProps {
  type: 'button' | 'submit';
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: () => {
    payload: Status;
    type: 'filters/setStatusFilter';
  };
}
