// core
import React, { useEffect, useState } from 'react';

// components
import { api } from '../../../REST';

// assets
import styles from './HirePopup.module.scss';
import logo from '../../../assets/home/images/logo.svg';
import { useScrollPosition } from '../../../customHooks/useScroll';

let classname: boolean;

const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

export const HirePopup = ({ showPopupHire, setShowPopupHire }: any) => {
  const [scroll] = useScrollPosition();

  const [organization, setOrganization] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors]: any = useState(null);
  const [success, setSuccess]: any = useState(false);

  useEffect(() => {
    classname = scroll < 120;
  }, [scroll]);

  const sentEmail = async () => {
    const errors: any = {};

    if (!organization) {
      errors.organization = 'Required field';
    }

    if (!email) {
      errors.email = 'Required field';
    }

    if (!validateEmail(email)) {
      errors.email = 'Email not valid';
    }

    if (!userName) {
      errors.userName = 'Required field';
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    try {
      const result = await api.digitalEmployee.setDigitalEmployee({
        user_name: userName,
        user_email: email,
        organization_name: organization,
        template_id: showPopupHire.id,
      });
    } catch (err) {
      console.log(err);
    }

    setOrganization('');
    setEmail('');
    setUserName('');
    setFormErrors(null);
    setSuccess(true);
  };

  return (
    <div className={styles.popupHire}>
      <div className={styles.popupInner}>
        <span className={styles.close} onClick={() => setShowPopupHire({ show: false, name: '', id: '' })} />
        <img className={styles.logo} src={logo} alt="" />
        <h1>
          Hire Digital Employee: <span>{showPopupHire.name}</span>
        </h1>
        {!success ? (
          <form action="">
            <label>
              <span>Organization</span>
              <input
                type="text"
                placeholder="Your Organization"
                value={organization}
                onChange={e => setOrganization(e.target.value)}
              />
              {formErrors && formErrors.organization ? (
                <div className={`${styles.error} field-error`}>{formErrors.organization}</div>
              ) : null}
            </label>
            <label>
              <span>Username</span>
              <input type="text" placeholder="Your name" value={userName} onChange={e => setUserName(e.target.value)} />
              {formErrors && formErrors.userName ? (
                <div className={`${styles.error} field-error`}>{formErrors.userName}</div>
              ) : null}
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              {formErrors && formErrors.email ? (
                <div className={`${styles.error} field-error`}>{formErrors.email}</div>
              ) : null}
            </label>
            <div className={styles.button}>
              <button type="button" className="btn" onClick={sentEmail}>
                Apply
              </button>
            </div>
          </form>
        ) : (
          <h3 className={styles.success}>
            Thank you for contacting SKAEL, one of our team will reach out to you shortly
          </h3>
        )}
      </div>
    </div>
  );
};
