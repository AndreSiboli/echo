import styles from '@/styles/pages/About.module.scss';

import Container from '@/components/layout/Container';
import Team from '@/components/pages/about/Team';
import SidePage from '@/components/layout/SidePages';
import Line from '@/components/animations/Line';

import team1 from '@/assets/team/pexels-burcu-elmas-19583197.jpg';
import team2 from '@/assets/team/pexels-esma-atak-19270865.jpg';
import team3 from '@/assets/team/pexels-phong-phạm-xuân-19877105.jpg';
import team4 from '@/assets/team/pexels-vurzie-kim-14875250.jpg.jpg';

export default function About() {
  const team = [
    {
      src: team1,
      name: 'Robert Garcia',
    },
    {
      src: team2,
      name: 'Sophie Mikhaylov',
    },
    {
      src: team3,
      name: 'Chung-Hee',
    },
    {
      src: team4,
      name: 'Florence Smith',
    },
  ];

  return (
    <SidePage>
      <main className={styles.about}>
        <Container>
          <div className={styles.about_container}>
            <div className={styles.about_info}>
              <h1>About us</h1>
              <p>
                In the heart of the city&apos;s creative landscape,{' '}
                <span className={styles.mark}>Echo</span> stands as more than just a photo studio;
                it&apos;s an embodiment of visual storytelling. Enter a space where the art of
                photography transcends capturing moments to creating echoes that linger in the
                hearts of those who witness them.
                <br />
                <br />
                The team at <span className={styles.mark}>Echo</span> isn&apos;t just skilled
                photographers; they are storytellers with lenses. Armed with cutting-edge equipment
                and a keen eye for detail, they transform ordinary moments into extraordinary
                memories. Whether it&apos;s a personal portrait, a professional shoot, or a special
                event, <span className={styles.mark}>Echo</span> captures the essence of every scene
                with finesse.
                <br />
                <br />
                Step into <span className={styles.mark}>Echo</span> and let your moments resonate in
                frames. Every click is an opportunity to create an echo, a visual reverberation that
                transcends time. Welcome to <span className={styles.mark}>Echo</span>, where your
                stories are not just captured; they are crafted into visual symphonies that echo
                through the lens of creativity.
              </p>
            </div>

            <Line timer="cover 15% cover 100%" />
            <div className={styles.about_team}>
              <h1>Our team</h1>

              <div className={styles.team}>
                {team.map((tm) => (
                  <Team src={tm.src} name={tm.name} key={tm.name} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </SidePage>
  );
}
