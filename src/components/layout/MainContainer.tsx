import { ReactNode } from 'react';

import Navbar from '@/components/bars/Navbar/Index';

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
