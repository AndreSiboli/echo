import { ReactNode } from 'react';
import styles from '@/styles/components/layout/SidePage.module.scss';

import Navbar from '@/components/bars/Navbar/Index';
import Footer from '@/components/bars/Footer/Index';

export default function SidePage({ children }: { children: ReactNode }) {
    return (
        <div className={styles.side}>
            <Navbar mode="sticky" />

            {children}

            <Footer />
        </div>
    );
}
