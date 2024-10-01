import { ReactNode } from 'react';
import styles from '@/styles/components/layout/SidePage.module.scss';

import Footer from '@/components/bars/Footer/Index';

export default function SidePage({ children }: { children: ReactNode }) {
  return (
    <div className={styles.side}>
      {children}
      <Footer />
    </div>
  );
}
