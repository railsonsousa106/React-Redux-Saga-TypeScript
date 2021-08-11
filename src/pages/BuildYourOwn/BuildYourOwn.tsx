// core
import React, { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useDispatch } from 'react-redux';

// components
import { modalsActions } from '../../redux/modals/actions';

// styles
import styles from './BuildYourOwn.module.scss';
import cases from '../../assets/home/images/buildYourOwn/solution.svg';
import experience from '../../assets/home/images/buildYourOwn/experience.png';
import optimization from '../../assets/home/images/buildYourOwn/optimization.png';
import sales from '../../assets/home/images/buildYourOwn/sales.png';
import management from '../../assets/home/images/buildYourOwn/management.png';
import automated from '../../assets/home/images/buildYourOwn/automated.png';
import chain from '../../assets/home/images/buildYourOwn/chain.png';

import security from '../../assets/home/images/buildYourOwn/security.svg';
import digital from '../../assets/home/images/buildYourOwn/digital.svg';
import diagram from '../../assets/home/images/buildYourOwn/diagram.svg';
import overview1 from '../../assets/home/images/buildYourOwn/overview-screens1.png';
import overview2 from '../../assets/home/images/buildYourOwn/overview-screens2.png';
import overview3 from '../../assets/home/images/buildYourOwn/overview-screens3.png';
import overview4 from '../../assets/home/images/buildYourOwn/overview-screens4.png';
import overview5 from '../../assets/home/images/buildYourOwn/overview-screens5.png';
import overview6 from '../../assets/home/images/buildYourOwn/overview-screens6.png';
import { UI_ROUTES as routes } from '../../constants/routes';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { AboutImage } from '../../components/AboutImage';

const caseTabs = [
  { id: 0, name: 'Employee Experience' },
  { id: 1, name: 'Finance Optimization' },
  { id: 2, name: 'Sales Enablement' },
  { id: 3, name: 'Compliance Management' },
  { id: 4, name: 'Automated Service Desk' },
  { id: 5, name: 'Supply Chain & IoT' },
];
const duration = 2;

const BuildYourOwn = () => {
  const dispatch = useDispatch();

  SwiperCore.use([Navigation, Pagination]);
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  const [caseActive, setCaseActive] = useState(0);
  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let sectionOne: any = useRef(null);
  let casesImage: any = useRef(null);
  let casesTitle: any = useRef(null);
  let casesInner: any = useRef(null);
  const t2 = new TimelineLite();
  let sectionTwo: any = useRef(null);
  let sectionTwoLeft: any = useRef(null);
  let sectionTwoRight: any = useRef(null);
  const t3 = new TimelineLite();
  let sectionThree: any = useRef(null);
  let sectionThreeLeft: any = useRef(null);
  let sectionThreeRight: any = useRef(null);
  const t4 = new TimelineLite();
  let sectionFour: any = useRef(null);
  let sectionFourLeft: any = useRef(null);
  let sectionFourRight: any = useRef(null);
  const t5 = new TimelineLite();
  let sectionFive: any = useRef(null);
  let sectionFiveLeft: any = useRef(null);
  let sectionFiveRight: any = useRef(null);
  const t6 = new TimelineLite();
  let sectionSix: any = useRef(null);
  let sectionSixLeft: any = useRef(null);
  let sectionSixRight: any = useRef(null);
  const t7 = new TimelineLite();
  let sectionSeven: any = useRef(null);
  let sectionSevenLeft: any = useRef(null);
  let sectionSevenRight: any = useRef(null);
  const t9 = new TimelineLite();
  let sectionNineTitle: any = useRef(null);
  let sectionNineInner: any = useRef(null);
  const t10 = new TimelineLite();
  let sectionTen: any = useRef(null);
  let sectionTenTitle: any = useRef(null);
  let sectionTenSubTitle: any = useRef(null);
  let sectionTenInner: any = useRef(null);
  const t11 = new TimelineLite();
  let sectionEleven: any = useRef(null);
  let sectionElevenTitle: any = useRef(null);
  let sectionElevenInner: any = useRef(null);
  const t12 = new TimelineLite();
  let sectionTwelve: any = useRef(null);
  let sectionTwelveLeft: any = useRef(null);
  let sectionTwelveRight: any = useRef(null);

  const onClickFreeTrial = useCallback(
    (event: MouseEvent<HTMLHeadingElement>) => {
      event.preventDefault();
      dispatch(modalsActions.freeTrialModalToggle(true));
    },
    [dispatch]
  );

  useEffect(() => {
    if (width > 767) {
      t9.to(sectionNineTitle, {
        opacity: 1,
        x: 0,
        ease: Power3.easeOut,
        duration: duration,
      }).to(sectionNineInner, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      if (scroll > sectionTen.offsetTop - 500) {
        t10
          .to(sectionTenTitle, {
            opacity: 1,
            x: 0,
            ease: Power3.easeOut,
            duration: duration,
          })
          .to(
            sectionTenSubTitle,
            {
              opacity: 1,
              x: 0,
              ease: Power3.easeOut,
              duration: duration,
            },
            `-=${duration}`
          )
          .to(sectionTenInner, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      }
      if (scroll > sectionEleven.offsetTop - 500) {
        t11
          .to(sectionElevenTitle, {
            opacity: 1,
            x: 0,
            ease: Power3.easeOut,
            duration: duration,
          })
          .to(
            sectionElevenInner,
            {
              opacity: 1,
              y: 0,
              ease: Power3.easeOut,
              duration: duration,
            },
            `-=${duration}`
          );
      }
      if (scroll > sectionTwelve.offsetTop - 500) {
        t12
          .to(sectionTwelveLeft, {
            opacity: 1,
            x: 0,
            ease: Power3.easeOut,
            duration: duration,
          })
          .to(
            sectionTwelveRight,
            {
              opacity: 1,
              x: 0,
              ease: Power3.easeOut,
              duration: duration,
            },
            `-=${duration}`
          );
      }
      if (scroll > sectionOne.offsetTop - 500) {
        t1.to(casesImage, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        })
          .to(casesTitle, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
          .to(casesInner, { opacity: 1, y: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      }
      if (scroll > sectionTwo.offsetTop - 500) {
        t2.to(sectionTwoLeft, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(sectionTwoRight, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      }
      if (scroll > sectionThree.offsetTop - 500) {
        t3.to(sectionThreeLeft, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(
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
        t4.to(sectionFourLeft, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(
          sectionFourRight,
          {
            opacity: 1,
            x: 0,
            ease: Power3.easeOut,
            duration: duration,
          },
          `-=${duration}`
        );
      }
      if (scroll > sectionFive.offsetTop - 500) {
        t5.to(sectionFiveLeft, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(
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
        t6.to(sectionSixLeft, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(
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
        t7.to(sectionSevenLeft, {
          opacity: 1,
          x: 0,
          ease: Power3.easeOut,
          duration: duration,
        }).to(
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
    }
  }, [scroll, width, t1, t2, t3, t4, t5, t6, t7, t9, t10, t11, t12]);

  const params: any = {
    particles: {
      number: {
        value: 25,
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
    <main className={`${styles.buildYourOwn} global`}>
      <section id="platform-overview" className={styles.overview}>
        <div className={`container ${styles.container}`}>
          <div ref={el => (sectionNineTitle = el)} className={styles.overviewTitle}>
            <h5>Build-Your-Own</h5>
            <h1>
              <span>Platform</span> Overview
            </h1>
          </div>
          <div ref={el => (sectionNineInner = el)} className={`${styles.overviewInner} overviewSlider`}>
            <Swiper navigation slidesPerView={1} pagination={{ clickable: true }}>
              <SwiperSlide>
                <img src={overview1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={overview2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={overview3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={overview4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={overview5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={overview6} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section ref={el => (sectionTen = el)} id="security-prioritized" className={styles.security}>
        <div className={`container ${styles.container}`}>
          <h2 ref={el => (sectionTenTitle = el)}>
            Security <span>Prioritized</span>
          </h2>
          <h3 ref={el => (sectionTenSubTitle = el)}>
            Unlike current RPA vendors, our Digital Employees do not call any third party services for full
            functionality
          </h3>
          <div ref={el => (sectionTenInner = el)} className={styles.securityInner}>
            <div className={styles.securityItem}>
              <h6>SKAEL Cloud</h6>
              <p>
                The data in our platform is encrypted at rest with AES-256 encryption. The SKAEL environment runs on
                SOC1, SOC2, and HIPAA compliant cloud infrastructure and all of our traffic is authenticated and
                verified through HTTPS.
              </p>
            </div>
            <div className={styles.securityItem}>
              <img src={security} alt="" />
            </div>
            <div className={styles.securityItem}>
              <h6>Customer Cloud</h6>
              <p>
                The SKAEL digital workforce platform is build on Docker and Kubernetes, allowing secure and easy
                portability across most enterprise-grade cloud providers. SKAEL requires HTTPS and SSH access for
                license management of the environment.
              </p>
            </div>
            <div className={styles.securityItem}>
              <h6>On-Premise</h6>
              <p>SKAEL can be deployed on-premise using a simple 3-node cluster.</p>
            </div>
            <div className={styles.securityItem}>
              <h6>Authentication</h6>
              <p>
                Our platform integrates with Microsoft Identity Manager, Google, Okta and OneLogin for easy connectivity
                to your organization, allowing granular role based access control for specific functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionEleven = el)} id="hyperautomation" className={styles.automation}>
        <div className={`container ${styles.container}`}>
          <h2 ref={el => (sectionElevenTitle = el)}>
            <span>Hyper</span>automation
          </h2>
          <div ref={el => (sectionElevenInner = el)} className={styles.automationInner}>
            <div className={styles.automationTop}>
              <img src={diagram} alt="" />
            </div>
            <div className={styles.automationCenter}>
              <div className={styles.description}>
                <p>
                  Modern automation efforts have required heavy user or technician effort, primarily based on static
                  triggers to perform a narrow set of tasks. They are often fragile and easily break when tasks are
                  requested outside of defined task parameters.
                </p>
                <p>
                  SKAEL’s Digital Employees are made up of many components to ensure agility and power. They are able to
                  dynamically interpret contextual information and process requests on demand without requiring deep
                  user involvement.
                </p>
              </div>
              <img src={digital} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionTwelve = el)} className={styles.sales}>
        <div className="container">
          <div className={styles.salesInner}>
            <div ref={el => (sectionTwelveLeft = el)} className={styles.salesLeft}>
              <AboutImage />
            </div>
            <div ref={el => (sectionTwelveRight = el)} className={styles.salesRight}>
              <h2 onClick={onClickFreeTrial}>
                Request <span>Access</span>
              </h2>
              <h2 onClick={onClickFreeTrial}>
                Book a <span>Live Demo</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionOne = el)} id="use-cases" className={styles.cases}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <img ref={el => (casesImage = el)} src={cases} alt="" className={styles.casesImage} />
          <h1 ref={el => (casesTitle = el)} className={styles.casesTitle}>
            Our Use Cases
          </h1>
          <ul ref={el => (casesInner = el)}>
            {caseTabs.map(tab => (
              <li key={tab.id}>
                <a
                  href={`${routes.buildYourOwn}#${tab.name.split(' ').join('-').toLowerCase()}`}
                  className={caseActive === tab.id ? styles.active : ''}
                  onClick={() => setCaseActive(tab.id)}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="employee-experience" ref={el => (sectionTwo = el)} className={styles.experience}>
        <div className="container">
          <div className={styles.experienceInner}>
            <div ref={el => (sectionTwoLeft = el)} className={styles.experienceLeft}>
              <div className={styles.experienceImage}>
                {/*<img className={styles.play} src={play} alt='' />*/}
                <img src={experience} alt="" />
              </div>
            </div>
            <div ref={el => (sectionTwoRight = el)} className={styles.experienceRight}>
              <h2>
                Employee <span>Experience - recharge your work</span>force
              </h2>
              <p>
                In an enterprise organization, an employee’s experience takes shape from the time they are interviewed,
                carrying through the employment tenure. A process that is supremely broken right now, across every
                industry.
              </p>
              <div className={styles.tags}>
                <span>Consumer Goods</span>
                <span>Education</span>
                <span>Supply Chain</span>
                <span>Hospitality</span>
                <span>Information Technology</span>
                <span>Healthcare</span>
                <span>Travel & Transportation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="finance-optimization"
        ref={el => (sectionThree = el)}
        className={`${styles.experience} ${styles.optimization}`}
      >
        <div className="container">
          <div className={styles.experienceInner}>
            <div ref={el => (sectionThreeLeft = el)} className={styles.experienceLeft}>
              <div className={styles.experienceImage}>
                {/*<img className={styles.play} src={play} alt='' />*/}
                <img src={optimization} alt="" />
              </div>
            </div>
            <div ref={el => (sectionThreeRight = el)} className={styles.experienceRight}>
              <h2>
                Operational Optimization -<span>Ubiquitous busines</span>s value
              </h2>
              <p>
                If you look at the things that take the most amount of time in any job, it's the daily operations of
                hunting down information, performing the analysis, interpreting the outcome and taking an action.
              </p>
              <div className={styles.tags}>
                <span>Energy</span>
                <span>Consumer Goods</span>
                <span>Education</span>
                <span>Healthcare</span>
                <span>Finance, Banking & Insurance</span>
                <span>Hospitality</span>
                <span>Information Technology</span>
                <span>Manufacturing</span>
                <span>Pharmaceuticals</span>
                <span>Public Services</span>
                <span>Retail</span>
                <span>Supply Chain</span>
                <span>Travel & Transportation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sales-enablement" ref={el => (sectionFour = el)} className={`${styles.experience}`}>
        <div className="container">
          <div className={styles.experienceInner}>
            <div ref={el => (sectionFourLeft = el)} className={styles.experienceLeft}>
              <div className={styles.experienceImage}>
                {/*<img className={styles.play} src={play} alt='' />*/}
                <img src={sales} alt="" />
              </div>
            </div>
            <div ref={el => (sectionFourRight = el)} className={styles.experienceRight}>
              <h2>
                Sales Enablement -<span>Smart selling come</span>s standard
              </h2>
              <p>
                A day in the life of a sales professional is filled with tasks, handling deadlines, managing client
                activities, self-education, and scheduling meetings, to say the least. How can we help your sales team,
                close deals, faster?
              </p>
              <div className={styles.tags}>
                <span>Manufacturing</span>
                <span>Pharmaceuticals</span>
                <span>Education</span>
                <span>Healthcare</span>
                <span>Travel & Transportation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="compliance-management"
        ref={el => (sectionFive = el)}
        className={`${styles.experience} ${styles.optimization}`}
      >
        <div className="container">
          <div className={styles.experienceInner}>
            <div ref={el => (sectionFiveLeft = el)} className={styles.experienceLeft}>
              <div className={styles.experienceImage}>
                {/*<img className={styles.play} src={play} alt='' />*/}
                <img src={management} alt="" />
              </div>
            </div>
            <div ref={el => (sectionFiveRight = el)} className={styles.experienceRight}>
              <h2>
                Compliance Management -<span>Are all your bases</span> covered?
              </h2>
              <p>
                Organizations around the world are mandated to be compliant with rules and regulations for risk
                management, PCI / SOX, federal and global trade laws, ISO and NIST to name just a few. Are all your
                bases covered?
              </p>
              <div className={styles.tags}>
                <span>Manufacturing</span>
                <span>Pharmaceuticals</span>
                <span>Education</span>
                <span>Healthcare</span>
                <span>Travel & Transportation</span>
                <span>Finance, Banking & Insurance</span>
                <span>Supply Chain</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="automated-service-desk" ref={el => (sectionSix = el)} className={`${styles.experience}`}>
        <div className="container">
          <div className={styles.experienceInner}>
            <div ref={el => (sectionSixLeft = el)} className={styles.experienceLeft}>
              <div className={styles.experienceImage}>
                {/*<img className={styles.play} src={play} alt='' />*/}
                <img src={automated} alt="" />
              </div>
            </div>
            <div ref={el => (sectionSixRight = el)} className={styles.experienceRight}>
              <h2>
                Automated Service Desk -<span>Serve it well and fre</span>
                quently
              </h2>
              <p>
                Providing and receiving IT support shouldn’t be onerous. When something has malfunctioned or someone
                needs urgent help, the ensuing experience is un-coordinated, static and cumbersome, which usually leaves
                the caller more anguished.
              </p>
              <div className={styles.tags}>
                <span>Consumer Goods</span>
                <span>Education</span>
                <span>Energy</span>
                <span>Healthcare</span>
                <span>Finance, Banking & Insurance</span>
                <span>Manufacturing</span>
                <span>Pharmaceuticals</span>
                <span>Supply Chain</span>
                <span>Travel & Transportation</span>
                <span>Public Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="supply-chain-&-iot"
        ref={el => (sectionSeven = el)}
        className={`${styles.experience} ${styles.optimization}`}
      >
        <div className="container">
          <div className={styles.experienceInner}>
            <div ref={el => (sectionSevenLeft = el)} className={styles.experienceLeft}>
              <div className={styles.experienceImage}>
                {/*<img className={styles.play} src={play} alt='' />*/}
                <img src={chain} alt="" />
              </div>
            </div>
            <div ref={el => (sectionSevenRight = el)} className={styles.experienceRight}>
              <h2>
                Supply Chain and IoT -<span>Another brick in the</span> wall
              </h2>
              <p>
                Managing all the moving parts of modernizing manufacturing facilities, making rapid access to data
                through Industry 4.0 transformation is a consistent pain-point for most industries. Is your organization
                susceptible to supply chain complexity, volatility, and unpredictability?
              </p>
              <div className={styles.tags}>
                <span>Manufacturing</span>
                <span>Information Technology</span>
                <span>Supply Chain</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BuildYourOwn;
export { BuildYourOwn };
