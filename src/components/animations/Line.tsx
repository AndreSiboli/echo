import styles from '@/styles/components/animations/Line.module.scss';

interface PropsType {
    timer?: string;
}

export default function Line(props: PropsType) {
    const { timer } = props;

    return (
        <div className={styles.line}>
            <div className={styles.line_container}>
                <div className={styles.inner_line} style={{ animationRange: timer }}></div>
            </div>
        </div>
    );
}
