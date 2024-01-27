import styles from '@/styles/components/slide/slides/Slide2.module.scss';

import Container from '@/components/layout/Container';
import Slide from '@/components/slide/slides/Slide';

import Image from '@/assets/home/pexels-kha-ruxury-1895251.jpg';

export default function Slide2() {
    return (
        <Slide position="center 15%" image={Image}>
            <div className={styles.slide}>
                <Container>
                    <div className={styles.slide_infos}>
                        <div className={styles.infos_wrapper}>
                            <h1>What do we do?</h1>

                            <p>
                                We are not just a photography company; we are storytellers, weaving
                                narratives through the lens to immortalize the essence of your
                                special occasions.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </Slide>
    );
}
