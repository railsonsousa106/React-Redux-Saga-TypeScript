import { SERVICES } from 'assets/interfaces/digitalEmployee';
import { DE_STEPS_KEYS, DE_TYPES } from '../../../../constants/digitalEmployee';
import { FORM_TYPES, serviceParams } from '../../../../constants/services';
import { keys, values } from 'lodash';
import React, { FC, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  selectCurrentDEServices,
  selectDEsByType,
  selectProjectID,
  selectDeID,
  selectServicesData,
} from '../../../../redux/digitalEmployee/selectors';

import { StyledButton, FormWrapper, Header } from '../forms.style';
import { ServiceForm } from '../ServiceForm';
import { ErrorMessage } from '../components/ErrorMessage';
import { Grid } from '@material-ui/core';
import { digitalEmployeeActions } from '../../../../redux/digitalEmployee/actions';
import { Services } from '../../../../redux/digitalEmployee/types';

const SelectService: FC<{ type: DE_TYPES }> = ({ type }) => {
  const dispatch = useDispatch();
  const id = useSelector(selectProjectID);
  const deID = useSelector(selectDeID);
  const DEsByType = useSelector(selectDEsByType(type));
  const services = useSelector(selectCurrentDEServices(deID));
  const servicesData: Services[] = useSelector(selectServicesData);

  let isDisabled = false;

  servicesData?.forEach(({ name, params }) => {
    if (!isDisabled) {
      services?.forEach(service => {
        const { type, inputs } = serviceParams[service];
        if (name === service) {
          if (type === FORM_TYPES.manual) {
            if (keys(params).length !== inputs.length || values(params).filter(Boolean).length === 0) {
              isDisabled = true;
            }
          }
          if (type === FORM_TYPES.oauth) {
            if (!keys(params).includes('access_token')) {
              isDisabled = true;
            }
          }
        }
      });
    }
  });

  const servicesOptions = useMemo(
    () =>
      DEsByType.map(({ deID, id, title }) => ({
        value: { deID, id },
        label: title,
      })),
    [DEsByType]
  );

  const currentService = useMemo(() => servicesOptions.find(({ value }) => value.deID === deID), [
    deID,
    servicesOptions,
  ]);

  const onChange = useCallback(
    obj => {
      dispatch(digitalEmployeeActions.projectRefresh(obj.value.id));
      dispatch(digitalEmployeeActions.deRefresh(obj.value.deID));
      dispatch(digitalEmployeeActions.servicesRefresh([]));
    },
    [dispatch]
  );

  const onClick = useCallback(() => {
    dispatch(digitalEmployeeActions.verifyDE());
  }, [dispatch]);

  const onClickBack = useCallback(() => {
    dispatch(digitalEmployeeActions.currentStepRefresh(DE_STEPS_KEYS.userData));
    dispatch(digitalEmployeeActions.messengersRefresh([]));
    dispatch(digitalEmployeeActions.servicesRefresh([]));
    dispatch(digitalEmployeeActions.uiRefresh({ errorMessage: '' }));
  }, [dispatch]);

  return (
    <FormWrapper>
      <div>
        <Header>Select Service</Header>
        <Select
          className="basic-single"
          classNamePrefix="select"
          name="service"
          placeholder={'Select a category'}
          options={servicesOptions}
          onChange={onChange}
          value={currentService}
        />
        {services?.map((service: SERVICES) => (
          <ServiceForm key={service} {...serviceParams[service]} />
        ))}
      </div>
      <ErrorMessage />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <StyledButton onClick={onClickBack} className="btn btnGreen">
            Back
          </StyledButton>
        </Grid>
        <Grid item xs={6}>
          <StyledButton disabled={!id || isDisabled || servicesData.length === 0} onClick={onClick} className="btn">
            Next
          </StyledButton>
        </Grid>
      </Grid>
    </FormWrapper>
  );
};

export default SelectService;
export { SelectService };
