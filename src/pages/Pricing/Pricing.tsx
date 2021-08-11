// core
import React, { useCallback, useEffect, useRef, useState } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { useDispatch } from 'react-redux';

// components
import { modalsActions } from '../../redux/modals/actions';

// routes
import { UI_ROUTES as routes } from '../../constants/routes';

// styles
import styles from './Pricing.module.scss';
import special from '../../assets/home/images/pricing/trial.svg';
import popular from '../../assets/home/images/pricing/popular.svg';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { DE_TYPES } from '../../constants/digitalEmployee';
// import slack from 'assets/home/images/slack.svg';

const duration = 2;

const Pricing = () => {
  const dispatch = useDispatch();

  SwiperCore.use([Pagination, Navigation]);

  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  const [activeTab, setActiveTab] = useState(0);

  const onClickFreeTrial = useCallback(
    event => {
      event.preventDefault();
      dispatch(modalsActions.freeTrialModalToggle(true));
    },
    [dispatch]
  );

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let helpTitleOne: any = useRef(null);
  let helpSubTitleOne: any = useRef(null);
  const t2 = new TimelineLite();
  let sectionThree: any = useRef(null);
  let sectionThreeInner: any = useRef(null);

  useEffect(() => {
    if (width > 767) {
      t1.to(helpTitleOne, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }).to(
        helpSubTitleOne,
        { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration },
        `-=${duration}`
      );
      if (scroll > sectionThree.offsetTop - 500) {
        t2.to(sectionThreeInner, { opacity: 1, y: 0, ease: Power3.easeOut, duration: duration });
      }
    }
  }, [width, scroll, t1, t2]);

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
    <main className={`${styles.price} global`}>
      <section className={styles.help}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h5 ref={el => (helpSubTitleOne = el)}>Flexible to you</h5>
          <h1 ref={el => (helpTitleOne = el)}>Our Pricing Plans</h1>
        </div>
      </section>
      <section ref={el => (sectionThree = el)} className={`${styles.plans} plansSlider`}>
        <div className="container">
          <div ref={el => (sectionThreeInner = el)} className={styles.plansInner}>
            <ul className={styles.tabs}>
              <li className={activeTab == 0 ? styles.active : ''} onClick={() => setActiveTab(0)}>
                Digital Workforce Platform Pricing
              </li>
              <li className={activeTab == 1 ? styles.active : ''} onClick={() => setActiveTab(1)}>
                Plug-and-Play Digital Employee Pricing
              </li>
            </ul>
            <div className={`${styles.panel}  ${activeTab === 0 ? styles.active : ''}`}>
              <Swiper
                navigation
                pagination={{ clickable: true }}
                freeMode={false}
                autoHeight={false}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 10 },
                  700: { slidesPerView: 2, spaceBetween: 28 },
                  1250: { slidesPerView: 3, spaceBetween: 28 },
                }}
              >
                <SwiperSlide>
                  <div className={styles.plan}>
                    <h6>FREE</h6>
                    <a className={styles.link} href="">
                      <span>Free Forever</span>
                    </a>
                    <hr />
                    <ul>
                      <li>Any Messaging Platform</li>
                      <li>Any Voice Platform</li>
                      <li>Read & Action Email</li>
                      <li>Read Calendars</li>
                      <li>CRUD tasks on 1 App</li>
                      <li>Unlimited Users</li>
                      <li>Unlimited Messages</li>
                      <li>Always Available</li>
                    </ul>
                    <button type="button" className="btn btnGreen" onClick={onClickFreeTrial}>
                      Request Demo
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.plan}>
                    <h6>SINGLE DIGITAL EMPLOYEE</h6>
                    <a className={styles.link} href="">
                      <span>Yearly Billing</span>
                    </a>
                    <hr />
                    <ul>
                      <li>Any Messaging Platform</li>
                      <li>Any Voice Platform</li>
                      <li>Read & Action Email</li>
                      <li>Read Calendars</li>
                      <li>CRUD tasks on 100,000s of Apps</li>
                      <li>Unlimited Users</li>
                      <li>Unlimited Messages</li>
                      <li>Always Available</li>
                      <li>Read & Action PDFs</li>
                      <li>Integrated Session RBAC & ABAC</li>
                      <li>Process & Task Mapping</li>
                    </ul>
                    <button type="button" className="btn" onClick={onClickFreeTrial}>
                      Request Demo
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.plan}>
                    <h6>MULTIPLE DIGITAL EMPLOYEES</h6>
                    <a className={styles.link} href="">
                      <span>Yearly Billing</span>
                    </a>
                    <hr />
                    <ul>
                      <li>Any Messaging Platform</li>
                      <li>Any Voice Platform</li>
                      <li>Read & Action Email</li>
                      <li>Read Calendars</li>
                      <li>CRUD tasks on 100,000s of Apps</li>
                      <li>Unlimited Users</li>
                      <li>Unlimited Messages</li>
                      <li>Always Available</li>
                      <li>Read & Action PDFs</li>
                      <li>Integrated Session RBAC & ABAC</li>
                      <li>Process & Task Mining</li>
                      <li>Your Cloud On-boarding</li>
                    </ul>
                    <button type="button" className="btn btnPurple" onClick={onClickFreeTrial}>
                      Request Demo
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={`${styles.panel} ${styles.panelMod} ${activeTab === 1 ? styles.active : ''}`}>
              <Swiper
                navigation
                pagination={{ clickable: true }}
                freeMode={false}
                autoHeight={false}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 10 },
                  700: { slidesPerView: 2, spaceBetween: 10 },
                  1250: { slidesPerView: 3, spaceBetween: 10 },
                }}
              >
                <SwiperSlide>
                  <div className={`${styles.plan} ${styles.planMod}`}>
                    <img className={styles.special} src={special} alt="" />
                    <h6>DREW</h6>
                    <h2>
                      <span>$</span>5
                    </h2>
                    <ul className={styles.description}>
                      <li>
                        <span>User / Month</span>
                      </li>
                      <li>
                        <span>Billed Annually</span>
                      </li>
                      <li>
                        <span>Min. 15 Users</span>
                      </li>
                    </ul>
                    <hr />
                    <ul className={styles.list}>
                      <li>ITSM System Integration</li>
                      <li>Knowledge Base Search</li>
                      <li>Open Tickets</li>
                      <li>Update Tickets</li>
                      <li>View Tickets</li>
                      <li>Close Tickets</li>
                      <li>Role-Based Access Control (RBAC)</li>
                      <li>
                        Historical and Real-time Incident Analytics:
                        <ul>
                          <li>by Department</li>
                          <li>by Manager</li>
                          <li>by Priority</li>
                        </ul>
                      </li>
                    </ul>
                    <a href={`${routes.plugAndPlay}/${DE_TYPES.drew}`} className={`${styles.slack} btn`}>
                      {/*<img src={slack} alt='' />*/}
                      Try Now
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${styles.plan} ${styles.planMod}`}>
                    <img className={styles.special} src={popular} alt="" />
                    <h6>ALEX</h6>
                    <h2>
                      <span>$</span>5
                    </h2>
                    <ul className={styles.description}>
                      <li>
                        <span>User / Month</span>
                      </li>
                      <li>
                        <span>Billed Annually</span>
                      </li>
                      <li>
                        <span>Min. 15 Users</span>
                      </li>
                    </ul>
                    <hr />
                    <ul className={styles.list}>
                      <li>Finance System Integration</li>
                      <li>Full AP Functionality</li>
                      <li>Full AR Functionality</li>
                      <li>Role-Based Access Control (RBAC)</li>
                      <li>
                        Historical and Real-time Financial Analytics:
                        <ul>
                          <li>P&L Reports</li>
                          <li>GP Reports</li>
                          <li>Cashflow Reports</li>
                        </ul>
                      </li>
                    </ul>
                    <a href="/" onClick={onClickFreeTrial} className={`${styles.slack} btn`}>
                      {/*<img src={slack} alt='' />*/}
                      Try Now
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${styles.plan} ${styles.planMod}`}>
                    <img className={styles.special} src={special} alt="" />
                    <h6>JUNE</h6>
                    <h2>
                      <span>$</span>5
                    </h2>
                    <ul className={styles.description}>
                      <li>
                        <span>User / Month</span>
                      </li>
                      <li>
                        <span>Billed Annually</span>
                      </li>
                      <li>
                        <span>Min. 15 Users</span>
                      </li>
                    </ul>
                    <hr />
                    <ul className={styles.list}>
                      <li>CRM Integration</li>
                      <li>Search Opportunities</li>
                      <li>Open Opportunities</li>
                      <li>Update Opportunities</li>
                      <li>View Opportunities</li>
                      <li>Close Opportunities</li>
                      <li>Role-Based Access Control (RBAC)</li>
                      <li>
                        Historical and Real-time Opportunity Analytics:
                        <ul>
                          <li>by Account Owner</li>
                          <li>by Account</li>
                          <li>by Amount</li>
                        </ul>
                      </li>
                    </ul>
                    <a href={`${routes.plugAndPlay}/${DE_TYPES.june}`} className={`${styles.slack} btn`}>
                      {/*<img src={slack} alt='' />*/}
                      Try Now
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
export { Pricing };
