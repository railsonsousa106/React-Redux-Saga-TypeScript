import { MESSENGERS, SERVICES } from '../assets/interfaces/digitalEmployee';

export enum FORM_TYPES {
  manual = 'manual',
  oauth = 'oauth',
}

export const SERVICES_TITLES = {
  [SERVICES.snow]: 'ServiceNow',
  [SERVICES.zendesk]: 'Zendesk',
  [SERVICES.jira]: 'Jira',
  [SERVICES.hubspot]: 'Hubspot',
  [SERVICES.salesforce]: 'Salesforce',
  [SERVICES.pandadoc]: 'PandaDoc',
  [SERVICES.googleCalendar]: 'Google Calendar',
  [SERVICES.xero]: 'Xero',
  [SERVICES.quickbooks]: 'QuickBooks',
};

export const SERVICES_SCOPES = {
  [SERVICES.snow]: [],
  [SERVICES.zendesk]: [],
  [SERVICES.jira]: [],
  [SERVICES.hubspot]: [],
  [SERVICES.salesforce]: ['api'],
  [SERVICES.pandadoc]: [],
  [SERVICES.googleCalendar]: [],
  [SERVICES.xero]: [],
  [SERVICES.quickbooks]: ['com.intuit.quickbooks.accounting'],
};

export const SERVICES_DESCRIPTIONS = {
  [SERVICES.snow]: {
    description: [
      'ServiceNow gives you the power to make work, work better—no matter the circumstances. Please follow the video below on how to get your ServiceNow instance name.',
      'Please enter your username and password that you use for ServiceNow instance login.',
    ],
    // link: 'https://www.servicenow.com/',
    video: {
      [MESSENGERS.slack]: 'https://youtu.be/crVowRgnG_o',
      [MESSENGERS.teams]: 'https://youtu.be/crVowRgnG_o',
    },
  },
  [SERVICES.zendesk]: {
    description: [
      'Zendesk Support is a beautifully simple system for tracking, prioritising and solving customer support tickets.',
      'Please follow the video below on how to get your Zendesk subdomain name and API token. For username, please enter your login email and append /token at the end.',
    ],
    // link: 'https://www.zendesk.co.uk/',
    video: {
      [MESSENGERS.slack]: 'https://youtu.be/GajsKcnnsVg',
      [MESSENGERS.teams]: 'https://youtu.be/F_wZrhKLJOk',
    },
  },
  [SERVICES.jira]: {
    description: [
      'Jira Software is built for every member of your software team to plan, track, and release great software. Follow this link below:',
    ],
    link: 'https://www.atlassian.com/software/jira',
  },
  [SERVICES.hubspot]: {
    description: [
      'HubSpot offers a complete CRM platform with all the tools and integrations you need to grow better — whether you want to increase leads, accelerate sales, streamline customer service, or build a powerful website.',
      'Please follow the video below on how to get your HubSpot API key for your instance.',
    ],
    // link: 'https://www.hubspot.com/',
    video: {
      [MESSENGERS.slack]: 'https://youtu.be/hp5bEHad7v4',
      [MESSENGERS.teams]: 'https://youtu.be/3ruVzZ8SXNs',
    },
  },
  [SERVICES.salesforce]: {
    description: [
      'Help sales, service, and marketing teams work better together with a 360° view of your customers. Follow this link below:',
    ],
    link: 'https://www.salesforce.com/',
  },
  [SERVICES.pandadoc]: {
    description: [
      'Sales teams use PandaDoc to improve deal workflow, insights, and speed while delivering an amazing buying experience. Follow this link below:',
    ],
    link: 'https://www.pandadoc.com/',
  },
  [SERVICES.googleCalendar]: {
    description: [
      'Google Calendar is a time-management and scheduling calendar service developed by Google. Follow this link below:',
    ],
    link: 'https://calendar.google.com',
  },
  [SERVICES.xero]: {
    description: ['Xero is online accounting software for your small business. Follow this link below:'],
    link: 'https://www.xero.com/',
  },
  [SERVICES.quickbooks]: {
    description: ['The way you work is changing. Our dedication to small business has not. Follow this link below:'],
    link: 'https://quickbooks.intuit.com/global/',
  },
};

export const serviceParams = {
  [SERVICES.snow]: {
    type: FORM_TYPES.manual,
    serviceType: SERVICES.snow,
    inputs: ['subdomain', 'username', 'password'],
  },
  [SERVICES.zendesk]: {
    type: FORM_TYPES.manual,
    serviceType: SERVICES.zendesk,
    inputs: ['subdomain', 'username', 'password'],
  },
  [SERVICES.salesforce]: {
    type: FORM_TYPES.oauth,
    serviceType: SERVICES.salesforce,
    inputs: ['instance_url'],
  },
  [SERVICES.quickbooks]: {
    type: FORM_TYPES.oauth,
    serviceType: SERVICES.quickbooks,
    inputs: ['company_id'],
  },
  [SERVICES.pandadoc]: {
    type: FORM_TYPES.oauth,
    serviceType: SERVICES.pandadoc,
    inputs: [],
  },
  [SERVICES.jira]: {
    type: FORM_TYPES.oauth,
    serviceType: SERVICES.jira,
    inputs: ['cloud_id'],
  },
  [SERVICES.xero]: {
    type: FORM_TYPES.oauth,
    serviceType: SERVICES.xero,
    inputs: ['tenant_id'],
  },
  [SERVICES.hubspot]: {
    type: FORM_TYPES.manual,
    serviceType: SERVICES.hubspot,
    inputs: ['api_key'],
  },
  [SERVICES.googleCalendar]: {
    type: FORM_TYPES.oauth,
    serviceType: SERVICES.googleCalendar,
    inputs: [],
  },
};

export const servicesWithTokens = ['quickbooks', 'salesforce', 'pandadoc'];
