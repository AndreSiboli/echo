import styles from '@/styles/components/bars/Footer/Index.module.scss';

import Container from '@/components/layout/Container';
import Link from 'next/link';
import Logo from '@/components/layout/Logo';

import { FaSlash, FaXTwitter, FaInstagram, FaP } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_container}>
                    <div className={styles.footer_wrapper}>
                        <nav className={styles.footer_links}>
                            <span>Mentions</span>
                            <div className={styles.group}>
                                <Link href="https://www.pexels.com/pt-br/">Pexels</Link>
                                <Link href="https://coolors.co/">Coolors</Link>
                                <Link href="https://mycolor.space/">ColorSpace</Link>
                            </div>
                        </nav>

                        <nav className={styles.footer_social}>
                            <Link
                                href="https://www.x.com"
                                target="_blank"
                                aria-label="link to X(Twitter)"
                            >
                                <FaXTwitter />
                            </Link>

                            <FaSlash className={styles.slash} />

                            <Link
                                href="https://www.instagram.com"
                                target="_blank"
                                aria-label="link to Instagram"
                            >
                                <FaInstagram />
                            </Link>

                            <FaSlash className={styles.slash} />

                            <Link
                                href="https://andresiboli.github.io/portfolio"
                                target="_blank"
                                aria-label="link to Portfolio"
                            >
                                <FaP />
                            </Link>
                        </nav>

                        <div className={styles.footer_logo}>
                            <Logo />
                        </div>
                    </div>
                    <div className={styles.footer_copyright}>
                        <p>
                            Copyright &copy; Echo {new Date().getFullYear()}. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
