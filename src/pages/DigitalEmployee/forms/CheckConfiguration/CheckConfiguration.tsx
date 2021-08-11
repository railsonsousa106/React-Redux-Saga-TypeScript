import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DEPLOYMENT_STAGE, MESSENGERS } from '../../../../assets/interfaces/digitalEmployee';
import { selectDeID, selectCurrentDEMessengers } from '../../../../redux/digitalEmployee/selectors';
import { StyledButton, FormWrapper } from '../forms.style';
import { ErrorMessage } from '../components/ErrorMessage';
import { Grid } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import { HelpContainer } from '../forms.style';
import { capitalize } from 'lodash';
import { digitalEmployeeActions } from '../../../../redux/digitalEmployee/actions';
import { modalsActions } from '../../../../redux/modals/actions';
import { DE_STEPS_KEYS } from '../../../../constants/digitalEmployee';

const CheckConfiguration = () => {
  const dispatch = useDispatch();
  const deID = useSelector(selectDeID);
  const messengers = useSelector(selectCurrentDEMessengers(deID)) || [];
  const messenger = messengers[0];
  const messengerTitle = messenger === MESSENGERS.teams ? `MS ${capitalize(messengers[0])}` : capitalize(messengers[0]);

  const onClickInfoLink = useCallback(() => {
    dispatch(
      modalsActions.deploymentModalSetData({
        messenger: messengers[0],
        stage: DEPLOYMENT_STAGE.integration,
      })
    );
    dispatch(modalsActions.deploymentModalToggle(true));
  }, [dispatch, messengers]);

  const onClickNext = useCallback(() => {
    dispatch(digitalEmployeeActions.checkConfiguration());
  }, [dispatch]);

  const onClickBack = useCallback(() => {
    dispatch(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.messengerConfiguration));
  }, [dispatch]);

  return (
    <FormWrapper>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={12}>
          <h2>{`Complete ${messengerTitle} configuration`}</h2>
        </Grid>
        <Grid item xs={12}>
          <p>
            It's almost done! The last thing left is to complete the messenger setup. Please open the instructions and
            go through the steps that will help you integrate the messenger.
          </p>
        </Grid>
        <Grid item xs={12}>
          <HelpContainer onClick={onClickInfoLink}>
            <HelpIcon fontSize="small" />
            <span className="check-configuration-instruction-label">{`${messengerTitle} configuration instructions (2 of 2)`}</span>
          </HelpContainer>
        </Grid>
      </Grid>
      <ErrorMessage />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <StyledButton onClick={onClickBack} className="btn btnGreen">
            Back
          </StyledButton>
        </Grid>
        <Grid item xs={6}>
          <StyledButton onClick={onClickNext} className="btn">
            Next
          </StyledButton>
        </Grid>
      </Grid>
    </FormWrapper>
  );
};

export default CheckConfiguration;
export { CheckConfiguration };
