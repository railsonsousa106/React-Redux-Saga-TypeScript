// core
import React, { useEffect, useRef, useState } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';

// styles
import styles from './FAQ.module.scss';
import play from '../../assets/home/images/faq/play.svg';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { AboutImage } from '../../components/AboutImage';

const duration = 2;
const categories = ['Common Questions', 'Elsa Questions', 'Platform Questions', 'Pricing Questions'];
const dataCategories = {
  'Common Questions': [
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
  ],
  'Elsa Questions': [
    {
      question: '',
      answer: '',
    },
  ],
  'Platform Questions': [
    {
      question: '',
      answer: '',
    },
  ],
  'Pricing Questions': [
    {
      question: '',
      answer: '',
    },
  ],
};

const FAQ = () => {
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  const [activeCategory, setActiveCategory]: any = useState(0);
  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let helpOneTitle: any = useRef(null);
  let helpOneSubTitle: any = useRef(null);
  let sectionOneRight: any = useRef(null);
  const t2 = new TimelineLite();
  let sectionTwo: any = useRef(null);
  let sectionTwoTitle: any = useRef(null);
  let sectionTwoTop: any = useRef(null);
  let sectionTwoLeft: any = useRef(null);
  let sectionTwoRight: any = useRef(null);

  useEffect(() => {
    if (width > 767) {
      t1.to(helpOneTitle, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration })
        .to(helpOneSubTitle, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
        .to(sectionOneRight, { opacity: 1, y: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
      if (scroll > sectionTwo.offsetTop - 500) {
        t2.to(sectionTwoTitle, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration })
          .to(sectionTwoTop, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
          .to(sectionTwoLeft, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`)
          .to(sectionTwoRight, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }, `-=${duration}`);
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
    <main className={`${styles.about} global`}>
      <section className={styles.help}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h1 ref={el => (helpOneTitle = el)}>Frequently Asked Questions</h1>
          <h5 ref={el => (helpOneSubTitle = el)}>We've gathered a few frequently asked questions below.</h5>
          <div className={styles.helpInner}>
            <div ref={el => (sectionOneRight = el)} className={styles.helpRight}>
              <AboutImage />
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionTwo = el)} className={styles.common}>
        <div className="container">
          <div className={styles.commonInner}>
            <h2 ref={el => (sectionTwoTitle = el)}>
              <span>{categories[activeCategory].split(' ')[0]}</span> {categories[activeCategory].split(' ')[1]}
            </h2>
            <div ref={el => (sectionTwoTop = el)} className={`${styles.commonRight} ${styles.commonTop}`}>
              <div className={styles.commonCategories}>
                <h4>CATEGORIES</h4>
                <ul>
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className={activeCategory === index ? styles.active : ''}
                      onClick={() => setActiveCategory(index)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.commonLearn}>
                <img src={play} alt="" />
                <h4>Learn more about SKAEL. Check out our video tutorials and courses</h4>
                <a href="">SKAEL Help Center &#8594;</a>
              </div>
            </div>
            <div ref={el => (sectionTwoLeft = el)} className={styles.commonLeft}>
              <div className={styles.commonItem}>
                <div className={styles.commonItem}>
                  {categories[activeCategory] === 'Common Questions'
                    ? dataCategories['Common Questions'].map((category, index) => (
                        <div key={index}>
                          <h4>
                            <span>Q: </span>
                            {category.question}
                          </h4>
                          <p>{category.answer}</p>
                        </div>
                      ))
                    : categories[activeCategory] === 'Elsa Questions'
                    ? dataCategories['Elsa Questions'].map((category, index) => (
                        <div key={index}>
                          <h4>
                            <span>Q: </span>
                            {category.question}
                          </h4>
                          <p>{category.answer}</p>
                        </div>
                      ))
                    : categories[activeCategory] === 'Platform Questions'
                    ? dataCategories['Platform Questions'].map((category, index) => (
                        <div key={index}>
                          <h4>
                            <span>Q: </span>
                            {category.question}
                          </h4>
                          <p>{category.answer}</p>
                        </div>
                      ))
                    : dataCategories['Pricing Questions'].map((category, index) => (
                        <div key={index}>
                          <h4>
                            <span>Q: </span>
                            {category.question}
                          </h4>
                          <p>{category.answer}</p>
                        </div>
                      ))}
                </div>
              </div>
            </div>
            <div ref={el => (sectionTwoRight = el)} className={styles.commonRight}>
              <div className={styles.commonCategories}>
                <h4>CATEGORIES</h4>
                <ul>
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className={activeCategory === index ? styles.active : ''}
                      onClick={() => setActiveCategory(index)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.commonLearn}>
                <img src={play} alt="" />
                <h4>Learn more about SKAEL. Check out our video tutorials and courses</h4>
                <a href="">SKAEL Help Center &#8594;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
export { FAQ };
