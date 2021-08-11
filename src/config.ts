import { toInteger } from 'lodash';

const { REACT_APP_URL_API_DEV: apiURL, PUBLIC_URL }: any = process.env;
const {
  REACT_APP_AUTH_API_URL,
  REACT_APP_PORTAL_URL,
  REACT_APP_DE_DREW_SNOW_SLACK,
  REACT_APP_DE_DREW_SNOW_TEAMS,
  REACT_APP_DE_DREW_ZENDESK_SLACK,
  REACT_APP_DE_DREW_ZENDESK_TEAMS,
  REACT_APP_DE_ALEX_QUICKBOOKS_SLACK,
  REACT_APP_DE_ALEX_QUICKBOOKS_TEAMS,
  REACT_APP_DE_JUNE_HUBSPOT_SLACK,
  REACT_APP_DE_JUNE_HUBSPOT_TEAMS,
  REACT_APP_DE_JUNE_SALESFORCE_SLACK,
  REACT_APP_DE_JUNE_SALESFORCE_TEAMS,
} = process.env;

const defaultConfig = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};

const { protocol, host, origin } = window.location;

const webhookTokenNewDE =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6MTAwNSwiZXhwIjoyNTQ4MzI0OTYzLjA4MDQxMzMsImp0aSI6IjI0MGQzN2IyNTAxYmFmZTZiOGU4NTFmODQ2OWFmMGM1MjU3NDgxNjk2NTMwYWFhYWRiNGEwMWZmZjAxNGU1Y2MiLCJpc3MiOiJza2FlbC5jb20iLCJzdWIiOiIxMCJ9.hBA-07RE8RaADG4DctGEGmo37yODEnP2wk1jOTXyBtY';
const webhookTokenFreeTrial =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6MjQ4MSwiZXhwIjoyNTQ4ODUzMDgxLjU4NTE4MDMsImp0aSI6IjdiZmViMGQ3NmYzNjMyZjdmOThiYzdlMDBlYjgyMjYxNmE2ODFmYmY0N2NmYzA1OTI4NjNjZDU0N2ZmYzUwNzciLCJpc3MiOiJza2FlbC5jb20iLCJzdWIiOiIxIn0.GQD4TrQFxqQPScfqjA51ORIRopNeEJbFOa1ZG3SK2cM';
const webhookContactUs =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6ODc4LCJleHAiOjI1NDgyNjEyMTcuNjMyMTgsImp0aSI6ImU1ZTIzY2VlOTk2NDVhMGY0NGNiYTMwNDc1NGVmZDI1ZTQyMDhhMzNmOTI0MzRjNzczY2IwZDQ1OTYxZTJkMzYiLCJpc3MiOiJza2FlbC5jb20iLCJzdWIiOiIxMCJ9.5NZ0lELm6JDWEej1wj7aIKEuqZav4vEuteLaKSoE7gs';

const oauthURL = REACT_APP_AUTH_API_URL || `${protocol}//oauth.${host}`;
const oauthDestinationURL = `${origin}/oauth/callback`;

const publicURL = PUBLIC_URL;
const portalURL = REACT_APP_PORTAL_URL || 'https://app.skael.ai/portal';
const publicImagesURL = `${PUBLIC_URL}/images`;
const digitalEmployeeIDs = {
  drewSnowSlack: toInteger(REACT_APP_DE_DREW_SNOW_SLACK),
  drewSnowTeams: toInteger(REACT_APP_DE_DREW_SNOW_TEAMS),
  drewZendeskSlack: toInteger(REACT_APP_DE_DREW_ZENDESK_SLACK),
  drewZendeskTeams: toInteger(REACT_APP_DE_DREW_ZENDESK_TEAMS),
  alexQuickbooksSlack: toInteger(REACT_APP_DE_ALEX_QUICKBOOKS_SLACK),
  alexQuickbooksTeams: toInteger(REACT_APP_DE_ALEX_QUICKBOOKS_TEAMS),
  juneHubspotSlack: toInteger(REACT_APP_DE_JUNE_HUBSPOT_SLACK),
  juneHubspotTeams: toInteger(REACT_APP_DE_JUNE_HUBSPOT_TEAMS),
  juneSalesforceSlack: toInteger(REACT_APP_DE_JUNE_SALESFORCE_SLACK),
  juneSalesforceTeams: toInteger(REACT_APP_DE_JUNE_SALESFORCE_TEAMS),
};

export {
  apiURL,
  defaultConfig,
  webhookTokenNewDE,
  webhookTokenFreeTrial,
  oauthURL,
  oauthDestinationURL,
  webhookContactUs,
  publicURL,
  portalURL,
  publicImagesURL,
  digitalEmployeeIDs,
};
