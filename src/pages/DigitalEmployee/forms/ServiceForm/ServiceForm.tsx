import { Grid, Typography } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import { SERVICES } from '../../../../assets/interfaces/digitalEmployee';
import { FORM_TYPES, SERVICES_DESCRIPTIONS, SERVICES_SCOPES, SERVICES_TITLES } from '../../../../constants/services';
import React, { ChangeEvent, FC, useCallback } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectServicesDataByName,
  selectDeID,
  selectCurrentDEMessengers,
} from '../../../../redux/digitalEmployee/selectors';
import { Wrapper, StyledButton, StyledInput, Text, GridWrapper } from '../forms.style';
import { Tooltip } from '../../../../components/Tooltip';
import { digitalEmployeeActions } from '../../../../redux/digitalEmployee/actions';
import { Service, Services } from '../../../../redux/digitalEmployee/types';

interface IServiceForm {
  type: FORM_TYPES;
  serviceType: SERVICES;
  inputs: Array<string>;
}

interface IMap {
  [key: string]: string;
}

type ServiceInfo = {
  description: string[];
  link?: string;
  video?: {
    [keyName: string]: string;
  };
};

const inputTypes: IMap = {
  password: 'password',
};

const defaultPlaceholders: IMap = {
  subdomain: 'Instance name, e-g: dev51548',
  username: 'Username',
  password: 'Password',
  api_key: 'API key',
};

const placeholders: { [keyName: string]: IMap } = {
  [SERVICES.zendesk]: {
    subdomain: 'Subdomain name, e-g: skaeldemo',
    username: 'Username, e-g: email@email.com/token (please append /token at the end of your email)',
    password: 'API token',
  },
  default: defaultPlaceholders,
};

const playerConfig = {
  file: {
    forceVideo: true,
  },
};

const ServiceForm: FC<IServiceForm> = ({ type, serviceType, inputs }) => {
  const dispatch = useDispatch();
  const deID = useSelector(selectDeID);
  const messengers = useSelector(selectCurrentDEMessengers(deID)) || [];
  const serviceData: Services | any = useSelector(selectServicesDataByName(serviceType));

  const isLoggedIn = !!serviceData?.params.access_token;
  const serviceInfo: ServiceInfo = SERVICES_DESCRIPTIONS[serviceType];
  const { description, link, video = {} } = serviceInfo;
  const currentMessenger = messengers[0];
  const showLink = !!link;
  const showVideo = !!video[currentMessenger];

  const onClick = useCallback(
    e => {
      e.preventDefault();
      const openedWindow = window.open('/loading.html', '', 'width=500,height=800');

      dispatch(
        digitalEmployeeActions.openLoginWindow({
          provider: serviceType,
          scope: SERVICES_SCOPES[serviceType],
          openedWindow,
        })
      );
    },
    [dispatch, serviceType]
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        digitalEmployeeActions.serviceRefresh({
          params: { [e.target.name]: e.target.value },
          name: serviceType,
        })
      );
    },
    [dispatch, serviceType]
  );

  return (
    <Wrapper>
      <div>
        <Grid container justify="space-between">
          <div>{SERVICES_TITLES[serviceType]}</div>
          <Tooltip trigger={<HelpIcon fontSize="small" />} styles={{ maxWidth: 500 }}>
            <Typography color="inherit">
              {description.map(item => (
                <p key={item}>{item}</p>
              ))}
            </Typography>
            {showLink && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {SERVICES_TITLES[serviceType]}
              </a>
            )}
            {showVideo && (
              <ReactPlayer
                controls
                muted
                style={{ marginTop: 10 }}
                url={encodeURI(video[currentMessenger] || '')}
                config={playerConfig}
                width={500}
              />
            )}
          </Tooltip>
        </Grid>
        {type === FORM_TYPES.manual &&
          inputs.map(input => {
            const inputType = inputTypes[input] || 'text';
            const placeholder =
              (placeholders[serviceType] && placeholders[serviceType][input]) || placeholders.default[input] || input;

            return (
              <StyledInput
                type={inputType}
                key={input}
                onChange={onChange}
                placeholder={placeholder}
                name={input}
                value={serviceData?.params[input as keyof Service] || ''}
              />
            );
          })}
      </div>
      {type === FORM_TYPES.oauth && (
        <GridWrapper>
          <Grid container>
            <Grid item xs={6}>
              <StyledButton margin={0} onClick={onClick} className="btn">
                Sign In
              </StyledButton>
            </Grid>
            <Grid item xs={6}>
              <Text isSuccess={isLoggedIn}>{isLoggedIn ? 'Logged in successfully' : 'Not logged in'}</Text>
            </Grid>
          </Grid>
        </GridWrapper>
      )}
    </Wrapper>
  );
};

export default ServiceForm;
export { ServiceForm };
