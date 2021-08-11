import React, { useMemo, FC } from 'react';
import { RouteComponentProps, match as IMatch } from 'react-router-dom';

import styles from './DigitalEmployee.module.scss';

import { DE_CARDS, DE_STEPS_KEYS, DE_TYPES } from '../../constants/digitalEmployee';

import { FlowSteps } from './FlowSteps';
import { SelectService, UserData, VerifyEmail, MessengerForm, CheckConfiguration, Finish } from './forms';
import { useSelector } from 'react-redux';
import { selectCurrentStep } from '../../redux/digitalEmployee/selectors';

interface IMatchProps {
  type: DE_TYPES;
}

const DE_FORMS = {
  [DE_STEPS_KEYS.userData]: (props: IMatchProps) => <UserData />,
  [DE_STEPS_KEYS.verifyEmail]: (props: IMatchProps) => <VerifyEmail />,
  [DE_STEPS_KEYS.selectServices]: (props: IMatchProps) => <SelectService {...props} />,
  [DE_STEPS_KEYS.messengerConfiguration]: (props: IMatchProps) => <MessengerForm />,
  [DE_STEPS_KEYS.checkConfiguration]: (props: IMatchProps) => <CheckConfiguration />,
  [DE_STEPS_KEYS.finish]: (props: IMatchProps) => <Finish />,
};

const DigitalEmployee: FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const match: IMatch<IMatchProps> = props.match as IMatch<IMatchProps>;
  const { params } = match;
  const { type } = params;
  const isValidType = !!DE_CARDS[type];

  const cardConfig = useMemo(() => DE_CARDS[type] || {}, [type]);
  const { title = '', services = [], comingSoon = [], btnText = '', image = '' } = cardConfig;

  const activeStep: keyof typeof DE_STEPS_KEYS = useSelector(selectCurrentStep);

  if (!isValidType) {
    return null;
  }

  return (
    <main className={`${styles.plugAndPlay} global`}>
      <section className={styles.employees}>
        <div className={styles.container}>
          <div className={styles.employeesInner}>
            <div className={styles.employeesLeft}>
              <div className={`${styles.itemInfo} ${styles[type]}`}>
                <div className={styles.itemTop}>
                  <img src={image} alt="employee" />
                  <div className={styles.itemTitle}>
                    <h2>{title}</h2>
                    <a
                      href="/"
                      className="btn"
                      onClick={e => {
                        e.preventDefault();
                      }}
                    >
                      {btnText}
                    </a>
                  </div>
                </div>
                <h6>Works with:</h6>
                <div className={styles.works}>
                  {services.map((service, index) => {
                    const showComingSoon = comingSoon.includes(service);
                    return (
                      <div className={styles.imgWrapper}>
                        <img key={index} src={service} alt={`service-${index}`} />
                        {showComingSoon && <div className={styles.comingSoon}>Coming soon</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.employeesRight}>
              <FlowSteps activeStep={activeStep} />

              <div className={styles.formContainer}>{DE_FORMS[activeStep]({ type: type })}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalEmployee;
export { DigitalEmployee };
