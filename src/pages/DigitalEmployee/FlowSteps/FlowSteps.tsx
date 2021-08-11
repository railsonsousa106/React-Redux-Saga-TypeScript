import React, { FC, useMemo } from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { DE_STEPS, DE_STEPS_KEYS } from '../../../constants/digitalEmployee';

import styles from '../DigitalEmployee.module.scss';

const FlowSteps: FC<{ activeStep: keyof typeof DE_STEPS_KEYS }> = ({ activeStep }) => {
  const currentActiveStep = useMemo(() => Object.entries(DE_STEPS).findIndex(([key]) => key.includes(activeStep)), [
    activeStep,
  ]);

  return (
    <Stepper className={styles.stepper} activeStep={currentActiveStep} alternativeLabel>
      {Object.entries(DE_STEPS).map(([key, value]) => (
        <Step key={key}>
          <StepLabel>{value}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default FlowSteps;
export { FlowSteps };
