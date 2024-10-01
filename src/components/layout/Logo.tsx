import styles from '@/styles/components/layout/Logo.module.scss';
import { Caveat } from 'next/font/google';

import { BsCamera2 } from 'react-icons/bs';
import { GiFireflake } from 'react-icons/gi';
import Link from 'next/link';

const caveat = Caveat({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${caveat.className}`}>
      <h1>
        <span className={styles.logo_icon}>
          <BsCamera2 className={styles.icon_camera} />
          <GiFireflake className={styles.icon_flash} />
        </span>
        ECHO
      </h1>
    </Link>
  );
}
