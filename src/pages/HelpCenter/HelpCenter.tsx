// core
import React, { useEffect, useRef } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';

// components
import { UI_ROUTES as routes } from '../../constants/routes';

// styles
import styles from './HelpCenter.module.scss';
import search from '../../assets/header/search.svg';
import arrow from '../../assets/home/images/home/arrow-purple.svg';
import slack from '../../assets/home/images/slack.svg';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';

const duration = 2;

const dataCategories = [
  {
    question: 'What can the SKAEL Digital Workforce Platform do?',
    answer:
      'SKAEL’s Digital Workforce Platform empowers users to design and on-board highly customizable Digital Employees to solve complex business problems without writing any code. You can build, test and deploy your Digital Employee on your preferred messaging platform, connected to all of your structured and unstructured data sources and deploy to your preferred cloud or data center.',
  },
  {
    question: 'How are SKAEL’s Digital Employees different to RPA?',
    answer:
      'RPA (Robotics Process Automation) depends on your requests being processed through static Excel Macro-type pre-recorded flows to properly function. Dynamic capabilities require multiple pre-recorded flows and calls to third-parties APIs from Google, Microsoft and Amazon to process your sensitive data - your users dynamic requests.',
    answer1:
      'SKAEL’s Digital Employees are built from the ground up to adapt around your user’s dynamic requests without any pre-recorded flows, all functionality is built within each Digital Employee, meaning no third-party calls to process your data and lowering the on-boarding time from 3-6 months for typical RPA rollouts to less than 3 weeks.',
  },
  {
    question: 'Which applications can you connect to?',
    answer:
      'If your enterprise application has some sort of API or Database connectivity options, our platform can connect to it - that’s over 100,000 applications.  Simply add the URL and the associated credentials and your Digital Employee starts learning from your existing processes.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'Very secure. We process your data in memory and don’t store any of it. Your Digital Employee lives in its own Kubernetes cluster, encrypted at rest with AES-256, one of the strongest encryption methods available. We built SKAEL to adapt to your security methodology.',
  },
  {
    question: 'What messaging platforms does SKAEL Support?',
    answer:
      'SKEAL supports most popular messaging platforms, e.g. Slack, Skype, Microsoft Teams, Telegram, Twilio, Google Assistant, Alexa. We also offer a Web API out to connect your Digital Employee to your favorite application or proprietary messaging platform.',
  },
  {
    question: 'Does SKAEL support custom communication platforms?',
    answer:
      "Yes! SKAEL's Digital Workforce Platform integrates with your custom communication platforms, websites, applications through our API. Leverage all the power of your Digital Employee with your existing tools.",
  },
  {
    question: 'What hosting options does SKAEL provide?',
    answer:
      '1 - You can host your Digital Employee with us. We follow the safest security and storage methodologies. 2 - You can deploy your SKAEL Digital Employee on your cloud or corporate data center through an easy deployment from the Platform.',
  },
];

const HelpCenter = () => {
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let helpTitleOne: any = useRef(null);
  let sectionOneInner: any = useRef(null);
  const t3 = new TimelineLite();
  let sectionThree: any = useRef(null);
  let sectionThreeInner: any = useRef(null);
  const t4 = new TimelineLite();
  let sectionFour: any = useRef(null);
  let sectionFourInner: any = useRef(null);
  const t5 = new TimelineLite();
  let sectionFive: any = useRef(null);
  let sectionFiveLeft: any = useRef(null);
  let sectionFiveRight: any = useRef(null);

  useEffect(() => {
    if (width > 767) {
      t1.to(helpTitleOne, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }).to(
        sectionOneInner,
        { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration },
        `-=${duration}`
      );
      if (scroll > sectionFour.offsetTop - 500) {
        t4.to(sectionFourInner, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration });
      }
      if (scroll > sectionFive.offsetTop - 500) {
        t4.to(sectionFiveLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration });
        t4.to(sectionFiveRight, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration });
      }
    }
  }, [width, scroll, t1, t3, t4, t5]);

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
    <main className={`${styles.helpCenter} global`}>
      <section className={styles.help}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h1 ref={el => (helpTitleOne = el)}>How Can We Help You?</h1>
          <div ref={el => (sectionOneInner = el)} className={styles.helpInner}>
            <form action="">
              <label>
                <img className={styles.search} src={search} alt="" />
                <input type="text" placeholder="Search articles..." />
                <img className={styles.arrow} src={arrow} alt="" />
              </label>
            </form>
            <p>
              Still have a question? Don't forget to check our <a href={routes.faq}>FAQ page</a>
            </p>
          </div>
        </div>
      </section>
      <section ref={el => (sectionThree = el)} className={`${styles.plans} plansSlider`}>
        <div className="container">
          <div ref={el => (sectionThreeInner = el)} className={styles.plansInner}>
            <h2>
              <span>Select Category</span>
            </h2>
            <div className={styles.panel}>
              <div className={styles.plan}>
                <h6>Elsa</h6>
                <p>Get started with Elsa with our in-depth Help Articles, Videos and Quickstart Guides</p>
                <button type="button" className="btn btnGreen">
                  Explore
                </button>
              </div>
              <div className={styles.plan}>
                <h6>Legal</h6>
                <p>SKAEL's legal documentation, conveniently located in one place.</p>
                <button type="button" className="btn btnGreen">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionFive = el)} className={styles.connect}>
        <div className="container">
          <div className={styles.connectInner}>
            <div ref={el => (sectionFiveLeft = el)} className={styles.connectLeft}>
              <h2>
                Still no <span>luck</span>?
              </h2>
              <h2 className={styles.contact}>
                <span> Connect with us</span> on Slack
              </h2>
            </div>
            <div className={styles.connectRight}>
              <a href="" className="btn btnWhite">
                <img ref={el => (sectionFiveRight = el)} className={styles.connectRight} src={slack} alt="" />
                slack
              </a>
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionFour = el)} className={styles.faq}>
        <div className="container">
          <div ref={el => (sectionFourInner = el)} className={styles.faqInner}>
            <h5>Might Be Interesting</h5>
            <h2>
              Frequently <span>Asked Questions</span>
            </h2>
            <p className={styles.faqInfo}>
              We've gathered a shortlist of frequently asked questions below. For further information, check out our
              <a href={routes.faq}> FAQs</a> or <a href={routes.contactUs}>Contact Us</a>. We're always happy to answer
              questions.
            </p>
            {dataCategories.map((category, index) => (
              <div className={styles.question} key={index}>
                <h4>
                  <span>Q: </span>
                  {category.question}
                </h4>
                <p>{category.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HelpCenter;
export { HelpCenter };
