import styles from '@/styles/pages/page.module.scss';

import SocialMedia from '@/components/links/SocialMedia';
import Container from '@/components/layout/Container';
import Slide from '@/components/slide/Index';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main_slide}>
        <Container>
          <SocialMedia />
        </Container>
      </div>

      <Slide />
    </main>
  );
}
