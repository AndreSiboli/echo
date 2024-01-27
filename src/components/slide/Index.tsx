import { MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';
import styles from '@/styles/components/slide/Index.module.scss';

import Slide5 from '@/components/slide/slides/Slide5';
import Slide1 from '@/components/slide/slides/Slide1';
import Slide2 from '@/components/slide/slides/Slide2';
import Slide3 from '@/components/slide/slides/Slide3';
import Slide4 from '@/components/slide/slides/Slide4';
import SlideManager from './SlideManager';

export default function Slide() {
    const [slide, setSlide] = useState(1);
    const [allowShift, setAllowShift] = useState(true);
    const [stopSlide, setStopSlide] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);
    const dragging = useRef(false);
    const initial = useRef(0);
    const interval = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const main = mainRef.current;
        const slider = slideRef.current;
        if (!main || !slider) return;

        slider.style.translate = `-${main.clientWidth}px 0`;
    }, []);

    useEffect(() => {
        function correctSlide() {
            const main = mainRef.current;
            if (!main || !slideRef.current) return;
            const width = main.clientWidth * slide;
            addAnimation(false);
            slideRef.current.style.translate = `-${width}px 0`;
        }

        window.addEventListener('resize', correctSlide);

        return () => window.removeEventListener('resize', correctSlide);
    }, [slide]);

    useEffect(() => {
        if (stopSlide) {
            const int = interval.current;
            clearTimeout(int);
            return;
        }
        slideTimer();
    }, [slide, stopSlide]);

    function slideTimer() {
        if (!mainRef.current) return;

        const int = interval.current;
        clearTimeout(int);

        interval.current = setTimeout(() => {
            nextSlide(1);
        }, 6000);
    }

    function nextSlide(num: number) {
        const main = mainRef.current;
        const slider = slideRef.current;
        if (!main || !slider) return;

        addAnimation(true);

        const int = interval.current;
        clearTimeout(int);

        const next = slide + num;

        if (next >= 6) {
            infiniteFow();
            return;
        }

        setSlide(next);
        slider.style.translate = `-${main.clientWidth * next - 1}px 0`;

        clearAllowShift();
    }

    function radioSlide(num: number) {
        const main = mainRef.current;
        const slider = slideRef.current;
        if (!main || !slider || !allowShift) return;

        const int = interval.current;
        clearTimeout(int);

        addAnimation(true);

        if (num === 1 && slide === 5) {
            infiniteFow();
            return;
        } else if (num >= 5 && slide === 1) {
            slider.style.translate = `0`;
            setAllowShift(false);

            //After animation, change
            setTimeout(() => {
                addAnimation(false);
                slider.style.translate = `-${main.clientWidth * 5}px 0`;
                setSlide(num);
                setAllowShift(true);
            }, 500);

            return;
        }

        setSlide(num);
        slider.style.translate = `-${main.clientWidth * num}px 0`;
        clearAllowShift();

        setTimeout(() => {
            addAnimation(false);
        }, 500);
    }

    function clearAllowShift() {
        setAllowShift(false);

        setTimeout(() => {
            setAllowShift(true);
        }, 600);
    }

    function infiniteFow() {
        const main = mainRef.current;
        const slider = slideRef.current;
        if (!main || !slider) return;
        addAnimation(true);

        const width = main.clientWidth * 6;
        slider.style.translate = `-${width}px 0`;
        setAllowShift(false);

        setTimeout(() => {
            addAnimation(false);
            slider.style.translate = `-${main.clientWidth}px 0`;
            setAllowShift(true);
            setSlide(1);
        }, 500);
    }

    function stopFunction() {
        setStopSlide((prevState) => !prevState);
    }

    function addAnimation(active: boolean) {
        const slider = slideRef.current;
        if (!slider) return;
        slider.className = `${styles.slide_group} ${active ? styles.transition : ''}`;
    }

    function dragStart(e: MouseEvent | TouchEvent) {
        // e.preventDefault();
        const main = mainRef.current;
        if (!main) return;

        stopFunction();
        dragging.current = true;

        if ('touches' in e) {
            initial.current = -e.touches[0].clientX;
        } else {
            initial.current = -e.clientX;
        }

        mainRef.current.style.cursor = 'grabbing';
    }

    function dragMove(e: MouseEvent) {
        const main = mainRef.current;
        if (!main) return;

        e.preventDefault();
        if (!dragging.current) return;

        main.style.cursor = 'grabbing';
    }

    function dragEnd(e: MouseEvent | TouchEvent) {
        // e.preventDefault();
        const main = mainRef.current;
        const slider = slideRef.current;
        if (!main || !slider || !allowShift) return;

        dragging.current = false;
        main.style.cursor = 'auto';
        stopFunction();
        addAnimation(true);

        let posX = 0;

        if ('touches' in e) {
            posX = -e.changedTouches[0].clientX;
        } else {
            posX = -e.clientX;
        }

        if (posX > initial.current + 100) {
            if (slide + 1 > 5) {
                infiniteFow();
                return;
            }
            slideRef.current.style.translate = `${-main.clientWidth * (slide + 1)}px 0`;
            setSlide((prevState) => prevState + 1);

            return;
        } else if (posX < initial.current - 100) {
            if (slide - 1 <= 0) {
                addAnimation(true);
                slider.style.translate = `0`;
                setAllowShift(false);

                //After animation, change
                setTimeout(() => {
                    addAnimation(false);
                    slider.style.translate = `-${main.clientWidth * 5}px 0`;
                    setSlide(5);
                    setAllowShift(true);
                }, 500);

                return;
            }
            slideRef.current.style.translate = `-${main.clientWidth * (slide - 1)}px 0`;
            setSlide((prevState) => prevState - 1);
        }
    }

    return (
        <div className={styles.slide}>
            <SlideManager
                currentSlide={slide}
                handleSlide={radioSlide}
                handleStop={stopFunction}
                isStop={stopSlide}
            />

            <main
                className={styles.slide_container}
                ref={mainRef}
                onMouseDown={(e) => dragStart(e)}
                onMouseMove={(e) => dragMove(e)}
                onMouseUp={(e) => dragEnd(e)}
                onTouchStart={(e) => dragStart(e)}
                onTouchEnd={(e) => dragEnd(e)}
            >
                <div className={styles.slide_group} ref={slideRef}>
                    <div className={styles.slide_wrapper}>
                        <Slide5 />
                    </div>
                    <div className={styles.slide_wrapper}>
                        <Slide1 />
                    </div>
                    <div className={styles.slide_wrapper}>
                        <Slide2 />
                    </div>

                    <div className={styles.slide_wrapper}>
                        <Slide3 />
                    </div>
                    <div className={styles.slide_wrapper}>
                        <Slide4 />
                    </div>
                    <div className={styles.slide_wrapper}>
                        <Slide5 />
                    </div>
                    <div className={styles.slide_wrapper}>
                        <Slide1 />
                    </div>
                </div>
            </main>
        </div>
    );
}
