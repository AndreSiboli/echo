import styles from '@/styles/components/slide/slides/Slide1.module.scss';

import Container from '@/components/layout/Container';
import Button from '@/components/buttons/Button';
import Slide from './Slide';

import Image from '@/assets/home/pexels-ivan-samkov-5799649.jpg';

export default function Slide1() {
    return (
        <Slide position="right 40%" image={Image}>
            <div className={styles.slide}>
                <Container>
                    <div className={styles.slide_infos}>
                        <div className={styles.infos_wrapper}>
                            <h1>Learn about Echo</h1>
                            <p>
                                Welcome to Echo Photography, where every click resonates with the
                                magic of moments and the beauty of memories.
                            </p>
                            <div className={styles.info_button}>
                                <Button to="/about" text="Learn about" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Slide>
    );
}
