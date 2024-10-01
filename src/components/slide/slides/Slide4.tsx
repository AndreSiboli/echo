import styles from '@/styles/components/slide/slides/Slider.module.scss';

import Container from '@/components/layout/Container';
import Button from '@/components/buttons/Button';
import Slide from '@/components/slide/slides/Slide';

import Image from '@/assets/home/pexels-alipazani-2829369.jpg';

export default function Slide4() {
  return (
    <Slide src={Image}>
      <div className={styles.slide}>
        <Container>
          <div className={styles.slide_infos}>
            <div className={styles.infos_wrapper}>
              <h1>Take a look!</h1>
              <p>
                Whether it&apos;s a wedding, a family portrait, or a corporate event, Echo
                Photography is committed to delivering a personalized and professional experience.
              </p>
              <div className={styles.info_button}>
                <Button to="/gallery" text="See our gallery!" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Slide>
  );
}
