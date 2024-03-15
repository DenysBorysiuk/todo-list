import css from './Layout.module.css';
import { LayoutProps } from './type';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
