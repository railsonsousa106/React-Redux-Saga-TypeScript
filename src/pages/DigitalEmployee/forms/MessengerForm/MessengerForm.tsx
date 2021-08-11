import { MESSENGERS } from 'assets/interfaces/digitalEmployee';
import { DE_STEPS_KEYS} from '../../../../constants/digitalEmployee';
import { messengerParams } from '../../../../constants/messengers';
import { keys, values } from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDeID,
  selectCurrentDEMessengers,
  selectMessengersData,
} from '../../../../redux/digitalEmployee/selectors';
import { Header, StyledButton, FormWrapper } from '../forms.style';
import { SlackForm } from '../SlackForm';
import { TeamsForm } from '../TeamsForm';
import { ErrorMessage } from '../components/ErrorMessage';
import { Grid } from '@material-ui/core';
import { digitalEmployeeActions } from '../../../../redux/digitalEmployee/actions';
import { Messengers } from '../../../../redux/digitalEmployee/types';

const messengersForms = {
  [MESSENGERS.slack]: <SlackForm />,
  [MESSENGERS.teams]: <TeamsForm />,
  [MESSENGERS.googleChat]: <SlackForm />,
};

const MessengerForm = () => {
  const dispatch = useDispatch();
  const deID = useSelector(selectDeID);
  const messengers = useSelector(selectCurrentDEMessengers(deID)) || [];
  const messengersData: Messengers[] = useSelector(selectMessengersData);

  let isDisabled = false;

  messengersData?.forEach(({ name, params }) => {
    if (!isDisabled) {
      messengers?.forEach((messenger: string) => {
        const { inputs } = messengerParams[messenger as keyof typeof MESSENGERS];
        if (name === messenger) {
          if (keys(params).length !== inputs.length || values(params).filter(Boolean).length === 0) {
            isDisabled = true;
          }
        }
      });
    }
  });

  const onClick = useCallback(() => {
    dispatch(digitalEmployeeActions.applyDE());
  }, [dispatch]);

  const onClickBack = useCallback(() => {
    dispatch(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.selectServices));
    dispatch(digitalEmployeeActions.messengersRefresh([]));
    dispatch(digitalEmployeeActions.uiRefresh({ errorMessage: '' }));
  }, [dispatch]);

  return (
    <FormWrapper>
      <div>
        <Header>Messenger configuration</Header>
        {messengers?.map((messenger: string) => messengersForms[messenger as keyof typeof MESSENGERS])}
      </div>
      <ErrorMessage />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <StyledButton onClick={onClickBack} className="btn btnGreen">
            Back
          </StyledButton>
        </Grid>
        <Grid item xs={6}>
          <StyledButton disabled={isDisabled || messengersData.length === 0} onClick={onClick} className="btn">
            Next
          </StyledButton>
        </Grid>
      </Grid>
    </FormWrapper>
  );
};

export default MessengerForm;
export { MessengerForm };
