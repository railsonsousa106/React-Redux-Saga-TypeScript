// core
import React, { MouseEvent, useCallback, useEffect, useRef } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useDispatch } from 'react-redux';

import { UI_ROUTES as routes } from '../../constants/routes';

import { modalsActions } from '../../redux/modals/actions';

// styles
import styles from './Partners.module.scss';
import man from '../../assets/home/images/about/man.svg';

import asurion from '../../assets/home/images/partners/asurion.png';
import google from '../../assets/home/images/partners/google.png';
import oracle from '../../assets/home/images/partners/oracle.png';
import quintica from '../../assets/home/images/partners/quintica.png';
import line from '../../assets/home/images/partners/line.png';
import m from '../../assets/home/images/partners/m.png';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { AboutImage } from '../../components/AboutImage';

const duration = 2;

const Partners = () => {
  const dispatch = useDispatch();

  SwiperCore.use([Navigation, Pagination]);

  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  const onClickFreeTrial = useCallback(
    (event: MouseEvent<HTMLHeadingElement>) => {
      event.preventDefault();
      dispatch(modalsActions.freeTrialModalToggle(true));
    },
    [dispatch]
  );

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let helpTitleOne: any = useRef(null);
  let sectionOneLeft: any = useRef(null);
  let sectionOneRight: any = useRef(null);
  const t3 = new TimelineLite();
  let sectionThree: any = useRef(null);
  let sectionThreeItems: any = useRef(null);
  const t4 = new TimelineLite();
  let sectionFour: any = useRef(null);
  let sectionFourLeft: any = useRef(null);
  let sectionFourRight: any = useRef(null);

  useEffect(() => {
    if (width > 767) {
      t1.to(helpTitleOne, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration })
        .to(sectionOneLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
        .to(sectionOneRight, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      if (scroll > sectionThree.offsetTop - 500) {
        t3.to(sectionThreeItems, { opacity: 1, y: 0, ease: Power3.easeOut, duration: duration });
      }
      if (scroll > sectionFour.offsetTop - 500) {
        t4.to(sectionFourLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }).to(
          sectionFourRight,
          { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration },
          `-=${duration}`
        );
      }
    }
  }, [width, scroll, t1, t3, t4]);

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
    <main className={`${styles.partners} global`}>
      <section className={styles.help}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h1 ref={el => (helpTitleOne = el)}>Partners</h1>
          <div className={styles.helpInner}>
            <div ref={el => (sectionOneLeft = el)} className={styles.helpLeft}>
              <p>
                Partners are fundamental to our success at SKAEL. We take great pride in building, nurturing and growing
                with our partner relationships.
              </p>
              <p>
                If your company is interested in exploring either a strategic or technology partnership with us, please
                reach out.
              </p>
              <a href={routes.contactUs} className={`btn btnGreen ${styles.helpBtn}`}>
                Contact Us
              </a>
            </div>
            <div ref={el => (sectionOneRight = el)} className={styles.helpRight}>
              <AboutImage />
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionThree = el)} className={`${styles.logos} partnersSlider`}>
        <div className="container">
          <div ref={el => (sectionThreeItems = el)} className={styles.logosInner}>
            <Swiper
              navigation
              slidesPerView={3}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 0 },
                700: { slidesPerView: 6, spaceBetween: 0 },
                1250: { slidesPerView: 6, spaceBetween: 32 },
              }}
            >
              <SwiperSlide>
                <div className={styles.logosItem}>
                  <img src={asurion} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.logosItem}>
                  <img src={google} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.logosItem}>
                  <img src={oracle} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.logosItem}>
                  <img src={quintica} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.logosItem}>
                  <img src={line} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.logosItem}>
                  <img src={m} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section ref={el => (sectionFour = el)} className={styles.connect}>
        <div className="container">
          <div className={styles.connectInner}>
            <div ref={el => (sectionFourLeft = el)} className={styles.connectDescription}>
              <h2>We’d love to hear from you!</h2>
              <h2 className={styles.contact} onClick={onClickFreeTrial}>
                <span>Contact Us</span>
              </h2>
            </div>
            <img ref={el => (sectionFourRight = el)} className={styles.man} src={man} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
export { Partners };
