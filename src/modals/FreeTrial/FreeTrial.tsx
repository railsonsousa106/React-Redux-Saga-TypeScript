import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { FreeTrialModalData } from '../../redux/modals/types';
import { selectFreeTrialData } from '../../redux/modals/selectors';

import logo from '../../assets/home/images/logo.svg';
import styles from './FreeTrial.module.scss';

import { validateForm } from './assets';
import { modalsActions } from '../../redux/modals/actions';

const FreeTrial: React.FC = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectFreeTrialData, shallowEqual);

  const [formErrors, setFormErrors]: any = useState(null);
  const [success, setSuccess]: any = useState(false);

  const onSubmit = useCallback(() => {
    const errors = validateForm(modalData);
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    dispatch(modalsActions.freeTrialModalSubmit());

    setFormErrors(null);
    setSuccess(true);
  }, [dispatch, modalData, setFormErrors]);

  const onClickClose = useCallback(() => {
    dispatch(modalsActions.freeTrialModalToggle(false));
    dispatch(modalsActions.freeTrialModalResetData());
  }, [dispatch]);

  const onChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const resData = ({
        [event.target.name]: event.target.value,
      } as unknown) as FreeTrialModalData;

      dispatch(modalsActions.freeTrialModalSetData(resData));
    },
    [dispatch]
  );

  const showForm = !success;
  const showSuccess = success;

  if (!modalData.visible) {
    return null;
  }

  return (
    <div className="global">
      <div className={styles.popup}>
        <div className={styles.popupInner}>
          <span className={styles.close} onClick={onClickClose} />
          <img className={styles.logo} src={logo} alt="" />
          <h1>
            <span>Contact us</span>
          </h1>
          {showForm && (
            <form action="">
              <label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name*"
                  value={modalData.first_name}
                  onChange={onChangeValue}
                />
                {formErrors && formErrors.first_name && <div className="field-error">{formErrors.first_name}</div>}
              </label>
              <label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name*"
                  value={modalData.last_name}
                  onChange={onChangeValue}
                />
                {formErrors && formErrors.last_name && <div className="field-error">{formErrors.last_name}</div>}
              </label>
              <label>
                <input type="email" name="email" placeholder="Email" value={modalData.email} onChange={onChangeValue} />
                {formErrors && formErrors.email && <div className="field-error">{formErrors.email}</div>}
              </label>
              <label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={modalData.phone}
                  onChange={onChangeValue}
                />
                {formErrors && formErrors.phone && <div className="field-error">{formErrors.phone}</div>}
              </label>
              <label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company*"
                  value={modalData.company}
                  onChange={onChangeValue}
                />
                {formErrors && formErrors.company && <div className="field-error">{formErrors.company}</div>}
              </label>
              <label>
                <select name="company_size" value={modalData.company_size} onChange={onChangeValue}>
                  <option value="" disabled>
                    Select Company Size*
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
                {formErrors && formErrors.company_size && <div className="field-error">{formErrors.companySize}</div>}
              </label>
              <label>
                <select name="subject" value={modalData.subject} onChange={onChangeValue}>
                  <option value="" disabled>
                    Select one of the options*
                  </option>
                  <option value="Alex">Alex - Financial Digital Employee</option>
                  <option value="June">June - Sales Support Digital Employee</option>
                  <option value="Drew">Drew - Service Desk Digital Employee</option>
                  <option value="Platform">Platform</option>
                  <option value="Contact">Contact</option>
                  <option value="Support">Support</option>
                </select>
                {formErrors && formErrors.subject && <div className="field-error">{formErrors.subject}</div>}
              </label>
              <div className={styles.button}>
                <button type="button" className="btn" onClick={onSubmit}>
                  Submit
                </button>
              </div>
            </form>
          )}
          {showSuccess && (
            <h3 className={styles.success}>
              Thank you for contacting SKAEL. One of our team members will reach out to you shortly
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
export { FreeTrial };
