import { digitalEmployeeIDs, publicImagesURL } from '../config';
import hubspot from '../assets/home/images/home/hubspot.svg';
import salesforce from '../assets/home/images/home/salesforce.svg';
import calendar from '../assets/home/images/home/calendar.svg';
import slack from '../assets/home/images/slack-blue.svg';
import microsoft from '../assets/home/images/home/microsoft.svg';
import quickbooks from '../assets/home/images/home/quickbooks.svg';
import xero from '../assets/home/images/home/xero.svg';
import mail from '../assets/home/images/home/mail.svg';
import now from '../assets/home/images/home/now.svg';
import zendesk from '../assets/home/images/home/zendesk.svg';
import jira from '../assets/home/images/home/jira.svg';
import { MESSENGERS, SERVICES } from '../assets/interfaces/digitalEmployee';

export const CONTROL_SUM = 'oauth-control-sum';

const alex = `${publicImagesURL}/alex.svg`;
const drew = `${publicImagesURL}/drew.svg`;
const june = `${publicImagesURL}/june.svg`;

export enum DE_TYPES {
  june = 'june',
  alex = 'alex',
  drew = 'drew',
}

export const DE_CARDS = {
  june: {
    title: 'June',
    image: june,
    services: [hubspot, salesforce, calendar, slack, microsoft],
    comingSoon: [salesforce, calendar],
    btnText: 'Sales Support',
  },
  alex: {
    title: 'Alex',
    image: alex,
    services: [quickbooks, xero, mail, slack, microsoft],
    comingSoon: [quickbooks, xero, mail, slack, microsoft],
    btnText: 'Finance',
  },
  drew: {
    title: 'Drew',
    image: drew,
    services: [now, zendesk, jira, slack, microsoft],
    comingSoon: [jira],
    btnText: 'Service Desk',
  },
};

export enum DE_STEPS_KEYS {
  userData = 'userData',
  verifyEmail = 'verifyEmail',
  selectServices = 'selectServices',
  messengerConfiguration = 'messengerConfiguration',
  checkConfiguration = 'checkConfiguration',
  finish = 'finish',
}

export const DE_STEPS = {
  [`${DE_STEPS_KEYS.userData} ${DE_STEPS_KEYS.verifyEmail}`]: 'Signing Up',
  [`${DE_STEPS_KEYS.selectServices} ${DE_STEPS_KEYS.messengerConfiguration} ${DE_STEPS_KEYS.checkConfiguration}`]: 'Configuration',
  [DE_STEPS_KEYS.finish]: 'Finish',
};

export const availableDE = [
  {
    id: digitalEmployeeIDs.drewSnowSlack,
    type: DE_TYPES.drew,
    services: [SERVICES.snow],
    messengers: [MESSENGERS.slack],
    title: 'ServiceNow + Slack',
  },
  {
    id: digitalEmployeeIDs.drewSnowTeams,
    type: DE_TYPES.drew,
    services: [SERVICES.snow],
    messengers: [MESSENGERS.teams],
    title: 'ServiceNow + MS Teams',
  },
  {
    id: digitalEmployeeIDs.drewZendeskSlack,
    type: DE_TYPES.drew,
    services: [SERVICES.zendesk],
    messengers: [MESSENGERS.slack],
    title: 'Zendesk + Slack',
  },
  {
    id: digitalEmployeeIDs.drewZendeskTeams,
    type: DE_TYPES.drew,
    services: [SERVICES.zendesk],
    messengers: [MESSENGERS.teams],
    title: 'Zendesk + MS Teams',
  },
  {
    id: digitalEmployeeIDs.alexQuickbooksSlack,
    type: DE_TYPES.alex,
    services: [SERVICES.quickbooks],
    messengers: [MESSENGERS.slack],
    title: 'QuickBooks + Slack',
  },
  {
    id: digitalEmployeeIDs.alexQuickbooksTeams,
    type: DE_TYPES.alex,
    services: [SERVICES.quickbooks],
    messengers: [MESSENGERS.teams],
    title: 'QuickBooks + MS Teams',
  },
  {
    id: digitalEmployeeIDs.juneHubspotSlack,
    type: DE_TYPES.june,
    services: [SERVICES.hubspot],
    messengers: [MESSENGERS.slack],
    title: 'Hubspot + Slack',
  },
  {
    id: digitalEmployeeIDs.juneHubspotTeams,
    type: DE_TYPES.june,
    services: [SERVICES.hubspot],
    messengers: [MESSENGERS.teams],
    title: 'Hubspot + MS Teams',
  },
  {
    id: digitalEmployeeIDs.juneSalesforceSlack,
    type: DE_TYPES.june,
    services: [SERVICES.salesforce],
    messengers: [MESSENGERS.slack],
    title: 'Salesforce + Slack',
  },
  {
    id: digitalEmployeeIDs.juneSalesforceTeams,
    type: DE_TYPES.june,
    services: [SERVICES.salesforce],
    messengers: [MESSENGERS.teams],
    title: 'Salesforce + MS Teams',
  },
].map(item => ({ ...item, deID: `${item?.type}-${item?.title}-${item?.id}` }));
