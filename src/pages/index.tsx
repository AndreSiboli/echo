import styles from '@/styles/Home.module.scss';

import Navbar from '@/components/bars/Navbar/Index';
import SocialMedia from '@/components/links/SocialMedia';
import Container from '@/components/layout/Container';
import Slide from '@/components/slide/Index';

export default function Home() {
    return (
        <>
            <div className={styles.slide}>
                <Navbar mode="fixed" />

                <div className={styles.slide_fixed}>
                    <Container>
                        <div className={styles.slide_settings}>
                            <SocialMedia />
                        </div>
                    </Container>
                </div>

                <Slide />
            </div>
        </>
    );
}
