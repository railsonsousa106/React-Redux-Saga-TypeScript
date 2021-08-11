// core
import React, { useCallback, MouseEvent } from 'react';

// library
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

// actions
import { modalsActions } from '../../redux/modals/actions';

// components
import { UI_ROUTES as routes } from '../../constants/routes';

// assets
import { DE_TYPES } from '../../constants/digitalEmployee';
import styles from './Footer.module.scss';
import logo from 'assets/home/images/logo-white.svg';
import youtube from 'assets/home/images/youtube.svg';
import facebook from 'assets/home/images/facebook.svg';
import linkedin from 'assets/home/images/linkedin.svg';
import twitter from 'assets/home/images/twitter.svg';

export const Footer = () => {
  const dispatch = useDispatch();

  const linkClick = useCallback(
    link => (e: MouseEvent) => {
      e.preventDefault();
      dispatch(push(link));
    },
    [dispatch]
  );

  const onClickFreeTrial = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      dispatch(modalsActions.freeTrialModalToggle(true));
    },
    [dispatch]
  );

  return (
    <footer className={`${styles.footer} global`}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <a onClick={linkClick(routes.home)} href={routes.home}>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={styles.footerCenter}>
          <ul>
            <li>Follow Us</li>
            <li className={styles.social}>
              <a
                href="https://www.youtube.com/channel/UCUr56XhjVIOd2QMQ_aQ1--w/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="youtube" />
              </a>
              <a href="https://www.facebook.com/skaelinc/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.linkedin.com/company/skael-inc./" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://twitter.com/skaelinc" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a onClick={linkClick(routes.plugAndPlay)} href={routes.plugAndPlay} className="strong">
                Plug-and-Play
              </a>
            </li>
            <li>
              <a onClick={linkClick(routes.plugAndPlay)} href={`${routes.plugAndPlay}`}>
                What are Digital Employees?
              </a>
            </li>
            <li>
              <a onClick={linkClick(`${routes.plugAndPlay}/${DE_TYPES.june}`)} href={`${routes.plugAndPlay}/${DE_TYPES.june}`}>
                June - Sales Support
              </a>
            </li>
            <li>
              <a onClick={onClickFreeTrial} href=''>
                Alex - Finance
              </a>
            </li>
            <li>
              <a onClick={linkClick(`${routes.plugAndPlay}/${DE_TYPES.drew}`)} href={`${routes.plugAndPlay}/${DE_TYPES.drew}`}>
                Drew - Service Desk
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a onClick={linkClick(routes.buildYourOwn)} href={routes.buildYourOwn} className="strong">
                Build-Your-Own
              </a>
            </li>
            <li>
              <a
                onClick={linkClick(`${routes.buildYourOwn}#platform-overview`)}
                href={`${routes.buildYourOwn}#platform-overview`}
              >
                Platform Overview
              </a>
            </li>
            <li>
              <a
                onClick={linkClick(`${routes.buildYourOwn}#security-prioritized`)}
                href={`${routes.buildYourOwn}#security-prioritized`}
              >
                Security Prioritized
              </a>
            </li>
            <li>
              <a
                onClick={linkClick(`${routes.buildYourOwn}#hyperautomation`)}
                href={`${routes.buildYourOwn}#hyperautomation`}
              >
                Hyperautomation
              </a>
            </li>
            <li>
              <a onClick={linkClick(`${routes.buildYourOwn}#use-cases`)} href={`${routes.buildYourOwn}#use-cases`}>
                Use Cases
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a onClick={linkClick(routes.pricing)} href={routes.pricing} className="strong">
                Pricing
              </a>
            </li>
            {/*<li><a href={routes.home} className='strong'>Blog</a></li>*/}
            <li>
              <a onClick={linkClick(routes.about)} href={routes.about} className="strong">
                About Us
              </a>
            </li>
            <li>
              <a onClick={linkClick(routes.contactUs)} href={routes.contactUs} className="strong">
                Contact Us
              </a>
            </li>
            <li>
              <a onClick={linkClick(routes.news)} href={routes.news} className="strong">
                News
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a onClick={linkClick(routes.support)} href={routes.support} className="strong">
                Support
              </a>
            </li>
            <li>
              <a onClick={linkClick(routes.faq)} href={routes.faq}>
                FAQs
              </a>
            </li>
            {/*<li><a href={routes.helpCenter}>Help Center</a></li>*/}
            <li>
              <a onClick={linkClick(routes.partners)} href={routes.partners}>
                Partners
              </a>
            </li>
            <li>
              <a onClick={linkClick(routes.terms)} href={routes.terms}>
                Terms of Service
              </a>
            </li>
            <li>
              <a onClick={linkClick(routes.privacyPolicy)} href={routes.privacyPolicy}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <p>Copyright © 2020 SKAEL, Inc. All rights reserved.</p>
          <p>HQ: 535 Mission St, San Francisco, CA 94105</p>
        </div>
      </div>
    </footer>
  );
};
