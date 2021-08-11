// core
import React, { MouseEvent, useCallback, useEffect, useRef } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useDispatch } from 'react-redux';

// components
import { modalsActions } from '../../redux/modals/actions';

// styles
import styles from './About.module.scss';
import man from '../../assets/home/images/about/man.svg';

import bc from '../../assets/home/images/about/bc.png';
import bonfire from '../../assets/home/images/about/bonfire.png';
import dc from '../../assets/home/images/about/dc.png';
import strat from '../../assets/home/images/about/strat-minds.png';
import ventures from '../../assets/home/images/about/ventures.png';
import buffalo from '../../assets/home/images/about/buffalo.png';

import matt from '../../assets/home/images/about/matt-cooley.jpeg';
import baba from '../../assets/home/images/about/baba.png';
import anite from '../../assets/home/images/about/anite.png';
import farooq from '../../assets/home/images/about/farooq-khalid.jpg';
import jason from '../../assets/home/images/about/jason.png';
import ragu from '../../assets/home/images/about/ragu-mantatikar.jpg';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { AboutImage } from '../../components/AboutImage';

const duration = 2;
export const About = () => {
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
  const t2 = new TimelineLite();
  let sectionTwo: any = useRef(null);
  let sectionTwoInner: any = useRef(null);
  const t3 = new TimelineLite();
  let sectionThree: any = useRef(null);
  let sectionThreeItems: any = useRef(null);
  const t4 = new TimelineLite();
  let sectionFour: any = useRef(null);
  let sectionFourLeft: any = useRef(null);
  let sectionFourRight: any = useRef(null);

  useEffect(() => {
    if (width > 767) {
      t1.to(helpTitleOne, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: duration,
      })
        .to(sectionOneLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
        .to(sectionOneRight, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      if (scroll > sectionTwo.offsetTop - 500) {
        t2.to(sectionTwoInner, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        });
      }
      if (scroll > sectionThree.offsetTop - 500) {
        t3.to(sectionThreeItems, {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          duration: duration,
        });
      }
      if (scroll > sectionFour.offsetTop - 500) {
        t4.to(sectionFourLeft, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(sectionFourRight, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      }
    }
  }, [width, scroll, t1, t3, t4, t2]);

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
    <main className={`${styles.about} global`}>
      <section className={styles.help}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h1 ref={el => (helpTitleOne = el)}>About Us</h1>
          <div className={styles.helpInner}>
            <div ref={el => (sectionOneLeft = el)} className={styles.helpLeft}>
              <ul className={styles.info}>
                <li>
                  <p>Established</p>
                  <h4>2016</h4>
                </li>
                <li>
                  <p>Headquarters</p>
                  <h4>San Francisco</h4>
                </li>
              </ul>
              <ul className={styles.description}>
                <li>
                  <h6>Mission:</h6>
                  <p>
                    To deliver better user - centric outcomes through intelligent cognitive automation, empowering a
                    synergistic human digital workforce.
                  </p>
                </li>
                <li>
                  <h6>Vision:</h6>
                  <p>To help people work smarter</p>
                </li>
              </ul>
            </div>
            <div ref={el => (sectionOneRight = el)} className={styles.helpRight}>
              <AboutImage />
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionTwo = el)} className={styles.partners}>
        <div className="container">
          <div ref={el => (sectionTwoInner = el)} className={styles.partnersInner}>
            <ul className={styles.partnersList}>
              <li>
                <h6>VC Backed:</h6>
                <div>
                  <img src={bonfire} alt="" />
                  <img src={dc} alt="" />
                  <img src={bc} alt="" />
                  <img src={strat} alt="" />
                  <img src={ventures} alt="" />
                  <img src={buffalo} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section ref={el => (sectionThree = el)} className={`${styles.team} teamSlider`}>
        <div className="container">
          <div ref={el => (sectionThreeItems = el)} className={styles.teamInner}>
            <Swiper
              navigation
              slidesPerView={3}
              spaceBetween={48}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                1250: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles.teamItem}>
                  <div className={styles.teamTop}>
                    <img src={baba} alt="" />
                    <div className={styles.description}>
                      <h6>Baba Nadimpalli</h6>
                      <p>CEO</p>
                    </div>
                  </div>
                  <p>
                    Baba has had two successful startup exits and 15+ years growing enterprises from $20M to well over
                    $500M.
                  </p>
                  <p>
                    As an enterprise customer and supplier, Baba repeatedly searched for a tool that would help
                    eliminate data silos for better decision making before starting SKAEL.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.teamItem}>
                  <div className={styles.teamTop}>
                    <img src={matt} alt="" />
                    <div className={styles.description}>
                      <h6>Matt Cooley</h6>
                      <p>President & COO</p>
                    </div>
                  </div>
                  <p>
                    Matt Cooley is a 17 year SaaS veteran with a focus on scaling early stage software companies from
                    the SMB into the enterprise.
                  </p>
                  <p>
                    Matt is most notably known for his time at New Relic where he ran global sales, driving the company
                    from $0 to $100M in revenue and eventually a multi-billion dollar IPO in 2014. And leading GTM Sales
                    for Citrix Online, Mixpanel & Quip (acquired by Salesforce).
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.teamItem}>
                  <div className={styles.teamTop}>
                    <img src={farooq} alt="" />
                    <div className={styles.description}>
                      <h6>Farooq Khalid</h6>
                      <p>VP Products</p>
                    </div>
                  </div>
                  <p>
                    20+ years of experience as a customer, supplier, and reseller. Farooq loves working with customers
                    and partners to evangelize AI adoption.
                  </p>
                  <p>
                    An expert with the latest NLP, ML, and workflow automation tool-sets. Farooq insures we properly
                    translate business needs to functionality.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.teamItem}>
                  <div className={styles.teamTop}>
                    <img src={ragu} alt="" />
                    <div className={styles.description}>
                      <h6>Ragu Mantatikar</h6>
                      <p>VP Service Delivery</p>
                    </div>
                  </div>
                  <p>
                    25 years of Service Management experience. Widely certified practitioner, trainer and entrepreneur.
                    Specialized in delivering enterprise - wide AI programs.
                  </p>
                  <p>
                    Ragu is a board member of the ITSMFA and certified as an ITIL v3 Expert and v4 Foundation, Prince2
                    and Agile Scrum Master.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.teamItem}>
                  <div className={styles.teamTop}>
                    <img src={anite} alt="" />
                    <div className={styles.description}>
                      <h6>Anita Nunes</h6>
                      <p>VP Global Sales</p>
                    </div>
                  </div>
                  <p>
                    Senior business development executive offering a documented track record of entrepreneurial
                    leadership in complex technical sales environments. Noteworthy for combining deep strategic,
                    financial and operational expertise with an instinctual ability to create opportunities, command a
                    room and motivate people to action.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.teamItem}>
                  <div className={styles.teamTop}>
                    <img src={jason} alt="" />
                    <div className={styles.description}>
                      <h6>Jason Matis</h6>
                      <p>Snr. Systems Engineering Manager</p>
                    </div>
                  </div>
                  <p>
                    Proven leader with strong technical foundation and business acumen who has supported clients ranging
                    from medium business to Fortune 50 heavyweights. A trusted advisor who focuses on solutions tied to
                    customer business needs. Able to translate technical requirements into business outcomes. Works
                    across organizations to complete requirements, and improve product offerings.
                  </p>
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

export default About;
