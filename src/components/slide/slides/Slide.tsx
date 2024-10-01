import { ReactNode } from 'react';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import styles from '@/styles/components/slide/slides/Slide.module.scss';

import Img from '@/components/utils/Img';

interface PropsType {
  children: ReactNode;
  src: StaticImageData | string;
}

export default function Slide(props: PropsType) {
  const { children, src } = props;

  return (
    <div className={styles.slide}>
      <div className={styles.slide_wallpaper}>
        <Img src={src} />
      </div>

      {children}
    </div>
  );
}
