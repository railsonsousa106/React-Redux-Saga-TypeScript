// core
import React, { useEffect, useRef } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';

// styles
import styles from './NewsSingle.module.scss';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';

const duration = 2;

const NewsSingle = ({ newSItems }: any) => {
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let sectionOneTitle: any = useRef(null);
  let sectionOneSubTitle: any = useRef(null);
  let sectionOneInner: any = useRef(null);

  useEffect(() => {
    if (width > 767) {
      t1.to(sectionOneTitle, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration })
        .to(sectionOneSubTitle, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
        .to(sectionOneInner, { opacity: 1, y: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
    }
  }, [width, scroll, t1]);

  const params: any = {
    particles: {
      number: {
        value: 15,
      },
      detectsOn: 'canvas',
      size: {
        random: true,
        value: 30,
      },
      color: {
        value: ['#7169FA', '#e84312', '#27b3b6', '#FF65A7', '#FFD17A'],
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
  };

  return (
    <main className={`${styles.newsSinglePage} global`}>
      <section className={styles.news}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h1 ref={el => (sectionOneTitle = el)}>{newSItems.title}</h1>
          <h5 ref={el => (sectionOneSubTitle = el)}>{newSItems.created}</h5>
          <div className={styles.newsInner} ref={el => (sectionOneInner = el)}>
            <div className={styles.image}>
              <img src={newSItems.image} alt="" />
            </div>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: newSItems.description }} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsSingle;
export { NewsSingle };
