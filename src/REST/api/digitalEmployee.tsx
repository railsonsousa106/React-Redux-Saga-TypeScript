// components
import apiBase from '../apiBase';

interface IProps {
  user_name: any;
  user_email: any;
  organization_name: any;
  template_id: any;
}

const config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

export const setDigitalEmployee = async ({
  user_name,
  user_email,
  organization_name,
  template_id
}: IProps) =>
  apiBase.post(
    `/digital-employee`,
    {
      user_name,
      user_email,
      organization_name,
      template_id
    },
    config
  );
