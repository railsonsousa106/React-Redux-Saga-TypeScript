import { Grid } from '@material-ui/core';
import { DEPLOYMENT_STAGE, MESSENGERS } from 'assets/interfaces/digitalEmployee';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { StyledInput, Wrapper } from '../forms.style';
import HelpIcon from '@material-ui/icons/Help';
import { HelpContainer } from '../forms.style';
import { modalsActions } from '../../../../redux/modals/actions';
import { digitalEmployeeActions } from '../../../../redux/digitalEmployee/actions';

const TeamsForm = () => {
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        digitalEmployeeActions.messengerRefresh({
          params: { [e.target.name]: e.target.value },
          name: MESSENGERS.teams,
        })
      );
    },
    [dispatch]
  );

  const onClick = useCallback(() => {
    dispatch(
      modalsActions.deploymentModalSetData({
        messenger: MESSENGERS.teams,
        stage: DEPLOYMENT_STAGE.creation,
      })
    );
    dispatch(modalsActions.deploymentModalToggle(true));
  }, [dispatch]);

  return (
    <Wrapper>
      <div>
        <Grid container justify="space-between">
          <div>MS Teams</div>
          <HelpContainer onClick={onClick}>
            <HelpIcon fontSize="small" />
            <span>MS Teams configuration instructions (1 of 2)</span>
          </HelpContainer>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <StyledInput onChange={onChange} placeholder="App ID" name="app_id" type="text" />
          </Grid>
          <Grid item xs={6}>
            <StyledInput onChange={onChange} placeholder="App Secret" name="app_secret" type="password" />
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  );
};

export default TeamsForm;
export { TeamsForm };
