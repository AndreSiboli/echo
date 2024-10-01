'use client';

import { MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';
import styles from '@/styles/components/slide/Index.module.scss';

import Slide5 from '@/components/slide/slides/Slide5';
import Slide1 from '@/components/slide/slides/Slide1';
import Slide2 from '@/components/slide/slides/Slide2';
import Slide3 from '@/components/slide/slides/Slide3';
import Slide4 from '@/components/slide/slides/Slide4';
import SlideManager from './SlideManager';
import Container from '../layout/Container';

export default function Slide() {
  const config = {
    timeToSlide: 6000,
    animationTime: 600,
  };
  const slides = [
    {
      id: 'A1230',
      Component: <Slide5 />,
    },
    {
      id: 'B6132',
      Component: <Slide1 />,
    },
    {
      id: 'C8932',
      Component: <Slide2 />,
    },
    {
      id: 'D9821',
      Component: <Slide3 />,
    },
    {
      id: 'E9123',
      Component: <Slide4 />,
    },
    {
      id: 'F0321',
      Component: <Slide5 />,
    },
    {
      id: 'G0943',
      Component: <Slide1 />,
    },
  ];
  const [curSlide, setCurSlide] = useState(1);
  const [stopSlide, setStopSlide] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const allowShift = useRef(true);
  const interval = useRef<NodeJS.Timeout>();
  const initialClick = useRef(0);
  const initialTimeClick = useRef(0);
  const translate = useRef(0);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;
    movingSlide(-parent.clientWidth);
  }, []);

  useEffect(() => {
    function correctSlide() {
      const parent = parentRef.current;
      if (!parent) return;
      const width = parent.clientWidth * curSlide;
      addAnimation(false);
      movingSlide(-width);
    }

    window.addEventListener('resize', correctSlide);

    return () => window.removeEventListener('resize', correctSlide);
  }, [curSlide]);

  useEffect(() => {
    if (stopSlide) {
      clearTimeout(interval.current);
      return;
    }
    slideTimer();
  }, [curSlide, stopSlide]);

  function movingSlide(posX: number) {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.transform = `translate3d(${posX}px, 0, 0)`;
  }

  function slideTimer() {
    clearTimeout(interval.current);

    interval.current = setTimeout(() => {
      nextSlide(1);
    }, config.timeToSlide);
  }

  function nextSlide(num: 1 | -1) {
    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper || !allowShift.current) return;

    const nextSlide = curSlide + num;
    const slidesLength = slides.length - 1;

    if (nextSlide >= slidesLength) return infiniteFow(1);
    else if (nextSlide < 1) return infiniteFow(-1);

    addAnimation(true);
    setCurSlide(nextSlide);
    movingSlide(-(parent.clientWidth * nextSlide - 1));
    clearAllowShift();
  }

  function radioSlide(num: number) {
    const main = parentRef.current;
    const slider = wrapperRef.current;
    if (!main || !slider || !allowShift.current) return;

    clearTimeout(interval.current);
    addAnimation(true);

    if (num === 1 && curSlide === 5) {
      infiniteFow(1);
      return;
    } else if (num >= 5 && curSlide === 1) {
      slider.style.translate = `0`;
      allowShift.current = false;

      //After animation, change
      setTimeout(() => {
        addAnimation(false);
        slider.style.translate = `-${main.clientWidth * 5}px 0`;
        setCurSlide(num);
        allowShift.current = true;
      }, 500);

      return;
    }

    setCurSlide(num);
    slider.style.translate = `-${main.clientWidth * num}px 0`;
    clearAllowShift();

    setTimeout(() => {
      addAnimation(false);
    }, 500);
  }

  function clearAllowShift() {
    allowShift.current = false;

    setTimeout(() => {
      allowShift.current = true;
    }, config.animationTime + 10);
  }

  function infiniteFow(num: 1 | -1) {
    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper) return;
    addAnimation(true);
    allowShift.current = false;
    const slidesLength = slides.length - 1;

    let posX = 0,
      curSlide = 0,
      width = 0;

    if (num === 1) {
      width = parent.clientWidth * slidesLength;
      posX = -parent.clientWidth;
      curSlide = 1;
    } else if (num === -1) {
      width = 0;
      posX = -(parent.clientWidth * (slidesLength - 1));
      curSlide = slidesLength - 1;
    }

    movingSlide(-width);

    setTimeout(() => {
      addAnimation(false);
      movingSlide(posX);
      allowShift.current = true;
      setCurSlide(curSlide);
    }, config.animationTime);
  }

  function stopFunction() {
    setStopSlide((prevState) => !prevState);
  }

  function addAnimation(active: boolean) {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    wrapper.className = `${styles.slide_group} ${active ? styles.transition : ''}`;
  }

  function manageDragging(posX: number) {
    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper) return;

    if (posX === 1) {
      nextSlide(1);
      return;
    } else if (posX === -1) {
      nextSlide(-1);
      return;
    }
    addAnimation(true);
    movingSlide(-(parent.clientWidth * curSlide));
    setTimeout(() => addAnimation(false), config.animationTime);
  }

  function dragStart(e: MouseEvent | TouchEvent) {
    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper || !allowShift.current) return;

    dragging.current = true;
    allowShift.current = false;

    const style = window.getComputedStyle(wrapper);
    const matrix = new WebKitCSSMatrix(style.transform);
    const currentTranslateX = matrix.m41;
    translate.current = Number(currentTranslateX);
    initialTimeClick.current = e.timeStamp;

    if ('touches' in e) {
      initialClick.current = -e.touches[0].pageX;
    } else {
      initialClick.current = -e.pageX;
    }
  }

  function dragMove(e: MouseEvent | TouchEvent) {
    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper || !dragging.current) return;
    let getCurrentGrab = 0;
    addAnimation(false);

    if ('touches' in e) {
      getCurrentGrab = translate.current - (-e.touches[0].clientX - initialClick.current);
    } else {
      getCurrentGrab = translate.current - (-e.pageX - initialClick.current);
    }

    if (-getCurrentGrab <= -50) return;
    wrapper.style.transform = `translate3d(${getCurrentGrab}px, 0, 0)`;

    parent.style.cursor = 'grabbing';
  }

  function dragEnd(e: MouseEvent | TouchEvent) {
    const parent = parentRef.current;
    const wrapper = wrapperRef.current;
    if (!parent || !wrapper) return;
    dragging.current = false;
    allowShift.current = true;

    parent.style.cursor = 'auto';
    const width = parent.clientWidth;
    const howFast = e.timeStamp - initialTimeClick.current;

    function movement(position: number) {
      if (
        initialClick.current < -position - width / 2 ||
        (howFast <= 200 && initialClick.current < -position - 25)
      ) {
        manageDragging(1);
        return;
      }
      if (
        initialClick.current > -position + width / 2 ||
        (howFast <= 200 && initialClick.current > -position + 25)
      ) {
        manageDragging(-1);
        return;
      }
      manageDragging(0);
    }

    if ('touches' in e) {
      const pos = e.changedTouches[0].pageX;
      movement(pos);
    } else {
      const pos = e.pageX;
      movement(pos);
    }
  }

  return (
    <div className={styles.slide}>
      <div className={styles.slide_controls}>
        <Container>
          <SlideManager
            currentSlide={curSlide}
            handleSlide={radioSlide}
            handleStop={stopFunction}
            isStop={stopSlide}
          />
        </Container>
      </div>

      <main
        className={styles.slide_container}
        ref={parentRef}
        onMouseDown={(e) => dragStart(e)}
        onMouseMove={(e) => dragMove(e)}
        onMouseUp={(e) => dragEnd(e)}
        onTouchStart={(e) => dragStart(e)}
        onTouchEnd={(e) => dragEnd(e)}
      >
        <div className={styles.slide_group} ref={wrapperRef}>
          {slides.map((slide) => (
            <div className={styles.slide_wrapper} key={slide.id}>
              {slide.Component}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
