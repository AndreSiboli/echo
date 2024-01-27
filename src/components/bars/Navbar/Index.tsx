import { useState, useEffect } from 'react';
import styles from '@/styles/components/bars/Navbar/Index.module.scss';

import Container from '@/components/layout/Container';
import Menu from '@/components/bars/Navbar/Menu';
import Navigation from '@/components/bars/Navbar/Navigation';
import Logo from '@/components/layout/Logo';

interface PropsType {
    mode: 'sticky' | 'fixed';
}

export default function Navbar(props: PropsType) {
    const { mode } = props;
    const [menuActive, setMenuActive] = useState(false);
    const [onTop, setOnTop] = useState(true);

    useEffect(() => {
        function menu() {
            const width = window.innerWidth;
            if (width >= 768) setMenuActive(false);
        }

        window.addEventListener('resize', menu);

        return () => window.removeEventListener('resize', menu);
    }, [menuActive]);

    useEffect(() => {
        function scrolling() {
            const scroll = window.scrollY;

            if (scroll !== 0) {
                setOnTop(false);
                return;
            }

            setOnTop(true);
        }

        window.addEventListener('scroll', scrolling);

        return () => window.removeEventListener('scroll', scrolling);
    }, [onTop]);

    return (
        <header
            className={`${styles.header} ${styles[mode]} ${onTop && styles.onTop} ${
                menuActive && styles.active
            }`}
        >
            <Container>
                <div className={styles.header_container}>
                    <div className={styles.header_title}>
                        <Logo />
                    </div>

                    <div className={styles.header_links}>
                        <Navigation />
                    </div>

                    <div
                        className={`${styles.header_hamburger} ${menuActive && styles.active}`}
                        onClick={() => setMenuActive((prevState) => !prevState)}
                    >
                        <span className={styles.trace}></span>
                    </div>
                </div>

                <Menu active={menuActive} />
            </Container>
        </header>
    );
}
