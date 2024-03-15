import clsx from 'clsx';

import css from './Button.module.css';
import { ButtonProps } from './type';

export const Button: React.FC<ButtonProps> = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
