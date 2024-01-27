import styles from '@/styles/components/bars/Navbar/Navigation.module.scss';
import Link from 'next/link';

interface PropsType {
    orientation?: 'column';
}

export default function Navigation(props: PropsType) {
    const { orientation = '' } = props;

    return (
        <nav className={`${styles.navigation} ${styles[orientation]}`}>
            <div className={styles.navigation_links}>
                <Link href="/">Início</Link>
                <Link href="/about">Sobre</Link>
                <Link href="/contact">Contato</Link>
            </div>
            <div className={styles.navigation_button}>
                <Link href="/gallery">
                    <span className={styles.text}>Galeria</span>
                </Link>
            </div>
        </nav>
    );
}
