import styles from '@/styles/components/slide/slides/Slide5.module.scss';

import Container from '@/components/layout/Container';
import Button from '@/components/buttons/Button';
import Slide from '@/components/slide/slides/Slide';

import Image from '@/assets/home/pexels-hatice-baran-19055796.jpg';

export default function Slide5() {
    return (
        <Slide position="center 35%" image={Image}>
            <div className={styles.slide}>
                <Container>
                    <div className={styles.slide_infos}>
                        <div className={styles.infos_wrapper}>
                            <h1>Contact Us</h1>
                            <p>
                                We understand that every moment is unique, deserving to be captured
                                in its authenticity. So why not record these moments?
                            </p>
                            <div className={styles.info_button}>
                                <Button to="/contact" text="Contact us" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Slide>
    );
}
