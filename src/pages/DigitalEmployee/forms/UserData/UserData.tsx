import React, { ChangeEvent, useCallback, useMemo, useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import Select from 'react-select';
import { Grid } from '@material-ui/core';

import { COMPANY_SIZE_VALUES } from '../../../../constants/modals';
import { selectUserData } from '../../../../redux/digitalEmployee/selectors';
import { validateEmail } from 'utils';
import { UI_ROUTES as routes } from '../../../../constants/routes';

import { StyledButton, StyledInput, FormWrapper, Header } from '../forms.style';
import { Checkbox } from '../components/Checkbox';
import { ErrorMessage } from '../components/ErrorMessage';
import { Tooltip } from '../../../../components/Tooltip';
import { digitalEmployeeActions } from '../../../../redux/digitalEmployee/actions';
import { push } from 'connected-react-router';

const playerConfig = {
  file: {
    forceVideo: true,
  },
};

const UserData = () => {
  const dispatch = useDispatch();
  const { first_name, last_name, email, phone, organization, company_size } = useSelector(selectUserData);
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [isRequirementsAccepted, setIsRequirementsAccepted] = useState(false);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(digitalEmployeeActions.userRefresh({ [e.target.name]: e.target.value }));
    },
    [dispatch]
  );

  const onSelectCompanySize = useCallback(
    obj => {
      dispatch(digitalEmployeeActions.userRefresh({ company_size: obj.value }));
    },
    [dispatch]
  );

  const onChangePolicyAccept = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIsPolicyAccepted(e.target.checked);
    },
    [setIsPolicyAccepted]
  );

  const onChangeRequirementsAccept = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIsRequirementsAccepted(e.target.checked);
    },
    [setIsRequirementsAccepted]
  );

  const onClick = useCallback(() => {
    dispatch(digitalEmployeeActions.sendCredentials());
  }, [dispatch]);

  const isValid = useMemo(() => first_name && last_name && email && validateEmail(email) && organization, [
    first_name,
    last_name,
    email,
    organization,
  ]);

  const companySizeOptions = useMemo(
    () =>
      COMPANY_SIZE_VALUES.map(value => ({
        value,
        label: value,
      })),
    []
  );

  const currentCompany = useMemo(() => companySizeOptions.find(({ value }) => value === company_size), [
    companySizeOptions,
    company_size,
  ]);

  const linkClick = useCallback(
    link => (e: MouseEvent) => {
      e.preventDefault();
      dispatch(push(link));
    },
    [dispatch]
  );

  return (
    <FormWrapper>
      <div>
        <Header>User Data</Header>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <StyledInput
              onChange={onChange}
              placeholder="First Name"
              name="first_name"
              type="text"
              value={first_name}
            />
          </Grid>
          <Grid item xs={6}>
            <StyledInput onChange={onChange} placeholder="Last Name" name="last_name" type="text" value={last_name} />
          </Grid>
        </Grid>
        <StyledInput onChange={onChange} placeholder="Email" name="email" type="email" value={email} />
        <StyledInput onChange={onChange} placeholder="Phone" name="phone" type="text" value={phone} />
        <StyledInput
          onChange={onChange}
          placeholder="Organization"
          name="organization"
          type="text"
          value={organization}
        />
        <Select
          className="basic-single"
          classNamePrefix="select"
          name="company_size"
          placeholder={'Company size'}
          options={companySizeOptions}
          onChange={onSelectCompanySize}
          value={currentCompany}
        />
        <Checkbox
          label={
            <span>
              I have read and agree to SKAEL's &nbsp;
              <a target="_blank" rel="noopener noreferrer" onClick={linkClick(routes.terms)} href={routes.terms}>
                Terms of Service
              </a>
              &nbsp; and &nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={linkClick(routes.privacyPolicy)}
                href={routes.privacyPolicy}
              >
                Privacy Policy
              </a>
            </span>
          }
          checked={isPolicyAccepted}
          onChange={onChangePolicyAccept}
        />
        <Checkbox
          label={
            <span>
              <Tooltip
                trigger={
                  <a href="/" onClick={e => e.preventDefault()}>
                    User and system requirements
                  </a>
                }
                styles={{ maxWidth: 500 }}
              >
                <span>
                  <ol>
                    <li>
                      The digital employee integrates with out-of-the-box standard configuration of the selected
                      application(s)/data source(s)
                    </li>
                    <li>Admin access is required for the selected application(s)/data source(s)</li>
                    <li>Full Member access required to add an app to your Slack workspace</li>
                    <li>Azure account required for MS Teams integration</li>
                  </ol>
                  <ReactPlayer
                    controls
                    muted
                    url={encodeURI('https://www.youtube.com/watch?v=7SVWRLEYUHQ&ab_channel=SKAEL%2CInc')}
                    config={playerConfig}
                    width={500}
                  />
                </span>
              </Tooltip>
              &nbsp;for this 14 Day Trial
            </span>
          }
          checked={isRequirementsAccepted}
          onChange={onChangeRequirementsAccept}
        />
      </div>
      <ErrorMessage />
      <StyledButton
        disabled={!isValid || !isPolicyAccepted || !isRequirementsAccepted}
        onClick={onClick}
        className="btn"
      >
        Next
      </StyledButton>
    </FormWrapper>
  );
};

export default UserData;
export { UserData };
