// core
import React, { useEffect, useRef } from 'react';

// library
import { gsap } from 'gsap';
import styles from '../Home.module.scss';


export const AverageImage = () => {

  function tiredGirlAnimation() {

    let idSVG = `#tired-girl-anim `;

    gsap.set(idSVG + '#tg-sweat > path', { scale: 0, svgOrigin: '827px 460px' });
    gsap.set(idSVG + '#rg-sweat > path', { scale: 0, svgOrigin: '692.56px 370.6px' });
    gsap.set(idSVG + '#run-blocks > g', { scale: 0, svgOrigin: '695px 970px' });

    let runGirlAnim = gsap.timeline({ defaults: { ease: 'sine.inOut' }, paused: true });
    runGirlAnim
      .fromTo(idSVG + '#rg-right-leg', 1, { rotate: -50, svgOrigin: '662.81px 507.47px' }, {
        rotate: 50,
        yoyo: true,
        repeat: 50
      }, 0.5)
      .fromTo(idSVG + '#rg-right-feet', 1, { rotate: 80, svgOrigin: '696.65px 570.66px' }, {
        rotate: 0,
        yoyo: true,
        repeat: 50
      }, 0)
      .fromTo(idSVG + '#rg-left-leg', 1, { rotate: 20, svgOrigin: '680.8px 503.68px' }, {
        rotate: -90,
        yoyo: true,
        repeat: 50
      }, 0.5)
      .fromTo(idSVG + '#rg-left-feet', 1, { rotate: -60, svgOrigin: '669.89px 592px' }, {
        rotate: 20,
        yoyo: true,
        repeat: 50
      }, 0)
      .fromTo(idSVG + '#rg-right-arm', 1, { rotate: -70, svgOrigin: '684px 421.6px' }, {
        rotate: 20,
        yoyo: true,
        repeat: 50
      }, 1.5)
      .fromTo(idSVG + '#rg-left-arm', 1, { rotate: -40, svgOrigin: '714.8px 429.5px' }, {
        rotate: 70,
        yoyo: true,
        repeat: 50
      }, 0.5)
      .to(idSVG + '#run-girl', 0.5, { y: -15, yoyo: true, ease: 'sine.out', repeat: 100 }, 0)
      .to(idSVG + '#wheel-lines1', 4, { rotate: 360, svgOrigin: '611.6px 483px', ease: 'none', repeat: 25 }, 0)
      .to(idSVG + '#wheel-lines2', 4, { rotate: 360, svgOrigin: '750px 481.6px', ease: 'none', repeat: 25 }, 0)
      .fromTo([idSVG + '#rg-head', idSVG + '#rg-hair'], 0.5, {
        rotate: 10,
        svgOrigin: '693.4px 401.1px'
      }, { rotate: -2, yoyo: true, repeat: 100 }, 0.1);

    let girlAnim = gsap.timeline({ defaults: { ease: 'sine.inOut' }, repeat: -1 });
    girlAnim
      .from(part1, 0.75, { opacity: 0 }, 0)
      .from(averageTitle, 0.75, { display: 'none', opacity: 0 }, 0)
      .to(idSVG + '#tired-girl-body', 0.1, { x: 1.5, yoyo: true, repeat: 71 }, 1.5)
      .from(idSVG + '.boxes1', 0.4, { y: -30, opacity: 0, ease: 'sine.in', stagger: 0.1 }, 1)
      .to(idSVG + '.b-shadow1', 0.6, { opacity: 1 }, 1.4)
      .from(idSVG + '.boxes2', 0.4, { y: -30, opacity: 0, ease: 'sine.in', stagger: 0.1 }, 1.75)
      .to(idSVG + '.b-shadow2', 0.6, { opacity: 1 }, 2.15)
      .from(idSVG + '.boxes3', 0.4, { y: -30, opacity: 0, ease: 'sine.in', stagger: 0.1 }, 2.5)
      .to(idSVG + '.b-shadow3', 0.6, { opacity: 1 }, 2.9)
      .from(idSVG + '.boxes4', 0.4, { y: -30, opacity: 0, ease: 'sine.in', stagger: 0.1 }, 3.25)
      .to(idSVG + '.b-shadow4', 0.6, { opacity: 1 }, 3.65)
      .fromTo(idSVG + '#girl-body-rot', 0.75, { rotate: 4, svgOrigin: '791.32px 655.57px' }, {
        rotate: 2,
        ease: 'back.out(1.4)'
      }, 1.4)
      .to(idSVG + '#girl-body-rot', 0.75, { rotate: 0, ease: 'back.out(1.7)' }, 2.15)
      .to(idSVG + '#girl-body-rot', 0.75, { rotate: -2, ease: 'back.out(1.7)' }, 2.9)
      .to(idSVG + '#girl-body-rot', 0.75, { rotate: -4, ease: 'back.out(1.7)' }, 3.65)
      .from(idSVG + '#blocks > g', 0.5, { x: -20, opacity: 0, stagger: 0.75 }, 1)
      .to(idSVG + '#tg-sweat > path', 1, {
        scale: 1.25,
        x: 20,
        opacity: 0,
        ease: 'ease.out',
        stagger: 0.3,
        repeat: 2,
        repeatDelay: 0.4
      }, 1.5)
      .to(part1, 0.75, {
        opacity: 0, onComplete: function() {
          gsap
            .to(runGirlAnim.tweenFromTo(2, 18), 9, {
              progress: 1, ease: 'sine.out', onComplete: function() {
                gsap.set(idSVG + '#rg-sweat > path', { scale: 0, svgOrigin: '692.56px 370.6px' });

                let tdAnim = gsap.timeline({ defaults: { ease: 'sine.inOut' } });
                tdAnim
                  .to(idSVG + '#rg-right-feet', 0.75, { rotate: 40, svgOrigin: '696.65px 570.66px' }, 0)
                  .to(idSVG + '.run-girl-body', 0.75, { rotate: 10, svgOrigin: '679.55px 482.23px' }, 0)
                  .to(idSVG + '.run-girl-body', 0.5, { y: 2, rotate: 12, yoyo: true, repeat: 7 }, 0.75)
                  .to(idSVG + '#rg-mouth', 0.5, {
                    scale: 0.5,
                    svgOrigin: '703.3px 398.7px',
                    yoyo: true,
                    repeat: 7
                  }, 0.75)
                  .to([idSVG + '#rg-head', idSVG + '#rg-hair'], 0.75, {
                    rotate: 20,
                    svgOrigin: '693.4px 401.1px'
                  }, 0)
                  .to([idSVG + '#rg-head', idSVG + '#rg-hair'], 0.5, {
                    rotate: 24,
                    yoyo: true,
                    repeat: 7
                  }, 0.75)
                  .to(idSVG + '#rg-left-forearm', 0.75, {
                    rotate: 100,
                    svgOrigin: '717.45px 487.53px'
                  }, 0)
                  .to(idSVG + '#rg-left-arm', 0.75, { rotate: 0, svgOrigin: '714.8px 429.5px' }, 0)
                  .fromTo(idSVG + '#rg-sweat > path', 0.75, { scale: 0, y: 0, opacity: 1 }, {
                    scale: 1.5,
                    y: 10,
                    opacity: 0,
                    ease: 'ease.out',
                    stagger: 0.3,
                    repeat: 2,
                    repeatDelay: 0.4
                  }, 0.75);
              }
            });
        }
      }, 5)
      .to(averageTitle, 0.75, { display: 'none', opacity: 0 }, 5)
      .to(part2, 0.75, { opacity: 1, repeat: 1, yoyo: true, repeatDelay: 12 }, 6)
      .to(productivityTitle, 0.75, { opacity: 1, repeat: 1, yoyo: true, repeatDelay: 12, display: 'block' }, 6)
      .to(averageInner, 0.75, { flexWrap: 'wrap' }, 6)
      .to(idSVG + '#run-blocks > g', 1, {
        scale: 1,
        stagger: 0.65
      }, 6.5);
  }

  let averageInner: any = useRef(null);
  let part1: any = useRef(null);
  let part2: any = useRef(null);
  let averageTitle: any = useRef(null);
  let productivityTitle: any = useRef(null);

  useEffect(() => {
    tiredGirlAnimation();
  }, []);


  return (
    <div ref={el => averageInner = el} className={styles.averageInner}>
      <div ref={el => productivityTitle = el} className={styles.productivityTitle}>
        <h2>
          <span>6 Hours / Day on average</span> <br />
          on repeated, dreaded tasks
        </h2>
      </div>
      <svg id="tired-girl-anim" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 1364 1076.5">
        <defs>
          <linearGradient id="tg-linear-gradient" x1="607.88" y1="692.19" x2="607.88" y2="273.87"
                          gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#dcd2d9" />
            <stop offset="0.9" stopColor="#beadba" />
          </linearGradient>
          <linearGradient id="tg-linear-gradient-2" x1="755.9" y1="273.87" x2="755.9" y2="692.19"
                          gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#dcd2d9" />
            <stop offset="0.9" stopColor="#beadaf" />
          </linearGradient>
          <clipPath id="clip-wheel-lines1">
            <ellipse cx="611.59" cy="483.03" rx="148.02" ry="209.16" />
          </clipPath>
          <clipPath id="clip-wheel-lines2">
            <ellipse cx="752.19" cy="483.03" rx="148.02" ry="209.16" />
          </clipPath>
        </defs>
        <g ref={el => part2 = el} id="part2" opacity="0">
        <g>
          <circle cx="928" cy="286" r="22" fill="#ff65a7" />
          <circle cx="418" cy="655" r="20" fill="#3bbabc" />
          <circle cx="384.5" cy="331.5" r="13.5" fill="#7860fa" />
          <circle cx="1003" cy="423" r="11" fill="#27b3b6" />
        </g>
        <g>
          <path
            d="M752.19,692.19c-81.75,0-148-93.64-148-209.16s66.27-209.16,148-209.16H611.59c-81.75,0-148,93.65-148,209.16s66.27,209.16,148,209.16Z"
            opacity="0.3" fill="url(#tg-linear-gradient)" />
          <path d="M849.71,734.35H515.36a6.44,6.44,0,0,1,0-12.88H849.71a6.44,6.44,0,0,1,.36,12.88h-.36"
                fill="#ded4db" />
          <path
            d="M759.5,452.19H752c11.56,0,20.93,13.26,20.93,29.6S763.55,511.4,752,511.4h7.51c11.56,0,20.93-13.26,20.93-29.61s-9.37-29.6-20.93-29.6"
            fill="#cabcc6" />
          <path
            d="M755.43,727.92H675.2c-5.21,0-9.94-3.67-12.36-9.57a23.5,23.5,0,0,1-.05-17.34L752,480.39a3.76,3.76,0,0,1,7,2.72.36.36,0,0,0,0,.09L669.76,703.82a16,16,0,0,0,0,11.67c1.24,3,3.33,4.91,5.41,4.91h80.26a3.76,3.76,0,0,1,0,7.51h0"
            fill="#d8cdd5" />
          <path
            d="M835.67,727.92H755.43a3.76,3.76,0,0,1,0-7.51h80.24c2.1,0,4.17-1.89,5.41-4.91a16,16,0,0,0,0-11.67L752,483.2a3.76,3.76,0,0,1,6.93-2.91,1,1,0,0,1,0,.1L848.08,701a23.48,23.48,0,0,1-.05,17.33c-2.42,5.9-7.16,9.58-12.36,9.58"
            fill="#d8cdd5" />
          <g clipPath="url(#clip-wheel-lines2)">
            <g id="wheel-lines2">
              <line x1="544.63" y1="403.16" x2="962.31" y2="562.64" fill="none" stroke="#e3dbe0"
                    strokeMiterlimit="10" strokeWidth="3.75" />
              <line x1="791.5" y1="265.43" x2="707.26" y2="704.52" fill="none" stroke="#e3dbe0"
                    strokeMiterlimit="10" strokeWidth="3.75" />
            </g>
          </g>
          <path
            d="M772.93,481.79c0-16.35-9.38-29.6-20.94-29.6s-20.93,13.26-20.93,29.6S740.43,511.4,752,511.4s20.94-13.26,20.94-29.61"
            fill="#e3dbe0" />
          <ellipse cx="752.19" cy="483.03" rx="148.02" ry="209.16" fill="none" stroke="#e3dbe0"
                   strokeMiterlimit="10" strokeWidth="3.75" />
        </g>
        <g id="run-girl">
          <g className="run-girl-body">
            <g id="rg-left-arm">
              <path id="rg-left-forearm"
                    d="M763.49,457.39h0a9.34,9.34,0,0,0-8.62-2.82c-.47-.85-1.78-2.32-4.7,0-2.6,2.06-4.51,5.06-3.69,9.05l-31.74,15.52c-.19.09-.39.2-.58.31a8.32,8.32,0,0,0-2.95,11.38l.39.6a8.31,8.31,0,0,0,11.59,2l29.78-21a9.34,9.34,0,0,0,10.52-14.94Z"
                    fill="#ffd17a" />
              <g>
                <path
                  d="M730.56,453.86c-.55,9.85-1.84,22.17-3.55,33.8a8.26,8.26,0,0,1-9.35,7c-.3-.05-.6-.11-.89-.18l-.16,0a8.24,8.24,0,0,1-6.16-8.34c.79-18.84,1.11-40.94,3.16-45.57.69-1.56,3.06-2.77,5.75-3.7Z"
                  fill="#ffd17a" />
                <path
                  d="M730.1,460.5l-19.39-10.25.79,9.07-.19,3.83-.07,1.36,0,1,.9-.27,2.23-.61S725,462.41,730.1,460.5Z"
                  fill="#12122f" />
                <path
                  d="M714,421.82a24.67,24.67,0,0,1,9.36,7.45c4.71,6,8.64,16.21,6.71,31.23,0,0-10.35,2.89-20.48-2L708,449C706.37,434.07,705.24,420,714,421.82Z"
                  fill="#f6bca3" />
                <g>
                  <path
                    d="M708.34,424.46l14.36,4a24.7,24.7,0,0,0-1.77-1.91l-11.82-3.26A7.06,7.06,0,0,0,708.34,424.46Z"
                    fill="#ff65a7" />
                  <path d="M707.85,447.24l22.74,6.27c0-.47,0-.95,0-1.41l-22.89-6.32Z"
                        fill="#ff65a7" />
                  <path d="M707,438q0,.72.09,1.44l23,6.34c-.08-.5-.17-1-.26-1.48Z"
                        fill="#ff65a7" />
                  <path d="M708.83,453.73l.25,1.49,20,5.51c.66-.13,1-.23,1-.23,0-.3.06-.58.1-.87Z"
                        fill="#ff65a7" />
                  <path d="M707,430.32c0,.45-.06.91-.07,1.39l21,5.81c-.21-.55-.43-1.08-.65-1.6Z"
                        fill="#ff65a7" />
                </g>
              </g>
            </g>
          </g>
          <path
            d="M700.77,503.68v.57c2-16.18,1.15-19.74,1.15-19.74l-27.51-5.8c-9.94,3.41-14.61,11.32-13.43,24.23l-.17.74a20,20,0,1,0,39.95,0"
            fill="#d63a16" />
          <g id="rg-left-leg">
            <path
              d="M681.46,592a11.58,11.58,0,0,1-23.15,0l2.23-15.75.85-6c.15-7.17-.15-41.51-.31-58.16l-.27-8.36a20,20,0,0,1,40,0l-1.2,9.39c-1.35,9.29-3.41,21.46-6.51,37.37Z"
              fill="#d63a16" />
            <g id="rg-left-feet">
              <path d="M592.71,591.17l24.2.74-1,9.3-26.76-3Z" fill="#ffd17a" />
              <rect x="580.48" y="590.27" width="10.06" height="27.27"
                    transform="translate(-39.03 40.46) rotate(-3.83)" fill="#58586d" />
              <path d="M669.89,603.57a11.57,11.57,0,0,0,0-23.14l-52.08,0-7.24,34.91Z"
                    fill="#d63a16" />
              <path
                d="M591.44,617.18c1.66-.86,2.35-3.06,2.65-4,0,0,3.45-12.19,4.57-12.45l-.64-9.57-4.79-.68a31.61,31.61,0,0,0-3.61-.49Z"
                fill="#12122f" />
            </g>
          </g>
          <path
            d="M683.41,511.41,689.75,485l-27.57-13.28s-23.1,23.93-20,37.25C644.14,520.74,682.67,524.13,683.41,511.41Z"
            fill="#e84312" />
          <g id="rg-right-leg">
            <path
              d="M683.74,507.47a20.94,20.94,0,1,0-41.87,0l.28,1.54s-2,11.15,28.26,46.78l16.35,22.45,2,1.8a12.26,12.26,0,0,0,20.15-9.38,12,12,0,0,0-.51-3.5l-1.41-4.7a19.38,19.38,0,0,0-1.3-3.09l-22.28-48Z"
              fill="#e84312" />
            <g id="rg-right-feet">
              <path d="M712.74,673.79l-9.85-30.19L715.77,639l6.32,36.64Z" fill="#ffd17a" />
              <rect x="713.97" y="678.48" width="27.26" height="10.06"
                    transform="translate(-147.34 202.81) rotate(-14.43)" fill="#58586d" />
              <path
                d="M739.57,675.23c-1.16-1.49-3.45-1.75-4.44-1.88,0,0-12.63-1.14-13.07-2.21l-9.29,2.39.21,4.83a31.76,31.76,0,0,0,.19,3.65Z"
                fill="#12122f" />
              <path
                d="M708.66,568.19a12.26,12.26,0,0,0-24.27,2.47l2.37,7.58s2,52.15,6.1,78.07l40.29-9.26s-14.69-48.64-22.7-73.64Z"
                fill="#e84312" />
            </g>
          </g>
          <g className="run-girl-body">
            <path id="rg-hair"
                  d="M750.46,387.86c-.71-1.33,1.56-1.32,1.43-3.58s-2.19-2.57-4.21-3.76-2.46-2.45-2-4.12,2.86-4,1.07-6.68-6.2-1.2-7.27-2.51-.65-2.4-.88-4.43c-.82-7.15-5.09-5.57-8.3-4.52l-.23-4.7a4,4,0,0,0-3.56-3.74l-7.07-.7a4,4,0,0,1-2.73-1.52l-5.54-7.13a4,4,0,0,0-4.92-1.11l-5.81,3a4,4,0,0,1-2.77.31l-8.15-2.05a4,4,0,0,0-4.46,1.94l-3.3,6.05a4,4,0,0,1-2.73,2l-6.72,1.28a4,4,0,0,0-3.18,3.32l-.64,4.69c-3.19-1-7.3-2.42-8.1,4.59-.23,2,.2,3.12-.88,4.43s-5.48-.13-7.27,2.5.59,5,1.07,6.68,0,2.93-2,4.12-4.09,1.49-4.21,3.76,2.14,2.25,1.43,3.58-3,1.78-1.91,4.65,2.75,2.62,1.55,4.77-2.49,4.67.36,6.94,3.44,2,3.32,4.63.87,3.9,3.58,4.35c4.71.8,3.92,5.66,7.48,6,3.33.36,4.29-3.31,7-2.07s1.47,4.36,4.37,4.69,3.28-3.16,5.09-1c2.24,2.63,4.69,3.17,5.54,2.15,1.39-1.67,2.31-.24,5.06-.24s2.46-1.58,3.53-2.77,2.63,0,3.46-1.78-.24-2.39,1.07-3.58c.82-.75,2.15-.84,3.06-1.5,1,1.09.13,1.71.92,3.42s2.38.59,3.46,1.79.79,2.77,3.53,2.77,3.67-1.44,5.06.24c.85,1,3.3.47,5.54-2.15,1.81-2.14,2.31,1.35,5.09,1s1.66-3.45,4.37-4.69,3.67,2.44,7,2.07c3.56-.39,2.77-5.25,7.48-6.05,2.71-.45,3.7-1.73,3.58-4.35s.47-2.37,3.32-4.63,1.56-4.79.36-6.94.48-1.91,1.55-4.78S751.18,389.18,750.46,387.86Z"
                  fill="#ff65a7" />
            <g>
              <path
                d="M702.16,484.92l7.37-14.27a135.9,135.9,0,0,0,13-38.49l.26-1.43a3.68,3.68,0,0,0-1.25-3.46h0a49,49,0,0,0-19.26-10L684,412.45c-2.93-.76-6,1.67-7.85,4L665.3,431.82h0a18.51,18.51,0,0,0-2.55,8.15l-2.35,33C672.77,480.45,683,485.54,702.16,484.92Z"
                fill="#f6bca3" />
              <g>
                <path d="M661.47,457.87,709.2,471.3l.33-.65.29-.59-48.25-13.57Z" fill="#ff65a7" />
                <polygon
                  points="702.65 483.99 703.29 482.75 660.54 470.95 660.44 472.34 702.65 483.99"
                  fill="#ff65a7" />
                <polygon
                  points="661.08 463.47 660.98 464.85 706.1 477.31 706.74 476.07 661.08 463.47"
                  fill="#ff65a7" />
                <path
                  d="M676.78,415.75l45.66,12.6a3.57,3.57,0,0,0-.87-1.08c-.35-.3-.72-.58-1.08-.87l-42.61-11.76A14.38,14.38,0,0,0,676.78,415.75Z"
                  fill="#ff65a7" />
                <path d="M662.67,441l-.09,1.39L715.64,457c.16-.42.31-.85.47-1.28Z" fill="#ff65a7" />
                <path d="M662.1,449l-.1,1.39,50.45,14.18c.19-.41.37-.83.56-1.25Z" fill="#ff65a7" />
                <path d="M668.48,427.33l-.83,1.18L720.15,443c.12-.44.24-.88.35-1.32Z"
                      fill="#ff65a7" />
                <path d="M673,420.93l-.84,1.19,49.67,13.7c.09-.44.17-.89.26-1.34Z" fill="#ff65a7" />
                <path d="M664.28,433.8c-.18.42-.34.84-.5,1.27l54.3,15c.14-.43.27-.86.41-1.3Z"
                      fill="#ff65a7" />
              </g>
            </g>
            <g id="rg-right-arm">
              <g>
                <path
                  d="M654.79,425.18c4.26-1,13.52,8.18,14.07,8.6,2.82,2.17-21,18.25-43.36,30.72a8.25,8.25,0,0,1-11.23-3.18,9.12,9.12,0,0,1-.41-.83l-.06-.15a8.27,8.27,0,0,1,2.87-10C632.13,439.55,649.87,426.38,654.79,425.18Z"
                  fill="#ffd17a" />
                <path d="M647.45,429s5,14.26,10.14,15.64l4.33-3-11.85-14.34Z" fill="#12122f" />
                <path d="M630.29,461.78l-2.71-9.72,7.48,6.95Z" fill="#12122f" />
                <path
                  d="M682.83,412.31s-20.43-1.72-35.4,14.65c0,0,4.72,10.79,13.13,16.92l7.14-6.43C683.59,426.47,693.06,417.06,682.83,412.31Z"
                  fill="#f6bca3" />
                <g>
                  <path
                    d="M669.62,413.77,687,418.56a5.45,5.45,0,0,0,.1-1.38l-14.63-4C671.54,413.32,670.59,413.52,669.62,413.77Z"
                    fill="#ff65a7" />
                  <path d="M655.2,438.93c.58.65,1.18,1.29,1.81,1.91l5.3,1.47,1.2-1.09Z"
                        fill="#ff65a7" />
                  <path d="M660.07,417.36q-.87.45-1.74.93l24.63,6.8c.36-.38.69-.76,1-1.13Z"
                        fill="#ff65a7" />
                  <path d="M648.7,429.5c.27.5.59,1.06.94,1.67L669,436.52l1.44-1Z"
                        fill="#ff65a7" />
                  <path d="M676.51,431l1.29-1.05-25.94-7.16c-.41.34-.82.7-1.23,1.07Z"
                        fill="#ff65a7" />
                </g>
              </g>
              <g id="rg-right-forearm">
                <g>
                  <rect x="624.43" y="461.94" width="50.45" height="34.16" rx="3.95"
                        transform="matrix(0.81, -0.59, 0.59, 0.81, -157.48, 472.64)"
                        fill="#372e60" />
                  <rect x="623.53" y="460.64" width="50.45" height="34.16" rx="5.76"
                        transform="translate(-156.89 471.86) rotate(-35.95)" fill="#261a44" />
                  <rect x="626.69" y="464.39" width="41.46" height="28.57"
                        transform="translate(-157.71 471.26) rotate(-35.95)" fill="#3bbabc" />
                  <path d="M672.59,478.1,639,502.44l-16.78-23.13" fill="#96e2b9" opacity="0.38" />
                  <path
                    d="M667.44,465.62a1.16,1.16,0,0,0-1.36-1.89,1.18,1.18,0,0,0-.27,1.63h0A1.17,1.17,0,0,0,667.44,465.62Z"
                    fill="#3d376d" />
                </g>
                <path
                  d="M656.6,489.18a9.35,9.35,0,0,0-10.14-6l-17.82-29.71c-.12-.2-.24-.4-.38-.59a8.31,8.31,0,0,0-11.6-1.91c-.19.14-.38.28-.57.44a8.31,8.31,0,0,0-1,11.71L638.62,491a9.23,9.23,0,0,0,.47,4.74h0a9,9,0,0,0,1.16,2.16c3.85,6.36,8.84,6.35,12.87,4.49,3.38-1.57,2.65-3.41,2.1-4.21A9.3,9.3,0,0,0,656.6,489.18Z"
                  fill="#ffd17a" />
              </g>
            </g>
            <g>
              <path
                d="M704.8,422.74l2.13-17.84a11.4,11.4,0,0,1-5.95,1.54,9.74,9.74,0,0,1-5.61-2.69s-1.93-2.62-1.93-2.62l-5.79,17.59a4.39,4.39,0,0,1-.21.61l.1.51a9.45,9.45,0,0,0,17.08,3.58l.08-.12A3.45,3.45,0,0,1,704.8,422.74Z"
                fill="#ffd17a" />
              <path d="M691.22,404.28s4.71,10,10.32,8.64c5.85-1.36,5.83-9.9,5.83-9.9Z"
                    fill="#12122f" />
            </g>
            <g id="rg-head">
              <path
                d="M715.34,377a78.13,78.13,0,0,1,.48,17.29c-.35,4.26-2.57,7.51-6,10.35l-.63.52a12.74,12.74,0,0,1-13,2h0c-4.36-1.82-7.63-4.57-9.12-8.87A115.55,115.55,0,0,1,683,381.5s-4-17.15,13.55-19.27S715.34,377,715.34,377Z"
                fill="#ffd17a" />
              <path
                d="M716.79,374.5a16.62,16.62,0,0,0-6.52-9.92,14.16,14.16,0,0,0-8.37-4.09s-11.42-2.58-16.15,6.1a14.73,14.73,0,0,0-4.38,8c-1.41,7,1.22,10.12,1.22,10.12s8.86-6.62,10-14.06c3.46,2.85,9.37,4.39,22.68,4.21,2.08,4.39.76,9.93.76,9.93S718.2,381.55,716.79,374.5Z"
                fill="#ff65a7" />
              <path d="M706.67,388.41v2.18a.86.86,0,0,1-.83.88l-.18,0-1.17-.24" fill="none"
                    stroke="#12122f" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="0.92" />
              <path
                d="M714.24,378.2s-4.22-2.21-5-.46c0,0-.51,1.21,3.2,3.08s4.82,2,5.66,1S716.29,379.1,714.24,378.2Z"
                fill="#12122f" />
              <path
                d="M694.67,377.36s4.26-2.16,5-.38c0,0,.5,1.22-3.25,3s-4.86,1.93-5.67.93S692.61,378.22,694.67,377.36Z"
                fill="#12122f" />
              <path id="rg-mouth" d="M710.24,399.81H697C698.2,395.34,708.18,394.78,710.24,399.81Z"
                    fill="#fff" />
              <path
                d="M687.18,392.12c-3.1,2.68-9.64-7.94-6.65-10.8s5.13,1.8,5.13,1.8l.61,3.33.91,4.52.23,1Z"
                fill="#ffd17a" />
              <path d="M681.9,384.87s1.27-2.77,4.23,2.08" fill="none" stroke="#12122f"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.92" />
              <path
                d="M710.47,385.69a1.64,1.64,0,0,0,0,.44.37.37,0,0,0,.36.32.4.4,0,0,0,.3-.23c.07-.11.11-.24.18-.35a.78.78,0,0,1,1.09-.21h0a2.78,2.78,0,0,1,.5.68c.17.24.45.44.71.34a.53.53,0,0,0,.32-.49c.06-1-.55-2.77-1.79-2.77C711.17,383.43,710.49,384.69,710.47,385.69Z"
                fill="#12122f" />
              <path
                d="M698.29,384.85a1.6,1.6,0,0,1,0,.44.39.39,0,0,1-.37.32.42.42,0,0,1-.3-.23c-.07-.11-.11-.24-.18-.35a.79.79,0,0,0-1.09-.21h0a2.65,2.65,0,0,0-.5.69.67.67,0,0,1-.71.34.56.56,0,0,1-.32-.5c0-1,.55-2.77,1.79-2.77C697.56,382.58,698.27,383.86,698.29,384.85Z"
                fill="#12122f" />

              <g id="rg-sweat">
                <path
                  d="M692.61,378.59s7.85,7.89,3.64,12.26c0,0-3,2.66-4.65-2.35S692.61,378.59,692.61,378.59Z"
                  fill="#2852f0" />
                <path
                  d="M703.92,380.4s5.28,1.79,4.34,4.68c0,0-.75,1.86-2.6,0A6.88,6.88,0,0,1,703.92,380.4Z"
                  fill="#2852f0" />
              </g>
            </g>
          </g>
        </g>
        <g>
          <path
            d="M752.19,692.19c81.74,0,148-93.64,148-209.16s-66.27-209.16-148-209.16H611.59c81.75,0,148,93.65,148,209.16s-66.27,209.16-148,209.16Z"
            opacity="0.3" fill="url(#tg-linear-gradient-2)" />
          <ellipse cx="611.59" cy="483.03" rx="148.02" ry="209.16" fill="none" stroke="#e3dbe0"
                   strokeMiterlimit="10" strokeWidth="3.75" />
          <g clipPath="url(#clip-wheel-lines1)">
            <g id="wheel-lines1">
              <line x1="406.39" y1="404.58" x2="824.07" y2="564.06" fill="none" stroke="#e3dbe0"
                    strokeMiterlimit="10" strokeWidth="3.75" />
              <line x1="653.26" y1="266.85" x2="569.02" y2="705.94" fill="none" stroke="#e3dbe0"
                    strokeMiterlimit="10" strokeWidth="3.75" />
            </g>
          </g>
          <path
            d="M611.78,452.19h-7.51c11.56,0,20.93,13.26,20.93,29.6s-9.37,29.61-20.93,29.61h7.51c11.57,0,20.94-13.26,20.94-29.61s-9.37-29.6-20.94-29.6"
            fill="#e3dbe0" />
          <path
            d="M609.64,727.92H529.4c-5.2,0-9.94-3.67-12.36-9.57A23.45,23.45,0,0,1,517,701l89.13-220.62a3.76,3.76,0,0,1,7,2.81L524,703.82a16.09,16.09,0,0,0,0,11.67c1.24,3,3.33,4.91,5.41,4.91h80.24a3.76,3.76,0,1,1,0,7.51h0"
            fill="#ede7eb" />
          <path
            d="M689.87,727.92H609.64a3.76,3.76,0,0,1,0-7.52h80.25c2.1,0,4.17-1.88,5.41-4.91a16,16,0,0,0,0-11.67L606.13,483.2a3.76,3.76,0,0,1,7-2.82L702.27,701a23.5,23.5,0,0,1,0,17.34c-2.43,5.9-7.16,9.58-12.37,9.58"
            fill="#ede7eb" />
          <path
            d="M625.2,481.79c0-16.35-9.37-29.6-20.93-29.6s-20.94,13.26-20.94,29.6,9.38,29.61,20.94,29.61,20.93-13.26,20.93-29.61"
            fill="#f5f2f4" />
          <path
            d="M618.76,481.79c0-11.31-6.49-20.5-14.5-20.5s-14.49,9.18-14.49,20.5,6.49,20.5,14.49,20.5,14.5-9.17,14.5-20.5"
            fill="#fbfafa" />
        </g>
        <g id="run-blocks">
          <g>
            <g>
              <rect x="105" y="493.5" width="247" height="218" rx="5" fill="#fff" />
              <rect x="106" y="494.5" width="245" height="216" rx="4" fill="none" stroke="#2852f0"
                    strokeWidth="2" />
            </g>
            <rect x="199" y="525.5" width="60" height="10" fill="#ffd17a" />
            <g>
              <text transform="translate(199 531.5)" fontSize="22" fill="#0b0b09"
                    fontFamily="Arial, sans-serif" fontWeight="700">Sales
              </text>
            </g>
            <g>
              <text transform="translate(206 568.5)" fontSize="14" fill="#2852f0"
                    fontFamily="Arial, sans-serif">Pricing
              </text>
            </g>
            <g>
              <text transform="translate(157 599.5)" fontSize="14" fill="#2852f0"
                    fontFamily="Arial, sans-serif">Oppt
                <tspan x="30.35" y="0" letterSpacing="-0.07em">y</tspan>
                <tspan x="36.31" y="0">. Management</tspan>
              </text>
            </g>
            <g>
              <text transform="translate(152 629.5)" fontSize="14" fill="#2852f0"
                    fontFamily="Arial, sans-serif">Customer Satisfaction
              </text>
            </g>
            <g>
              <text transform="translate(163 660.5)" fontSize="14" fill="#2852f0"
                    fontFamily="Arial, sans-serif">Positioning Product
              </text>
            </g>
            <g>
              <text transform="translate(170 690.5)" fontSize="14" fill="#2852f0"
                    fontFamily="Arial, sans-serif">Partner Relations
              </text>
            </g>
          </g>
          <g>
            <g>
              <rect x="44" y="156" width="247" height="218" rx="5" fill="#fff" />
              <rect x="45" y="157" width="245" height="216" rx="4" fill="none" stroke="#ffd17a"
                    strokeWidth="2" />
            </g>
            <rect x="117" y="188" width="101" height="10" fill="#ffd17a" />
            <g>
              <text transform="translate(123 194)" fontSize="22" fill="#0b0b09"
                    fontFamily="Arial, sans-serif" fontWeight="700">Finance
              </text>
            </g>
            <g>
              <text transform="translate(148 231)" fontSize="14" fill="#ffd17a"
                    fontFamily="Arial, sans-serif">Billing
              </text>
            </g>
            <g>
              <text transform="translate(137 262)" fontSize="14" fill="#ffd17a"
                    fontFamily="Arial, sans-serif">Invoicing
              </text>
            </g>
            <g>
              <text transform="translate(129 292)" fontSize="14" fill="#ffd17a"
                    fontFamily="Arial, sans-serif">Collections
              </text>
            </g>
            <g>
              <text transform="translate(95 323)" fontSize="14" fill="#ffd17a"
                    fontFamily="Arial, sans-serif">Accounts Receivable
              </text>
            </g>
            <g>
              <text transform="translate(105 353)" fontSize="14" fill="#ffd17a"
                    fontFamily="Arial, sans-serif">Accounts Payable
              </text>
            </g>
          </g>
          <g>
            <g>
              <rect x="349" y="26" width="247" height="218" rx="5" fill="#fff" />
              <rect x="350" y="27" width="245" height="216" rx="4" fill="none" stroke="#ed71a5"
                    strokeWidth="2" />
            </g>
            <rect x="416" y="58" width="114" height="10" fill="#ffd17a" />
            <g>
              <text transform="translate(416 63)" fontSize="22" fill="#0b0b09"
                    fontFamily="Arial, sans-serif" fontWeight="700">Marketing
              </text>
            </g>
            <g>
              <text transform="translate(434 101)" fontSize="14" fill="#ed71a5"
                    fontFamily="Arial, sans-serif">A/B
                <tspan x="22.57" y="0" letterSpacing="-0.02em" />
                <tspan x="26.2" y="0" letterSpacing="-0.11em">T</tspan>
                <tspan x="33.2" y="0">esting</tspan>
              </text>
            </g>
            <g>
              <text transform="translate(407 132)" fontSize="14" fill="#ed71a5"
                    fontFamily="Arial, sans-serif">Social Media Mgmt
              </text>
            </g>
            <g>
              <text transform="translate(387 162)" fontSize="14" fill="#ed71a5"
                    fontFamily="Arial, sans-serif">Customer Segmentation
              </text>
            </g>
            <g>
              <text transform="translate(396 193)" fontSize="14" fill="#ed71a5"
                    fontFamily="Arial, sans-serif">Sign-ups &amp; Reminders
              </text>
            </g>
            <g>
              <text transform="translate(420 223)" fontSize="14" fill="#ed71a5"
                    fontFamily="Arial, sans-serif">Market
                <tspan x="42.79" y="0" letterSpacing="-0.06em" />
                <tspan x="45.9" y="0">Analysis</tspan>
              </text>
            </g>
          </g>
          <g>
            <g>
              <rect x="703" width="247" height="218" rx="5" fill="#fff" />
              <rect x="704" y="1" width="245" height="216" rx="4" fill="none" stroke="#7860fa"
                    strokeWidth="2" />
            </g>
            <rect x="817" y="32" width="19" height="10" fill="#ffd17a" />
            <g>
              <text transform="translate(817 37)" fontSize="22" fill="#0b0b09"
                    fontFamily="Arial, sans-serif" fontWeight="700">IT
              </text>
            </g>
            <g>
              <text transform="translate(784 75)" fontSize="14" fill="#7860fa"
                    fontFamily="Arial, sans-serif">
                <tspan letterSpacing="-0.04em">T</tspan>
                <tspan x="8.03" y="0">icket</tspan>
                <tspan x="36.82" y="0" letterSpacing="-0.02em" />
                <tspan x="40.46" y="0" letterSpacing="-0.04em">T</tspan>
                <tspan x="48.49" y="0">riage</tspan>
              </text>
            </g>
            <g>
              <text transform="translate(759 106)" fontSize="14" fill="#7860fa"
                    fontFamily="Arial, sans-serif">Asset Management
              </text>
            </g>
            <g>
              <text transform="translate(800 136)" fontSize="14" fill="#7860fa"
                    fontFamily="Arial, sans-serif">DevOps
              </text>
            </g>
            <g>
              <text transform="translate(800 167)" fontSize="14" fill="#7860fa"
                    fontFamily="Arial, sans-serif">SecOps
              </text>
            </g>
            <g>
              <text transform="translate(739 197)" fontSize="14" fill="#7860fa"
                    fontFamily="Arial, sans-serif">Knowledge Management
              </text>
            </g>
          </g>
          <g>
            <g>
              <rect x="1026" y="146" width="247" height="218" rx="5" fill="#fff" />
              <rect x="1027" y="147" width="245" height="216" rx="4" fill="none" stroke="#e84312"
                    strokeWidth="2" />
            </g>
            <rect x="1134" y="178" width="32" height="10" fill="#ffd17a" />
            <g>
              <text transform="translate(1135 183)" fontSize="22" fill="#0b0b09"
                    fontFamily="Arial, sans-serif" fontWeight="700">HR
              </text>
            </g>
            <g>
              <text transform="translate(1091 221)" fontSize="14" fill="#e84312"
                    fontFamily="Arial, sans-serif">On/O
                <tspan x="33.46" y="0" letterSpacing="-0.02em">f</tspan>
                <tspan x="37.09" y="0">f-boarding</tspan>
              </text>
            </g>
            <g>
              <text transform="translate(1122 252)" fontSize="14" fill="#e84312"
                    fontFamily="Arial, sans-serif">Benefits
              </text>
            </g>
            <g>
              <text transform="translate(1076 282)" fontSize="14" fill="#e84312"
                    fontFamily="Arial, sans-serif">
                <tspan letterSpacing="-0.07em">V</tspan>
                <tspan x="8.3" y="0">acation / Sick Leave</tspan>
              </text>
            </g>
            <g>
              <text transform="translate(1076 313)" fontSize="14" fill="#e84312"
                    fontFamily="Arial, sans-serif">Candidate Screening
              </text>
            </g>
            <g>
              <text transform="translate(1102 343)" fontSize="14" fill="#e84312"
                    fontFamily="Arial, sans-serif">
                <tspan letterSpacing="-0.04em">T</tspan>
                <tspan x="8.03" y="0">ime</tspan>
                <tspan x="30.59" y="0" letterSpacing="-0.02em" />
                <tspan x="34.23" y="0" letterSpacing="-0.04em">T</tspan>
                <tspan x="42.26" y="0">racking</tspan>
              </text>
            </g>
          </g>
          <g>
            <g>
              <rect x="995" y="476" width="247" height="218" rx="5" fill="#fff" />
              <rect x="996" y="477" width="245" height="216" rx="4" fill="none" stroke="#27b3b6"
                    strokeWidth="2" />
            </g>
            <rect x="1056" y="508" width="125" height="10" fill="#ffd17a" />
            <g>
              <text transform="translate(1056 513)" fontSize="22" fill="#0b0b09"
                    fontFamily="Arial, sans-serif" fontWeight="700">Operations
              </text>
            </g>
            <g>
              <text transform="translate(1083 551)" fontSize="14" fill="#27b3b6"
                    fontFamily="Arial, sans-serif">Budgeting
              </text>
            </g>
            <g>
              <text transform="translate(1089 582)" fontSize="14" fill="#27b3b6"
                    fontFamily="Arial, sans-serif">Planning
              </text>
            </g>
            <g>
              <text transform="translate(1039 612)" fontSize="14" fill="#27b3b6"
                    fontFamily="Arial, sans-serif">Contract Management
              </text>
            </g>
            <g>
              <text transform="translate(1049 643)" fontSize="14" fill="#27b3b6"
                    fontFamily="Arial, sans-serif">Analysis &amp; Reporting
              </text>
            </g>
            <g>
              <text transform="translate(1086 673)" fontSize="14" fill="#27b3b6"
                    fontFamily="Arial, sans-serif">Research
              </text>
            </g>
          </g>
        </g>
        <g id="logos">
          <g>
            <path d="M69.54,897.06v27.27h39.2V897.19l-19.6,13.5Z" fill="#fcfdff" />
            <g>
              <path
                d="M114.49,891.88a4.14,4.14,0,0,0-4.14-4.14h0L89.13,903.36,68.06,887.74a4.15,4.15,0,0,0-4.14,4.14v28.31a4.15,4.15,0,0,0,4.14,4.14h1.47V897.06l19.6,13.63,19.6-13.5,5.76-4.11Z"
                fill="#1448a6" />
              <path d="M114.5,893.08l-5.76,4.11v27.14c4.35-.05,5.65-1.13,5.75-4.14Z" fill="#1448a6" />
              <polygon points="114.5 893.08 114.5 893.08 114.5 893.08 114.5 893.08" fill="#1448a6" />
            </g>
            <path d="M68.06,887.74l21.08,15.62,21.21-15.62Z" fill="#fcfdff" />
          </g>
          <g>
            <path
              d="M536,882.82a4.67,4.67,0,0,0,0,9.34h4.67v-4.67a4.68,4.68,0,0,0-4.67-4.67h0m0,12.46H523.58a4.67,4.67,0,0,0,0,9.34H536a4.67,4.67,0,0,0,0-9.34Z"
              fill="#1448a6" fillRule="evenodd" />
            <path
              d="M565.54,900a4.66,4.66,0,1,0-9.32,0v4.67h4.66a4.65,4.65,0,0,0,4.66-4.67Zm-12.43,0V887.49a4.66,4.66,0,1,0-9.32,0V900a4.66,4.66,0,1,0,9.32,0Z"
              fill="#1448a6" fillRule="evenodd" />
            <path
              d="M548.45,929.53a4.67,4.67,0,0,0,0-9.34h-4.67v4.67A4.67,4.67,0,0,0,548.45,929.53Zm0-12.46h12.43a4.67,4.67,0,0,0,0-9.34H548.45a4.67,4.67,0,0,0,0,9.34Z"
              fill="#1448a6" fillRule="evenodd" />
            <path
              d="M518.92,912.41a4.67,4.67,0,0,0,9.33,0h0v-4.68h-4.67a4.68,4.68,0,0,0-4.66,4.68Zm12.43,0v12.45a4.67,4.67,0,1,0,9.33,0V912.41a4.67,4.67,0,0,0-9.33,0h0"
              fill="#1448a6" fillRule="evenodd" />
          </g>
          <g>
            <path
              d="M855.64,910a19.28,19.28,0,0,0,.3-3.71A21.3,21.3,0,0,0,834.66,885h0a20.84,20.84,0,0,0-3.7.3,12.71,12.71,0,0,0-17.33,17.33,20.84,20.84,0,0,0-.3,3.7,21.31,21.31,0,0,0,21.29,21.33h0a19.16,19.16,0,0,0,3.71-.3A12.7,12.7,0,0,0,855.64,910Zm-11,15.73a10,10,0,0,1-4.69-1.21l-1-.6-1.14.22a18.81,18.81,0,0,1-3.18.3,18.08,18.08,0,0,1-18.08-18.07,15.44,15.44,0,0,1,.3-3.18l.23-1.13-.68-1.06a9.29,9.29,0,0,1-1.21-4.69,9.47,9.47,0,0,1,9.46-9.46,10.16,10.16,0,0,1,4.69,1.21l1,.61,1.13-.23a24.26,24.26,0,0,1,3.18-.3,18.08,18.08,0,0,1,18.08,18.08h0a15.34,15.34,0,0,1-.3,3.17l-.23,1.14.61,1a9.57,9.57,0,0,1-8,14.22Z"
              fill="#1448a6" />
            <path
              d="M838.47,904.29l-4.77-1.06c-1.81-.45-3.85-1-3.85-2.72s1.43-3,4.08-3c5.37,0,4.92,3.71,7.57,3.71a2.29,2.29,0,0,0,2.55-2c0-.07,0-.13,0-.19,0-3.33-5.3-5.82-9.84-5.82-4.84,0-10,2-10,7.56,0,2.65.91,5.52,6.13,6.88l6.5,1.67c2,.46,2.57,1.59,2.57,2.57,0,1.67-1.74,3.48-4.69,3.48-5.82,0-5-4.61-8.09-4.61a2.39,2.39,0,0,0-2.5,2.28v.06c0,2.73,3.33,6.43,10.59,6.43,7,0,10.44-3.48,10.44-8-.08-3-1.44-6.06-6.73-7.27Z"
              fill="#1448a6" />
          </g>
          <path
            d="M1277,882.82a23.1,23.1,0,0,0-3.08,46v-4.66a3.08,3.08,0,0,0-2.07-2.91,16.17,16.17,0,1,1,21.31-15.32c0,.2,0,.4,0,.6v.14c0,.18,0,.37,0,.55a1.1,1.1,0,0,1,0,.18l0,.38-.06.44,0,.2c-2,13-19,20.36-19,20.4a22.65,22.65,0,0,0,3.08.2,23.08,23.08,0,0,0,23.08-23.1h0a23.09,23.09,0,0,0-23.08-23.1h0"
            fill="#1448a6" />
          <path
            d="M1105.92,904.46a21.82,21.82,0,0,0,9,17.48v8.57l8.26-4.54a25.61,25.61,0,0,0,7,.94c13.39,0,24.25-10,24.25-22.45S1143.57,882,1130.17,882,1105.92,892.05,1105.92,904.46Zm21.69-6.29,6.33,6.58,11.9-6.58-13.26,14.07-6.17-6.59-12.06,6.59Z"
            fill="#1448a6" />
          <g>
            <path
              d="M251.73,929.36H222.65a8.73,8.73,0,0,1-8.73-8.73h0V891.55a8.73,8.73,0,0,1,8.72-8.73h29.09a8.73,8.73,0,0,1,8.73,8.72h0v29.08a8.73,8.73,0,0,1-8.72,8.73Z"
              fill="#1448a6" />
            <path
              d="M246.6,917.72h-.18a22.75,22.75,0,0,1-20.86-20.85,2.21,2.21,0,0,1,.58-1.68,2.14,2.14,0,0,1,1.59-.7l4.56,0a2.2,2.2,0,0,1,2.13,1.66l1,3.78a2.19,2.19,0,0,1-.81,2.28l-1.83,1.36a17.61,17.61,0,0,0,6.92,7l1.42-1.87a2.19,2.19,0,0,1,2.28-.81l3.81,1a2.18,2.18,0,0,1,1.66,2.11v4.67a2.18,2.18,0,0,1-.69,1.59,2.31,2.31,0,0,1-1.54.6Z"
              fill="#fff" />
          </g>
          <g>
            <path
              d="M371.28,919.71c-6.88-3.87-11.36-9.89-11.36-16.61,0-11.63,13.17-21.1,29.45-21.1s29.45,9.47,29.45,21.1-13.18,21.1-29.45,21.1a44,44,0,0,1-9.56-1.12c-10.07,7.4-17.14,1.46-17.14,1.46,4.83,0,7.32-2.32,8.61-4.82Z"
              fill="#1448a6" />
            <path
              d="M411.63,925c4.36-2.46,7.19-6.27,7.19-10.52,0-7.36-8.34-13.36-18.64-13.36s-18.64,6-18.64,13.36,8.34,13.35,18.64,13.35a27.33,27.33,0,0,0,6.05-.71c6.38,4.69,10.85.93,10.85.93a5.62,5.62,0,0,1-5.45-3.05Z"
              fill="#3969bf" />
            <path d="M408.05,917.63h0a2.92,2.92,0,1,1,2.89-2.94v0A2.92,2.92,0,0,1,408.05,917.63Z"
                  fill="#fff" />
            <path d="M400.59,917.63h0a2.92,2.92,0,1,1,2.89-2.94v0A2.92,2.92,0,0,1,400.59,917.63Z"
                  fill="#fff" />
            <path d="M393.28,917.63h0a2.92,2.92,0,1,1,2.89-2.94v0A2.92,2.92,0,0,1,393.28,917.63Z"
                  fill="#fff" />
          </g>
          <g>
            <g>
              <circle cx="690.26" cy="890.94" r="6.95" fill="#7b83eb" />
              <path
                d="M689.76,892.43h-6.3l0,.14h0l0,.13a7,7,0,0,0,8.23,5v-3.31A2,2,0,0,0,689.76,892.43Z"
                opacity="0.1" />
              <path d="M688.27,893.92H684a7,7,0,0,0,6.28,4v-2A2,2,0,0,0,688.27,893.92Z"
                    opacity="0.2" />
              <ellipse cx="706.05" cy="893.33" rx="5.56" ry="5.05" fill="#5059c9" />
              <path
                d="M710.38,899.88H698.66a1,1,0,0,0-.95,1h0v12.09a7.61,7.61,0,0,0,5.91,7.57,7.45,7.45,0,0,0,8.83-5.77,7.1,7.1,0,0,0,.16-1.53V902.12A2.24,2.24,0,0,0,710.38,899.88Z"
                fill="#5059c9" />
              <path
                d="M702.18,902.12v14.16a11.92,11.92,0,0,1-22.24,6,12.15,12.15,0,0,1-.74-1.49,11.29,11.29,0,0,1-.49-1.49,12.05,12.05,0,0,1-.38-3V902.12a2.25,2.25,0,0,1,2.23-2.24h19.38a2.23,2.23,0,0,1,2.24,2.23Z"
                fill="#7b83eb" />
              <path d="M688.27,893.92H684a7,7,0,0,0,6.28,4v-2A2,2,0,0,0,688.27,893.92Z"
                    opacity="0.2" />
              <path
                d="M691.75,899.88v18.89a2,2,0,0,1-1.55,1.92,1.61,1.61,0,0,1-.44.06H679.2a13,13,0,0,1-.5-1.49,12.54,12.54,0,0,1-.37-3V902.12a2.25,2.25,0,0,1,2.23-2.24h11.19Z"
                opacity="0.1" />
              <path
                d="M690.26,899.88v20.38a1.59,1.59,0,0,1-.06.43,2,2,0,0,1-1.93,1.55h-8.33a12.15,12.15,0,0,1-.74-1.49,11.29,11.29,0,0,1-.49-1.49,12.05,12.05,0,0,1-.38-3V902.12a2.25,2.25,0,0,1,2.23-2.24h9.7Z"
                opacity="0.2" />
              <path
                d="M690.26,899.88v17.4a2,2,0,0,1-2,2h-9.56a12.05,12.05,0,0,1-.38-3V902.12a2.25,2.25,0,0,1,2.23-2.24h9.7Z"
                opacity="0.2" />
              <path
                d="M680.57,899.88a2.24,2.24,0,0,0-2.24,2.23h0v14.16a12.05,12.05,0,0,0,.38,3h8.07a2,2,0,0,0,2-2v-17.4Z"
                opacity="0.2" />
              <path
                d="M666.91,893.92h19.87a2,2,0,0,1,2,2v19.87a2,2,0,0,1-2,2H666.91a2,2,0,0,1-2-2V895.91a2,2,0,0,1,2-2Z"
                fill="#4b53bc" />
              <path d="M682.77,901.34h-4.45v11.95h-2.93V901.34h-4.48V898.4h11.86Z" fill="#fff" />
              <path d="M664.92,882h47.69v47.69H664.92Z" fill="none" />
            </g>
            <circle cx="690.26" cy="890.94" r="6.95" fill="#3969bf" />
            <path d="M689.76,892.43h-6.3l0,.14h0l0,.13a7,7,0,0,0,8.23,5v-3.31A2,2,0,0,0,689.76,892.43Z"
                  opacity="0.1" />
            <path d="M688.27,893.92H684a7,7,0,0,0,6.28,4v-2A2,2,0,0,0,688.27,893.92Z" opacity="0.2" />
            <ellipse cx="706.05" cy="893.33" rx="5.56" ry="5.05" fill="#1448a6" />
            <path
              d="M710.38,899.88H698.66a1,1,0,0,0-.95,1h0v12.09a7.61,7.61,0,0,0,5.91,7.57,7.45,7.45,0,0,0,8.83-5.77,7.1,7.1,0,0,0,.16-1.53V902.12A2.24,2.24,0,0,0,710.38,899.88Z"
              fill="#1448a6" />
            <path
              d="M702.18,902.12v14.16a11.92,11.92,0,0,1-22.24,6,12.15,12.15,0,0,1-.74-1.49,11.29,11.29,0,0,1-.49-1.49,12.05,12.05,0,0,1-.38-3V902.12a2.25,2.25,0,0,1,2.23-2.24h19.38a2.23,2.23,0,0,1,2.24,2.23Z"
              fill="#3969bf" />
            <path d="M688.27,893.92H684a7,7,0,0,0,6.28,4v-2A2,2,0,0,0,688.27,893.92Z" opacity="0.2" />
            <path
              d="M691.75,899.88v18.89a2,2,0,0,1-1.55,1.92,1.61,1.61,0,0,1-.44.06H679.2a13,13,0,0,1-.5-1.49,12.54,12.54,0,0,1-.37-3V902.12a2.25,2.25,0,0,1,2.23-2.24h11.19Z"
              opacity="0.1" />
            <path
              d="M690.26,899.88v20.38a1.59,1.59,0,0,1-.06.43,2,2,0,0,1-1.93,1.55h-8.33a12.15,12.15,0,0,1-.74-1.49,11.29,11.29,0,0,1-.49-1.49,12.05,12.05,0,0,1-.38-3V902.12a2.25,2.25,0,0,1,2.23-2.24h9.7Z"
              opacity="0.2" />
            <path
              d="M690.26,899.88v17.4a2,2,0,0,1-2,2h-9.56a12.05,12.05,0,0,1-.38-3V902.12a2.25,2.25,0,0,1,2.23-2.24h9.7Z"
              opacity="0.2" />
            <path
              d="M680.57,899.88a2.24,2.24,0,0,0-2.24,2.23h0v14.16a12.05,12.05,0,0,0,.38,3h8.07a2,2,0,0,0,2-2v-17.4Z"
              opacity="0.2" />
            <path
              d="M666.91,893.92h19.87a2,2,0,0,1,2,2v19.87a2,2,0,0,1-2,2H666.91a2,2,0,0,1-2-2V895.91a2,2,0,0,1,2-2Z"
              fill="#1448a6" />
            <path d="M682.77,901.34h-4.45v11.95h-2.93V901.34h-4.48V898.4h11.86Z" fill="#fff" />
            <path d="M664.92,882h47.69v47.69H664.92Z" fill="none" />
          </g>
          <g>
            <circle cx="972.9" cy="898.8" r="15.98" fill="#1448a6" />
            <ellipse cx="1003.22" cy="900.85" rx="2.87" ry="2.46" fill="#1448a6" />
            <ellipse cx="994.62" cy="908.22" rx="5.74" ry="6.56" fill="#1448a6" />
            <ellipse cx="995.85" cy="922.16" rx="6.97" ry="6.56" fill="#1448a6" />
          </g>
          <path
            d="M564.37,1004.84v13.5H553.19Zm0-4.84a5.59,5.59,0,0,1-11.18,0Zm1.84,18.34a5.59,5.59,0,0,1,11.17,0Zm0-4.84V1000h11.18Zm6.25,16.38a2.17,2.17,0,0,0,1.55-.6l.77.82a3,3,0,1,1-2.66-4.94h.18c1.86,0,2.91,1.42,2.82,3.39h-4.39a1.58,1.58,0,0,0,1.73,1.34m1.34-2.26a1.41,1.41,0,0,0-1.48-1.33,1.5,1.5,0,0,0-1.59,1.33Zm-30.21,2.2,3.38-3.44h-3.3v-1.08h4.87v1.1l-3.39,3.44h3.44v1.08h-5Zm8.8.06a2.17,2.17,0,0,0,1.54-.6l.76.83a3,3,0,0,1-2.31.9,2.93,2.93,0,1,1-.35-5.85h.18c1.86,0,2.92,1.41,2.82,3.38h-4.38a1.57,1.57,0,0,0,1.74,1.34m1.33-2.26a1.41,1.41,0,0,0-1.48-1.33,1.52,1.52,0,0,0-1.59,1.33Zm8.64.48a2.8,2.8,0,0,1,2.68-2.92h.14a2.47,2.47,0,0,1,1.88.84v-3.31h1.2v8.2h-1.2v-.78a2.43,2.43,0,0,1-1.89.88,2.81,2.81,0,0,1-2.81-2.85v-.06m4.76,0a1.79,1.79,0,1,0-1.79,1.83,1.78,1.78,0,0,0,1.79-1.83v0m8.78,1.63,1.09-.56a1.6,1.6,0,0,0,1.45.82c.68,0,1-.34,1-.74s-.66-.55-1.37-.69c-1-.2-1.94-.52-1.94-1.68a1.92,1.92,0,0,1,2.13-1.7h0a2.59,2.59,0,0,1,2.27,1.09l-1,.55a1.47,1.47,0,0,0-1.26-.64c-.65,0-1,.31-1,.67s.51.51,1.32.69,2,.5,2,1.67a2,2,0,0,1-2.18,1.82h-.11a2.61,2.61,0,0,1-2.47-1.29m8-1.3-.95,1v1.46h-1.2v-8.2H583v5.37l2.54-2.79H587l-2.2,2.4,2.26,3.22h-1.35Zm-25.16-3.24a2.44,2.44,0,0,0-2.61,2.26,1.21,1.21,0,0,0,0,.19v3.29h1.22v-3.13a1.33,1.33,0,0,1,1.18-1.47h.26c.9,0,1.35.54,1.35,1.47v3.13h1.2v-3.29a2.42,2.42,0,0,0-2.39-2.46h-.2"
            fill="#1448a6" />
          <g>
            <path
              d="M43,1001.66a8.42,8.42,0,0,1,13.49,1.78,10,10,0,0,1,4.18-.89,10.43,10.43,0,0,1,0,20.85,9.94,9.94,0,0,1-2-.2,7.55,7.55,0,0,1-9.9,3.11,8.62,8.62,0,0,1-16-.39,7.55,7.55,0,0,1-1.64.17A8.1,8.1,0,0,1,27,1011a9.31,9.31,0,0,1,16-9.34"
              fill="#1448a6" />
            <path
              d="M30,1015.4c0,.08,0,.1,0,.11a1.78,1.78,0,0,0,.27.17,2.84,2.84,0,0,0,1.43.33c1,0,1.6-.52,1.6-1.36v0c0-.78-.69-1.06-1.34-1.26l-.08,0c-.49-.16-.91-.3-.91-.62h0c0-.28.25-.48.63-.48a2.9,2.9,0,0,1,1.25.32s.09.06.13,0l.2-.54a.1.1,0,0,0,0-.11,2.81,2.81,0,0,0-1.41-.38h-.1a1.38,1.38,0,0,0-1.52,1.21.49.49,0,0,0,0,.12h0c0,.82.69,1.09,1.34,1.28l.1,0c.48.14.88.27.88.6h0c0,.3-.26.53-.69.53a2.29,2.29,0,0,1-1.27-.36l-.16-.1a.08.08,0,0,0-.11,0l0,0Zm14.4,0c0,.08,0,.1,0,.11a1.78,1.78,0,0,0,.27.17,2.84,2.84,0,0,0,1.43.33c1,0,1.6-.52,1.6-1.36v0c0-.78-.69-1.06-1.34-1.26l-.08,0c-.49-.16-.91-.3-.91-.62h0c0-.28.24-.48.63-.48a2.9,2.9,0,0,1,1.25.32s.09.06.13,0,.18-.49.2-.54a.1.1,0,0,0,0-.11,2.81,2.81,0,0,0-1.41-.38H46a1.37,1.37,0,0,0-1.52,1.21.49.49,0,0,0,0,.12h0c0,.82.69,1.09,1.34,1.28l.1,0c.48.14.88.27.88.6h0c0,.3-.26.53-.69.53a2.29,2.29,0,0,1-1.27-.36l-.16-.1a.08.08,0,0,0-.12,0v0Zm9.83-1.64a2.08,2.08,0,0,1-.27,1.11.88.88,0,0,1-.8.39.86.86,0,0,1-.8-.39,2.57,2.57,0,0,1,0-2.23,1,1,0,0,1,1.6,0,2,2,0,0,1,.26,1.12m.82-.89a1.93,1.93,0,0,0-.37-.71,1.74,1.74,0,0,0-.63-.48,2.33,2.33,0,0,0-1.76,0,1.74,1.74,0,0,0-.63.48,1.93,1.93,0,0,0-.37.71,3.14,3.14,0,0,0,0,1.77,1.93,1.93,0,0,0,.37.71,1.86,1.86,0,0,0,.63.48,2.43,2.43,0,0,0,1.76,0,1.86,1.86,0,0,0,.63-.48,1.93,1.93,0,0,0,.37-.71,3.32,3.32,0,0,0,0-1.77m6.75,2.26a.09.09,0,0,0-.1,0h0a1.9,1.9,0,0,1-.39.11,2.28,2.28,0,0,1-.45,0,1.26,1.26,0,0,1-.94-.36,1.6,1.6,0,0,1-.35-1.12,1.76,1.76,0,0,1,.32-1.08,1.1,1.1,0,0,1,.91-.4,2.9,2.9,0,0,1,.87.12s.06,0,.1,0l.2-.56a.09.09,0,0,0,0-.1h0a2.52,2.52,0,0,0-.54-.14,3.23,3.23,0,0,0-.62,0,2.17,2.17,0,0,0-.91.17,2,2,0,0,0-.67.48,2.17,2.17,0,0,0-.4.71,3,3,0,0,0-.13.89,2.31,2.31,0,0,0,.55,1.63,2,2,0,0,0,1.62.61,3.54,3.54,0,0,0,1.16-.2.07.07,0,0,0,0-.1Zm1.43-1.83a1.73,1.73,0,0,1,.23-.66,1,1,0,0,1,1.57,0,1.28,1.28,0,0,1,.18.66Zm2.77-.58a1.81,1.81,0,0,0-.36-.65,1.58,1.58,0,0,0-.53-.4,2,2,0,0,0-.8-.16,2.06,2.06,0,0,0-.91.18,1.69,1.69,0,0,0-.64.48,1.93,1.93,0,0,0-.38.72,3.35,3.35,0,0,0-.12.89,3,3,0,0,0,.12.89,1.81,1.81,0,0,0,1.1,1.17,2.93,2.93,0,0,0,1,.16,2.8,2.8,0,0,0,1.4-.28s.06,0,0-.13l-.19-.51a.08.08,0,0,0-.1-.05,2.62,2.62,0,0,1-1.14.2,1.14,1.14,0,0,1-1.27-1,1.22,1.22,0,0,1,0-.27h2.78a.08.08,0,0,0,.08-.07,3.24,3.24,0,0,0-.08-1.2m-25,.58a1.73,1.73,0,0,1,.23-.66.88.88,0,0,1,.79-.4.9.9,0,0,1,.78.4,1.28,1.28,0,0,1,.18.66Zm2.77-.58a1.67,1.67,0,0,0-.36-.65,1.61,1.61,0,0,0-.53-.4,2,2,0,0,0-.8-.16,2.06,2.06,0,0,0-.91.18,1.8,1.8,0,0,0-.64.48,2,2,0,0,0-.38.73,3.22,3.22,0,0,0-.12.88,3,3,0,0,0,.13.89,1.78,1.78,0,0,0,1.1,1.17,2.83,2.83,0,0,0,1,.16,2.8,2.8,0,0,0,1.4-.28s.06,0,0-.13l-.18-.51a.1.1,0,0,0-.11-.05h0a2.62,2.62,0,0,1-1.14.2,1.14,1.14,0,0,1-1.27-1,1.22,1.22,0,0,1,0-.27h2.78a.08.08,0,0,0,.08-.07,3,3,0,0,0-.09-1.2m-8.77,2.4a.52.52,0,0,1-.16-.17.64.64,0,0,1-.08-.36.58.58,0,0,1,.25-.53,1.19,1.19,0,0,1,.8-.2,4.87,4.87,0,0,1,.76.06v1.26h0a4.82,4.82,0,0,1-.75.1,1.23,1.23,0,0,1-.82-.16m1.11-2h-.44a2.58,2.58,0,0,0-.68.08,1.93,1.93,0,0,0-.58.27,1.28,1.28,0,0,0-.55,1.1,1.41,1.41,0,0,0,.12.64,1.18,1.18,0,0,0,.37.43,1.66,1.66,0,0,0,.56.25,3.64,3.64,0,0,0,.74.07,4.76,4.76,0,0,0,.84-.07c.28,0,.61-.11.7-.13l.2,0a.09.09,0,0,0,.06-.09v-2.55a1.54,1.54,0,0,0-.44-1.22,1.91,1.91,0,0,0-1.28-.39,4.53,4.53,0,0,0-.74.07,3,3,0,0,0-.86.31.09.09,0,0,0,0,.12l.2.52a.07.07,0,0,0,.08,0h0l0,0a2.83,2.83,0,0,1,1.21-.29,1.17,1.17,0,0,1,.69.18.77.77,0,0,1,.23.67v.11l-.46-.05m22.42-1.43a.08.08,0,0,0,0-.1h0a2.57,2.57,0,0,0-.47-.08,1.38,1.38,0,0,0-.72.11,1.35,1.35,0,0,0-.47.35v-.34a.07.07,0,0,0-.07-.08h-.72a.08.08,0,0,0-.08.08h0v4.16a.09.09,0,0,0,.09.09h.73a.09.09,0,0,0,.08-.08h0v-2.07a2.29,2.29,0,0,1,.09-.73,1,1,0,0,1,.25-.41.83.83,0,0,1,.34-.2,1.18,1.18,0,0,1,.37,0,1.63,1.63,0,0,1,.31,0c.05,0,.08,0,.1-.07s.18-.51.21-.58"
              fill="#fff" />
            <path
              d="M51.58,1009.81a1.27,1.27,0,0,0-.28-.06,2.31,2.31,0,0,0-.37,0,1.56,1.56,0,0,0-1.18.42,2.27,2.27,0,0,0-.56,1.26l0,.19h-.64a.09.09,0,0,0-.09.08l-.1.58s0,.09.09.09H49l-.63,3.47a3.85,3.85,0,0,1-.16.69,1.5,1.5,0,0,1-.2.4.55.55,0,0,1-.25.2,1.26,1.26,0,0,1-.33,0,.83.83,0,0,1-.22,0,.38.38,0,0,1-.15,0,.08.08,0,0,0-.1,0h0c0,.06-.19.51-.21.56a.08.08,0,0,0,0,.11h0l.26.08a1.39,1.39,0,0,0,.41,0,2,2,0,0,0,.68-.1,1.32,1.32,0,0,0,.51-.36,1.83,1.83,0,0,0,.36-.62,6.09,6.09,0,0,0,.25-.93l.62-3.55h.92a.09.09,0,0,0,.09-.08l.1-.58s0-.09-.09-.09h-.89a3.3,3.3,0,0,1,.15-.62.77.77,0,0,1,.19-.3.61.61,0,0,1,.24-.15,1,1,0,0,1,.3,0l.22,0,.15,0c.09,0,.1,0,.12,0l.21-.59s0-.08,0-.09h0m-12.42,6a.08.08,0,0,1-.08.09h-.74a.09.09,0,0,1-.08-.08h0v-5.93a.08.08,0,0,1,.08-.08h.74a.09.09,0,0,1,.08.08h0Z"
              fill="#fff" />
          </g>
          <g>
            <path d="M115.75,1001v27.84h28.44L172,1001Z" fill="#1448a6" />
            <path
              d="M151.78,1026v2.08h.31v-.9h.35l.57.9h.35l-.6-.9a.57.57,0,0,0,.55-.58h0c0-.41-.26-.59-.75-.59Zm.31.27h.43c.21,0,.45,0,.45.29s-.24.36-.51.36h-.37Zm.39-1a1.82,1.82,0,1,0,1.8,1.84v0a1.79,1.79,0,0,0-1.77-1.8h0Zm0,.3a1.51,1.51,0,1,1-1.5,1.5A1.51,1.51,0,0,1,152.48,1025.53Z"
              fill="#1870c5" />
            <path
              d="M149.48,1014.32h-1.22v-4.46h1.22c1.63,0,2.92.53,2.92,2.2s-1.3,2.26-2.92,2.26m-13.13,3.19a5.13,5.13,0,0,1-1.78-.31l1.76-5.54h0l1.72,5.55a5.18,5.18,0,0,1-1.74.3m12.8-11.27h-5.54v13.17l-4.84-13.17H134l-4.13,11c-.43-2.78-3.31-3.74-5.57-4.45-1.49-.48-3.08-1.19-3.06-2s.85-1.23,2.5-1.14a9,9,0,0,1,4.06,1.09l1.92-3.35a14.81,14.81,0,0,0-6.27-1.49h0a7.65,7.65,0,0,0-5.54,2,4.64,4.64,0,0,0-1.33,3.23,4.34,4.34,0,0,0,1.9,3.87,13.13,13.13,0,0,0,3.77,1.72c1.54.48,2.8.89,2.78,1.77a1.25,1.25,0,0,1-.37.86,2.41,2.41,0,0,1-1.78.57,7.71,7.71,0,0,1-4.59-1.31l-1.71,3.4a12.76,12.76,0,0,0,6.27,1.67h.29a7.6,7.6,0,0,0,4.76-1.6l.2-.18-.54,1.49h5l.84-2.57a9.65,9.65,0,0,0,5.85,0l.81,2.55h8.21v-5.32h1.79c4.32,0,6.88-2.2,6.88-5.9,0-4.12-2.48-6-7.78-6"
              fill="#fff" fillRule="evenodd" />
          </g>
          <g>
            <path
              d="M259,1000a21.68,21.68,0,0,1,20.61,12.88,1.35,1.35,0,0,1,.16.88,1.21,1.21,0,0,1-2.32.22,19.23,19.23,0,0,0-35.36,0,1.22,1.22,0,0,1-2.27-.87A21.67,21.67,0,0,1,259,1000Z"
              fill="#1448a6" />
            <path
              d="M255.44,1014.06a.41.41,0,0,1,.43-.42h.87a.41.41,0,0,1,.43.36c0,2.65,0,5.3,0,8,1.07-1.2,2.16-2.38,3.23-3.58.22-.21.38-.52.71-.55s.9,0,1.34,0c.17,0,.36.15.3.33a1.47,1.47,0,0,1-.31.35L259,1022c1.12,1.28,2.22,2.57,3.34,3.86a4.51,4.51,0,0,1,.44.54.25.25,0,0,1-.13.33l-.09,0c-.37,0-.75,0-1.12,0a1.12,1.12,0,0,1-.57-.08,1.54,1.54,0,0,1-.43-.45c-1.08-1.35-2.15-2.71-3.23-4.07,0,1.34,0,2.67,0,4,0,.16,0,.34-.1.46s-.53.13-.8.14-.51,0-.7-.13a.39.39,0,0,1-.13-.35v-12.21Z"
              fill="#1448a6" />
            <path
              d="M250.54,1017.8a2.43,2.43,0,0,1,1.68,0c.18.09.4.28.31.5s-.15.58-.25.86a.43.43,0,0,1-.51.24,7.62,7.62,0,0,0-1.34-.21,1.15,1.15,0,0,0-.83.39,2.35,2.35,0,0,0-.61,1.3,5.15,5.15,0,0,0-.05,1v4.39c0,.24-.23.4-.45.41h-.89c-.22,0-.46-.17-.43-.41v-8.12c0-.27.28-.42.51-.39s.7-.09.89.2.21.71.35,1.06a3.4,3.4,0,0,1,1.62-1.28Z"
              fill="#1448a6" />
            <path
              d="M220.15,1018a.4.4,0,0,1,.31-.19c.4,0,.81,0,1.22,0a.41.41,0,0,1,.38.37c.4,1.62.78,3.24,1.18,4.86.12.5.26,1,.33,1.5s.1.92.17,1.37a18.42,18.42,0,0,1,.37-1.94l1.55-5.79a.47.47,0,0,1,.46-.38c.45,0,.9,0,1.36,0a.53.53,0,0,1,.55.38c.39,1.41.77,2.82,1.16,4.23.27.9.49,1.82.67,2.74,0,.26.07.52.12.77a40,40,0,0,1,.84-4.34c.25-1.14.51-2.29.77-3.43a.44.44,0,0,1,.5-.34c.36,0,.72,0,1.09,0a.31.31,0,0,1,.28.34.3.3,0,0,1,0,.1l-2.19,8.09a.46.46,0,0,1-.45.38c-.56,0-1.12,0-1.69,0a.4.4,0,0,1-.45-.31l-1.5-5.56a13.2,13.2,0,0,1-.33-2,17.2,17.2,0,0,1-.3,1.77c-.51,1.91-1,3.82-1.54,5.73-.06.31-.41.37-.68.35-.52,0-1.05,0-1.57,0a.37.37,0,0,1-.36-.32c-.74-2.68-1.47-5.37-2.21-8.05a2.19,2.19,0,0,1,0-.36Z"
              fill="#1448a6" />
            <path
              d="M286.3,1017.82h1.16a.58.58,0,0,1,.52.39l2,5.19a5.18,5.18,0,0,1,.3,1.09c.27-1,.64-2,.95-3s.72-2.19,1.07-3.28a.48.48,0,0,1,.43-.34c.31,0,.63,0,.94,0a.69.69,0,0,1,.54.13.26.26,0,0,1,0,.3l-3.16,9a6.91,6.91,0,0,1-.62,1.48,3.56,3.56,0,0,1-1.87,1.46c-.26.08-.53.26-.81.16s-.28-.26-.39-.42-.22-.26-.19-.44a.44.44,0,0,1,.31-.36,2.46,2.46,0,0,0,.9-.45,3.66,3.66,0,0,0,1.17-2.11c-.1-.36-.29-.68-.42-1l-3-7a2,2,0,0,1-.17-.47c0-.18.21-.26.37-.27Z"
              fill="#1448a6" />
            <path
              d="M239.54,1017.67a4.4,4.4,0,0,1,2.86.74,3.88,3.88,0,0,1,1.46,2.19,6.26,6.26,0,0,1,0,3.16,3.93,3.93,0,0,1-1.63,2.4,4.54,4.54,0,0,1-3.06.62,3.94,3.94,0,0,1-2.38-1.15,4.65,4.65,0,0,1-1.17-2.86,5.44,5.44,0,0,1,.73-3.37,3.7,3.7,0,0,1,2.07-1.53,5.1,5.1,0,0,1,1.09-.2Zm-.23,1.29a1.94,1.94,0,0,0-1.33.93,4.92,4.92,0,0,0-.5,2.64,3.93,3.93,0,0,0,.68,2.33,2,2,0,0,0,1.64.74,2.08,2.08,0,0,0,1.61-.64,3.47,3.47,0,0,0,.75-2.07,6.87,6.87,0,0,0-.14-2.17,2.36,2.36,0,0,0-1-1.51,2.51,2.51,0,0,0-1.7-.25Z"
              fill="#1448a6" />
            <path
              d="M271.24,1013.94c0-.2.2-.34.38-.35a8.81,8.81,0,0,1,.89,0c.22,0,.48.16.44.41v12.27a.4.4,0,0,1-.38.39h-.71a.43.43,0,0,1-.38-.28,7.37,7.37,0,0,1-.2-.81,2.9,2.9,0,0,1-1.27,1,4.09,4.09,0,0,1-2.35.09,2.82,2.82,0,0,1-1.81-1.41,6.91,6.91,0,0,1-.62-3.5,4.68,4.68,0,0,1,.88-2.89,3.12,3.12,0,0,1,2.14-1.17,3,3,0,0,1,2.23.48,3.35,3.35,0,0,1,.76.79c0-1.68,0-3.35,0-5Zm-2.35,5a1.58,1.58,0,0,0-1.32.85,6.16,6.16,0,0,0-.46,3,4.8,4.8,0,0,0,.42,1.94,1.6,1.6,0,0,0,1,.82,2,2,0,0,0,2-.52,3.43,3.43,0,0,0,.7-2,7.45,7.45,0,0,0-.14-2.35,2.78,2.78,0,0,0-.76-1.38,1.9,1.9,0,0,0-1.45-.41Z"
              fill="#1448a6" />
            <path
              d="M278.73,1017.84a5.12,5.12,0,0,1,2.43-.05A3.25,3.25,0,0,1,283,1019a4.59,4.59,0,0,1,.83,2.19,13.84,13.84,0,0,1,.06,1.82v3.27a.33.33,0,0,1-.18.32,1.27,1.27,0,0,1-.61.08c-.23,0-.54,0-.66-.22a5.51,5.51,0,0,1-.22-.89,3.42,3.42,0,0,1-1.07,1,3.71,3.71,0,0,1-4.4-1.28,6.06,6.06,0,0,1-.05-6,3.49,3.49,0,0,1,2-1.45Zm.76,1.12a1.86,1.86,0,0,0-.76.34,2.4,2.4,0,0,0-.78,1.42,8.86,8.86,0,0,0-.08,2.57,3,3,0,0,0,.7,1.76,2.24,2.24,0,0,0,3-.13,3.61,3.61,0,0,0,.66-2,7.49,7.49,0,0,0-.19-2.45,2.14,2.14,0,0,0-.86-1.26,2.4,2.4,0,0,0-1.68-.27Z"
              fill="#1448a6" />
            <path
              d="M294.66,1024.31a1.33,1.33,0,0,1,.81.08,1.15,1.15,0,0,1,.68,1.12,1.17,1.17,0,0,1-1,1.15,1.2,1.2,0,0,1-.51-2.35Zm-.06.24a1,1,0,0,0,.67,1.87,1,1,0,0,0,.65-1.2,1,1,0,0,0-1.24-.7l-.08,0Z"
              fill="#1448a6" />
            <path
              d="M294.45,1024.79a1.94,1.94,0,0,1,1,.11.38.38,0,0,1,0,.53.34.34,0,0,1-.17.11,6.19,6.19,0,0,0,.28.58h-.36l-.26-.54h-.15v.54h-.34v-1.33Zm.34.21v.38l.33,0c.1,0,.1-.17.07-.26s-.27-.08-.4-.09Z"
              fill="#1448a6" />
          </g>
          <g>
            <path d="M364.44,1013.83h-4.1v-4.45h-1.61v4.45h-4.09v1.58h4.09v4.45h1.61v-4.45h4.1Z"
                  fill="#1448a6" />
            <path d="M356.2,1021.1h-3.67v-4h-1.38v4h-3.67v1.21h3.67v4h1.38v-4h3.67Z" fill="#1448a6" />
            <path d="M371.59,1006.85h-3.66v-4h-1.39v4h-3.67v1.21h3.67v4h1.39v-4h3.66Z" fill="#1448a6" />
            <path d="M362.64,1025.52h-2.49v-2.78H359v2.78h-2.49v1.07H359v2.78h1.18v-2.78h2.49Z"
                  fill="#1448a6" />
            <path d="M356.2,1006.84h-3.71v-4h-1.3v4h-3.71V1008h3.71v4h1.3v-4h3.71Z" fill="#1448a6" />
            <path d="M374.41,1014.09h-2.49v-2.78h-1.18v2.77h-2.49v1.08h2.49v2.78h1.18v-2.78h2.49Z"
                  fill="#1448a6" />
            <path d="M371.59,1021.1h-3.66v-4h-1.39v4h-3.67v1.21h3.67v4h1.39v-4h3.66Z" fill="#1448a6"
                  fillRule="evenodd" />
            <path d="M359.12,1000v2.73h-2.47v.82h2.47v2.73H360v-2.73h2.46v-.82H360V1000Z"
                  fill="#1448a6" />
            <path d="M350.44,1014.19H348v-2.67h-.87v2.67h-2.47v.86h2.47v2.69H348V1015h2.47Z"
                  fill="#1448a6" />
            <g>
              <path
                d="M387.82,1029.84a1.84,1.84,0,0,0,1,.27c.71,0,1.11-.33,1.11-.84a.75.75,0,0,0-.37-.7,4,4,0,0,0-.7-.3c-.25-.1-.38-.2-.38-.31s.14-.23.42-.23a2.19,2.19,0,0,1,.92.28v-.57a2.15,2.15,0,0,0-1-.23c-.65,0-1.06.34-1.06.81s.34.74,1.05,1c.25.09.38.14.38.31s-.15.25-.42.25a2,2,0,0,1-1-.35Z"
                fill="#1448a6" fillRule="evenodd" />
              <path
                d="M401.64,1028.66a1.41,1.41,0,0,0,.44,1,1.69,1.69,0,0,0,2.18,0,1.48,1.48,0,0,0,0-2.11,1.69,1.69,0,0,0-2.18,0,1.4,1.4,0,0,0-.44,1.06m.72,0a.83.83,0,1,1,0,.06v-.06"
                fill="#1448a6" fillRule="evenodd" />
              <path d="M417.18,1030.05h.71v-1.15h1.05v-.53h-1.05v-.61H419v-.52h-1.83Z" fill="#1448a6"
                    fillRule="evenodd" />
              <path d="M432.15,1030.05h.74v-2.29h.93v-.52h-2.6v.52h.93Z" fill="#1448a6"
                    fillRule="evenodd" />
              <path
                d="M446.32,1030.08h.29l.63-1.76.64,1.76h.29l1.14-2.83h-.74l-.54,1.53-.55-1.53H447l-.55,1.52-.55-1.52h-.73Z"
                fill="#1448a6" fillRule="evenodd" />
              <path d="M460,1030.05h.75l.23-.54h1.21l.2.54h.74l-1.1-2.81h-.8Zm1.18-1,.43-1.08.4,1.08Z"
                    fill="#1448a6" fillRule="evenodd" />
              <path
                d="M474.51,1030.05h.7v-1.14h.08a.47.47,0,0,1,.51.34l.36.81h.8l-.45-1a.65.65,0,0,0-.34-.35.69.69,0,0,0,.49-.68c0-.56-.36-.81-1.12-.81h-1Zm1-1.66h-.34v-.65h.34c.25,0,.38.12.38.32s-.12.33-.38.33"
                fill="#1448a6" fillRule="evenodd" />
              <path d="M488.63,1030.05h1.92v-.52h-1.21v-.67h1.12v-.53h-1.12v-.57h1.18v-.52h-1.89Z"
                    fill="#1448a6" fillRule="evenodd" />
              <path
                d="M423.85,1012.33a6.76,6.76,0,0,1,2.39-.49c2.75,0,4.6,1.93,4.6,5s-1.95,5-5.4,5a10.85,10.85,0,0,1-3.6-.65l0-13.9h2.06Zm1.8,7.56a2.77,2.77,0,0,0,3-2.48,2.91,2.91,0,0,0,0-.59c0-1.93-1.11-3.09-2.84-3.09a5.08,5.08,0,0,0-2,.5v5.31a5.33,5.33,0,0,0,1.8.35"
                fill="#1448a6" fillRule="evenodd" />
              <rect x="439.4" y="1005.28" width="2.04" height="18.24" fill="#1448a6" />
              <path
                d="M452.69,1015.72h4.68a1.85,1.85,0,0,0-1.72-2h-.19a2.75,2.75,0,0,0-2.77,2m2.31,6.1a4.73,4.73,0,0,1-4.6-4.85c0-.09,0-.19,0-.28.09-2.82,1.92-4.83,4.71-4.83s4.62,2.17,4.47,5.36h-7a2.73,2.73,0,0,0,2.69,2.71,7.25,7.25,0,0,0,3.83-.75v1.94a7.27,7.27,0,0,1-4.08.7"
                fill="#1448a6" fillRule="evenodd" />
              <path
                d="M489.81,1020.21a1.94,1.94,0,0,0,2.17-1.68,3.38,3.38,0,0,0,0-.45v-6H494v6.28c0,2.1-1.63,3.39-4.23,3.39s-4.22-1.28-4.22-3.39v-6.28h2.06v6a2,2,0,0,0,1.72,2.14,2.26,2.26,0,0,0,.45,0"
                fill="#1448a6" fillRule="evenodd" />
              <path
                d="M408.24,1021.78c-3.45,0-5.4-1.84-5.4-5s1.86-5,4.6-5a4.18,4.18,0,0,1,2.39.65v-.7h2.05l-.05,9.34a9.85,9.85,0,0,1-3.6.65m-.21-1.89a7.45,7.45,0,0,0,1.76-.23l0-5.26a3.38,3.38,0,0,0-2-.67c-1.73,0-2.84,1.16-2.84,3.09a2.75,2.75,0,0,0,2.41,3.06,2.57,2.57,0,0,0,.62,0"
                fill="#1448a6" fillRule="evenodd" />
              <path
                d="M473.28,1021.78c-3.44,0-5.39-1.84-5.39-5s1.86-5,4.61-5a4.17,4.17,0,0,1,2.38.65v-.7h2.06l-.06,9.34a9.85,9.85,0,0,1-3.6.65m-.2-1.89a7.52,7.52,0,0,0,1.76-.23l0-5.26a3.4,3.4,0,0,0-2-.67c-1.73,0-2.84,1.16-2.84,3.09a2.77,2.77,0,0,0,2.43,3.06,2.41,2.41,0,0,0,.6,0"
                fill="#1448a6" fillRule="evenodd" />
            </g>
            <g>
              <path d="M387.52,1007.89h2v5.79h5.51v1.9h-5.51v6.27h-2v-6.27H382v-1.9h5.5Z"
                    fill="#1448a6" />
              <path
                d="M497.43,1012a1.23,1.23,0,0,1,1.23,1.22,1.23,1.23,0,0,1-2.45,0v0a1.21,1.21,0,0,1,1.18-1.22Zm0,.19a1,1,0,1,0,1,1A1,1,0,0,0,497.43,1012.15Zm-.23,1.75H497v-1.37l.38,0a.72.72,0,0,1,.43.1.31.31,0,0,1,.12.28.35.35,0,0,1-.26.34h0c.12,0,.2.14.23.34a1.32,1.32,0,0,0,.08.33h-.23a1,1,0,0,1-.09-.34.26.26,0,0,0-.27-.25h-.17Zm0-.76h.15c.18,0,.33-.06.33-.23s-.08-.24-.33-.24h-.15Z"
                fill="#1448a6" />
            </g>
          </g>
          <g>
            <path
              d="M755.47,1014.09v-2.2h-2.73v-3.42l-.09,0-2.57.78-.05,0v2.59H746v-1.44a2.32,2.32,0,0,1,.45-1.53,1.56,1.56,0,0,1,1.25-.51,2.73,2.73,0,0,1,1.19.27l.1,0v-2.32l-.05,0a4.55,4.55,0,0,0-1.51-.2,4.5,4.5,0,0,0-2.16.52,3.71,3.71,0,0,0-1.48,1.46,4.46,4.46,0,0,0-.52,2.15v1.59h-1.9v2.2h1.9v9.28H746v-9.29H750V1020c0,2.42,1.14,3.65,3.4,3.65a5,5,0,0,0,1.16-.13,2.74,2.74,0,0,0,.84-.26l0,0V1021l-.11.07a1.92,1.92,0,0,1-.55.24,2.05,2.05,0,0,1-.54.1,1.47,1.47,0,0,1-1.16-.43,2.24,2.24,0,0,1-.37-1.47v-5.42Zm-20.24,7.32a2.91,2.91,0,0,1-2.33-1,4.14,4.14,0,0,1-.83-2.76,4.3,4.3,0,0,1,.83-2.84,2.89,2.89,0,0,1,2.3-1,2.83,2.83,0,0,1,2.25.95,4.22,4.22,0,0,1,.81,2.81,4.51,4.51,0,0,1-.77,2.85,2.76,2.76,0,0,1-2.27,1m.13-9.8a6,6,0,0,0-4.47,1.64,6.24,6.24,0,0,0-1.62,4.5,5.85,5.85,0,0,0,1.58,4.3,5.68,5.68,0,0,0,4.23,1.59,5.81,5.81,0,0,0,4.38-1.67,6.15,6.15,0,0,0,1.61-4.46,6,6,0,0,0-1.51-4.32,5.53,5.53,0,0,0-4.2-1.58m-10.49,0a4.94,4.94,0,0,0-3.17,1,3.13,3.13,0,0,0-1.24,2.54,3.86,3.86,0,0,0,.27,1.43,2.85,2.85,0,0,0,.82,1.07,7.51,7.51,0,0,0,1.66.93,12.29,12.29,0,0,1,1.38.64,1.84,1.84,0,0,1,.61.5,1.13,1.13,0,0,1,.17.65c0,.77-.58,1.15-1.77,1.15a5,5,0,0,1-1.49-.28,5.79,5.79,0,0,1-1.53-.77l-.12-.08V1023l0,0a7.93,7.93,0,0,0,3,.62,5.2,5.2,0,0,0,3.35-1,3.17,3.17,0,0,0,1.24-2.61,3,3,0,0,0-.67-2,5.74,5.74,0,0,0-2.27-1.45,5.86,5.86,0,0,1-1.63-.84,1.21,1.21,0,0,1-.32-.89,1,1,0,0,1,.41-.81,1.8,1.8,0,0,1,1.17-.33,4.62,4.62,0,0,1,1.38.21,4.44,4.44,0,0,1,1.21.56l.11.08v-2.5l0,0a5.75,5.75,0,0,0-1.23-.34,6.7,6.7,0,0,0-1.34-.14m-11.53,9.8a2.94,2.94,0,0,1-2.33-1,4.14,4.14,0,0,1-.83-2.76,4.28,4.28,0,0,1,.83-2.83,2.86,2.86,0,0,1,2.3-1,2.83,2.83,0,0,1,2.25.95,4.22,4.22,0,0,1,.81,2.81,4.51,4.51,0,0,1-.77,2.85,2.76,2.76,0,0,1-2.27,1m.13-9.8a6,6,0,0,0-4.47,1.65,6.21,6.21,0,0,0-1.62,4.5,5.86,5.86,0,0,0,1.58,4.3,5.71,5.71,0,0,0,4.23,1.58,5.85,5.85,0,0,0,4.38-1.67,6.13,6.13,0,0,0,1.62-4.46,6,6,0,0,0-1.51-4.33,5.56,5.56,0,0,0-4.2-1.57m-10.24,2.26v-2h-2.7v11.49h2.7v-5.88a4.06,4.06,0,0,1,.67-2.44,2.08,2.08,0,0,1,1.75-.92,2.79,2.79,0,0,1,.81.12,2,2,0,0,1,.63.25l.11.09v-2.72l0,0a3.07,3.07,0,0,0-2.86.48,3.64,3.64,0,0,0-1,1.55Zm-7.54-2.27a6.71,6.71,0,0,0-3.28.79,5.36,5.36,0,0,0-2.17,2.23,7.12,7.12,0,0,0-.74,3.3,6,6,0,0,0,.72,3,5,5,0,0,0,2,2,6,6,0,0,0,2.95.72,6.58,6.58,0,0,0,3.26-.76l0,0v-2.47l-.12.09a5,5,0,0,1-1.32.68,4.06,4.06,0,0,1-1.29.26,3.35,3.35,0,0,1-2.53-1,3.82,3.82,0,0,1-.93-2.73,4,4,0,0,1,1-2.8,3.27,3.27,0,0,1,2.53-1,4.28,4.28,0,0,1,2.57.89l.12.08v-2.61l0,0a4.61,4.61,0,0,0-1.25-.42,7.68,7.68,0,0,0-1.51-.17m-8,.28h-2.7v11.49h2.7ZM686.3,1007a1.63,1.63,0,0,0-1.15.45,1.5,1.5,0,0,0-.48,1.13,1.48,1.48,0,0,0,.48,1.1,1.65,1.65,0,0,0,1.16.44,1.67,1.67,0,0,0,1.16-.44,1.44,1.44,0,0,0,.48-1.1,1.47,1.47,0,0,0-.47-1.11,1.62,1.62,0,0,0-1.17-.47m-6.74,4v12.33h2.75v-16h-3.81l-4.85,11.9-4.7-11.9h-4v16h2.59v-12.33h.08l5,12.33h2l4.88-12.33h.1Z"
              fill="#1448a6" />
            <path d="M642.94,1014.7h-12.7V1002h12.7Z" fill="#1448a6" />
            <path d="M657,1014.7h-12.7V1002H657Z" fill="#1448a6" />
            <path d="M642.94,1028.74h-12.7V1016h12.7Z" fill="#1448a6" />
            <path d="M657,1028.74h-12.7V1016H657Z" fill="#1448a6" />
          </g>
          <path
            d="M869.93,1029h-2.58a.88.88,0,0,1-1-.77v0l0-1a10.19,10.19,0,0,1-6.41,2.3c-4.52,0-6.37-2.86-6.37-7.22v-11.92c0-.69.4-.93,1.05-.93h2.82c.65,0,1,.2,1,.93v11.08c0,2.21.56,3.74,3,3.74a7.74,7.74,0,0,0,4.68-1.93v-12.89c0-.69.36-.93,1-.93H870c.65,0,1,.2,1,.93v17.53C871,1028.76,870.73,1029,869.93,1029Zm-65.61-18.78c0-.48.24-.8.72-.8h3.41a.71.71,0,0,1,.77.65.38.38,0,0,1,0,.15V1028c0,.72-.32,1-1,1h-2.84c-.73,0-1-.29-1-1Zm71.7,0c0-.48.24-.8.72-.8h3.41a.71.71,0,0,1,.77.65.38.38,0,0,1,0,.15V1028c0,.72-.32,1-1,1h-2.84c-.72,0-1.05-.29-1.05-1ZM830.83,1029h-2.9c-.72,0-1-.36-1-1v-11c0-2.22-.6-3.79-3.06-3.79a8,8,0,0,0-4.76,1.93V1028c0,.68-.28,1-1,1h-2.95a.87.87,0,0,1-1-.76.67.67,0,0,1,0-.2v-17.61a.88.88,0,0,1,.73-1h2.9c.56,0,.93.16,1,.77l0,1.07a10.55,10.55,0,0,1,6.53-2.33c4.51,0,6.37,2.82,6.37,7.21V1028C831.8,1028.68,831.56,1029,830.83,1029ZM845.2,1004a3,3,0,1,0-3,2.95h0A3,3,0,0,0,845.2,1004Zm4.21,5.5c.48,0,.76.16.76.68V1013a.73.73,0,0,1-.69.77h-4.79V1028c0,.72-.32,1-1.05,1h-2.8c-.73,0-1.05-.28-1.05-1v-14.29h-4.67a.74.74,0,0,1-.81-.65v-3c0-.52.28-.68.77-.68Zm45.82-5.5a3,3,0,1,0-3,2.95h0A3,3,0,0,0,895.23,1004Zm4.21,5.5c.48,0,.76.16.76.68V1013a.74.74,0,0,1-.69.77h-4.79V1028c0,.72-.32,1-1.05,1h-2.8c-.73,0-1-.28-1-1v-14.29h-4.67a.74.74,0,0,1-.81-.65v-3c0-.52.28-.68.77-.68Zm1.28,17.1a1.29,1.29,0,0,1,1.29,1.31,1.31,1.31,0,1,1-1.31-1.31Zm0,2.42a1.12,1.12,0,1,0,.07-2.23,1.11,1.11,0,0,0-1.15,1.08v0a1.07,1.07,0,0,0,1,1.12Zm-.51-1.88h.58c.37,0,.54.14.54.43a.39.39,0,0,1-.37.42h0l.44.67h-.26l-.41-.65h-.26v.65h-.23v-1.52Zm.23.67h.25c.21,0,.4,0,.4-.25s-.17-.23-.33-.23h-.32v.48Z"
            fill="#1448a6" />
          <g>
            <path
              d="M1257.6,999l.16,24.7h3.7V999Zm45.85,0v24.71h4.46s0-8.92.09-8.91,6.64,9.25,6.7,9.21,4-1.41,4-1.45-6.63-8.5-6.63-8.51,5.56-6.2,5.51-6.25a27.43,27.43,0,0,0-3.25-1.4s-6.38,6.91-6.38,6.91V999Zm-73.85,7.53a5.65,5.65,0,0,0-3.72,2.55,4.14,4.14,0,0,0,0,3.68,11.31,11.31,0,0,0,3.32,3.07c1.94,1.37,2.67,2.06,2.85,2.7a1.88,1.88,0,0,1-1.07,2.3,2.47,2.47,0,0,1-1.49.22,4.88,4.88,0,0,1-2.89-1.1c-.35-.24-.67-.42-.7-.38s-.39.56-.78,1.16l-.69,1.07.26.2c.15.11.62.39,1,.63,2.93,1.63,7.27,1.37,9.47-.57a4.41,4.41,0,0,0,1.49-4.06c-.21-1.44-1-2.38-3.49-4.19a13.15,13.15,0,0,1-3.1-2.61,1.44,1.44,0,0,1,.55-2l.2-.1a2.39,2.39,0,0,1,1.51-.21,3.54,3.54,0,0,1,1.83.44l.83.4.65-1a5.06,5.06,0,0,0,.59-1.1,8.65,8.65,0,0,0-2.33-1,12.47,12.47,0,0,0-4.35-.17Zm19.59,2.19c2,.91,3,3.78,2.57,7a10,10,0,0,1-.94,3.2,4.65,4.65,0,0,1-1.74,1.67,3.93,3.93,0,0,1-3.76-.47c-1.43-1.09-2.21-3.76-1.91-6.54.28-2.54,1.2-4.16,2.8-4.9A4,4,0,0,1,1249.19,1008.72Zm-1.77-2.84a6.34,6.34,0,0,0-3.1,1.73l-.91.87v-2.07h-4.17v24.7h4.17V1021l.8.78a5.88,5.88,0,0,0,5.19,1.74,7.17,7.17,0,0,0,3.22-1.17c2.74-1.84,4.25-5.49,3.84-9.32-.4-3.62-2.26-6.13-5.26-7.08a10.23,10.23,0,0,0-3.78-.1Zm17.15.53s.14,13.05.23,13.43a5.43,5.43,0,0,0,2.38,3.4,6.07,6.07,0,0,0,3.29.7,6.52,6.52,0,0,0,5-2l.81-.73v2.47h4.3l0-17.29h-4.24s0,10.74,0,11.12a4.13,4.13,0,0,1-2.61,3.13,7,7,0,0,1-2.68.32,2.68,2.68,0,0,1-2.12-2.22v-12.29Zm35.78,17.29s-.14-13.05-.23-13.43a5.37,5.37,0,0,0-2.38-3.4,6.07,6.07,0,0,0-3.29-.7,6.52,6.52,0,0,0-5,2l-.81.73v-2.47h-4.3l.05,17.29h4.25s-.06-10.74,0-11.11a4.11,4.11,0,0,1,2.6-3.14,6.25,6.25,0,0,1,2.68-.32,2.33,2.33,0,0,1,2.12,2.22v12.29Z"
              fill="#1448a6" />
            <path d="M1323.21,1005.17v3.7l14.82,4.94-14.82,6.43v3.46l17.29-7.41v-4.94Z" fill="#1448a6"
                  fillRule="evenodd" />
          </g>
          <g>
            <path
              d="M1003.19,1007.86a.56.56,0,0,0-.53-.39h-5.23a.56.56,0,0,0-.53.39l-6.6,20.91a.57.57,0,0,0,.37.71l.17,0h3.6a.55.55,0,0,0,.53-.4l4.54-15.38a.57.57,0,0,1,.53-.38.54.54,0,0,1,.52.4l2.11,7.29h-2.89a.57.57,0,0,0-.54.41l-.81,2.89a.55.55,0,0,0,.38.69l.15,0h4.89l1.27,4.07a.56.56,0,0,0,.53.4h3.6a.56.56,0,0,0,.56-.56.88.88,0,0,0,0-.17l-6.6-20.91"
              fill="#1448a6" />
            <path
              d="M978.62,1011.54H983c2.25,0,2.7.89,2.7,2.32V1016c0,1.78-.68,2.38-2.7,2.38h-4.35Zm13.3,17-4.79-6.9c2.06-.86,3.1-2.65,3.1-5.33v-2.82c0-4.19-2.19-6.06-7.1-6.06h-8.51a.56.56,0,0,0-.56.56v20.91a.56.56,0,0,0,.56.56h3.44a.56.56,0,0,0,.56-.56v-6.56h3.51l4.79,6.88a.55.55,0,0,0,.46.24h4.11a.56.56,0,0,0,.56-.56.54.54,0,0,0-.14-.36Zm-22-21.11h-3.43a.56.56,0,0,0-.56.56v20.91a.56.56,0,0,0,.56.56h3.43a.56.56,0,0,0,.56-.56V1008a.56.56,0,0,0-.56-.56m-8,0h-3.48a.54.54,0,0,0-.54.53v16.37a2.65,2.65,0,0,1-2.51,2.78h-.12a.59.59,0,0,0-.4.23.58.58,0,0,0-.07.46l.85,2.75c.07.23.31.37.71.37a6,6,0,0,0,6.09-6v-17a.53.53,0,0,0-.53-.53h0"
              fill="#1448a6" />
            <g>
              <path
                d="M934.9,1001.77a1.94,1.94,0,1,0,1.93,1.93h0a1.92,1.92,0,0,0-1.93-1.93h0m12.7,0a1.94,1.94,0,1,0,1.94,1.93h0a1.92,1.92,0,0,0-1.93-1.93h0m-6.35-1.77a1.94,1.94,0,1,0,1.94,1.94,1.94,1.94,0,0,0-1.94-1.94h0m10.93,7.16a.6.6,0,0,0-.59-.08,30,30,0,0,1-3.85,1.16.77.77,0,0,0-.53.46c-.88,2.43-3.14,4.73-5.51,7.15a.66.66,0,0,1-.45.21.62.62,0,0,1-.44-.21c-2.37-2.42-4.63-4.72-5.51-7.14a.77.77,0,0,0-.53-.46,30.68,30.68,0,0,1-3.86-1.18.78.78,0,0,0-.22,0,.59.59,0,0,0-.36.13.58.58,0,0,0-.24.53,12.74,12.74,0,0,0,2.43,6,44.63,44.63,0,0,0,4.81,5.47c3.14,3.2,6.1,6.22,6.37,9.73a.6.6,0,0,0,.6.56H948a.61.61,0,0,0,.61-.61v0a14,14,0,0,0-2.7-7.18c-.36-.52-.74-1-1.14-1.52a.45.45,0,0,1,0-.58l.37-.38a45.56,45.56,0,0,0,4.82-5.47,12.71,12.71,0,0,0,2.43-6,.6.6,0,0,0-.24-.54m-14.86,14.78a.59.59,0,0,0-.43-.19.61.61,0,0,0-.5.29,13.58,13.58,0,0,0-2.47,6.82.62.62,0,0,0,.58.64h3.71a.59.59,0,0,0,.6-.56,8.32,8.32,0,0,1,1-3.3.85.85,0,0,0-.07-.92,34.17,34.17,0,0,0-2.46-2.78"
                fill="#1448a6" />
              <path
                d="M941.25,1009c1.16,0,1.83-.07,2.07-.07a.56.56,0,0,1,.55.56.57.57,0,0,1,0,.22,10,10,0,0,1-2.15,3.15.63.63,0,0,1-.43.17h0a.59.59,0,0,1-.42-.17,9.7,9.7,0,0,1-2.15-3.15.59.59,0,0,1,0-.22.56.56,0,0,1,.56-.56c.23,0,.9.07,2.06.07h0"
                fill="#1448a6" />
            </g>
          </g>
          <path
            d="M1088.52,1015.57a15,15,0,0,0-.38-3.72h-17.05v6.74h10a8.93,8.93,0,0,1-3.72,5.9h0a10.68,10.68,0,0,1-6.3,1.81,10.91,10.91,0,0,1-10.33-7.54h0a11.28,11.28,0,0,1-.6-3.6,11.83,11.83,0,0,1,.58-3.59h0a11,11,0,0,1,10.35-7.55,10.08,10.08,0,0,1,7,2.7l5.13-5a17.49,17.49,0,0,0-12.15-4.72,18.17,18.17,0,0,0-16.23,26.32h0a18.14,18.14,0,0,0,16.23,10h0a17.35,17.35,0,0,0,12-4.4h0A17.75,17.75,0,0,0,1088.52,1015.57Z"
            fill="#1448a6" />
          <g>
            <polygon
              points="1131.55 998 1125.01 998 1125.01 1032.38 1131.55 1032.38 1131.55 1019.55 1145.61 1019.55 1145.61 1012.82 1131.55 1012.82 1131.55 998"
              fill="#1448a6" />
            <polygon
              points="1159.38 1006.18 1187.21 1006.18 1187.21 999.64 1159.38 999.64 1159.38 999.64 1152.84 999.64 1152.84 999.64 1152.84 1006.18 1152.84 1019.28 1159.38 1019.28 1159.38 1006.18"
              fill="#1448a6" />
            <polygon
              points="1181.77 1012.82 1166.63 1012.82 1166.63 1019.55 1181.77 1019.55 1181.77 1025.83 1152.84 1025.83 1152.84 1032.38 1187.21 1032.38 1187.21 1032.16 1187.66 1032.16 1187.66 1019.55 1187.66 1012.82 1181.77 1012.82"
              fill="#1448a6" />
          </g>
        </g>
      </g>
        <g ref={el => part1 = el} id="part1" opacity="1">
          <g id="tired-girl">
            <g>
              <path
                d="M771.7,620.14,734,615.28s-6.94,10.88-18.11,88.24c0,0-6.6,49.58-4.11,63.47a27.38,27.38,0,0,0,13.13,19.21l67.47,37.09,6.31-47.85-45.6-16.9s-9.54-3.3-5.5-15.63,30.49-85.86,30.49-85.86Z"
                fill="#e84312" />
              <path d="M759.78,708l-1.44,4.11-46.81,34.94.4-6.36Z" fill="#12122f" />
              <path
                d="M790.45,616.73s18.86,40.9,9,56.53c0,0-2.43,15.15-57,47.15l-30.9,21.41s-25.87,65.79-42.65,97.09l-47.38-29.8s67.58-92.69,74.29-99.81l49.87-51.38,3.65-36.51Z"
                fill="#e84312" />
            </g>
            <g id="tired-girl-body">
              <g id="girl-body-rot">
                <path id="tg-hair"
                      d="M851.14,508.42c1.45-1.85,5.73-3.53,4.92-7.76s-7.06-4.8-7.7-7,.52-3.35,1.27-6c1.45-4.8.52-7.21-1.34-8.48,2.48-1.31,5-2.41,6-2-.83-.48-4-2-8.47.26,3.39-4,7.85-8.73,9.86-8.65-1.53-.27-7.36-.75-12.82,5.64l.82-3a5.27,5.27,0,0,0-2.14-5.84l-7.64-5.21a5.13,5.13,0,0,1-2.31-3.93l-.87-9.38a5.41,5.41,0,0,0-4.51-4.8L815,440.61a5.3,5.3,0,0,1-3.3-1.85l-5.61-6.83a5.39,5.39,0,0,0-6.71-1.27l-10.7,5.9a5.47,5.47,0,0,1-4.23.4l-9.14-2.9a5.31,5.31,0,0,0-6.42,2.72L766,442.55c-3.42-3-7.88-7.4-12.78,1.11-1.39,2.38-1.39,4-3.47,5s-6.77-3.07-10.42-.81-2,6.54-2.26,8.85-1.56,3.65-4.68,4.05-5.9-.29-7.24,2.43,1.45,4-.11,5.21-4.69.57-4.86,4.74,2,4.75-.64,6.77c-.53.4-1.07.82-1.58,1.27-1.83-2.22-3-4.17-3-5.39a15.54,15.54,0,0,0,.7,8.29,5.22,5.22,0,0,0,.53,4.63c2.37,4.34,3.24,4.34,1.68,7.52a10.08,10.08,0,0,0-.47,1.1c-4.1-.66-8-1.6-8.75-2.91.55,1.24,2.82,5.37,9,7.06a7.79,7.79,0,0,0,2.27,2.1c5.44,3.47,1.85,9.14,6.08,11.51,4,2.2,7.17-1.79,9.83,1.16s-.52,6.19,2.9,8.16,5.78-2.2,6.88,1.44c1.39,4.46,4.11,6.42,5.73,5.61,2.66-1.33,3,.93,6.42,2.43s3.94-.63,5.9-1.5,3.3,1.45,5.27-.34,1.09-3,2.87-3.74c.78,1.34,2.41,2.18,3,3.57,1,2.2-.69,2.37-.58,5s2.66,2,3.36,4-.47,3.82,2.95,5.32,5.32.18,6.13,3c.52,1.74,3.88,2.37,8,.29,3.42-1.68,2.15,2.89,5.79,4s3.94-3.41,8-3.47,3.24,5,7.58,6.31c4.63,1.44,6.25-5,12.55-3.48,3.59.87,5.5-.17,6.77-3.47s1.85-2.66,6.66-3.93,4.51-5.09,4.16-8.45,1.62-2.14,4.51-5.09.29-4.8.12-6.83,2.6-.81,3.7-3.7-1.33-4.34-3.24-6.94S849.7,510.27,851.14,508.42Z"
                      fill="#ff65a7" />
                <g>
                  <path
                    d="M763.08,536.36,770,513a15.93,15.93,0,0,0,6.54,5.09,12.84,12.84,0,0,0,8.39-.34c0-.06,3.82-2.2,3.82-2.2l-2.25,25a4.1,4.1,0,0,0-.06.86l-.4.58a12.78,12.78,0,0,1-23.15-4.74l0-.18A2,2,0,0,0,763.08,536.36Z"
                    fill="#ffd17a" />
                  <path d="M789.87,520.68s-11.16,9.83-17.47,5.21c-6.54-4.8-1.91-15.45-1.91-15.45Z"
                        fill="#12122f" />
                </g>
                <g id="tg-head">
                  <g id="head">
                    <path
                      d="M813.08,495.53c2.69-4.45,10.16-19.79-7.3-30-20.59-12-31.24,8.21-31.24,8.21A107.39,107.39,0,0,0,764.65,495c-1.86,5.5-.81,10.7,1.85,16.08l.46,1a17.29,17.29,0,0,0,15.1,9.43c6.42.06,11.92-1.56,16.09-6.13,1.81-2.05,3.55-4.16,5.25-6.3,4.53.62,14-6.86,12.11-11.18A3.58,3.58,0,0,0,813.08,495.53Z"
                      fill="#ffd17a" />
                    <path
                      d="M774.48,470.23a22.64,22.64,0,0,1,13.42-8.86,19.31,19.31,0,0,1,12.62-.58s15.56,2.95,16.83,16.2a19.69,19.69,0,0,1,1.16,12.21c-2,9.55-6.94,11.92-6.94,11.92s-7.47-13-4.86-22.85c-5.85,1.67-14,.46-30.44-6.95-4.91,4.34-6.71,11.63-6.71,11.63S769,478.21,774.48,470.23Z"
                      fill="#ff65a7" />
                    <path
                      d="M780.44,492.15l-2.49,3.7a1.75,1.75,0,0,0,.41,2.43c.11.06.17.12.29.18l2.25.92"
                      fill="none" stroke="#12122f" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="1.45" />
                    <path d="M785.59,511.13s-2.83,1.16-4.74-2.6-8.63-3.53-8.63-3.53" fill="none"
                          stroke="#12122f" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="1.45" />
                    <g>
                      <path
                        d="M775.23,475.9s6.43-.53,6.48,2.14c0,0,0,1.79-5.61,2.08s-7.06-.12-7.58-1.74S772.22,475.9,775.23,475.9Z"
                        fill="#12122f" />
                      <path
                        d="M801.44,486.14s-4.1-5-6.07-3.18c0,0-1.27,1.27,2.43,5.5s5,5,6.54,4.22S803.58,488.34,801.44,486.14Z"
                        fill="#12122f" />
                      <g>
                        <path
                          d="M779.11,485.56c-.87,2.95-5.55,1.5-4.63-1.45S780.09,482.61,779.11,485.56Z"
                          fill="#12122f" />
                        <path d="M799,494.35c-.87,3-5.56,1.5-4.57-1.44S799.94,491.4,799,494.35Z"
                              fill="#12122f" />
                      </g>
                    </g>
                    <path d="M811.86,501.53s-.12-4.11-6.37.29" fill="none" stroke="#12122f"
                          strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
                  </g>
                </g>
                <g id="tg-sweat">
                  <path
                    d="M846.86,455.07s6.77-14.18,14.58-10.65c0,0,5,2.78-.92,7.29S846.86,455.07,846.86,455.07Z"
                    fill="#2852f0" />
                  <path
                    d="M843.91,439.15s-.11-7.86,4.17-8c0,0,2.84.12,1.22,3.47A9.64,9.64,0,0,1,843.91,439.15Z"
                    fill="#2852f0" />
                </g>
                <g>
                  <path
                    d="M714.37,561.18c-4.58,12.56-9.61,28.52-13.78,43.92a11.19,11.19,0,0,0,7.87,13.71h0c.4.11.81.17,1.22.29l.23.06a11.17,11.17,0,0,0,12.15-7.06c9.14-23.84,20.6-51.5,20.54-58.33,0-2.31-2.31-5.09-5.15-7.7Z"
                    fill="#ffd17a" />
                  <path
                    d="M711.36,569.69l29.56-2.38-3.3,12.85L733,585l-.4-.17-.46,1.33-1.5,3.93c-1.22-1.5-1.57-5.09-1.68-7.12A90.9,90.9,0,0,1,711.36,569.69Z"
                    fill="#12122f" />
                  <path
                    d="M721,601.8l-.52-.7L690,565.45a15.86,15.86,0,0,0,1.6-4.15c1.14-4.89-1.42-5.65-2.72-5.74A12.63,12.63,0,0,0,667,550.31h-.16l-.29.58a12.69,12.69,0,0,0-2,3.82c0,.16-.09.33-.13.49l-.1.21c-.05.18-.07.36-.11.55v0l-.09.55a12.63,12.63,0,0,0,8.59,14.09h0a12.26,12.26,0,0,0,3.29.59l.28,0-.16.19,26.15,42.88a11.29,11.29,0,0,0,15.51,3.76h0c.26-.16.51-.34.75-.52A11.28,11.28,0,0,0,721,601.8Z"
                    fill="#ffd17a" />
                </g>
                <g>
                  <path
                    d="M815.5,569.8c-5.29-15.36-10.57-24.25-14.31-29.18l.54-.15,6.43-1.33a100.22,100.22,0,0,0-12.14-4l-.08,0v0l-.6-.16a4.34,4.34,0,0,0-.62-.16c-.23,0-.45-.12-.68-.18l.05.07-25-3.77a65.5,65.5,0,0,0-17.13-.35l.12-.29a33.15,33.15,0,0,0-15.62,4.23c-9.09,4.92-19.44,15.5-25.11,35.18a63.19,63.19,0,0,0,19.79,7.17c-.12,5.49,0,11,.34,16.49l.23,24.71c14,16.78,38.25,8.37,59.6,4.51l13.89-39.52,1.5,3.36C820.42,583.28,815.5,569.8,815.5,569.8Z"
                    fill="#f6bca3" />
                  <g>
                    <polygon
                      points="791.57 621.84 792.2 620.06 732.77 611.77 732.9 613.66 791.57 621.84"
                      fill="#ff65a7" />
                    <path
                      d="M711.71,568.57c-.12.37-.24.73-.35,1.12.57.32,1.16.63,1.74.94l92,12.82.14-.4.19.45,6.3.87a10.93,10.93,0,0,0,1.91-1.6Z"
                      fill="#ff65a7" />
                    <polygon
                      points="732.07 601.62 732.2 603.5 794.94 612.25 795.57 610.47 732.07 601.62"
                      fill="#ff65a7" />
                    <path
                      d="M714.48,560.81,816.36,575a18.1,18.1,0,0,0-.13-1.88l-101-14.08C715,559.62,714.73,560.22,714.48,560.81Z"
                      fill="#ff65a7" />
                    <path d="M731.39,591.48c0,.62.06,1.24.1,1.87h0l66.81,9.31.63-1.78Z"
                          fill="#ff65a7" />
                    <path d="M728,540.67c-.56.52-1.11,1.06-1.66,1.63L809,553.83l-1-2Z"
                          fill="#ff65a7" />
                    <path
                      d="M741.09,532.38a33.48,33.48,0,0,0-3.26,1.42l65,9.05c-.52-.76-1-1.45-1.48-2.07Z"
                      fill="#ff65a7" />
                    <path d="M720.42,549.67c-.38.56-.76,1.12-1.12,1.71l94.29,13.14-.77-2Z"
                          fill="#ff65a7" />
                    <path d="M731.1,581.32c0,.62,0,1.25,0,1.87L801.7,593l.62-1.78Z"
                          fill="#ff65a7" />
                  </g>
                </g>
                <g id="tg-left-arm">
                  <path
                    d="M795,566.74c-11.34,16.31-25.22,39.86-33.32,58-2.09,4.69-.76,10.18,3.76,12.67l.17.12a9.5,9.5,0,0,0,12.67-3.07c17.19-26,32.29-46.23,32.29-46.23Z"
                    fill="#ffd17a" />
                  <path
                    d="M774.83,627.49c-.06-.06-.06-.12-.12-.17a9.32,9.32,0,0,0-9.6-4.23c-19,3.52-24.91,3.52-43.53,5l0,0-.38.07-3.58.29a9.79,9.79,0,0,0-7.67-2.68c-5.09.23-3.53,3.76-3.53,3.76l.28.17c-5.51.4-13.35.47-16.54-2,0,0-3.59-.64-2.95,1.91,0,0,1.27,4.8,3.7,7.06a1.73,1.73,0,0,0,.2.15c7.59,8.92,23.31,3.9,26.14,2.91,6.29.65,31,3,50.38,2.15C774.71,641.55,778.59,633.45,774.83,627.49Z"
                    fill="#ffd17a" />
                  <path
                    d="M801.1,539.72l3.58-1.34s10,.87,14.58,10c0,0,7.64,13.3-5.38,46.81s-33-12.62-33-12.62l11.34-22Z"
                    fill="#f6bca3" />
                  <g>
                    <path
                      d="M791.12,599.8c.6.74,1.22,1.46,1.85,2.13l15.83,2.21a17.5,17.5,0,0,0,1.34-1.69Z"
                      fill="#ff65a7" />
                    <path d="M799.92,542.45l17,2.37a17,17,0,0,0-2.25-2.18l-14-1.95Z"
                          fill="#ff65a7" />
                    <path d="M783.89,588.68c.35.65.72,1.32,1.12,2l29,4c.24-.6.45-1.19.67-1.78Z"
                          fill="#ff65a7" />
                    <path d="M792.52,559.72l-.33.76-.51,1,29.63,4.13c.05-.64.09-1.25.11-1.85Z"
                          fill="#ff65a7" />
                    <path d="M796.59,550.23l-.76,1.76,25.33,3.53c-.08-.69-.18-1.32-.29-1.91Z"
                          fill="#ff65a7" />
                    <path d="M782.92,578.49l-.89,1.75,35.32,4.92c.19-.6.37-1.21.54-1.79Z"
                          fill="#ff65a7" />
                    <path d="M787.73,569.15l-.9,1.75,33,4.6c.12-.61.25-1.22.36-1.82Z"
                          fill="#ff65a7" />
                  </g>
                </g>
                <g id="boxes">
                  <g>
                    <path
                      d="M550.68,574.78l48.08,50.8c13.49-45.49,19-89.6,12.09-131.58l-48.08-50.8Z"
                      fill="#7860fa" />
                    <path
                      d="M582.5,595l10.24,10.82a2.45,2.45,0,0,0,3.42.11,2.48,2.48,0,0,0,.75-1.5l1.1-9.72a2.55,2.55,0,0,0-.64-1.91l-10.24-10.76a2.43,2.43,0,0,0-3.41-.11,2.48,2.48,0,0,0-.75,1.5l-1.1,9.66A2.55,2.55,0,0,0,582.5,595Z"
                      fill="#6449ea" />
                    <path d="M694.34,455.3,562.77,443.2,610.85,494a439.17,439.17,0,0,0,131.63,12.1Z"
                          fill="#6449ea" />
                    <path className="b-shadow1" opacity="0" d="M646.26,491.69l84.36,1.91-83.84-7.7Z"
                          fill="#12122f" />
                    <rect x="604.6" y="499.76" width="132.15" height="132.15"
                          transform="translate(45.74 1181.82) rotate(-84.74)" fill="#c1b6fc" />
                    <path className="b-shadow2" opacity="0" d="M586.9,510l20.42-19.73L562.77,443.2Z"
                          fill="#12122f" />
                    <path
                      d="M659.8,498.52l33.68,3.12h0l-1,11.17a3.45,3.45,0,0,1-3.75,3.13h0l-26.79-2.48a3.45,3.45,0,0,1-3.13-3.74v0l1-11.17Z"
                      fill="#7860fa" />
                    <path
                      d="M651.47,614.47l29,2.66a2.38,2.38,0,0,1,2.14,2.55h0l-1.27,13.54h0l-33.68-3.13h0l1.28-13.54A2.33,2.33,0,0,1,651.47,614.47Z"
                      fill="#7860fa" />
                    <g>
                      <path
                        d="M685.43,585.83c-.17-.12-.34-.12-.52-.23a2.37,2.37,0,0,1-1.27-2.84,2.45,2.45,0,0,1,2.72-1.68,2.37,2.37,0,0,1,2,2.38,2.49,2.49,0,0,1-2.14,2.43s-.17-.06-.17.05A1.54,1.54,0,0,0,685.43,585.83Zm.35-.46a1.88,1.88,0,0,0,2.07-1.66.61.61,0,0,0,0-.14,1.91,1.91,0,0,0-1.64-2.14h0a1.89,1.89,0,0,0-2.13,1.62,1,1,0,0,0,0,.17,1.85,1.85,0,0,0,1.52,2.13l.21,0Z"
                        fill="#12122f" />
                      <path
                        d="M714.6,551.58q-36.72-3.48-73.37-7c-.29-.06-.41,0-.41.34-.57,6-1.15,12-1.73,17.94v.52c-.58,5.85-1.1,11.69-1.68,17.59,0,.29.12.29.29.29,12.32,1.16,24.59,2.37,36.92,3.53a.48.48,0,0,0,.46-.17c.46-.4.92-.81,1.39-1.16.63-.58,1.33-1.1,2-1.62,1.56-1.27,3.18-2.6,4.75-3.94,2.83-2.31,5.61-4.63,8.45-6.94a1,1,0,0,0,.23-.23,1.28,1.28,0,0,0,.29-.23c1.56-1.27,3.12-2.6,4.68-3.88,2.09-1.73,4.23-3.47,6.31-5.21,1.39-1.15,2.78-2.25,4.11-3.41.63-.58,1.33-1.1,2-1.62,1.86-1.5,3.65-3,5.5-4.51.06-.06.18-.12.18-.23A.7.7,0,0,0,714.6,551.58ZM693,567.2a6.75,6.75,0,0,1-2.66,3c-.06.06-.17.11-.23.17a11,11,0,0,1-6.37,1l-1.85-.18c-.29-.06-.35,0-.4.29-.18,2.08-.4,4.17-.58,6.31,0,.29-.12.4-.4.34-3.36-.34-6.77-.63-10.13-1-.23,0-.35-.06-.4-.35-.17-1-.4-1.91-.58-2.89-.06-.17-.11-.23-.29-.17a12.77,12.77,0,0,1-7.23-.7c-.23-.06-.29,0-.35.18-.4.92-.81,1.85-1.21,2.83-.06.12-.12.23-.29.23-2.08-.23-4.22-.4-6.31-.63-.06,0-.06,0-.11-.06.23-.58.58-1.16.81-1.8-.23,0-.35.18-.47.24a9.32,9.32,0,0,1-4.74,1.39,17,17,0,0,1-8.39-2.09c-.46-.23-.87-.52-1.33-.81-.18-.11-.18-.17-.06-.34.81-1.28,1.62-2.6,2.43-3.88.12-.18.17-.18.35-.06a10.81,10.81,0,0,0,3.47,1.79,9,9,0,0,0,3.3.35,2.13,2.13,0,0,0,1.39-.58,1.39,1.39,0,0,0,.26-1.94,2.13,2.13,0,0,0-.26-.26,10.09,10.09,0,0,0-1.68-1c-1.27-.58-2.6-1.1-3.82-1.8a22.86,22.86,0,0,1-2-1.33h0a6.85,6.85,0,0,1-1.44-1.73,5.86,5.86,0,0,1-.75-3c.05-3.59,2.37-5.62,5.15-6.43a11.27,11.27,0,0,1,5-.34,19.89,19.89,0,0,1,7.41,2.49c.23.11.29.23.11.46l-2.6,3.64c-.11.18-.23.18-.4.06a12.78,12.78,0,0,0-5.21-1.85,5.45,5.45,0,0,0-2,.12,2.12,2.12,0,0,0-.81.4,1,1,0,0,0-.22,1.33l.05.06a3.2,3.2,0,0,0,1,.93,24.89,24.89,0,0,0,3.53,1.79,14.78,14.78,0,0,1,3.53,2,5.45,5.45,0,0,1,2.2,3.87c0,.06,0,.06.06.12a.45.45,0,0,0,.11-.23c.64-1.39,1.28-2.72,2-4,1.5-3,3-6.08,4.46-9.09.23-.52.23-.52.81-.46l5.38.52c.29,0,.34.12.46.35.93,3.59,1.85,7.17,2.83,10.76,0,.06.06.12.06.23a15,15,0,0,1,2.32.18c0-.12,0-.24,0-.41.35-3.41.64-6.77,1-10.18,0-.29.11-.35.35-.29,2.48.23,5,.46,7.46.75a14.61,14.61,0,0,1,5.61,1.56,6.32,6.32,0,0,1,3.47,5.56A11.65,11.65,0,0,1,693,567.2Z"
                        fill="#12122f" />
                      <path
                        d="M675.83,565.75c-.17,2.09-.4,4.17-.58,6.31h-.06c-.58-2.14-1.1-4.28-1.68-6.48C674.27,565.58,675.08,565.75,675.83,565.75Z"
                        fill="#12122f" />
                      <path
                        d="M686.3,583.63c.23.41.4.81.64,1.16-.29.06-.46,0-.58-.23s-.29-.52-.41-.76a.39.39,0,0,0-.4-.23.16.16,0,0,0-.17.13,0,0,0,0,0,0,0c0,.29-.06.52-.06.81s-.06.17-.23.17-.23-.06-.23-.23c0-.75.17-1.56.23-2.31,0-.12,0-.24.23-.18.34.06.75.06,1.1.12a.69.69,0,0,1,.63.75.7.7,0,0,1-.63.75Zm-.46-.4h.35a.43.43,0,0,0,.46-.35c.06-.23-.12-.4-.35-.46a3.36,3.36,0,0,0-.63-.06h-.12a1.39,1.39,0,0,0-.06.7c0,.22.23.11.35.16Z"
                        fill="#12122f" />
                      <path
                        d="M682.25,563.15c.06-.87.18-1.8.23-2.66,0-.12,0-.29.18-.23a13.25,13.25,0,0,1,3.06.46,2.81,2.81,0,0,1,1.88,3.5,2.57,2.57,0,0,1-.38.78,3.06,3.06,0,0,1-2.43,1.27,22.58,22.58,0,0,1-2.72-.11c-.23,0-.17-.12-.17-.29A19.28,19.28,0,0,0,682.25,563.15Z"
                        fill="#12122f" />
                      <g>
                        <path
                          d="M668.19,568.47c-.17-.87-.34-1.74-.58-2.6-1-.12-2-.17-2.89-.29l-1,2.43c-.06.12-.06.18.11.29a6.69,6.69,0,0,0,4.23.41C668.19,568.7,668.25,568.59,668.19,568.47Z"
                          fill="#12122f" />
                        <path
                          d="M666.57,561.18c-.63,1.5-1.27,3-1.85,4.46,1,.11,2,.17,2.89.28-.34-1.56-.63-3.12-1-4.74Z"
                          fill="#12122f" />
                      </g>
                    </g>
                  </g>
                  <g className="boxes1" opacity="1">
                    <path
                      d="M498.72,511.65a3.76,3.76,0,0,0-1.62,2.26L492.18,567a4.32,4.32,0,0,0,1.16,3.35l36.28,38.54L535,550Z"
                      fill="#e84312" />
                    <path
                      d="M511.1,541.86l7.12,7.52a1.09,1.09,0,0,0,1.55.06h0a1.17,1.17,0,0,0,.35-.7l1.15-12.84-9.83-10.42-1.27,13.83A3.48,3.48,0,0,0,511.1,541.86Z"
                      fill="#ce3511" />
                    <path
                      d="M503,580.74l9.84,10.41,1.27-13.77a3.13,3.13,0,0,0-.93-2.6l-7.4-7.75a.93.93,0,0,0-1.62.58Z"
                      fill="#ce3511" />
                    <path d="M556.06,516l-53.93-5a5.62,5.62,0,0,0-3.58.75l36.51,38.53,58.61,5.38Z"
                          fill="#ce3511" />
                    <path d="M521.29,535.9l19.55.69-12.21-11.11H511.45Z" fill="#9b230b" />
                    <rect x="532.31" y="552.82" width="58.9" height="58.9"
                          transform="translate(-69.56 1088.28) rotate(-84.74)" fill="#f6bca3" />
                    <path className="b-shadow2" opacity="0"
                          d="M498.89,511.6l55.26,37-32.29-35.76L502.13,511A5.52,5.52,0,0,0,498.89,511.6Z"
                          fill="#12122f" />
                    <path
                      d="M519,593l4.51,4.74a1.31,1.31,0,0,0,2.26-.75l.46-4.11a1.16,1.16,0,0,0-.34-1L521.34,587a1.31,1.31,0,0,0-2.25.76l-.47,4.05A1.25,1.25,0,0,0,519,593Z"
                      fill="#ce3511" />
                    <path
                      d="M548.31,588.49c.05-.58.11-1.1.17-1.68s.06-1,.12-1.5c0-.69.17-1.39.23-2.14,0-.46,0-.92.11-1.39.06-.75.18-1.5.23-2.25.06-.47.06-.93.12-1.39.06-.7.17-1.45.23-2.14.06-.47.06-.93.12-1.45a18.44,18.44,0,0,1,.29-2.55,2.34,2.34,0,0,1,1.38-1.73,2.38,2.38,0,0,1,1.11-.29,4.1,4.1,0,0,1,.86.06l1.8.17c.87.12,1.73.17,2.66.29.52.06,1,.06,1.5.12.69,0,1.39.17,2,.23s1,.06,1.5.11c.7.06,1.39.18,2.09.24.46,0,.92,0,1.44.11.7.06,1.39.17,2.14.23.47.06.93.06,1.39.12.76.06,1.5.17,2.26.23a11.65,11.65,0,0,0,1.45.12,2.83,2.83,0,0,1,2.38,1.27,2.56,2.56,0,0,1,.4,1.62c-.06.52-.06,1-.12,1.56-.05.69-.17,1.33-.23,2-.05.47-.05.93-.11,1.45-.06.75-.18,1.45-.23,2.2-.06.46-.06.87-.12,1.33-.06.75-.17,1.5-.23,2.26-.06.46-.06.92-.12,1.39,0,.75-.17,1.44-.23,2.2a10.7,10.7,0,0,0-.11,1.27,2.72,2.72,0,0,1-1.28,2.26,2.45,2.45,0,0,1-1.67.34c-.47,0-.93,0-1.45-.11-.69-.06-1.39-.18-2.14-.23-.46-.06-.93-.06-1.39-.12-.75-.06-1.5-.17-2.26-.23-.46-.06-1-.06-1.44-.12-.7-.06-1.45-.17-2.14-.23-.47-.06-.87-.06-1.34-.11-.75-.06-1.5-.18-2.25-.24-.47,0-1,0-1.45-.11-.69-.06-1.45-.17-2.14-.23-.46-.06-.87-.06-1.33-.12-.7-.06-1.33-.06-2-.17a2.45,2.45,0,0,1-2-2A1.42,1.42,0,0,1,548.31,588.49Zm2.66.06c.92.06,1.73.17,2.6.23.35-3.88.69-7.7,1.1-11.57a1.41,1.41,0,0,0,.35.23,10.49,10.49,0,0,0,.92.69l1.45,1.1c.63.47,1.27,1,1.85,1.45.29.23.58.4.87.64l1.73,1.38c.23.18.35.12.58,0,.46-.28,1-.52,1.45-.75.64-.34,1.27-.63,1.91-1,.46-.23.92-.52,1.39-.75.63-.35,1.33-.64,2-1,.41-.23.81-.4,1.28-.63v.34c-.06.58-.12,1.22-.18,1.8-.06.4-.06.81-.11,1.27-.06.75-.18,1.45-.23,2.2-.06.46-.06.93-.12,1.39-.06.75-.12,1.5-.23,2.26-.06.46-.12,1-.17,1.44a4.85,4.85,0,0,0-.06.93c.58.06,1.1.06,1.62.11.23,0,.46.06.69.06s.35.06.35-.29.06-.58.06-.86c.05-.76.17-1.5.23-2.26,0-.46,0-.93.11-1.39.06-.69.18-1.39.23-2.08.06-.47.06-1,.12-1.45.06-.75.17-1.5.23-2.26.06-.46.06-.92.12-1.38,0-.7.17-1.45.23-2.15.06-.46.06-.92.11-1.38,0-.12.06-.18.06-.29a6.73,6.73,0,0,0-1.1-.12c-.23,0-.46-.06-.63.06a10.13,10.13,0,0,0-1.28.63l-2.08,1.05c-1,.52-2,1-3,1.44-.81.41-1.62.75-2.43,1.22a.84.84,0,0,1-1.16-.12h0l-.06-.06c-.46-.34-.92-.75-1.38-1.1l-1.86-1.33c-.92-.69-1.85-1.39-2.72-2.08a9.72,9.72,0,0,0-.86-.7c-.47-.28-.87-.81-1.5-.69l-.06-.06c-.29,0-.64,0-.93,0-.06.75-.17,1.5-.23,2.2-.06.52-.06,1.1-.11,1.62-.06.75-.18,1.5-.24,2.25,0,.47,0,.93-.11,1.39-.06.69-.18,1.33-.23,2-.06.52-.06,1-.12,1.5-.11,1-.17,1.91-.29,2.89a4.5,4.5,0,0,1-.11.81A7.52,7.52,0,0,1,551,588.55Z"
                      fill="#12122f" />
                  </g>
                  <g className="boxes1" opacity="1">
                    <path d="M607.9,442.22l38.88,43.68,4.92-61.79-38.88-43.68Z" fill="#e84312" />
                    <path d="M612.82,380.43l38.88,43.68L758.63,434l-38.89-43.69Z" fill="#ce3511" />
                    <path
                      d="M646.78,485.9l103.57,9.55a3.27,3.27,0,0,0,3.58-2.93.22.22,0,0,0,0-.08v-.06L758.57,434,651.7,424.11Z"
                      fill="#f6bca3" />
                    <path d="M716.16,430.07l-5.09-8.8-24.42-2.19,4.4,8.68Z" fill="#a5240a" />

                    <path className="b-shadow2" opacity="0" d="M660.55,422l74.12,1.74-73.36-10.13Z"
                          fill="#12122f" />
                    <path className="b-shadow3" opacity="0" d="M738.32,420.52l2.2-6.94L739.13,412Z"
                          fill="#12122f" />
                    <path className="b-shadow3" opacity="0" d="M651.7,424.11l5,.46-9.9,61.33Z"
                          fill="#12122f" />
                    <path
                      d="M720.79,457.9c.05.52.05,1,.11,1.5a13,13,0,0,1-.29,3.41c-.11.58-.29,1.16-.4,1.8-.06.17.06.4.11.58a20.08,20.08,0,0,1,.93,2.37,6.86,6.86,0,0,1,0,3.76,13.26,13.26,0,0,1-.75,2.31,8.63,8.63,0,0,1-4.57,4.17,7.28,7.28,0,0,1-2.72.57,13.55,13.55,0,0,1-1.56-.05,8,8,0,0,1-3.42-1.1,18.38,18.38,0,0,1-1.62-1.16c-.06-.06-.23-.06-.29-.06a13.75,13.75,0,0,1-4.1-.11,26,26,0,0,1-3.13-.76,18.16,18.16,0,0,1-3.24-1.62,15.6,15.6,0,0,1-2.66-2.14,13.57,13.57,0,0,1-2.72-3.58,25.07,25.07,0,0,1-1.16-2.78,14.31,14.31,0,0,1-.81-3.82,13,13,0,0,1,.18-3.93c.17-.76.29-1.5.46-2.26.12-.35-.17-.52-.23-.69a8.31,8.31,0,0,1-1-3.36,18.86,18.86,0,0,1,.11-2.49,8.42,8.42,0,0,1,1.27-3.24,9.27,9.27,0,0,1,3.24-2.89,8.89,8.89,0,0,1,3-.93,9.17,9.17,0,0,1,3.3.18,8.46,8.46,0,0,1,3.18,1.5c.11.11.29.17.34.29.35.57.87.34,1.39.34.81,0,1.62,0,2.43.06a10.64,10.64,0,0,1,2,.35,15.57,15.57,0,0,1,2.31.75c.47.17.93.4,1.39.58a15.54,15.54,0,0,1,4.23,2.95,16.45,16.45,0,0,1,2.95,3.93,18.43,18.43,0,0,1,1.55,4.24C720.67,457,720.73,457.44,720.79,457.9Zm-13,6.71a2.26,2.26,0,0,1-2.14,1.91,5.13,5.13,0,0,1-2.66-.23,5.47,5.47,0,0,1-1.62-.81,13.91,13.91,0,0,1-1.79-2,3.13,3.13,0,0,0-2.14-1.21,2,2,0,0,0-2.21,1.5,3,3,0,0,0,.29,2.6,6.5,6.5,0,0,0,2.43,2.2,19.71,19.71,0,0,0,1.91.92,14.93,14.93,0,0,0,3.82,1,12.34,12.34,0,0,0,2.43.06,10.92,10.92,0,0,0,2.72-.47,10.19,10.19,0,0,0,2.37-1.15,5.26,5.26,0,0,0,1.8-2.09,12.41,12.41,0,0,0,.52-1.56,4.79,4.79,0,0,0-.7-4.05,8.1,8.1,0,0,0-3.35-2.55c-.52-.23-1-.4-1.56-.63a8,8,0,0,1-1.1-.4c-.87-.29-1.68-.58-2.49-.87a9.43,9.43,0,0,1-1.74-.87,1.37,1.37,0,0,1-.52-1.62,1.44,1.44,0,0,1,1.16-1,6.67,6.67,0,0,1,3.35.11,3.61,3.61,0,0,1,1.45.76c.64.52,1.21,1.21,1.85,1.73a2.19,2.19,0,0,0,2.72.23,2.56,2.56,0,0,0,.87-3.47,5.85,5.85,0,0,0-1.68-1.68,9.78,9.78,0,0,0-3.7-1.56,22.55,22.55,0,0,0-2.83-.46,10.83,10.83,0,0,0-3.59.17,7.69,7.69,0,0,0-3,1.16,5.87,5.87,0,0,0-2,2.31,7,7,0,0,0-.52,2.15,5.81,5.81,0,0,0,.58,3.12,6,6,0,0,0,2.54,2.26,28.25,28.25,0,0,0,2.67,1.1,7,7,0,0,1,1,.4c.81.29,1.62.58,2.43.92.49.17,1,.36,1.45.58A2,2,0,0,1,707.82,464.61Z"
                      fill="#12122f" />
                  </g>
                  <g className="boxes2" opacity="1">
                    <path d="M556.46,445.4l38.89,43.69,5.55-69.9-39.52-35.58Z" fill="#3bbabc" />
                    <path d="M561.38,383.61l39.52,35.58,50.8,4.92-34.83-38.19Z" fill="#329e9e" />
                    <path className="b-shadow3" opacity="0"
                          d="M589.44,482.43,598,416.24l-7.7-9-4.8,7.46Z" fill="#12122f" />
                    <path
                      d="M595.35,489.09l47.1,4.57a3.66,3.66,0,0,0,3.93-3.24v-.06l5.32-66.25L601,419.19Z"
                      fill="#96e2b9" />
                    <g>
                      <path
                        d="M622.89,469.65c-2.08-.12-4.17-.18-6.25-.35a5.2,5.2,0,0,1-3.36-1.39,4.5,4.5,0,0,1-1.5-3.18,17,17,0,0,1,0-2.26c.18-3.59.35-7.23.58-10.82a6.09,6.09,0,0,1,.47-2.26,4.62,4.62,0,0,1,3.82-2.95,9.3,9.3,0,0,1,1.67-.06c3.94.18,7.81.41,11.69.64a5.49,5.49,0,0,1,2.32.52,4.65,4.65,0,0,1,2.89,3.82,11.46,11.46,0,0,1,.06,2c-.18,3.76-.35,7.58-.58,11.34a5.68,5.68,0,0,1-1.16,3.41,4.72,4.72,0,0,1-3.53,1.8c-.63.05-1.27,0-1.91,0-1.73-.12-3.47-.24-5.2-.29Zm5.67-7.12c.23,0,.4.06.64.06a3,3,0,0,0,1.56-.41,1.43,1.43,0,0,0,.81-1.16c.06-.69.11-1.38.11-2.14a.57.57,0,0,0-.52-.58h-.06l-2-.11h-.29c-.06-.7-.17-.81-.87-.81l-2.14-.12h-.29l.06-1a1.94,1.94,0,0,0,2.43-.23c.69,1.39,1.74,1.85,2.84,1.27a1.94,1.94,0,0,0,.81-2.6h0a1.75,1.75,0,0,0-1.16-.93,1.81,1.81,0,0,0-1.91.53,1.94,1.94,0,0,0-2.33-1.46h0l-.47.17c.06-.75.06-1.44.12-2.14,0-.23-.06-.29-.29-.23l-8.68,1.1c-.23,0-.29.12-.29.35-.17,3.93-.4,7.87-.58,11.8,0,.23.06.29.23.34L623.7,466l1.39.29.11-2.26c1.91.06,2.72-.17,3.36-1.5Z"
                        fill="#12122f" />
                      <path
                        d="M618.84,456.16a2.69,2.69,0,0,1,.06-.69c0-.06.17-.17.23-.17h3.93a3.69,3.69,0,0,1-.06.81c0,.05-.11.11-.23.11h-1c-.29,0-.35.12-.35.35,0,1-.11,2.08-.17,3.07,0,.4-.06.75-.06,1.21-.29-.06-.58-.06-.87-.11,0,0-.11-.18-.11-.24.06-1,.11-1.91.17-2.89a7.52,7.52,0,0,1,.06-1.16c0-.17-.06-.29-.23-.29A4.94,4.94,0,0,1,618.84,456.16Z"
                        fill="#12122f" />
                    </g>
                  </g>
                  <g className="boxes2" opacity="1">
                    <path d="M637.7,388.64l26.85,28.41,6.77-73.48-26.85-28.35Z" fill="#ff8718" />
                    <path d="M718,321.93l-73.48-6.71,26.85,28.35,73.48,6.77Z" fill="#e5761a" />
                    <path
                      d="M734.38,423.41,664.6,417h0l6.77-73.48h0l73.49,6.77h0l-6.48,69.78a3.62,3.62,0,0,1-3.85,3.37h-.15Z"
                      fill="#ffd17a" />
                    <path className="b-shadow4" opacity="0" d="M726.92,347.27l6.48-9-5.21-5.5Z"
                          fill="#12122f" />
                    <path className="b-shadow4" opacity="0"
                          d="M666.92,338.71l26.62-1.22L690,331.65Z" fill="#12122f" />
                    <path className="b-shadow3" opacity="0"
                          d="M649.45,340.68l11.86,72.9,10-70L665,336.51Z" fill="#12122f" />
                    <g>
                      <path
                        d="M687.58,387.72c-.12.4-.47.34-.76.34a.5.5,0,0,1-.52-.46v-.06a1.86,1.86,0,0,0-.11-.52v-.11a19,19,0,0,0-.52-2.38c0-.4-.24-.75-.18-1.21.23-.12.46,0,.69,0l.12.06c.06.4.18.86.23,1.27l.41,2.37h0l.47-1.27c.06-.18.11-.29.17-.46.23-.58.47-1.1.64-1.68l.06-.06a1.39,1.39,0,0,1,.69.12l.69,3.58h.06l.87-2.25h0l.06-.12.35-.87c.05-.11.05-.23.23-.23a1.17,1.17,0,0,1,.63.12c-.06.4-.34.75-.4,1.15h0c-.06.06-.06.06-.06.12a7.53,7.53,0,0,0-.41,1c-.23.52-.4,1-.63,1.45s-.29.64-.93.52l-.17-.06c-.23-.17-.23-.4-.29-.69v-.11h0a2.78,2.78,0,0,0-.12-.7.54.54,0,0,0-.11-.4h0a4.68,4.68,0,0,0-.29-1.27l-.81,2.31h0c-.06.12-.12.18-.12.29Z"
                        fill="#12122f" />
                      <path
                        d="M722.87,386.91a.92.92,0,0,1,.69,0c.12,0,.12.11.12.23a7.46,7.46,0,0,0-.46,1,1.41,1.41,0,0,0-.18.29,5.15,5.15,0,0,0-.46,1v.06l-.06.06c-.17.34-.35.69-.52,1.1a4,4,0,0,0-.52,1.15v.06c-.12.18-.17.35-.29.52-.29.7-.29.7-1,.58a.26.26,0,0,1,0-.29c.17-.29.29-.63.46-.92l.06-.12.06-.11v-.06c.23-.23-.06-.47-.06-.7l-.46-1.79c-.12-.46-.23-.87-.35-1.27v-.12l-.06-.06-.17-.75c0-.17.06-.29.23-.23s.52-.12.63.23a5.79,5.79,0,0,1,.29,1.16,10.14,10.14,0,0,0,.29,1.21l.29,1.16,1-2.26c.17-.4.34-.75.52-1.15Z"
                        fill="#12122f" />
                      <path
                        d="M695.73,384.13H696c.06.06.17.12.23.06l.23.11a5.8,5.8,0,0,1,.58.52c.12.24.23.53.35.81a5,5,0,0,1,0,1.22,2.22,2.22,0,0,1-1.86,2,4.58,4.58,0,0,1-1.27-.18,1.72,1.72,0,0,1-1.1-1.33.93.93,0,0,1-.06-.4,5.24,5.24,0,0,1,.23-1.57,2,2,0,0,1,1.91-1.27Zm.81,1.45h0a.88.88,0,0,0-.64-.7h0a1.36,1.36,0,0,0-1.15,0,1.41,1.41,0,0,0-.29.18,1.94,1.94,0,0,0-.47,1.5,1.45,1.45,0,0,0,.29,1,.06.06,0,0,0,.06,0h0l.06.12a1.26,1.26,0,0,0,1.33.29,1.17,1.17,0,0,0,.81-1,2.73,2.73,0,0,0,0-1.39c.06,0,.06,0,0-.06Z"
                        fill="#12122f" />
                      <path
                        d="M717.32,386.33a1.32,1.32,0,0,1,.63,1.16c-.11,1-.17,2-.29,2.95,0,.23-.06.46-.4.4s-.35-.23-.29-.46v-.12l-.46.29a2.27,2.27,0,0,1-1.5.06.34.34,0,0,0-.12-.06,1.09,1.09,0,0,1-.69-1.16,1.16,1.16,0,0,1,.81-1.15,2.7,2.7,0,0,1,.69-.18h.12l1,.12c.11,0,.17,0,.23-.12a.92.92,0,0,0-.48-1.2h0a.7.7,0,0,0-.35-.06,3,3,0,0,0-1.21.29c-.24.06-.29.06-.29-.23a.55.55,0,0,1,.46-.58,3.68,3.68,0,0,1,2.08,0h0l.06.06Zm-1.11,2.37a1.35,1.35,0,0,0-.69.06.75.75,0,0,0-.46.69.73.73,0,0,0,.52.7,1.31,1.31,0,0,0,1.27-.35.9.9,0,0,0,.18-.93c0-.17-.35-.11-.52-.11a.49.49,0,0,0-.29-.06Z"
                        fill="#12122f" />
                      <path
                        d="M716.85,383.67v.05c0,.06,0,.06.06.06h0c-.06.7-.4.93-1,.7h-.06a.12.12,0,0,0-.11-.12l-.06-.12-.06-.05v-.06a8,8,0,0,0-.7-1.62c0-.06,0-.12-.11-.12a6.25,6.25,0,0,0-1.22-1.79,9.54,9.54,0,0,0-4.16-2.89,11,11,0,0,0-4.17-.58,6,6,0,0,0-2.25.46h-.06a3.38,3.38,0,0,0-.7.23,7.52,7.52,0,0,0-2,1.16,2.54,2.54,0,0,0-.87.69l-.23.23H699c-.11,0-.17.12-.23.18h0a2.63,2.63,0,0,0-.64.69,7,7,0,0,0-1.15,1.5.74.74,0,0,1-.93.41.24.24,0,0,1-.11-.06.72.72,0,0,1-.06-1h0a14.09,14.09,0,0,1,2.54-3l.23-.23h0l.06-.06a.43.43,0,0,0,.23-.23,15.5,15.5,0,0,1,2.66-1.5,2.1,2.1,0,0,0,.81-.35l1.45-.35H704c.69-.05,1.33-.11,2-.11h.24l1.79.17h.17a13.28,13.28,0,0,1,2.55.81,11.5,11.5,0,0,1,4.74,4c.06.06.12.18.18.23a7.23,7.23,0,0,0,.46.87h0a.33.33,0,0,0,.18.29h0l.05.06v.06h0c0,.05,0,.05.06.05h0c.12.29.23.64.35.93,0,.06,0,.17.06.17a.06.06,0,0,0-.06.06h0c.06.18.12.18.12.18Z"
                        fill="#12122f" />
                      <path
                        d="M699.67,384.65h0a.38.38,0,0,1,.23-.06c.46,0,.46.06.4.47,0,.05-.06.11.06.17s.11-.06.17-.12a1.07,1.07,0,0,1,.7-.4c.63-.12.92.11.86.75v.12h0a.49.49,0,0,1-.29-.06.88.88,0,0,0-1,.17,1.75,1.75,0,0,0-.52,1.56,9.1,9.1,0,0,0-.11,1.16v.29c-.06.46-.18.58-.64.4-.06,0-.12-.06-.17-.06v-.11l.4-4.17Z"
                        fill="#12122f" />
                      <path
                        d="M712.74,383.84V384l-.52,5.61-.11.75-.18.06c-.4.06-.52-.06-.52-.46v-.3a2.11,2.11,0,0,1-1.85.58l-.11-.05a1.77,1.77,0,0,1-1-.93,5.32,5.32,0,0,1-.05-2.14l.11-.34a1.78,1.78,0,0,1,2-1.22,2.66,2.66,0,0,1,1.1.64h.06c.06-.81.17-1.62.23-2.37h0l.06-.06h0C712.4,383.78,712.57,383.72,712.74,383.84ZM710,386.33l-.06.06c-.23.05-.29.29-.41.46a2.48,2.48,0,0,0-.23,1.79.81.81,0,0,0,.35.7l.06.06a1.25,1.25,0,0,0,1.67-.57h0a.89.89,0,0,0,.11-.35c0-.29.06-.52.06-.81s.12-.41,0-.58l-.06-.06c-.23-.34-.52-.75-1-.75h-.12a.48.48,0,0,0-.4.06Z"
                        fill="#12122f" />
                      <path
                        d="M705.8,387.77c.35.58.69,1.16,1.1,1.74.06.12.18.23.06.41l-.12.05h0a1,1,0,0,1-1-.63c-.35-.64-.75-1.22-1.1-1.8,0-.05,0-.05-.06-.05l-.06-.06a.14.14,0,0,0-.06-.12c-.05,0-.05.06-.05.12-.06.63-.12,1.33-.18,2v.12l-.17.17c-.23,0-.46.06-.64-.17.18-2,.41-4,.58-6,.06-.58.12-.64.64-.46h.11l.06.11c-.11,1-.17,2.14-.29,3.19l0,.57a1.5,1.5,0,0,0,.57-.52,4.78,4.78,0,0,0,.58-.52l.06-.06h0c.06,0,.06-.05.12-.11h0l.63-.52h0c.18,0,.35.06.47.06s.29.11.23.34l-.06.06a13.32,13.32,0,0,0-1,.87c-.81.46-.81.46-.35,1.21Z"
                        fill="#12122f" />
                    </g>
                  </g>
                  <g className="boxes2" opacity="1">
                    <g>
                      <path
                        d="M525.45,483.65a2.7,2.7,0,0,0-1.16,1.85l0,.4h0l-2.84,30.78a4.24,4.24,0,0,0,1.39,3.53l31.3,28.47,3.3-35.93Z"
                        fill="#3bbabc" />
                      <path
                        d="M549.87,530.23l5.38,4.91.69-7.4-5.5-5a.89.89,0,0,0-1.21.06.85.85,0,0,0-.23.52l-.34,3.87A3.67,3.67,0,0,0,549.87,530.23Z"
                        fill="#329e9e" />
                      <path
                        d="M522.38,505.87l4.4,4a1.64,1.64,0,0,0,2.26-.12,1.68,1.68,0,0,0,.41-.92l.23-2.55a3.23,3.23,0,0,0-1.1-2.78l-5.5-5Z"
                        fill="#329e9e" />
                      <path
                        d="M560.51,486.14l-33.21-3.07a3.48,3.48,0,0,0-1.85.58l31.94,29,35.93,3.3Z"
                        fill="#329e9e" />
                      <path
                        d="M587.48,551.58l-33.33-3.07h0l3.3-35.93h0l35.93,3.3h0l-3.07,33.33a2.56,2.56,0,0,1-2.73,2.38Z"
                        fill="#96e2b9" />
                      <path className="b-shadow3" opacity="0"
                            d="M528.87,483.19h0l-1.33-.12a3.8,3.8,0,0,0-2,.52l30,23.32-16.14-22.8-10.53-.93Z"
                            fill="#12122f" />
                    </g>
                    <g>
                      <path
                        d="M568.5,524.56l6.42.52c.17,0,.23,0,.23.23-.17,2-.35,4.11-.52,6.13,0,.23-.12.23-.29.23l-6.07-.52H568Z"
                        fill="#12122f" />
                      <path
                        d="M567.86,531.85c.5.06,1,.1,1.5.11,1.62.12,3.24.29,4.86.41.23,0,.29,0,.29.29-.17,2.14-.35,4.22-.52,6.36l-6.48-.52c-.17,0-.17-.06-.17-.17C567.52,536.13,567.69,534,567.86,531.85Z"
                        fill="#12122f" />
                      <path
                        d="M574.63,539.08c0-.12.06-.18.06-.29l.52-6.08c0-.23.06-.28.29-.23l6.07.52c.24,0,.29.06.29.29-.17,2-.34,4.11-.52,6.14a.37.37,0,0,1-.05.23Z"
                        fill="#12122f" />
                      <path
                        d="M582.21,529c-.06,1-.17,2.08-.23,3.07,0,.23-.06.23-.29.23l-6.13-.52c-.18,0-.23-.06-.23-.29.17-2,.34-4.11.52-6.13,0-.18.06-.23.29-.23l6.19.52c.23,0,.23.11.23.29C582.39,527,582.33,528,582.21,529Z"
                        fill="#12122f" />
                    </g>
                  </g>
                  <g className="boxes3" opacity="1">
                    <path
                      d="M540.09,491.4l15.74,15.86,8.45-91.83-17-17L539,488.28A3.93,3.93,0,0,0,540.09,491.4Z"
                      fill="#2852f0" />
                    <path
                      d="M551.08,435.34l2.09,2.08a1.7,1.7,0,0,0,2.37,0,1.43,1.43,0,0,0,.46-1l2.43-26.79L552.82,404l-2.66,28.81A3.19,3.19,0,0,0,551.08,435.34Z"
                      fill="#153da0" />
                    <path
                      d="M543.1,494.47l5.61,5.67,2.6-28.7a3.33,3.33,0,0,0-1-2.78l-2-2a1.65,1.65,0,0,0-2.31,0,1.4,1.4,0,0,0-.46,1Z"
                      fill="#153da0" />
                    <path d="M578.28,401.26l-31-2.84,17,17,31,2.84Z" fill="#153da0" />
                    <rect x="529.59" y="447.12" width="92.05" height="31.19"
                          transform="translate(62.09 993.49) rotate(-84.74)" fill="#abbbf9" />
                    <rect x="529.54" y="458.5" width="92.05" height="8.45"
                          transform="translate(62.02 993.45) rotate(-84.74)" fill="#2852f0" />
                    <path className="b-shadow4" opacity="0"
                          d="M588.23,416.65l-26.85-4.11-14.12-14.12h15.51Z" fill="#12122f" />
                  </g>
                  <g className="boxes3" opacity="1">
                    <path d="M574,391.65l23.2,24.48L603,352.77l-23.14-24.48Z" fill="#7860fa" />
                    <path d="M643.2,334.08l-63.36-5.79L603,352.77l63.42,5.79Z" fill="#6449ea" />
                    <path
                      d="M657.2,421.68l-60-5.55h0L603,352.77h0l63.36,5.84h0l-5.5,60A3.46,3.46,0,0,1,657.2,421.68Z"
                      fill="#c1b6fc" />
                    <path className="b-shadow4" opacity="0"
                          d="M603,352.77l-2.71-2.43-10.65,58.32,1.73,1.33Z" fill="#12122f" />
                    <path className="b-shadow4" opacity="0"
                          d="M604.26,344.32l10.93,9.55,34.26-13.19L606,336.51Z" fill="#12122f" />
                    <g>
                      <path
                        d="M613.63,389.16,612,389a2.84,2.84,0,0,1,0-5.67h.52c1.1.12,2.26.23,3.36.29a2.88,2.88,0,0,1,2.54,2.37,2.82,2.82,0,0,1-2.33,3.26,2.34,2.34,0,0,1-.39,0c-.34,0-.63-.06-1-.06A6.76,6.76,0,0,1,613.63,389.16Zm.46-4.68-1.56-.18h-.4a1.87,1.87,0,0,0,.06,3.71c1,.11,2.08.17,3.12.28h.35a1.83,1.83,0,0,0,1.68-1.85,1.93,1.93,0,0,0-1.68-1.85c-.52,0-1,0-1.57-.11Z"
                        fill="#12122f" />
                      <path
                        d="M653.73,387.25l-.69.87c0,.06-.12.06-.18.06-1-.12-2.08-.17-3.06-.29a1.89,1.89,0,0,0-1.86,1c0,.06-.05.12-.05.18l5.32.52c0,.06-.06.06-.06.12-.2.24-.4.49-.58.75a.28.28,0,0,1-.23.11c-1.45-.11-2.89-.29-4.34-.4h-.17a.2.2,0,0,0,.06.18,1.85,1.85,0,0,0,1.62,1.33l3.76.35h.17c-.12.11-.17.23-.29.34s-.29.35-.4.52a.18.18,0,0,1-.17.06c-1.1-.11-2.2-.17-3.3-.29a2.88,2.88,0,0,1,.23-5.73h.4l3.76.35Z"
                        fill="#12122f" />
                      <path
                        d="M619.3,384h.12c1.56.17,3.12.28,4.63.46a1.92,1.92,0,0,1-.29,3.82c-.18,0-.35-.06-.52-.06v.06c.63.69,1.33,1.33,2,2h-.11c-.47-.06-.93-.06-1.39-.11a.23.23,0,0,1-.12-.06c-.92-1-1.91-2-2.83-3l-.06-.06h.17c.93.12,1.91.18,2.84.29a.9.9,0,0,0,1-.64.94.94,0,0,0-.6-1.18l-.15,0-3.59-.35h-.06c-.17,1.56-.29,3.13-.46,4.69-.35-.06-.69-.06-1.1-.12C618.9,387.77,619.07,385.87,619.3,384Z"
                        fill="#12122f" />
                      <path
                        d="M633.71,391.07c-.41-.06-.81-.06-1.22-.11a.24.24,0,0,1-.11-.06A5.75,5.75,0,0,1,632,390c-.06-.06-.06-.12-.17-.12-.93-.05-1.8-.17-2.72-.23a.3.3,0,0,1-.18-.11c-.17-.29-.28-.64-.46-.93,1,.12,1.91.18,2.89.29-.46-.93-.86-1.79-1.33-2.66l-.11.11-3.13,4c0,.05-.11.11-.17.05-.35-.05-.75-.05-1.16-.11,0-.06.06-.06.06-.12,1.27-1.62,2.55-3.3,3.82-4.92a.85.85,0,0,1,1.18-.2,1,1,0,0,1,.27.32c.92,1.85,1.9,3.7,2.83,5.5A.43.43,0,0,0,633.71,391.07Z"
                        fill="#12122f" />
                      <path
                        d="M640.07,390.67c-.17.23-.35.4-.52.64a.51.51,0,0,1-.58.23c-1-.12-2-.18-3.07-.29a2.77,2.77,0,0,1-2.48-2.37,2.85,2.85,0,0,1,2.36-3.27,1.53,1.53,0,0,1,.3,0h.46l3.82.34h.12c0,.06-.06.06-.06.12a8.34,8.34,0,0,0-.58.75.31.31,0,0,1-.23.12c-1-.12-2-.18-3.07-.29a1.85,1.85,0,0,0-.63,3.64c.11,0,.23.06.34.06l3.7.35Z"
                        fill="#12122f" />
                      <path
                        d="M641.69,390.84c1.68.18,3.42.35,5.09.46,0,0,0,.06,0,.06h0c-.18.23-.41.52-.58.75a.2.2,0,0,1-.18.06c-1.62-.17-3.24-.29-4.8-.46a.55.55,0,0,1-.53-.57.15.15,0,0,0,0-.07c.18-1.67.29-3.35.46-5V386c.35.06.7.06,1.11.12C642,387.72,641.87,389.28,641.69,390.84Z"
                        fill="#12122f" />
                      <path
                        d="M654.19,387.89a.68.68,0,0,1,.69-.58.64.64,0,1,1-.11,1.27h0a.57.57,0,0,1-.59-.56A.53.53,0,0,1,654.19,387.89Zm.58.58a.57.57,0,0,0,.58-.46.52.52,0,0,0-.45-.58h0a.56.56,0,0,0-.58.46.52.52,0,0,0,.45.58Z"
                        fill="#12122f" />
                      <path
                        d="M654.59,387.54a.46.46,0,0,1,.29.06c.06,0,.12.12.18.18s-.06.11-.06.23l-.06.05c.06.12.06.18.12.29-.12.06-.18,0-.18-.11s0-.18-.17-.18v.23h-.12A4.69,4.69,0,0,1,654.59,387.54Zm.12.4a.37.37,0,0,1,.23-.05v-.12a.21.21,0,0,0-.17-.06c-.06.06-.06.12-.06.23Z"
                        fill="#12122f" />
                    </g>
                  </g>
                  <g className="boxes4" opacity="1">
                    <path
                      d="M707.19,234a2.85,2.85,0,0,0-1.45,1.62l-23.2,86.21,13.89,19.85,23.9-89.05Z"
                      fill="#e84312" />
                    <path
                      d="M749.25,259l-11.74-16.61a4.65,4.65,0,0,0-2.6-1.85l-24.82-6.71a4.19,4.19,0,0,0-2.9,0l13.14,18.64,29.51,7.92A5,5,0,0,0,749.25,259Z"
                      fill="#ce3511" />
                    <path
                      d="M749.54,264.13h0l.35-1.22a5.3,5.3,0,0,0,0-2.31l-29.5-7.93-23.9,88.87,26.61,7.18a3.66,3.66,0,0,0,4.46-2.55h0l22-82Z"
                      fill="#f6bca3" />
                    <rect x="677.39" y="297.65" width="92.09" height="7"
                          transform="translate(244.61 921.45) rotate(-74.94)" fill="#e84312" />
                    <path d="M738.78,257.59l-10.36-18.75-6.65-1.79L732,255.8Z" fill="#962009" />
                    <path className="b-shadow4" opacity="0"
                          d="M690.12,332.63,693.54,281l-10.3,39.46,6.88,13.08Z" fill="#12122f" />
                  </g>
                  <g className="boxes4" opacity="1">
                    <path
                      d="M608.89,271l-30.32-21.12a4.6,4.6,0,0,0-1.22,3.42L585.16,322l32.06,22.33Z"
                      fill="#2852f0" />
                    <path d="M593.09,308.62l9.37,14.06-6.88-61-8.45-5.9Z" fill="#153da0" />
                    <path
                      d="M651.53,241.33a4.4,4.4,0,0,0-3.07-.75L582.85,248h0a6.35,6.35,0,0,0-4.28,1.91L608.83,271l73.31-8.27Z"
                      fill="#153da0" />
                    <path d="M660.38,247.58l-73.25,8.27,8.33,5.79,73-8.45Z" fill="#081e4c" />
                    <path
                      d="M687.29,336.45l-70.13,7.93h0L608.89,271h0l73.3-8.27h0l7.93,70.12a3.19,3.19,0,0,1-2.77,3.58Z"
                      fill="#abbbf9" />
                    <path
                      d="M634.23,304.86c-.06-.41-.18-.87-.23-1.28a23.88,23.88,0,0,1,.17-4.05c0-.11.06-.17.06-.29l.64-2.2a.26.26,0,0,0,.11-.34c.18-.12.18-.35.23-.52a3.31,3.31,0,0,0,.64-1.16c.17-.23.4-.35.46-.64l1.5-1.91.75-.81a13.09,13.09,0,0,0,2-1.67.31.31,0,0,0,.29-.29,10.63,10.63,0,0,0,2.31-1.28,23.69,23.69,0,0,1,4.75-1.73l2.43-.46,2.55-.18,2.25.06a24.24,24.24,0,0,1,5,1,11.28,11.28,0,0,0,2.26.81,1,1,0,0,0,.63.35,16.67,16.67,0,0,0,2.14,1.39l.81.63,1.8,1.74.46.52.17.17h0a18.63,18.63,0,0,1,2.6,5.15l.35,2c0,.75.06,1.5.06,2.26l-.47,2.48v.12l-.57,1.5c-.23.06-.35-.06-.47-.23a11.58,11.58,0,0,0-10.3-3.7,11.79,11.79,0,0,0-7.4,3.18,8.56,8.56,0,0,0-2.9,7.58,9.64,9.64,0,0,0,1.74,4.11h-1.1a2,2,0,0,0-2.26.69l-.87.52-1.62,1-2.14.87c-.11,0-.29.05-.4.05s-.4.12-.52-.05.12-.35.23-.47c.18-.29.35-.58.52-.92l.12-.18a4.66,4.66,0,0,0,1.22-2.37c.05-1-.81-1.16-1.45-1.39a3.26,3.26,0,0,0-1.33-.69,3.48,3.48,0,0,0-1.22-.81,20,20,0,0,1-3.82-3.82A14.89,14.89,0,0,1,634.23,304.86Z"
                      fill="#12122f" />
                    <path
                      d="M662.35,312a1.8,1.8,0,0,1-1.62,2h-.06a1.93,1.93,0,0,1-1.91-1.73,1.78,1.78,0,0,1,1.62-1.91h.18a1.69,1.69,0,0,1,1.79,1.56Z"
                      fill="#12122f" />
                    <path
                      d="M654,312.56a1.73,1.73,0,0,1,1.5-1.91h.11a1.89,1.89,0,0,1,2,1.62,1.92,1.92,0,0,1-1.74,2,1.7,1.7,0,0,1-1.84-1.55.2.2,0,0,1,0-.07C654.08,312.61,654.08,312.56,654,312.56Z"
                      fill="#12122f" />
                    <path
                      d="M665.24,310a1.71,1.71,0,0,1,1.91,1.45v.12a1.86,1.86,0,0,1-1.62,2h-.06a1.89,1.89,0,0,1-1.91-1.68,1.76,1.76,0,0,1,1.56-1.91h.12Z"
                      fill="#12122f" />
                    <path d="M593.38,307.7l17.24,19-4.92,10.88Z" fill="#12122f" />
                  </g>
                  <g className="boxes4" opacity="1">
                    <path
                      d="M563.87,302.14a3.07,3.07,0,0,0-1.56,1.74l-.17.69h0L543.5,388.82a4.19,4.19,0,0,0,.81,3.58l13.48,17.53,19.9-90Z"
                      fill="#3bbabc" />
                    <path d="M561.56,331.77l4.16,5.44,5.61-25.4-4.16-5.39Z" fill="#329e9e" />
                    <path d="M546.63,395.53l4.16,5.44,5.62-25.4-4.17-5.38Z" fill="#329e9e" />
                    <path d="M593.38,307.7,567.46,302a5.34,5.34,0,0,0-3.59.17L577.7,320l30.43,6.71Z"
                          fill="#329e9e" />
                    <path
                      d="M584.82,415.89l-27-6h0L577.7,320h0l30.43,6.71h0L589,413.23a3.48,3.48,0,0,1-4.12,2.68l-.05,0Z"
                      fill="#96e2b9" />
                    <path d="M567.17,306.42l29.74,5.79,4,5.21-29.56-5.62Z" fill="#20706e" />
                    <g>
                      <path
                        d="M578.74,356.3l13.54,2.49s0,0,.06,0h0l.34.12a4.89,4.89,0,0,1,1,.29,5.25,5.25,0,0,1,1.56.93,4.7,4.7,0,0,1,1.33,1.73,6.21,6.21,0,0,1,.52,1.5,10.78,10.78,0,0,1,.06,1.39,6.73,6.73,0,0,1-.12,1.1c-.52,2.89-1,5.84-1.62,8.74,0,.06,0,.11,0,.11h-.06l-12.79-2.31h-.17c-.29-.35-.52-.75-.81-1.16s-.75-1.1-1.1-1.62a4.15,4.15,0,0,1-.58-1.15,1.31,1.31,0,0,1,.35-1.5c.28-.29.57-.53.86-.81a.34.34,0,0,0,.18-.35,2.22,2.22,0,0,0-.18-1.5c-.29-.7-.63-1.39-.92-2.08a3.82,3.82,0,0,0-.81-1.28c-.06-.11-.18-.11-.29-.11a3.72,3.72,0,0,0-.75.17,3.06,3.06,0,0,0-1.22.58,2.34,2.34,0,0,0-.92,1.5,7.85,7.85,0,0,0,0,2.37,14,14,0,0,0,2.14,5.67c.17.23.29.46.46.7-.12,0-.17-.12-.29-.12l-8.39-1.5,1.68-9.14a1.08,1.08,0,0,0,.11-.47c.12-.34.24-.69.35-1.1a5.43,5.43,0,0,1,1-1.56,6.12,6.12,0,0,1,1.56-1.15,4.35,4.35,0,0,1,1.68-.53,9.58,9.58,0,0,1,2.14.06C578.68,356.36,578.68,356.36,578.74,356.3Z"
                        fill="#12122f" />
                      <path
                        d="M570.12,370.18l8.39,1.5c.12,0,.17.12.29.12a11.84,11.84,0,0,0,.75,1.1c.41.46.75,1,1.16,1.5a15.59,15.59,0,0,0,2.6,2.66,11.85,11.85,0,0,0,3.12,1.8,4.54,4.54,0,0,0,1.5.29,2.6,2.6,0,0,0,1.85-.93c.23-.29.47-.58.7-.93a.48.48,0,0,0,.06-.46,3.38,3.38,0,0,0-.81-1.16c-.52-.46-1-1-1.5-1.5a2.4,2.4,0,0,0-1.45-.86.71.71,0,0,0-.58.11,6,6,0,0,1-.87.46,1.3,1.3,0,0,1-1.56-.23,5.57,5.57,0,0,1-1.16-1.44h.18l12.78,2.31h.06l-.75,4.17a10.14,10.14,0,0,1-.29,1.21,6.83,6.83,0,0,1-.46,1.16,5.6,5.6,0,0,1-1.68,2,6.89,6.89,0,0,1-.64.4,5.39,5.39,0,0,1-1.62.57,4.1,4.1,0,0,1-1.21.06,6.83,6.83,0,0,1-1.5-.17l-12.56-2.31a8.18,8.18,0,0,1-1.21-.28l-1.05-.35a5,5,0,0,1-1.62-1,7.09,7.09,0,0,1-1.1-1.39,4.66,4.66,0,0,1-.52-1.45,6.14,6.14,0,0,1,0-2.49c0-.05.06-.05,0-.11Z"
                        fill="#12122f" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g>
            <rect x="287.41" y="774.02" width="813.09" height="69.44" rx="20" fill="#27b3b6" />
            <circle cx="532.3" cy="679.89" r="19.13" fill="#ffd17a" />
            <circle cx="349.59" cy="887.46" r="19.13" fill="#ffd17a" />
            <circle cx="935.97" cy="660.76" r="19.13" fill="#3bbabc" />
            <path
              d="M409.65,793.18a33.06,33.06,0,0,0,7.22-3l6.18,6.17a2.19,2.19,0,0,0,3.09,0l9.46-9.46a2.19,2.19,0,0,0,0-3.09l-6.18-6.18a32.11,32.11,0,0,0,3-7.22h8.73a2.2,2.2,0,0,0,2.19-2.19V754.83a2.19,2.19,0,0,0-2.19-2.18h-8.73a32.19,32.19,0,0,0-3-7.23l6.18-6.18a2.19,2.19,0,0,0,0-3.09l-9.46-9.46a2.19,2.19,0,0,0-3.09,0l-6.18,6.18a32.66,32.66,0,0,0-7.23-3v-8.73a2.19,2.19,0,0,0-2.18-2.19H394.08a2.2,2.2,0,0,0-2.19,2.19v8.73a32.58,32.58,0,0,0-7.22,3l-6.18-6.18a2.19,2.19,0,0,0-3.09,0l-9.46,9.46a2.2,2.2,0,0,0,0,3.1l6.17,6.17a33.14,33.14,0,0,0-3,7.23h-8.73a2.19,2.19,0,0,0-2.18,2.18v13.38a2.19,2.19,0,0,0,2.19,2.19h8.73a32.19,32.19,0,0,0,3,7.23l-6.18,6.17a2.19,2.19,0,0,0,0,3.09l9.46,9.46a2.17,2.17,0,0,0,3.09,0l6.18-6.17a33.14,33.14,0,0,0,7.23,3v8.73a2.19,2.19,0,0,0,2.18,2.19h13.38a2.2,2.2,0,0,0,2.19-2.19v-8.73Zm-8.88-14.54a17.12,17.12,0,1,1,17.12-17.12,17.11,17.11,0,0,1-17.12,17.12Z"
              fill="#e84312" fillRule="evenodd" />
            <path
              d="M1040.41,691.68a27.85,27.85,0,1,0,23.43,31.66,27.85,27.85,0,0,0-23.43-31.66Zm12.35,21-17.41,17.38a3,3,0,0,1-3.65.43,3.42,3.42,0,0,1-.8-.72l-9.27-12.14a3,3,0,1,1,4.7-3.59l7.22,9.45,15-15a3,3,0,0,1,4.25,4.11l-.08.08Z"
              fill="#7169fa" />
            <circle cx="715.96" cy="843.46" r="32.52" fill="#ff65a7" />
            <circle cx="1027.8" cy="925.73" r="19.13" fill="#e84312" />
          </g>
          <g id="blocks">
            <g>
              <rect x="263.5" y="277.64" width="189" height="62" rx="5" fill="#3bbabc" />
              <text transform="translate(308.5 314.64)" fontSize="17" fill="#fff"
                    fontFamily="Arial, sans-serif" fontWeight="700">Email inbox
              </text>
            </g>
            <g>
              <rect x="437.5" y="131.64" width="189" height="61" rx="5" fill="#2852f0" />
              <text transform="translate(466.5 168.64)" fontSize="17" fill="#fff"
                    fontFamily="Arial, sans-serif" fontWeight="700">Slack message
              </text>
            </g>
            <g>
              <rect x="758.5" y="162.64" width="189" height="61" rx="5" fill="#7860fa" />
              <text transform="translate(781.5 199.64)" fontSize="17" fill="#fff"
                    fontFamily="Arial, sans-serif" fontWeight="700">Data dashboard
              </text>
            </g>
            <g>
              <rect x="882.5" y="319.64" width="189" height="62" rx="5" fill="#e84312" />
              <text transform="translate(915.5 357.64)" fontSize="17" fill="#fff"
                    fontFamily="Arial, sans-serif" fontWeight="700">Support ticket
              </text>
            </g>
          </g>
        </g>
      </svg>
      <div ref={el => averageTitle = el} className={styles.averageTitle}>
        <h5>Working for you within minutes</h5>
        <h2>
         <span>Does it ever feel like</span> <br />
          productivity tools have <br />
          made even more work?
        </h2>
      </div>
    </div>
  );
};

