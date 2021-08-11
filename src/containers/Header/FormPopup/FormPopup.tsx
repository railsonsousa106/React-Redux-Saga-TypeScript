// core
import React, { useEffect, useState } from 'react';

// components
import firebase from '../../../utils/firebase';
import { validateEmail } from '../../../utils';

// assets
import styles from './FormPopup.module.scss';
import logo from '../../../assets/home/images/logo.svg';
import { useScrollPosition } from '../../../customHooks/useScroll';

let classname: boolean;

export const FormPopup = ({ setShowPopup, selectedDE }: any) => {
  const [scroll] = useScrollPosition();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(selectedDE);
  const [companySize, setCompanySize] = useState('');
  const [formErrors, setFormErrors]: any = useState(null);
  const [success, setSuccess]: any = useState(false);

  useEffect(() => {
    classname = scroll < 120;
  }, [scroll]);

  const sentEmail = async () => {
    const sendEmail = firebase.functions().httpsCallable('sendEmail');
    const errors: any = {};

    if (!firstName) {
      errors.firstName = 'Required field';
    }

    if (!lastName) {
      errors.lastName = 'Required field';
    }

    if (!email) {
      errors.email = 'Required field';
    }

    if (!validateEmail(email)) {
      errors.email = 'Email not valid';
    }

    if (!company) {
      errors.company = 'Required field';
    }

    if (!phone) {
      errors.phone = 'Required field';
    }

    if (!subject) {
      errors.subject = 'Required field';
    }
    if (!companySize) {
      errors.companySize = 'Required field';
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    try {
      const result = await sendEmail({
        firstName,
        lastName,
        email,
        phone,
        company,
        companySize,
        subject,
      });
    } catch (err) {
      console.log(err);
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setSubject('');
    setCompany('');
    setFormErrors(null);
    setSuccess(true);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <span className={styles.close} onClick={() => setShowPopup(false)} />
        <img className={styles.logo} src={logo} alt="" />
        <h1>
          <span>Contact us</span>
        </h1>
        {!success ? (
          <form action="">
            <label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              {formErrors && formErrors.firstName ? <div className="field-error">{formErrors.firstName}</div> : null}
            </label>
            <label>
              <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
              {formErrors && formErrors.lastName ? <div className="field-error">{formErrors.lastName}</div> : null}
            </label>
            <label>
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              {formErrors && formErrors.email ? <div className="field-error">{formErrors.email}</div> : null}
            </label>
            <label>
              <input type="number" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
              {formErrors && formErrors.phone ? <div className="field-error">{formErrors.phone}</div> : null}
            </label>
            <label>
              <input type="text" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
              {formErrors && formErrors.company ? <div className="field-error">{formErrors.company}</div> : null}
            </label>
            <label>
              <select value={companySize} onChange={e => setCompanySize(e.target.value)}>
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
              {formErrors && formErrors.companySize ? (
                <div className="field-error">{formErrors.companySize}</div>
              ) : null}
            </label>
            <label>
              <select value={subject} onChange={e => setSubject(e.target.value)}>
                <option value="" disabled>
                  Select reason for signing up
                </option>
                <option value="Alex">Alex - Financial Digital Employee</option>
                <option value="June">June - Sales Support Digital Employee</option>
                <option value="Drew">Drew - Service Desk Digital Employee</option>
                <option value="Free Trial">Free Trial</option>
                <option value="Contact">Contact</option>
                <option value="Support">Support</option>
              </select>
              {formErrors && formErrors.subject ? <div className="field-error">{formErrors.subject}</div> : null}
            </label>
            <div className={styles.button}>
              <button type="button" className="btn" onClick={sentEmail}>
                Submit
              </button>
            </div>
          </form>
        ) : (
          <h3 className={styles.success}>
            Thank you for contacting SKAEL. One of our team members will reach out to you shortly
          </h3>
        )}
      </div>
    </div>
  );
};
