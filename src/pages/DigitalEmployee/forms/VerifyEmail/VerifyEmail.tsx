import { Grid } from '@material-ui/core';
import { DE_STEPS_KEYS } from '../../../../constants/digitalEmployee';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { digitalEmployeeActions } from '../../../../redux/digitalEmployee/actions';
import { selectUserData } from '../../../../redux/digitalEmployee/selectors';

import { ErrorMessage } from '../components/ErrorMessage';
import { StyledButton, StyledInput, FormWrapper, Header } from '../forms.style';

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { first_name, last_name, email, organization, verification_code } = useSelector(selectUserData);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(digitalEmployeeActions.userRefresh({ [e.target.name]: e.target.value }));
    },
    [dispatch]
  );

  const onClick = useCallback(() => {
    dispatch(digitalEmployeeActions.verifyEmail());
  }, [dispatch]);

  const onClickBack = useCallback(() => {
    dispatch(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.userData));
  }, [dispatch]);

  return (
    <FormWrapper>
      <div>
        <Header>User Data</Header>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <StyledInput disabled onChange={onChange} placeholder="First Name" name="first_name" type="text" value={first_name} />
          </Grid>
          <Grid item xs={6}>
            <StyledInput disabled onChange={onChange} placeholder="Last Name" name="last_name" type="text" value={last_name} />
          </Grid>
        </Grid>
        <StyledInput disabled placeholder="Email" name="email" type="email" value={email} />
        <StyledInput disabled placeholder="Organization" name="organization" type="text" value={organization} />
        <StyledInput
          onChange={onChange}
          placeholder="Code from Email"
          name="verification_code"
          type="text"
          value={verification_code}
        />
      </div>
      <ErrorMessage />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <StyledButton onClick={onClickBack} className="btn btnGreen">
            Back
          </StyledButton>
        </Grid>
        <Grid item xs={6}>
          <StyledButton disabled={!verification_code} onClick={onClick} className="btn">
            Next
          </StyledButton>
        </Grid>
      </Grid>
    </FormWrapper>
  );
};

export default VerifyEmail;
export { VerifyEmail };
