import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import styles from '@/styles/components/pages/about/Team.module.scss';

import Img from '@/components/utils/Img';

interface PropsType {
  src: StaticImageData | string;
  name: string;
}

export default function Team(props: PropsType) {
  const { src, name } = props;

  return (
    <section className={styles.team}>
      <figure className={styles.team_image}>
        <Img src={src} />
      </figure>
      <div className={styles.team_name}>
        <h2>{name}</h2>
      </div>
    </section>
  );
}
