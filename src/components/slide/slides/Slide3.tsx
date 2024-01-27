import styles from '@/styles/components/slide/slides/Slide3.module.scss';

import Container from '@/components/layout/Container';
import Slide from '@/components/slide/slides/Slide';

import Image from '@/assets/home/pexels-esra-korkmaz-1955245.jpg';

export default function Slide3() {
    return (
        <Slide position="center 35%" image={Image}>
            <div className={styles.slide}>
                <Container>
                    <div className={styles.slide_infos}>
                        <div className={styles.infos_wrapper}>
                            <h1>Our team</h1>
                            <p>
                                Our team of skilled photographers is dedicated to preserving the
                                heart and soul of your experiences, transforming them into visual
                                echoes that linger in your memories.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </Slide>
    );
}
