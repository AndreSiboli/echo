import styles from '@/styles/components/buttons/Button.module.scss'

import Link from 'next/link';

interface PropsType {
    to: string;
    text: string;
}

export default function Button(props: PropsType) {
    const { to, text } = props;

    return (
        <Link href={to} className={styles.button}>
            <span>{text}</span>
        </Link>
    );
}
