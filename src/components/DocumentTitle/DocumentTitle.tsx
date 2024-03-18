import { Helmet } from 'react-helmet-async';

import { DocumentTitleProps } from './type';

export const DocumentTitle: React.FC<DocumentTitleProps> = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};
