import styles from '@/styles/components/bars/Navbar/Navigation.module.scss';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation_links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.navigation_button}>
        <Link href="/gallery">
          <span className={styles.text}>Gallery</span>
        </Link>
      </div>
    </nav>
  );
}
