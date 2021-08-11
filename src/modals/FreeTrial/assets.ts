import { FreeTrialModalData } from '../../redux/modals/types';
import { validateEmail } from '../../utils';

interface IFormErrors {
  [key: string]: string;
}

export function validateForm(values: FreeTrialModalData): IFormErrors {
  const errors: IFormErrors = {};

  if (!values.first_name) {
    errors.first_name = 'Required field';
  }

  if (!values.last_name) {
    errors.last_name = 'Required field';
  }

  if (!values.email) {
    errors.email = 'Required field';
  }

  if (!validateEmail(values.email)) {
    errors.email = 'Email not valid';
  }

  if (!values.company) {
    errors.company = 'Required field';
  }

  if (!values.phone) {
    errors.phone = 'Required field';
  }

  if (!values.subject) {
    errors.subject = 'Required field';
  }
  if (!values.company_size) {
    errors.company_size = 'Required field';
  }

  return errors;
}
