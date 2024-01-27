import { ReactNode } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from '@/styles/components/slide/slides/Slide.module.scss';

import Image from 'next/image';

interface PropsType {
    children: ReactNode;
    image: StaticImport | string;
    position: string;
}

export default function Slide(props: PropsType) {
    const { children, image, position } = props;

    return (
        <div className={styles.slide}>
            <div className={styles.slide_wallpaper}>
                <Image
                    src={image}
                    alt="background image"
                    fill
                    sizes="100vw"
                    style={{ objectPosition: position }}
                />
            </div>

            {children}
        </div>
    );
}
