import styles from '@/styles/components/inputs/Radio.module.scss';

interface PropsType {
    level: number;
    current: number;
    handleRadio: Function;
}

export default function Radio(props: PropsType) {
    const { current, handleRadio, level } = props;

    function passSlide() {
        handleRadio(level);
    }

    return (
        <div className={styles.radio}>
            <input
                type="radio"
                name="slides"
                id={`slides${level}`}
                onClick={passSlide}
                checked={current === level}
                onChange={(e) => {
                    e.target.checked = true;
                }}
            />
            <label htmlFor={`slides${level}`}>
                <span className={styles.dot}></span>
            </label>
        </div>
    );
}
