// core
import React, { useCallback, useEffect, useRef, useState, MouseEvent } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux';

import { modalsActions } from '../../redux/modals/actions';

// components
import { AverageImage } from './AverageImage/AverageImage';
import { EmployeesImage } from './EmployeesImage/EmployeesImage';
import { BannerImage } from './BannerImage/BannerImage';
import { UI_ROUTES as routes } from '../../constants/routes';

// assets
import { publicImagesURL } from '../../config';

import styles from './Home.module.scss';

import hubspot from '../../assets/home/images/home/hubspot.svg';
import microsoft from '../../assets/home/images/home/microsoft.svg';
import slack from '../../assets/home/images/slack-blue.svg';
import salesforce from '../../assets/home/images/home/salesforce.svg';
import calendar from '../../assets/home/images/home/calendar.svg';
import jira from '../../assets/home/images/home/jira.svg';
import mail from '../../assets/home/images/home/mail.svg';
import now from '../../assets/home/images/home/now.svg';
import quickbooks from '../../assets/home/images/home/quickbooks.svg';
import xero from '../../assets/home/images/home/xero.svg';
import zendesk from '../../assets/home/images/home/zendesk.svg';
import introducing from '../../assets/home/images/home/introducing.svg';
import introducing1 from '../../assets/home/images/home/introducing.png';
import play from '../../assets/home/images/play.svg';

import idc from '../../assets/home/images/home/idc.svg';
import gallup from '../../assets/home/images/home/gallup.svg';
import ultimate from '../../assets/home/images/home/ultimate.svg';
import girl1 from '../../assets/home/images/home/girl1.svg';
import girl2 from '../../assets/home/images/home/girl2.png';
import girl3 from '../../assets/home/images/home/girl3.png';
import man from '../../assets/home/images/home/man.svg';
import drag from '../../assets/home/images/drag.svg';
import { DE_TYPES } from '../../constants/digitalEmployee';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { useMousePosition } from '../../customHooks/useMousePosition';

const alex = `${publicImagesURL}/alex.svg`;
const drew = `${publicImagesURL}/drew.svg`;
const june = `${publicImagesURL}/june.svg`;

const duration = 2;

const Home = () => {
  const dispatch = useDispatch();

  SwiperCore.use([Navigation, Pagination]);
  const [showVideo, setShowVideo] = useState(false);
  const [positionX, setPositionX] = useState('55%');
  const [trackPositionX, setTrackPositionX] = useState(false);

  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();
  const { x }: any = useMousePosition();

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let banner: any = useRef(null);
  let bannerDescription: any = useRef(null);
  let bannerImage: any = useRef(null);
  const t2 = new TimelineLite();
  let sectionTwo: any = useRef(null);
  let plugAndPlayLeft: any = useRef(null);
  let plugAndPlayRight: any = useRef(null);
  const t3 = new TimelineLite();
  let sectionThree: any = useRef(null);
  let introducingTitle: any = useRef(null);
  let introducingInner: any = useRef(null);
  const t5 = new TimelineLite();
  let sectionFive: any = useRef(null);
  let advantageInner: any = useRef(null);
  const t7 = new TimelineLite();
  let sectionSeven: any = useRef(null);
  let workforceTitle: any = useRef(null);
  let workforceSlider: any = useRef(null);
  const t8 = new TimelineLite();
  let sectionEight: any = useRef(null);
  let blogInner: any = useRef(null);

  useEffect(() => {
    let dayAndNightAnim = gsap.timeline({
      defaults: { ease: 'sine.inOut' },
      repeat: -1,
      repeatDelay: 0.75,
      delay: 0,
    });
    dayAndNightAnim.to(banner, 2, { opacity: 0.2, yoyo: true, repeat: 1, repeatDelay: 2 }, 4);
  }, []);

  useEffect(() => {
    if (width > 767) {
      t1.to(bannerDescription, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: duration,
      }).to(bannerImage, { opacity: 1, y: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      if (scroll > sectionTwo.offsetTop - 500) {
        t2.to(plugAndPlayLeft, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(plugAndPlayRight, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      }
      if (scroll > sectionThree.offsetTop - 500) {
        t3.to(introducingTitle, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(introducingInner, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      }
      if (scroll > sectionFive.offsetTop - 500) {
        t5.to(advantageInner, {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          duration: duration,
        });
      }
      if (scroll > sectionSeven.offsetTop - 500) {
        t7.to(workforceTitle, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(workforceSlider, { opacity: 1, y: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      }
      if (scroll > sectionEight.offsetTop - 500) {
        t8.to(blogInner, {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          duration: duration,
        });
      }
    }
  }, [width, scroll, t1, t2, t3, t5, t7, t8]);

  useEffect(() => {
    if (trackPositionX) setPositionX(x);
  }, [trackPositionX, x]);

  const onClickFreeTrial = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      dispatch(modalsActions.freeTrialModalToggle(true));
    },
    [dispatch]
  );

  return (
    <main className={`${styles.home} global`}>
      <section className={styles.banner}>
        <div className={styles.overlay} ref={el => (banner = el)} />
        <div className="container">
          <div className={styles.bannerInner}>
            <div ref={el => (bannerDescription = el)} className={styles.bannerDescription}>
              <h1>
                Scale Up <br />
                Your Team
              </h1>
              <p>With SKAEL’s Digital Employees</p>
              <h6>
                <a href={routes.plugAndPlay}>
                  <span>What are Digital Employees?</span>
                </a>
              </h6>
              <a href={routes.home} className={`btn btnGreen ${styles.bannerBtn}`} onClick={onClickFreeTrial}>
                Request Demo
              </a>
            </div>
            <div ref={el => (bannerImage = el)} className={styles.bannerImage}>
              <BannerImage />
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionTwo = el)} className={styles.plugAndPlay}>
        <span
          style={{ left: `${positionX}px` }}
          onMouseDown={() => setTrackPositionX(true)}
          onMouseUp={() => setTrackPositionX(false)}
          className={styles.drag}
        >
          <img src={drag} alt="" />
        </span>
        <div className={styles.viewWrapper}>
          <div style={{ width: `${positionX}px` }} className={styles.viewAfter}>
            <div className={styles.viewAfterInner}>
              <div className={`${styles.container} container`}>
                <h5>Working for you within minutes</h5>
                <h2>
                  <span>Plug-and-Play</span> Digital Employees
                </h2>
                <div className={styles.plugAndPlayInner}>
                  <div ref={el => (plugAndPlayRight = el)} className={styles.plugAndPlayRight}>
                    <div className={`${styles.items} plugAndPlay`}>
                      <Swiper
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        simulateTouch={false}
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
                          <div className={styles.itemInfo}>
                            <div className={styles.itemTop}>
                              <img src={june} alt="" />
                              <div className={styles.itemTitle}>
                                <h2>June</h2>
                                <a href={routes.home} className="btn">
                                  Sales Support
                                </a>
                              </div>
                            </div>
                            <h6>Works with:</h6>
                            <div className={styles.works}>
                              <img src={hubspot} alt="" />
                              <img src={microsoft} alt="" />
                              <img src={slack} alt="" />
                              <img src={salesforce} alt="" />
                              <img src={calendar} alt="" />
                            </div>
                            <div className={styles.buttons}>
                              <a href={`${routes.plugAndPlay}/${DE_TYPES.june}`} className="btn">
                                More Info
                              </a>
                              <a href={`${routes.plugAndPlay}/${DE_TYPES.june}`} className="btn btnGreen">
                                Try June
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={`${styles.itemInfo} ${styles.alex}`}>
                            <div className={styles.itemTop}>
                              <img src={alex} alt="" />
                              <div className={styles.itemTitle}>
                                <h2>Alex</h2>
                                <a href={routes.home} className="btn">
                                  Finance
                                </a>
                              </div>
                            </div>
                            <h6>Works with:</h6>
                            <div className={styles.works}>
                              <img src={slack} alt="" />
                              <img src={microsoft} alt="" />
                              <img src={xero} alt="" />
                              <img src={mail} alt="" />
                              <img src={quickbooks} alt="" />
                            </div>
                            <div className={styles.buttons}>
                              <a href="/" className="btn" onClick={onClickFreeTrial}>
                                More Info
                              </a>
                              <a href="/" className="btn btnGreen" onClick={onClickFreeTrial}>
                                Try Alex
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={`${styles.itemInfo} ${styles.drew}`}>
                            <div className={styles.itemTop}>
                              <img src={drew} alt="" />
                              <div className={styles.itemTitle}>
                                <h2>Drew</h2>
                                <a href={routes.home} className="btn">
                                  Service Desk
                                </a>
                              </div>
                            </div>
                            <h6>Works with:</h6>
                            <div className={styles.works}>
                              <img src={microsoft} alt="" />
                              <img src={slack} alt="" />
                              <img src={now} alt="" />
                              <img src={zendesk} alt="" />
                              <img src={jira} alt="" />
                            </div>
                            <div className={styles.buttons}>
                              <a href={`${routes.plugAndPlay}/${DE_TYPES.drew}`} className="btn">
                                More Info
                              </a>
                              <a href={`${routes.plugAndPlay}/${DE_TYPES.drew}`} className="btn btnGreen">
                                Try Drew
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.viewBefore}>
            <div className={`${styles.container} container`}>
              <h5>It just takes minutes</h5>
              <h2>
                <span>Build-Your-Own</span> Digital Employees
              </h2>
              <div className={styles.plugAndPlayInner}>
                <div ref={el => (plugAndPlayLeft = el)} className={styles.plugAndPlayLeft}>
                  <div className={styles.plugAndPlayImage}>
                    {/*<img className={styles.play} src={play} alt='' />*/}
                    <img className={styles.image} src={introducing} alt="" />
                  </div>
                  <div className={styles.button}>
                    <a href={routes.plugAndPlay} className="btn btnGreen">
                      Start here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionThree = el)} className={styles.introducing}>
        {showVideo && (
          <div className={styles.introducingPopup}>
            <div className={styles.iframeWrapper}>
              <span className={styles.close} onClick={() => setShowVideo(false)} />
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7SVWRLEYUHQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
        <h2 ref={el => (introducingTitle = el)} className={styles.introducingTitle}>
          <span>Introducing SKAEL</span>
        </h2>
        <div ref={el => (introducingInner = el)} className={styles.introducingInner}>
          <img src={introducing1} alt="" />
          <img className={styles.play} src={play} alt="" onClick={() => setShowVideo(true)} />
        </div>
      </section>
      <section className={styles.average}>
        <AverageImage />
      </section>
      <section ref={el => (sectionFive = el)} className={styles.advantage}>
        <div ref={el => (advantageInner = el)} className={styles.advantageInner}>
          <div className={styles.advantageItem}>
            <div className={styles.number}>1</div>
            <h2>47%</h2>
            <p>
              of an employee's working hours are <span className="strong">wasted</span> on information searches across
              data silos
            </p>
            <img src={idc} alt="" />
          </div>
          <div className={styles.advantageItem}>
            <div className={styles.number}>2</div>
            <h2>53%</h2>
            <p>
              <span className="strong"> of employees</span> give the minimum effort required-and will quickly leave for
              even a slightly better offer
            </p>
            <img src={gallup} alt="" />
          </div>
          <div className={styles.advantageItem}>
            <div className={styles.number}>3</div>
            <h2>92%</h2>
            <p>
              of employees say having technology that helps them do their job efficiently affects their work
              satisfaction
            </p>
            <img src={ultimate} alt="" />
          </div>
        </div>
      </section>
      <section className={`${styles.average} ${styles.employees}`}>
        <EmployeesImage />
      </section>
      <section ref={el => (sectionSeven = el)} className={`${styles.workforce} workforce`}>
        <div className={styles.workforceInner}>
          <h2 ref={el => (workforceTitle = el)} className={styles.workforceTitle}>
            <span>Our Digital Workforce in Action</span>
          </h2>
          <div ref={el => (workforceSlider = el)} className={styles.workforceSlider}>
            <Swiper spaceBetween={10} navigation slidesPerView={1}>
              <SwiperSlide>
                <div className={styles.workforceItem}>
                  <h3>SKAEL saves HR $400k+</h3>
                  <p>A major insurance company with 19k employees transformed employee onboarding with SKAEL.</p>
                  <div className={styles.workforceItems}>
                    <div className={styles.item}>
                      <img src={girl1} alt="" />
                      <div className={styles.itemDescription}>
                        <h5>Traditional way</h5>
                        <p>
                          6 hours spent onboarding <br />
                          each employee
                        </p>
                        <h5 className={styles.subTitle}>
                          $816k cost <br />
                          per year
                        </h5>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <img src={man} alt="" />
                      <div className={styles.itemDescription}>
                        <h5>With SKAEL</h5>
                        <p>
                          Onboarding effort <br />
                          halved
                        </p>
                        <h5 className={styles.subTitle}>
                          $416k savings <br />
                          per year
                        </h5>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <h5>Additional benefits</h5>
                      <div className={styles.itemDescription}>
                        <div>72.98% increase in sat. scores</div>
                        <div>Immediately gets to work</div>
                        <div>92.11% decrease in human error</div>
                        <div>Complete visibility into work done</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.workforceItem}>
                  <h3>SKAEL saves Sales $1.4M/year</h3>
                  <p>A large technology company with 500 sales pros transformed sales operations with SKAEL.</p>
                  <div className={styles.workforceItems}>
                    <div className={styles.item}>
                      <img src={girl1} alt="" />
                      <div className={styles.itemDescription}>
                        <h5>Traditional way</h5>
                        <p>
                          50hrs/year/sales pro <br />
                          updating and reporting
                        </p>
                        <h5 className={styles.subTitle}>
                          $2.375M cost <br />
                          per year
                        </h5>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <img src={girl2} alt="" />
                      <div className={styles.itemDescription}>
                        <h5>With SKAEL</h5>
                        <p>
                          Onboarding effort <br />
                          halved
                        </p>
                        <h5 className={styles.subTitle}>
                          $1.4M savings <br />
                          per year
                        </h5>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <h5>Additional benefits</h5>
                      <div className={styles.itemDescription}>
                        <div>69% better forecast accuracy</div>
                        <div>Instant Analytics</div>
                        <div>86% faster quote-to-cast</div>
                        <div>Sales Team focused on customers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.workforceItem}>
                  <h3>SKAEL saves Finance $1.5M/year</h3>
                  <p>A global manufacturing company with 7,500 requests per month evolves Finance with SKAEL.</p>
                  <div className={styles.workforceItems}>
                    <div className={styles.item}>
                      <img src={girl1} alt="" />
                      <div className={styles.itemDescription}>
                        <h5>Traditional way</h5>
                        <p>
                          45min per inquiry with <br />
                          over 10,000 active suppliers
                        </p>
                        <h5 className={styles.subTitle}>
                          $ 2.4M cost <br />
                          per year
                        </h5>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <img src={man} alt="" />
                      <div className={styles.itemDescription}>
                        <h5>With SKAEL</h5>
                        <p>
                          Human workload reduced <br />
                          by over 79%
                        </p>
                        <h5 className={styles.subTitle}>
                          $1.5M savings <br />
                          per year
                        </h5>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <h5>Additional benefits</h5>
                      <div className={styles.itemDescription}>
                        <div>97% better speed of execution</div>
                        <div>34% reduction in supplier attrition</div>
                        <div>On-Demand Compliance Reporting</div>
                        <div>End-to-End Secure Comms</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.workforceItem}>
                  <h3>SKAEL saves IT $1.2M/year</h3>
                  <p>An automotive company dramatically evolves proactive customer and employee support with SKAEL.</p>
                  <div className={styles.workforceItems}>
                    <div className={styles.item}>
                      <img src={girl1} alt="" />
                      <div className={styles.itemDescription}>
                        <h5>Traditional way</h5>
                        <p>
                          $94 avg downtime cost with <br />
                          60min incident response
                        </p>
                        <h5 className={styles.subTitle}>
                          $1.7M cost <br />
                          per year
                        </h5>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <img src={girl3} alt="" />
                      <div className={styles.itemDescription}>
                        <h5>With SKAEL</h5>
                        <p>
                          Instant 80% queue <br />
                          reduction
                        </p>
                        <h5 className={styles.subTitle}>
                          $1.2M savings <br />
                          per year
                        </h5>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <h5>Additional benefits</h5>
                      <div className={styles.itemDescription}>
                        <div>73% increase in employee satisfaction</div>
                        <div>2 min response time</div>
                        <div>24/7 availability</div>
                        <div>Learns from resolved tickets</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section ref={el => (sectionEight = el)} className={styles.blog}>
        <div ref={el => (blogInner = el)} className={styles.blogInner}>
          <h5>Latest Posts</h5>
          <h2>
            From Our <span>Blog</span>
          </h2>
          <div className={styles.blogItems}>
            <div className={styles.blogItem}>
              <button type="button" className="btn btnGreen">
                Service Delivery
              </button>
              <h6>First AI Project - What to expect?</h6>
              <p>How do we prepare ourselves to execute first AI project successfully?</p>
            </div>
            <div className={styles.blogItem}>
              <button type="button" className="btn btnPurple">
                Design
              </button>
              <h6>Conversation vs. Design</h6>
              <p>
                Just because you can hold a conversation, doesn't mean you can design a conversational assistant. Let me
                share my thoughts of where we're headed.
              </p>
            </div>
            <div className={styles.blogItem}>
              <button type="button" className="btn">
                Service Delivery
              </button>
              <h6>How AI adds value to ITSM</h6>
              <p>
                Service Management has evolved dramatically over the years, How AI is going to disrupt the way service
                is delivered.
              </p>
            </div>
          </div>
          <a href={routes.home}>View All Posts</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
export { Home };
