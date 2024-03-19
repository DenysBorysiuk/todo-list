import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar } from '@/components';

import { LayoutProps } from './type';

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Toaster />
    </div>
  );
};
