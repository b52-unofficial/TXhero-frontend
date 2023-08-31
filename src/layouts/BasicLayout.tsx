import { PropsWithChildren } from 'react';

import Header from '@/components/Header';

export default function BasicLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
