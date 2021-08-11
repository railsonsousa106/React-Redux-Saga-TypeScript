// core
import React, { MouseEvent, useCallback, useEffect, useRef } from 'react';

// config
import { publicImagesURL } from '../../config';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';
import { BannerImage } from './BannerImage/BannerImage';
import { useDispatch } from 'react-redux';

import { modalsActions } from '../../redux/modals/actions';

// components
import { UI_ROUTES as routes } from '../../constants/routes';

// styles
import styles from './PlugAndPlay.module.scss';
import natural from '../../assets/home/images/plugAndPlay/natural.svg';
import automation from '../../assets/home/images/plugAndPlay/automation.svg';
import humans from '../../assets/home/images/plugAndPlay/humans-new.svg';
import phone from '../../assets/home/images/plugAndPlay/phone.svg';
import sales from '../../assets/home/images/plugAndPlay/sales.png';

// import playYellow from 'assets/home/images/play-yellow.svg';
// import playPurple from 'assets/home/images/play-purple.svg';
import hubspot from '../../assets/home/images/home/hubspot.svg';
import microsoft from '../../assets/home/images/home/microsoft.svg';
import slack from '../../assets/home/images/slack-blue.svg';
import salesforce from '../../assets/home/images/home/salesforce.svg';
import calendar from '../../assets/home/images/home/calendar.svg';
import xero from '../../assets/home/images/home/xero.svg';
import mail from '../../assets/home/images/home/mail.svg';
import quickbooks from '../../assets/home/images/home/quickbooks.svg';
import now from '../../assets/home/images/home/now.svg';
import zendesk from '../../assets/home/images/home/zendesk.svg';
import jira from '../../assets/home/images/home/jira.svg';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { DE_TYPES } from '../../constants/digitalEmployee';

const alex = `${publicImagesURL}/alex.svg`;
const drew = `${publicImagesURL}/drew.svg`;
const june = `${publicImagesURL}/june.svg`;

const duration = 2;

const PlugAndPlay = () => {
  const dispatch = useDispatch();

  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  // animations
  gsap.registerPlugin();
  const t2 = new TimelineLite();
  let casesTitle: any = useRef(null);
  let sectionTwoLeft: any = useRef(null);
  let sectionTwoRight: any = useRef(null);
  const t3 = new TimelineLite();
  let sectionThree: any = useRef(null);
  let sectionThreeTitle: any = useRef(null);
  let sectionThreeLeft: any = useRef(null);
  let sectionThreeRight: any = useRef(null);
  const t4 = new TimelineLite();
  let sectionFour: any = useRef(null);
  let sectionFourTitle: any = useRef(null);
  let sectionFourImage: any = useRef(null);
  let sectionFourBottom: any = useRef(null);
  const t5 = new TimelineLite();
  let sectionFive: any = useRef(null);
  let sectionFiveTitle: any = useRef(null);
  let sectionFiveLeft: any = useRef(null);
  let sectionFiveRight: any = useRef(null);
  const t6 = new TimelineLite();
  let sectionSix: any = useRef(null);
  let sectionSixTitle: any = useRef(null);
  let sectionSixLeft: any = useRef(null);
  let sectionSixRight: any = useRef(null);
  const t7 = new TimelineLite();
  let sectionSeven: any = useRef(null);
  let sectionSevenTitle: any = useRef(null);
  let sectionSevenLeft: any = useRef(null);
  let sectionSevenRight: any = useRef(null);
  const t8 = new TimelineLite();
  let sectionEight: any = useRef(null);
  let sectionEightLeft: any = useRef(null);
  let sectionEightRight: any = useRef(null);

  useEffect(() => {
    if (width > 767) {
      t2.to(casesTitle, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: duration,
      })
        .to(sectionTwoLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
        .to(sectionTwoRight, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      if (scroll > sectionThree.offsetTop - 500) {
        t3.to(sectionThreeTitle, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        })
          .to(sectionThreeLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
          .to(
            sectionThreeRight,
            {
              opacity: 1,
              x: 0,
              ease: Power3.easeOut,
              duration: duration,
            },
            `-=${duration}`
          );
      }
      if (scroll > sectionFour.offsetTop - 500) {
        t4.to(sectionFourTitle, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        })
          .to(sectionFourImage, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
          .to(
            sectionFourBottom,
            {
              opacity: 1,
              y: 0,
              ease: Power3.easeOut,
              duration: duration,
            },
            `-=${duration}`
          );
      }
      if (scroll > sectionFive.offsetTop - 500) {
        t5.to(sectionFiveTitle, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        })
          .to(sectionFiveLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
          .to(
            sectionFiveRight,
            {
              opacity: 1,
              x: 0,
              ease: Power3.easeOut,
              duration: duration,
            },
            `-=${duration}`
          );
      }
      if (scroll > sectionSix.offsetTop - 500) {
        t6.to(sectionSixTitle, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        })
          .to(sectionSixLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
          .to(
            sectionSixRight,
            {
              opacity: 1,
              x: 0,
              ease: Power3.easeOut,
              duration: duration,
            },
            `-=${duration}`
          );
      }
      if (scroll > sectionSeven.offsetTop - 500) {
        t7.to(sectionSevenTitle, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        })
          .to(sectionSevenLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
          .to(
            sectionSevenRight,
            {
              opacity: 1,
              x: 0,
              ease: Power3.easeOut,
              duration: duration,
            },
            `-=${duration}`
          );
      }
      if (scroll > sectionEight.offsetTop - 500) {
        t8.to(sectionEightLeft, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(
          sectionEightRight,
          {
            opacity: 1,
            x: 0,
            ease: Power3.easeOut,
            duration: duration,
          },
          `-=${duration}`
        );
      }
    }
  }, [scroll, width, t2, t3, t4, t5, t6, t7, t8]);

  const onClickFreeTrial = useCallback(
    (event: MouseEvent<HTMLHeadElement>) => {
      event.preventDefault();
      dispatch(modalsActions.freeTrialModalToggle(true));
    },
    [dispatch]
  );

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
    <main className={`${styles.plugAndPlay} global`}>
      <section className={styles.digital}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className={styles.container}>
          <h1 ref={el => (casesTitle = el)} className={styles.casesTitle}>
            Plug-and-Play
          </h1>
          <div className={styles.digitalInner}>
            <div ref={el => (sectionTwoLeft = el)} className={styles.digitalLeft}>
              <p>
                Digital Employees are similar to your human employees - they map to your existing processes, observe and
                remember multiple ways you and your enterprise can ask for those tasks to be completed. You work with
                them just like you work with other employees, by communicating via Slack or email for instance.
              </p>
              <p>
                The key differences between a human employee and a digital employee is that our workers can be onboard
                in minutes, are able to process their assignments in seconds, never forget to report on their progress
                and are available 24/7 to supercharge your human team.
              </p>
              <p>
                <a href={`${routes.plugAndPlay}/${DE_TYPES.june}`}>June</a>, <a onClick={onClickFreeTrial} href=''>Alex</a> and{' '}
                <a href={`${routes.plugAndPlay}/${DE_TYPES.drew}`}>Drew</a> are three common examples of Digital Employees used by
                our customers today. June specializes in Sales Support, Alex works in Finance and Drew is a Service Desk
                expert. Ready to give them a try in your organization?
              </p>
              <button type="button" className={`btn btnGreen ${styles.bannerBtn}`} onClick={onClickFreeTrial}>
                Sign Up
              </button>
            </div>
            <div ref={el => (sectionTwoRight = el)} className={styles.digitalRight}>
              <BannerImage />
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionThree = el)} className={styles.howDo}>
        <div className={styles.container}>
          <h2 ref={el => (sectionThreeTitle = el)}>
            How Do <span>Digital Employees</span> Work?
          </h2>
          <div className={styles.howDoInner}>
            <div ref={el => (sectionThreeLeft = el)} className={styles.howDoLeft}>
              <p>
                Our intelligent Digital Employees use Natural Language Processing (NLP) to understand how human
                employees communicate and are trained on hundreds of variations of sentences and words.
              </p>
              <div className={styles.natural}>
                <img src={natural} alt="" />
              </div>
            </div>
            <div ref={el => (sectionThreeRight = el)} className={styles.howDoRight}>
              <p>
                The SKAEL Universal Adapter maps to your existing business processes and uses your own data to power the
                work of our Digital Employees. That’s why they can onboard and ramp-up to peak performance in no time.
              </p>
              <div className={styles.automation}>
                <img src={automation} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="what" ref={el => (sectionFour = el)} className={styles.why}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className={styles.container}>
          <div ref={el => (sectionFourTitle = el)} className={styles.whyTitle}>
            <h2>
              Why <span>Digital Employees</span>?
            </h2>
            <p>
              Humans don’t work well with repetitive, boring tasks. They get tired, stressed, distracted and, as a
              result, make errors.
            </p>
          </div>
          <div ref={el => (sectionFourImage = el)} className={styles.whyImage}>
            <img src={humans} alt="" />
          </div>
          <div ref={el => (sectionFourBottom = el)} className={styles.whyBottom}>
            <div className={styles.whyBottomLeft}>
              <img src={phone} alt="" />
            </div>
            <div className={styles.whyBottomRight}>
              <h5>
                SKAEL Digital Employees process requests in less than two minutes on average. That’s less time than it
                takes most users to login to their application!{' '}
              </h5>
              <p>
                Organizations that make the work lives easier for their employees will outperform their industry peers.
                We’ve purposely designed our Digital Employees with simplicity in mind, not adding additional tools and
                using your employee's preferred communications methods.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="june" ref={el => (sectionFive = el)} className={styles.employees}>
        <div className={styles.container}>
          <div className={styles.employeesInner}>
            <div ref={el => (sectionFiveLeft = el)} className={styles.employeesLeft}>
              <h2 ref={el => (sectionFiveTitle = el)}>
                <span>June - Sales Support</span>
              </h2>
              <p>
                Updating a forecast is never fun, but it is a critical part of running a high-performing sales team.
              </p>
              <p>
                We designed June to ease the burden on our own sales executives by taking over the follow-ups, updates
                and reporting so they can focus on what’s important -- helping customers!
              </p>
              <p>
                June proactively reaches out to your sales team to get important updates at the right time, without
                asking them to login into your CRM and spend hours updating various fields. Sales executives reply in
                plain English (or their native language) and June does the rest - she updates your CRM, notifies the
                appropriate stakeholders and generates reports on a periodic basis.
              </p>
              {/*<a href={routes.plugAndPlay}>*/}
              {/*  <img src={playYellow} alt='' />*/}
              {/*  See June in Action*/}
              {/*</a>*/}
            </div>
            <div ref={el => (sectionFiveRight = el)} className={styles.employeesRight}>
              <div className={styles.itemInfo}>
                <div className={styles.itemTop}>
                  <img src={june} alt="" />
                  <div className={styles.itemTitle}>
                    <h2>June</h2>
                    <a
                      href="/"
                      className="btn"
                      onClick={e => {
                        e.preventDefault();
                      }}
                    >
                      Sales Support
                    </a>
                  </div>
                </div>
                <h6>Works with:</h6>
                <div className={styles.works}>
                  <div className={styles.imgWrapper}>
                    <img src={hubspot} alt="" />
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={salesforce} alt="" />
                    <div className={styles.comingSoon}>Coming soon</div>
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={calendar} alt="" />
                    <div className={styles.comingSoon}>Coming soon</div>
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={slack} alt="" />
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={microsoft} alt="" />
                  </div>
                </div>
                <div className={styles.buttons}>
                  <a href={`${routes.plugAndPlay}/${DE_TYPES.june}`} className="btn btnGreen">
                    Try June
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="alex" ref={el => (sectionSix = el)} className={`${styles.employees} ${styles.alex}`}>
        <div className={styles.container}>
          <div className={styles.employeesInner}>
            <div ref={el => (sectionSixLeft = el)} className={styles.employeesLeft}>
              <h2 ref={el => (sectionSixTitle = el)}>
                <span>Alex - Finance</span>
              </h2>
              <p>
                Answering an easy finance query can oftentimes be painful using existing account platforms. That’s why
                we made Alex.
              </p>
              <p>
                Ask Alex questions about the financial state of your business, and get answers in seconds. Understand
                how you’re trending, build and export custom reports and share with teammates straight from Slack,
                Microsoft Teams or Email.
              </p>
              {/*<a href={routes.plugAndPlay}>*/}
              {/*  <img src={playPurple} alt='' />*/}
              {/*  See Alex in Action*/}
              {/*</a>*/}
            </div>
            <div ref={el => (sectionSixRight = el)} className={styles.employeesRight}>
              <div className={`${styles.itemInfo} ${styles.alex}`}>
                <div className={styles.itemTop}>
                  <img src={alex} alt="" />
                  <div className={styles.itemTitle}>
                    <h2>Alex</h2>
                    <a
                      href="/"
                      className="btn"
                      onClick={e => {
                        e.preventDefault();
                      }}
                    >
                      Finance
                    </a>
                  </div>
                </div>
                <h6>Works with:</h6>
                <div className={styles.works}>
                  <div className={styles.imgWrapper}>
                    <img src={quickbooks} alt="" />
                    <div className={styles.comingSoon}>Coming soon</div>
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={xero} alt="" />
                    <div className={styles.comingSoon}>Coming soon</div>
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={mail} alt="" />
                    <div className={styles.comingSoon}>Coming soon</div>
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={slack} alt="" />
                    <div className={styles.comingSoon}>Coming soon</div>
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={microsoft} alt="" />
                    <div className={styles.comingSoon}>Coming soon</div>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <a href={`${routes.plugAndPlay}/${DE_TYPES.alex}`} className="btn btnGreen">
                    Try Alex
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="drew" ref={el => (sectionSeven = el)} className={`${styles.employees} ${styles.drew}`}>
        <div className={styles.container}>
          <div className={styles.employeesInner}>
            <div ref={el => (sectionSevenLeft = el)} className={styles.employeesLeft}>
              <h2 ref={el => (sectionSevenTitle = el)}>
                <span>Drew - Service Desk</span>
              </h2>
              <p>
                Meet Drew! He’s here to help be proactive with your ticket and issue resolution. Drew ties into all your
                favorite ITSM tools - ServiceNow, Zendesk and Jira. Drew quickly learns from your existing tickets and
                knowledge base, and helps your users self-service in seconds.
              </p>
              <p>
                Drew can immediately offload 60% of common ticket volume - resetting passwords, ordering new equipment
                based on spend approval thresholds, notifying affected users about an outage, resolving software access,
                tracking progress and notifying relevant team members on Sprint and Epic.
              </p>
              {/*<a href={routes.plugAndPlay}>*/}
              {/*  <img src={playYellow} alt='' />*/}
              {/*  See Drew in Action*/}
              {/*</a>*/}
            </div>
            <div ref={el => (sectionSevenRight = el)} className={styles.employeesRight}>
              <div className={`${styles.itemInfo} ${styles.drew}`}>
                <div className={styles.itemTop}>
                  <img src={drew} alt="" />
                  <div className={styles.itemTitle}>
                    <h2>Drew</h2>
                    <a
                      href="/"
                      className="btn"
                      onClick={e => {
                        e.preventDefault();
                      }}
                    >
                      Service Desk
                    </a>
                  </div>
                </div>
                <h6>Works with:</h6>
                <div className={styles.works}>
                  <div className={styles.imgWrapper}>
                    <img src={now} alt="" />
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={zendesk} alt="" />
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={jira} alt="" />
                    <div className={styles.comingSoon}>Coming soon</div>
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={slack} alt="" />
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={microsoft} alt="" />
                  </div>
                </div>
                <div className={styles.buttons}>
                  <a href={`${routes.plugAndPlay}/${DE_TYPES.drew}`} className="btn btnGreen">
                    Try Drew
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionEight = el)} className={styles.sales}>
        <div className={styles.container}>
          <div className={styles.salesInner}>
            <div ref={el => (sectionEightLeft = el)} className={styles.salesLeft}>
              <img src={sales} alt="" />
            </div>
            <div ref={el => (sectionEightRight = el)} className={styles.salesRight}>
              <h2 onClick={onClickFreeTrial}>
                Request a <span>Demo</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlugAndPlay;
export { PlugAndPlay };
