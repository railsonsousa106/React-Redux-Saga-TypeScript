// core
import React, { useEffect, useRef } from 'react';

// library
import { gsap, TimelineLite, Power3 } from 'gsap';
import Particles from 'react-particles-js';

// styles
import styles from './PrivacyPolicy.module.scss';
import { useWindowSize } from '../../customHooks/useLayoutEffect';
import { useScrollPosition } from '../../customHooks/useScroll';
import { AboutImage } from '../../components/AboutImage';

const duration = 2;

const PrivacyPolicy = () => {
  const [width] = useWindowSize();
  const [scroll] = useScrollPosition();

  // animations
  gsap.registerPlugin();
  const t1 = new TimelineLite();
  let helpOneTitle: any = useRef(null);
  let sectionOneRight: any = useRef(null);
  const t2 = new TimelineLite();
  let sectionTwo: any = useRef(null);

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
    <main className={`${styles.privacyPolicy} global`}>
      <section className={styles.help}>
        <Particles className={styles.particle} width="1920" height="1080" params={params} />
        <div className="container">
          <h1 ref={el => (helpOneTitle = el)}>Privacy Policy</h1>
          <div className={styles.helpInner}>
            <div ref={el => (sectionOneRight = el)} className={styles.helpRight}>
              <AboutImage />
            </div>
          </div>
        </div>
      </section>
      <section ref={el => (sectionTwo = el)} className={styles.privacyPolicyDescription}>
        <div className="container">
          <p>
            The following privacy policy (the “Privacy Policy”) outlines what information SKAEL, Inc. (“SKAEL,”, “we” or
            “us”) may collect from users (“Users,” a “User” or “you”) through our digital assistant and on our website
            [www.skael.com] (the “Site”), any of its subdomains, or any related sites, applications, widgets, online
            services or services through third party messaging systems offered by SKAEL (collectively, the “Service”),
            and how we protect, use and disclose that information, and what choices you have about how that information
            is used and disclosed.
          </p>
          <p>
            PLEASE READ THIS PRIVACY POLICY CAREFULLY BEFORE USING THE SERVICE. IF YOU DO NOT ACCEPT THIS PRIVACY
            POLICY, DO NOT USE THE SERVICE. When you use the Services, you understand that SKAEL may collect, use and
            disclose technical data and related information about you in various ways subject to the terms of the
            Privacy Policy.
          </p>
          <h4>1. Information We Collect</h4>
          <h4>‍​1.1 Information We Collect From You</h4>
          <p>
            Upon registration with the Services, a User profile is developed. When a you register on, or otherwise use
            the Services, we may collect information you provide including:​
          </p>
          <ul>
            <li>Email</li>
            <li>Password</li>
            <li>Name</li>
            <li>Company name</li>
            <li>Phone number</li>
            <li>Address and Zip Code</li>
            <li>Telephone and mobile numbers</li>
            <li>Text or voice information or questions from the User</li>
          </ul>
          <p>
            We also collect information from and about the devices you use to access the Services. This includes things
            like IP addresses, the type of browser and device you use, the web page you visited before coming to our
            sites, and identifiers associated with your devices. Your devices (depending on their settings) may also
            transmit location information to the Services.​
          </p>
          <p>
            We also collect general, non-personal, aggregate statistical information about the use of the Services, such
            as how many users use our digital assistant or visit a specific page on our website, how long they stay on
            that page, and which hyperlinks, if any, they click on.​​
          </p>
          <h4>1.2 Cookies and Other Technology</h4>
          <p>
            We use technologies like cookies and pixel tags to provide, improve, and protect our Services. For example,
            cookies help us with things like remembering your username for your next visit, understanding how you are
            interacting with our Services, and improving them based on that information. You can set your browser to not
            accept cookies, but this may limit your ability to use the Services.Cookies are small data files sent to
            your browser when you visit a site. We use cookies to do a few different things:​​
          </p>
          <ul>
            <li>Log you in to our services</li>
            <li>Remember preferences and settings</li>
            <li>Keep your account secure</li>
            <li>
              Better understand how people are using our services, and improve and promote them based on that
              information
            </li>
          </ul>
          <p>
            A pixel tag ("pixel") is a small piece of code that can be embedded on websites and emails. We use pixels
            and cookies to learn how you interact with our Services. This information helps us better understand how
            Users use our Services.SKAEL does not track Users across third party websites, and therefore does not use or
            respond to "do not track" signals in your web browser.
          </p>
          <p>
            We also use services hosted by third parties on www.skael.com, such as Google Analytics, a web analytics
            service provided by Google, Inc. (“Google”), to assist in providing the Services. Google Analytics uses
            cookies to help us analyze how Users use the Services. The information generated by the cookie about your
            use of the website (including your IP address) will be transmitted to, and stored by, Google on their
            servers. Google will use this information for the purpose of evaluating your use of the Services, compiling
            reports on website activity for us and providing other services relating to website activity and Internet
            usage. Google may also transfer this information to third parties where required to do so by law, or where
            such third parties process the information on Google’s behalf. Google will not associate your IP address
            with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings
            on your browser, however please note that if you do this you may not be able to use the full functionality
            of the Services. By using this Services, you consent to the processing of data about you by Google in the
            manner and for the purposes set out above.​​
          </p>
          <h4>‍2. How We Use Your Information​</h4>
          <h4>‍2.1 To Provide the Services</h4>
          <p>
            We use the information that we collect from you to provide you with the Services, support and enhance your
            use of the Services, to monitor which features of the Services are used most and to allow us to determine
            which features we need to focus on improving. If you choose to provide us with your information through your
            registration for and use of the Services, you consent to the transfer and storage of that information on our
            servers located in the United States.​
          </p>
          <p>
            We use non-personal information collected from Users of the Services in the aggregate, so that we can
            improve the Services and for business and administrative purposes.​​
          </p>
          <h4>2.2 Diagnose Website Problems​</h4>
          <p>
            We use your Internet Protocol (IP) address to help diagnose problems with our computer server, and to
            administer the Website. It is not stored or linked to your personal profile information, such as name or
            contact information.​
          </p>
          <h4>2.3 Service-related Announcements​</h4>
          <p>
            We will send you strictly service-related announcements on rare occasions when it is necessary to do so. For
            instance, if our service is temporarily suspended for maintenance, we might send you an email. ​
          </p>
          <p>
            Generally, you may not opt-out of these communications, which are not promotional in nature. If you do not
            wish to receive them, you have the option to deactivate your account.​
          </p>
          <h4>2.4 Customer Service</h4>
          <p>
            We will send you a welcoming email to the address you provide at registration to verify your username and
            password, and may send you a one-time password or pin number via telephone. We will also communicate with
            you in response to your inquiries, to provide the services you request, and to manage your account. We will
            communicate with you by email or the SKAEL digital assistant, in accordance with your wishes. By providing a
            telephone number, you consent to us contacting you at that number for the purposes outlined in this Privacy
            Policy.​
          </p>
          <h4>‍3. Our Disclosure of Your Information​</h4>
          <h4>3.1 Third Party Service Providers</h4>
          <p>
            We may employ or partner with third party companies and individuals to facilitate our provision of the
            Service (e.g., to communicate with Users, for example by converting text to speech via Alexa), perform
            Service-related services (e.g., maintenance services, database management, web analytics and improvement of
            the Services’ features) or to assist us in analyzing how our Services are used. These third parties may have
            access to your Personal Information, but only to the extent needed to perform these tasks on our behalf, and
            we will contractually require them to protect and safeguard your Personal Information to at least the same
            extent that we do under this Privacy Policy.​
          </p>
          <h4>3.2 Law Enforcement</h4>
          <p>
            SKAEL cooperates with government and law enforcement officials, agencies and private parties to enforce and
            comply with the law. We will disclose any information about you to government or law enforcement officials,
            agencies or private parties as we, in our sole discretion, believe necessary or appropriate to respond to
            claims and legal processes (including but not limited to subpoenas), to protect the property and rights of
            SKAEL or a third party, to protect the safety of the public or any person, or to prevent or stop activity we
            may consider to be, or to pose a risk of being, an illegal, unethical or legally actionable activity.
          </p>
          <h4>‍​3.3 Business Transfers</h4>
          <p>
            In the event that all or a substantial portion of the assets, business or stock of SKAEL are acquired by,
            merged with or transferred to another party, or in the event that SKAEL goes out of business or enters
            bankruptcy, your Personal Information may be one of the assets that is transferred to or acquired by the
            third party. You acknowledge that such transfers may occur, and that any acquirer of SKAEL or its assets may
            continue to use your Personal Information as set forth in this Privacy Policy. If any acquirer of SKAEL or
            its assets will use your Personal Information contrary to this Privacy Policy, you will receive prior
            notice.​​
          </p>
          <h4>‍4. Accessing and Updating Your Personal Information​</h4>
          <p>
            If your Personal Information changes, or if you no longer desire our Services, you may correct, delete
            inaccuracies, or amend your Personal Information and preferences by making the change on our User
            information page or by contacting us at&nbsp;
            <a href="mailto:info@skael.com">info@skael.com</a>. We will use commercially reasonable efforts to respond
            to your access request within 30 days.​
          </p>
          <h4>5. Security</h4>
          <p>
            It is our policy to protect your account information against unauthorized access or release. However, we
            cannot guarantee the security of our database or the voice recognition system used by our third party
            service providers (e.g., Amazon, Google, Microsoft), nor can we guarantee that information you supply won't
            be intercepted while being transmitted to us over the Internet, and any information you transmit to SKAEL
            you do at your own risk. We recommend that you use unique numbers, letters and special characters in your
            password and not disclose your password to anyone. If you do share your password or Personal Information
            with others, you are responsible for all actions taken in the name of your account. If your password has
            been compromised for any reason, you should immediately notify SKAEL at&nbsp;
            <a href="mailto:security@skael.com">security@skael.com</a> and change your password.
          </p>
          <p>
            In addition, we have procedures that limit SKAEL’s employees and contractors’ access to Personal
            Information. Only those employees and contractors with a business reason to know have access to such
            information.​​
          </p>
          <h4>‍6. Microsoft Bot Framework</h4>
          <p>
            If you use the digital assistant through a Microsoft product, the Services are enabled by Microsoft Bot
            Framework. The Microsoft Bot Framework is a set of web-services that enable intelligent services and
            connections using conversation channels you authorize. As a service provider, Microsoft will transmit
            content you provide to our bot/service in order to enable the service. For more information about Microsoft
            privacy policies please see their privacy statement here:&nbsp;
            <a href="http://go.microsoft.com/fwlink/?LinkId=521839" target="_blank">
              http://go.microsoft.com/fwlink/?LinkId=521839
            </a>{' '}
            In addition, your interactions with the Services are also subject to the conversational channel's applicable
            terms of use, privacy and data collection policies. To report abuse when using a bot that uses the Microsoft
            Bot Framework to Microsoft, please visit the Microsoft Bot Framework website at&nbsp;
            <a href="https://www.botframework.com" target="_blank">
              https://www.botframework.com
            </a>{' '}
            and use the “Report Abuse” link in the menu to contact Microsoft. If you are not using a Microsoft product,
            this section does not apply to you.​
          </p>
          <h4>‍7. Third Party Links</h4>
          <p>
            We may provide links to third party websites, such as credit bureaus, service providers or merchants. If you
            follow links to sites not affiliated or controlled by SKAEL, you should review their privacy and security
            policies and other terms and conditions. SKAEL does not guarantee and is not responsible for the privacy or
            security of these sites, including the accuracy, completeness, or reliability of their information.
          </p>
          <h4>8. Changes to this Privacy Policy</h4>
          <p>
            We may periodically modify this Privacy Policy to reflect changes to our information practices. If we make
            any material changes we will notify you via the Services (e.g., by posting a notice on our website or via
            email) prior to the change becoming effective. We encourage you to periodically review this page for the
            latest information on our privacy practices. If you do not agree with any modifications to the Privacy
            Policy you must cease using the Services.
          </p>
          <h4>9. Eligibility Requirements</h4>
          <p>
            The Services are not intended for use by any individual under the age of 18. Users under 18 or any are not
            allowed to register with or use the Services.
          </p>
          <p>
            SKAEL does not knowingly collect or solicit Personal Information from anyone under the age of 13 or
            knowingly allow such persons to register on the Services.​​
          </p>
          <h4>‍10. Users Outside the United States​</h4>
          <p>
            This Privacy Policy is intended to cover collection of information from residents of the United States. The
            Service and the services upon which the Service is hosted are located in the United States. Personal
            Information you submit using the Service will be transferred to and stored in the United States. By visiting
            the Service and submitting Personal Information, you authorize this transfer.​​
          </p>
          <h4>‍11. Contact us</h4>
          <p>
            If you have questions or concerns regarding this Privacy Policy, you should contact us at:&nbsp;
            <a href="mailto:info@skael.com">info@skael.com</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
export { PrivacyPolicy };
