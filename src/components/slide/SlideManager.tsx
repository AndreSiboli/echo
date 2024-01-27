import styles from '@/styles/components/slide/Index.module.scss';

import Radio from '../inputs/Radio';

import { FaPause, FaPlay } from 'react-icons/fa6';

interface PropsType {
    currentSlide: number;
    isStop: boolean;
    handleSlide: Function;
    handleStop: Function;
}

export default function SlideManager(props: PropsType) {
    const { currentSlide, handleSlide, handleStop, isStop } = props;

    return (
        <div className={styles.slide_manager}>
            <Radio current={currentSlide} level={1} handleRadio={handleSlide} />
            <Radio current={currentSlide} level={2} handleRadio={handleSlide} />
            <Radio current={currentSlide} level={3} handleRadio={handleSlide} />
            <Radio current={currentSlide} level={4} handleRadio={handleSlide} />
            <Radio current={currentSlide} level={5} handleRadio={handleSlide} />

            <div className={styles.slide_pause}>
                <button
                    onClick={() => handleStop()}
                    aria-label={isStop ? 'Unstop slide' : 'Pause slide'}
                >
                    {isStop ? <FaPlay /> : <FaPause />}
                </button>
            </div>
        </div>
    );
}
