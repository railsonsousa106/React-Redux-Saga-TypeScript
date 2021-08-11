// core
import React, { useEffect, useRef, useState } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';

// styles
import styles from './News.module.scss';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';

const duration = 2;

const News = () => {
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();
  const [items, setItems] = useState([{ post_id: '', title: '', description: '', image: '', created: '' }]);

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let sectionOneTitle: any = useRef(null);
  let sectionOneInner: any = useRef(null);

  useEffect(() => {
    if (width > 767) {
      t1.to(sectionOneTitle, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }).to(
        sectionOneInner,
        { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration },
        `-=${duration}`
      );
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

  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(result => {
        setItems(result);
      });
  }, []);

  return (
    <main className={`${styles.newsPage} global`}>
      <section className={styles.news}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h1 ref={el => (sectionOneTitle = el)}>News</h1>
          <div className={styles.newsInner} ref={el => (sectionOneInner = el)}>
            {items.map(item => (
              <div key={item.post_id} className={styles.newsItem}>
                <div className={styles.image}>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.description}>
                  <h4>{item.title}</h4>
                  <div className={styles.info}>
                    <a href={`news/${item.post_id}`} className="btn btnGreen">
                      Read
                    </a>
                    <span>{item.created}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className={styles.pagination}>
            <span className={styles.active}>1</span>
            <span>2</span>
            <span>3</span>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default News;
export { News };
