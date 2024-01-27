import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from '@/styles/components/pages/about/Team.module.scss';

import Img from '@/components/utils/Img';

interface PropsType {
    src: StaticImport | string;
    name: string;
}

export default function Team(props: PropsType) {
    const { src, name } = props;

    return (
        <div className={styles.team}>
            <div className={styles.team_image}>
                <Img src={src} />
            </div>
            <div className={styles.team_name}>
                <h2>{name}</h2>
            </div>
        </div>
    );
}
