// core
import React, { useCallback, useEffect, useRef, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

//constants
import { UI_ROUTES as routes } from '../../constants/routes';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';

// styles
import styles from './Terms.module.scss';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { AboutImage } from '../../components/AboutImage';

const duration = 2;

const Terms = () => {
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let helpOneTitle: any = useRef(null);
  let sectionOneRight: any = useRef(null);
  const t2 = new TimelineLite();
  let sectionTwo: any = useRef(null);

  const linkClick = useCallback(
    link => (e: MouseEvent) => {
      e.preventDefault();
      dispatch(push(link));
    },
    [dispatch]
  );

  useEffect(() => {
    if (width > 767) {
      t1.to(helpOneTitle, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration }).to(
        sectionOneRight,
        { opacity: 1, y: 0, ease: Power3.easeOut, duration: duration },
        `-=${duration}`
      );
      if (scroll > sectionTwo.offsetTop - 500) {
        t2.to(sectionTwo, { opacity: 1, x: 0, ease: Power3.easeOut, duration: duration });
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
    <main className={`${styles.terms} global`}>
      <section className={styles.help}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h1 ref={el => (helpOneTitle = el)}>Terms of Service</h1>
          <div className={styles.helpInner}>
            <div ref={el => (sectionOneRight = el)} className={styles.helpRight}>
              <AboutImage />
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionTwo = el)} className={styles.termsDescription}>
        <div className="container">
          <p className={styles.info}>
            SKAEL, Inc. (“SKAEL,” “we” or “us”) provides a chatbot digital assistant service for use by employees
            (“Users,” a “User” or “you”) of businesses that sign up to the SKAEL services. The following terms,
            including the Privacy Policy referenced below (collectively, the “Terms of Service” or “Terms”) govern all
            use of the Services (as defined below) by Users.​​
          </p>
          <h4>‍1. ACCEPTANCE OF TERMS</h4>
          <p>
            The SKAEL Internet site available at www.SKAEL.com, and the SKAEL chatbot digital assistant services,
            content, features and other services provided through such site or through third party messaging systems
            (collectively, the “Services”) can only be accessed and used subject to the Terms of Service.
          </p>
          <p>
            PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING ANY OF THE SERVICES, YOU AGREE THAT YOU
            ARE BOUND BY THESE TERMS AND CONDITIONS, INCLUDING THE&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={linkClick(routes.privacyPolicy)}
              href={routes.privacyPolicy}
            >
              SKAEL PRIVACY POLICY
            </a>
            . IF YOU DO NOT AGREE TO ALL THE TERMS OF SERVICE, THEN YOU MAY NOT ACCESS AND USE THE SERVICES.
          </p>
          <p>
            THESE TERMS CONTAIN A MANDATORY ARBITRATION PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL
            BASIS TO RESOLVE DISPUTES IN CERTAIN CIRCUMSTANCES, RATHER THAN JURY TRIALS OR CLASS ACTION LAWSUITS. VIEW
            THESE TERMS <a href="#arbitration">HERE</a>.​​
          </p>
          <h4>‍2. REGISTRATION</h4>
          <p>
            We require that you create an account to use or access certain parts of the Services and to use any of its
            services and features. We require that you provide registration information such as a username and password
            to access and utilize your account. As a condition of your use of the Services, you agree to (a) provide
            SKAEL with true, accurate, current and complete information as prompted by the SKAEL's registration forms,
            when registering for or using the Services and (b) update and maintain the truthfulness, accuracy and
            completeness of such information. You are responsible for maintaining the confidentiality of any password or
            other account information not generally available to others and are fully responsible for all activities
            that occur under your username and password. Creating multiple accounts for a single User or failing to
            provide complete or current information may result in account termination. ​
          </p>
          <p>
            By registering with the Services you represent and warrant that you are 18 years of age or older and are
            legally competent to enter into and agree to these Terms of Service.
          </p>
          <h4>3. PRIVACY POLICY</h4>
          <p>
            SKAEL’s Privacy Policy explains how we collect, use and disclose your personal data in connection with the
            Services. By using the Services, you agree that SKAEL can use such data in accordance with SKAEL’s Privacy
            Policy.
          </p>
          <h4>​​4. USE OF THE SERVICES</h4>
          <p>
            Subject to compliance with these Terms of Service, SKAEL grants Users a nonexclusive, nontransferable,
            nonsublicensable, terminable license to access and use the Services in accordance with the Terms. When using
            or accessing particular services or features available as part of the Services, in addition to these Terms
            of Service you will be subject to any posted SKAEL terms, guidelines, or rules applicable to such services
            or features that may be posted from time to time. All such terms, guidelines, or rules are hereby
            incorporated by reference into the Terms of Service.
          </p>
          <h4>​​5. PROHIBITED CONDUCT</h4>
          <p>
            As a condition of your access and use of the Services and your submission or access to any information,
            data, text, photographs, audio clips, audiovisual works, or other materials on the Services (collectively,
            the “Content”), you agree not to use the Services for any purpose that is unlawful, prohibited by these
            Terms of Service, or not intended by SKAEL. In particular, you agree not to:
          </p>
          <ul>
            <li>
              violate these Terms of Service or any other applicable agreement between you and SKAEL or you and any
              third party;
            </li>
            <li>
              use the Services in any manner that violates any law;Use the Services in any manner that infringes,
              misappropriates or violates any third party's rights, including transmitting any Content that may
              infringe, misappropriate or violate a third party's rights of publicity, contractual rights, or
              intellectual property rights;
            </li>
            <li>reproduce, duplicate, copy, modify, sell, re-sell or exploit any Content or the Services;</li>
            <li>
              harass, threaten, intimidate, impersonate, or attempt to impersonate, any other person, falsify your
              contact or other information, misrepresent a relationship with any person or entity, including
              misrepresenting a relationship with SKAEL;
            </li>
            <li>
              provide or submit false or misleading information; use the Services in any way that could interfere with
              the rights of SKAEL or the rights of other Users of the Services;
            </li>
            <li>
              attempt to gain unauthorized access to any portion or feature of the Services, other User accounts, or any
              other systems or networks connected to the Services or to any server used by SKAEL by hacking, password
              'mining' or any other illegitimate or unauthorized means, including attempting to obtain password,
              account, or any other personal or private information from any other Services user;
            </li>
            <li>
              sell, share, or otherwise transfer your account username, password, other information, or your rights or
              obligations under these Terms of Service;
            </li>
            <li>
              transmit or submit any transmission or other materials that contain viruses, Trojan horses, worms, time
              bombs, spiders, cancelbots or other computer programming routines that is likely or intended to damage,
              interfere with, disrupt, impair, disable or otherwise overburden the Services;
            </li>
            <li>
              access, download, monitor, or copy any information contained on our Services through artificial means
              (including but not limited to use any 'deep-link', 'scraper', 'robot', 'spider' or other automatic device,
              program, algorithm or methodology, or any similar or equivalent automatic or manual process), or in any
              way reproduce or circumvent the navigational structure or presentation of the Services or any content, to
              obtain or attempt to obtain any Content, materials, documents or information through any means not
              purposely made available through the Services;
            </li>
            <li>
              or probe, scan or test the vulnerability of the Services or any network connected to the Services, nor
              breach the security or authentication measures on or of the Services or any network connected to the
              Services. You may not reverse look-up, trace or seek to trace any information on any other user of the
              Services, or any other customer of SKAEL, including any SKAEL account not owned by you, to its source, or
              exploit the Services or any service or information made available or offered by or through the Services,
              in any way where the purpose is to reveal any information, including personal identification or
              information other than your own information, except as expressly authorized by SKAEL and provided for by
              the Terms of Service.​​
            </li>
          </ul>
          <h4>‍6. LICENSE TO SKAEL</h4>
          <p>
            As a condition of submitting any Content or other materials via the Services, you agree that you grant to
            SKAEL a non-exclusive, perpetual, irrevocable, worldwide, royalty-free, full-paid, license (with the right
            to sublicense) to (a) access, use, reproduce and create derivative works of the Content to provide and
            improve upon the Services for you and fulfill SKAEL’s obligations under this these Terms and (b) use,
            modify, enhance and disclose the Content in anonymized or aggregated form for any purpose. You represent
            that you own or have secured all legal rights necessary for the Content submitted by you to be used by you,
            SKAEL, and others as described and otherwise contemplated in these Terms of Service.​​​
          </p>
          <h4>7. SUSPENSION AND TERMINATION</h4>
          <p>
            SKAEL may terminate or suspend your access to or use of the Services for any reason, including suspected
            violations of the Terms of Service. Upon such suspension or termination you must cease accessing or using
            the Services, including any related data and information. Furthermore, you acknowledge that SKAEL reserves
            the right to take action -- technical, legal or otherwise -- to block, nullify or deny your ability to
            access the Services. You understand that SKAEL may exercise this right in its sole discretion, and this
            right shall be in addition to and not in substitution for any other rights and remedies available to SKAEL.
          </p>
          <p>
            All provisions of these Terms of Service which by their nature should survive termination shall survive the
            termination of your access to the Services, including provision regarding ownership, warranty disclaimers,
            indemnity, and limitations of liability.​​
          </p>
          <h4>‍8. TRADEMARKS AND COPYRIGHTS</h4>
          <p>
            SKAEL, and other Services graphics, logos, designs, page headers, button icons, scripts, and service names
            are the trademarks or trade dress of SKAEL or its licensors in the U.S. and/or other countries. These
            trademarks and trade dress may not be used, including as part of trademarks and/or as part of domain names,
            keyword advertisements, or email addresses, or in connection with any product or service in any manner that
            is likely to cause confusion.Content and other material made available on the Services is protected by
            copyright and other intellectual property laws. Aside from user-submitted Content, all other materials and
            other information on the Services, including all text, graphics, logos, icons, images, audio and video
            clips, downloads, data compilations and software are the exclusive property of SKAEL and/or its licensors
            and are protected by all United States and international copyright laws.
          </p>
          <h4>9. DISCLAIMER</h4>
          <p>
            SKAEL makes no representations or warranties concerning any Content or the Services. ANY USE OF THE CONTENT
            OR SERVICES, INCLUDING ANY RELIANCE UPON OR USE OF ANY OF THE INFORMATION THEREIN OR PROVIDED THEREBY, SHALL
            BE AT SOLE RISK. THE CONTENT AND SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTY OF ANY
            KIND (ALL OF WHICH ARE HEREBY DISCLAIMED), WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING THE IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <h4>10. LIMITATION OF LIABILITY</h4>
          <p>
            IN NO EVENT SHALL SKAEL OR ANY OF ITS LICENSORS AND SERVICE PROVIDERS (COLLECTIVELY, “SKAEL PARTIES”) HAVE
            ANY LIABILITY IN CONNECTION WITH THE CONTENT OR SERVICES FOR ANY SPECIAL, PUNITIVE, INDIRECT, CONSEQUENTIAL
            OR INCIDENTAL DAMAGES OR FOR LOSS OF PROFITS, REVENUE, USE, OR DATA, IN EACH CASE ARISING UNDER ANY THEORY,
            INCLUDING UNDER WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHER THEORY, EVEN IF SUCH SKAEL PARTY IS
            AWARE OF OR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. Some jurisdictions do not allow the
            exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not
            apply to you.
          </p>
          <p>
            THE SKAEL PARTIES’ AGGREGATE LIABILITY TO YOU OR TO ANY THIRD PARTY CLAIMING THROUGH YOU IN CONNECTION WITH
            THE USE OF THE CONTENT OR SERVICES IS LIMITED TO $250. ​​
          </p>
          <h4>‍11. INDEMNITY​</h4>
          <p>
            You agree to indemnify and hold harmless SKAEL, its officers, managers, owners, employees, agents,
            designees, users, successors, assigns, service providers and suppliers from and against all losses,
            liabilities, expenses, damages, claims, demands and costs, including reasonable attorneys' fees and court
            costs due to or arising in connection with your violation of these Terms of Service or your use of or
            inability to use the Services. SKAEL may elect to control the defense of any such damage or claim. You will
            not, in any event, settle any claim or matter without the written consent of SKAEL.​​
          </p>
          <h4>‍12. NOTICE</h4>
          <p>
            By use of the Services, you consent to receive electronic communications from SKAEL (via email or via a
            posting on the Services), and you agree that any such communications satisfy any legal requirement to make
            such communications in writing. You also agree that SKAEL may communicate any notices to you under these
            Terms of Service through electronic mail, regular mail or posting the notices on the Services. All notices
            to SKAEL must be provided by either sending: (i) electronic mail to{' '}
            <a href="mailto:info@skael.com">info@skael.com</a>; or (ii) a letter, first class certified mail, to SKAEL,
            1161 Mission St, San Francisco, CA 94127, Attention: Baba Nadimpalli. Such notices will be deemed delivered
            upon receipt.​​
          </p>
          <h4 id="arbitration">‍13. ENTIRE AGREEMENT</h4>
          <p>
            These Terms of Service and other agreements, rules, and policies incorporated by reference to this Terms
            including the Privacy Policy, constitutes the entire agreement between you and SKAEL. It supersedes any
            prior or contemporaneous negotiations, discussions or agreements, whether written or oral, between you and
            SKAEL regarding the subject matter contained in these Terms of Service. Additional terms and conditions may
            exist between you and third parties, including Service Providers and others. You represent and warrant that
            those third party agreements do not interfere with your obligations and duties to SKAEL under these Terms of
            Service.​​
          </p>
          <h4>14. GOVERNING LAW AND ARBITRATION; NO CLASS ACTIONS</h4>
          <p>
            These Terms, and any claim, cause of action or dispute (“claim”) arising out of or related to these Terms
            shall be governed by the laws of the State of California regardless of your country of origin or where you
            access the Services. ANY DISPUTE OR CLAIM RELATING IN ANY WAY TO THESE TERMS OR THE SERVICES WILL BE
            RESOLVED BY BINDING ARBITRATION, RATHER THAN IN COURT, except for SKAEL’s right to seek injunctive relief as
            set forth below.
          </p>
          <p>
            If you do not want to arbitrate disputes with SKAEL and you are an individual, you may opt out of this
            arbitration agreement by sending an email to <a href="mailto:legal@skael.com">legal@skael.com</a> within 30
            days of the day you first access or use the Services.
          </p>
          <p>
            If you intend to seek arbitration you must first send written notice to SKAEL’s Customer Service Center at{' '}
            <a href="mailto:cs@skael.com">cs@skael.com</a> of your intent to arbitrate (“Notice”). The Notice to SKAEL
            should be sent by any of the following means: (i) electronic mail to{' '}
            <a href="mailto:info@skael.com">info@skael.com</a>; or (ii) sending the Notice by U.S. Postal Service
            certified mail to SKAEL, 1161 Mission St, San Francisco, CA 94127, Attention: Baba Nadimpalli. The Notice
            must (x) describe the nature and basis of the claim or dispute; and (y) set forth the specific relief
            sought; and (z) set forth your name, address and contact information. If we intend to seek arbitration
            against you, we will send any notice of dispute to you at the contact information we have for you.
          </p>
          <p>
            The arbitration will be conducted before a neutral single arbitrator, whose decision will be final and
            binding, and the arbitral proceedings will be governed by the American Arbitration Association (“AAA”) under
            its AAA Commercial Arbitration Rules, Consumer Due Process Protocol, and Supplementary Procedures for
            Resolution of Consumer Related Disputes, as modified by these Terms. The AAA's rules are available at{' '}
            <a target="_blank" href="https://www.adr.org">
              www.adr.org
            </a>{' '}
            or by calling 1-800-778-7879. All issues are for the arbitrator to decide, including the scope of this
            arbitration clause, but the arbitrator is bound by the terms of these Terms. If you initiate arbitration,
            your arbitration fees will be limited to the filing fee set forth in the AAA’s Consumer Arbitration Rules.
            We will reimburse all other AAA filing, administration and arbitrator fees paid by you, unless the
            arbitrator determines that the arbitration was frivolous or brought for an improper purpose, in which case
            the payment of all such fees shall be governed by the AAA rules. The arbitration will be conducted in the
            English language. Judgment on the award rendered by the arbitrator may be entered in any court of competent
            jurisdiction. For any claim where the potential award is reasonably likely to be $10,000 or less, either you
            or SKAEL may elect to have the dispute resolved through non-appearance-based arbitration.
          </p>
          <p>
            To the fullest extent permitted by applicable law, YOU AND SKAEL EACH AGREE THAT ANY DISPUTE RESOLUTION
            PROCEEDING WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE
            ACTION. If for any reason a claim proceeds in court rather than in arbitration, YOU AND SKAEL EACH WAIVE ANY
            RIGHT TO A JURY TRIAL. If a court of competent jurisdiction finds the foregoing arbitration provisions
            invalid or inapplicable, you and SKAEL agree that all claims arising out of or related to these Terms must
            be resolved exclusively by a state or federal court located in San Francisco, California, and you and SKAEL
            each agree to submit to the exercise of personal jurisdiction of such courts for the purpose of litigating
            all such claims. Notwithstanding the above, you agree that SKAEL shall still be allowed to apply for and
            obtain injunctive remedies (or an equivalent type of urgent legal relief) in any jurisdiction. You agree
            that regardless of any statute or law to the contrary, any claim or cause of action arising out or related
            to your use of the Services or these Terms of Service shall be filed within one (1) year after such claim or
            cause of action arose or will forever be barred.​​
          </p>
          <h4>‍15. CHANGES TO THE TERMS OF SERVICE</h4>
          <p>
            ‍​We may periodically modify the Terms of Service. If we make material changes to the Terms of Service we
            will notify you via the Services (e.g., by posting a notice on our website or via email) prior to the change
            becoming effective. BY CONTINUING TO USE THE SERVICES YOU ARE CONSENTING TO THE REVISED TERMS OF SERVICE. If
            you do not agree with any modifications to the Terms of Service you must cease using the Services.
          </p>
          <h4>​​16. MISCELLANEOUS</h4>
          <p>
            If you breach any term of this Terms of Service or other agreement with SKAEL, SKAEL may pursue any legal or
            equitable remedy available, including but not limited to, direct, consequential, and punitive damages and
            injunctive relief. SKAEL's remedies are cumulative and not exclusive. Failure of SKAEL to exercise any
            remedy or enforce any portion of the Terms of Service at any time shall not operate as a waiver of any
            remedy or of the right to enforce any portion of the Agreement at any time thereafter. If any provision of
            the Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated
            to the minimum extent necessary so that the Terms shall otherwise remain in full force and effect and
            enforceable. This Terms of Service is not assignable, transferable or sublicensable by you except with
            SKAEL's prior written consent. We may transfer, assign or delegate the Terms and its rights and obligations
            without consent. Users of this Services are responsible for compliance with all applicable regulations and
            laws. No joint venture, partnership, employment or agency relationship exists between you and SKAEL as a
            result of these Terms of Service or use of the Services.
          </p>
          <h4>​​17. CONTACTING US</h4>
          <p>
            If you have any comments or questions regarding these Terms, or wish to report any violation of these Terms
            of Service, please contact us at{' '}
            <a target="_blank" href="mailto:info@skael.com">
              info@skael.com
            </a>
            . We will address any issue to the best of our abilities.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Terms;
export { Terms };
