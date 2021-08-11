import { Grid } from '@material-ui/core';
import { DEPLOYMENT_STAGE, MESSENGERS } from 'assets/interfaces/digitalEmployee';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { StyledInput, Wrapper } from '../forms.style';
import HelpIcon from '@material-ui/icons/Help';
import { HelpContainer } from '../forms.style';
import { digitalEmployeeActions } from '../../../../redux/digitalEmployee/actions';
import { modalsActions } from '../../../../redux/modals/actions';

const SlackForm = () => {
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        digitalEmployeeActions.messengerRefresh({
          params: { [e.target.name]: e.target.value },
          name: MESSENGERS.slack,
        })
      );
    },
    [dispatch]
  );

  const onClick = useCallback(() => {
    dispatch(
      modalsActions.deploymentModalSetData({
        messenger: MESSENGERS.slack,
        stage: DEPLOYMENT_STAGE.creation,
      })
    );
    dispatch(modalsActions.deploymentModalToggle(true));
  }, [dispatch]);

  return (
    <Wrapper>
      <div>
        <Grid container justify="space-between">
          <div>Slack</div>
          <HelpContainer onClick={onClick}>
            <HelpIcon fontSize="small" />
            <span>Slack configuration instruction</span>
          </HelpContainer>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <StyledInput onChange={onChange} placeholder="App ID" name="app_id" type="text" />
            <StyledInput onChange={onChange} placeholder="Client ID" name="client_id" type="text" />
          </Grid>
          <Grid item xs={6}>
            <StyledInput onChange={onChange} placeholder="Client Secret" name="client_secret" type="password" />
            <StyledInput onChange={onChange} placeholder="Signing Secret" name="signing_secret" type="password" />
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  );
};

export default SlackForm;
export { SlackForm };
