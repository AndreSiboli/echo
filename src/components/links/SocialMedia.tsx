import styles from '@/styles/components/links/SocialMedia.module.scss';
import Link from 'next/link';

import { FaXTwitter, FaInstagram, FaP } from 'react-icons/fa6';

interface PropsType {
    orientation?: 'column';
}

export default function SocialMedia(props: PropsType) {
    const { orientation = '' } = props;

    return (
        <nav className={`${styles.social} ${styles[orientation]}`}>
            <div className={styles.social_link}>
                <Link href="https://www.x.com" target="_blank" aria-label="link to X(Twitter)">
                    <FaXTwitter />
                </Link>
            </div>
            <div className={styles.social_link}>
                <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    aria-label="link to Instagram"
                >
                    <FaInstagram />
                </Link>
            </div>
            <div className={styles.social_link}>
                <Link
                    href="https://andresiboli.github.io/portfolio"
                    target="_blank"
                    aria-label="link to Portfolio"
                >
                    <FaP />
                </Link>
            </div>
        </nav>
    );
}
