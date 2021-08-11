// core
import React, { ChangeEvent, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';
import HourglassEmptyRounded from '@material-ui/icons/HourglassEmptyRounded';

// components

//redux
import { selectContactUsUserData, selectContactUsUI } from '../../redux/contactUs/selectors';
import { contactUsActions } from '../../redux/contactUs/actions';
import { digitalEmployeeActions } from '../../redux/digitalEmployee/actions';

// styles
import styles from './ContactUs.module.scss';
import man from '../../assets/home/images/about/man.svg';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { AboutImage } from '../../components/AboutImage';

const duration = 2;

const ContactUs = () => {
  const dispatch = useDispatch();
  const { first_name, last_name, email, company, subject, message, phone, company_size } = useSelector(
    selectContactUsUserData
  );
  const { loading, errors, success } = useSelector(selectContactUsUI);

  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let helpTitleOne: any = useRef(null);
  let sectionOneLeft: any = useRef(null);
  let sectionOneRight: any = useRef(null);
  const t4 = new TimelineLite();
  let sectionFour: any = useRef(null);
  let sectionFourLeft: any = useRef(null);

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
      if (scroll > sectionFour.offsetTop - 500) {
        t4.to(sectionFourLeft, {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          duration: duration,
        });
      }
    }
  }, [width, scroll, t1, t4]);

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

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      dispatch(contactUsActions.contactUsUserRefresh({ [e.target.name]: e.target.value }));
    },
    [dispatch]
  );

  const sendContactForm = (e: any) => {
    e.preventDefault();
    dispatch(digitalEmployeeActions.contactUsSendForm());
  };

  return (
    <main className={`${styles.contactUs} global`}>
      <section className={styles.help}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h1 ref={el => (helpTitleOne = el)}>Contact Us</h1>
          <div className={styles.helpInner}>
            <div ref={el => (sectionOneLeft = el)} className={styles.helpLeft}>
              <p>
                We'd love to discuss your ideas for your perfect Digital Employee, answers questions surrounding our
                platform or company. And explore partnership opportunities.
              </p>
              <p>
                Please fill out the form below and one of our Digital Employees will schedule our team to get back to
                you.
              </p>
            </div>
            <div ref={el => (sectionOneRight = el)} className={styles.helpRight}>
              <AboutImage />
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionFour = el)} className={styles.form}>
        <div className="container">
          <div ref={el => (sectionFourLeft = el)} className={styles.formDescription}>
            <Particles className={styles.particle} width="1920" height="1080" params={params} />
            <h2>
              <span>Drop Us a Line</span>
            </h2>
            <div className={styles.formWrap}>
              {success ? (
                <div>
                  <h2>Thank you</h2>
                  The message has been sent
                </div>
              ) : (
                <form action="" onSubmit={sendContactForm}>
                  <div className={styles.row}>
                    <label>
                      <span>First Name*</span>
                      <input
                        name="first_name"
                        type="text"
                        placeholder="First Name"
                        onChange={onChange}
                        value={first_name}
                      />
                      {errors && errors.first_name ? <div className="field-error">{errors.first_name}</div> : null}
                    </label>
                    <label>
                      <span>Last Name*</span>
                      <input
                        name="last_name"
                        type="text"
                        placeholder="Last Name"
                        onChange={onChange}
                        value={last_name}
                      />
                      {errors && errors.last_name ? <div className="field-error">{errors.last_name}</div> : null}
                    </label>
                  </div>
                  <label>
                    <span>Email Address*</span>
                    <input name="email" type="email" placeholder="Email Address" onChange={onChange} value={email} />
                    {errors && errors.email ? <div className="field-error">{errors.email}</div> : null}
                  </label>
                  <label>
                    <span>Phone*</span>
                    <input name="phone" type="phone" placeholder="Phone" onChange={onChange} value={phone} />
                    {errors && errors.phone ? <div className="field-error">{errors.phone}</div> : null}
                  </label>
                  <div className={styles.row}>
                    <label>
                      <span>Company*</span>
                      <input name="company" type="text" placeholder="Company" onChange={onChange} value={company} />
                      {errors && errors.company ? <div className="field-error">{errors.company}</div> : null}
                    </label>
                    <label>
                      <span>Company size*</span>
                      <select name="company_size" value={company_size} onChange={onChange}>
                        <option value="" disabled>
                          Select Company Size
                        </option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1001-2500">1001-2500</option>
                        <option value="2501-5000">2501-5000</option>
                        <option value="5000+">5000+</option>
                      </select>
                      {errors && errors.company_size ? <div className="field-error">{errors.company_size}</div> : null}
                    </label>
                  </div>
                  <label>
                    <span>Subject*</span>
                    <input name="subject" type="text" placeholder="Subject" onChange={onChange} value={subject} />
                    {errors && errors.subject ? <div className="field-error">{errors.subject}</div> : null}
                  </label>
                  <label>
                    <span>Message*</span>
                    <textarea name="message" placeholder="Message" onChange={onChange} value={message} />
                    {errors && errors.message ? <div className="field-error">{errors.message}</div> : null}
                  </label>
                  {errors && errors.main ? <div className="field-error">{errors.main}</div> : null}
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </form>
              )}

              {loading ? (
                <div className={styles.preloader}>
                  <HourglassEmptyRounded color="primary" style={{ fontSize: 100 }} />
                </div>
              ) : null}
            </div>

            <img className={styles.man} src={man} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
export { ContactUs };
