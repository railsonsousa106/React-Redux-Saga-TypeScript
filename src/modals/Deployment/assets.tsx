import React from 'react';

// Slack images
import CreateSlackAppImg from '../../assets/deployment/slack/slack-create-app.png';
import SlackDisplayInformation from '../../assets/deployment/slack/slack-display-information.png';
import SlackCredentials from '../../assets/deployment/slack/slack-app-credentials.png';
import SlackEventSubscriptions from '../../assets/deployment/slack/slack-event-subsriptions.png';
import SlackSubscribeToBotEvents from '../../assets/deployment/slack/slack-subscribe-to-bot-events.png';
import SlackOAuthPermissions from '../../assets/deployment/slack/slack-oauth-permissions.png';
import SlackScopes from '../../assets/deployment/slack/slack-scopes.png';
import SlackUserTokenScopes from '../../assets/deployment/slack/slack-user-scopes.png';
import SlackIncomingWebhooks from '../../assets/deployment/slack/slack-incoming-webhooks.png';
import slackInteractivityShortcuts from '../../assets/deployment/slack/slack-interactivity-and-shortcuts.png';
import SlackAppHome from '../../assets/deployment/slack/slack-app-home.png';
import SlackInstallAppToYourTeam from '../../assets/deployment/slack/slack-install-app-to-your-team.png';
import SlackAppRequestingPermissions from '../../assets/deployment/slack/slack-app-requesting-permissions.png';
import SlackManageDistribution from '../../assets/deployment/slack/slack-manage-distribution.png';

// Teams images
import CreateTeamsResource from '../../assets/deployment/teams/teams-creare-resourse.png';
import TeamsBotChannelReg from '../../assets/deployment/teams/teams-bot-channels-reg.png';
import TeamsBotChannelRegCreds from '../../assets/deployment/teams/teams-bot-channels-reg-cred.png';
import TeamsBotOverview from '../../assets/deployment/teams/teams-bot-overview.png';
import TeamsBotSettings from '../../assets/deployment/teams/teams-bot-settings.png';
import TeamsBotCertificatesSecrets from '../../assets/deployment/teams/teams-bot-certificates-secrets.png';
import TeamsAddFeaturedChannel from '../../assets/deployment/teams/teams-add-featured-channel.png';
import TeamsConfigure from '../../assets/deployment/teams/teams-configure.png';
import TeamsConnectToChannel from '../../assets/deployment/teams/teams-connect-to-channels.png';
import TeamsChatSection from '../../assets/deployment/teams/teams-chat-section.png';

// styles
import styles from './Deployment.module.scss';

// interfaces
interface IListItem {
  content: string | React.ReactElement;
}

interface IImageItem {
  title: string;
  src: string;
}

interface IContentItem {
  list: IListItem[];
  image: IImageItem;
}

export interface IContent {
  name: string;
  items: IContentItem[];
  footerMessage: string | React.ReactElement;
}

// links
const slackLinkProps = {
  href: 'https://api.slack.com/apps?new_app=1',
  target: '_blank',
  rel: 'noopener noreferrer',
  className: styles.link,
};

const teamsLinkProps = {
  href: 'https://portal.azure.com/#home',
  target: '_blank',
  rel: 'noopener noreferrer',
  className: styles.link,
};

// contents
export const createSlackAppContent: IContent = {
  name: 'Slack configuration instructions (1 of 2)',
  items: [
    {
      list: [
        {
          content: (
            <span>
              Visit <a {...slackLinkProps}>{slackLinkProps.href}</a>
            </span>
          ),
        },
        { content: 'Type an App Name and select a Slack Workspace' },
      ],
      image: { title: 'Create Slack application', src: CreateSlackAppImg },
    },
    {
      list: [
        { content: 'In Basic Information tab, scroll down to Display Information' },
        { content: 'Provide Short Description, Add an App Icon and adjust Background Color. Click Save Changes' },
      ],
      image: { title: 'Slack short description', src: SlackDisplayInformation },
    },
    {
      list: [
        { content: 'Add your Slack App Credentials into the appropriate fields in Digital Employee Wizard' },
        { content: 'Click Save' },
      ],
      image: { title: 'Event subscriptions slack application', src: SlackCredentials },
    },
  ],
  footerMessage: <h2>Set up these credentials on the Wizard page</h2>,
};

export const integrateSlackAppContent: IContent = {
  name: 'Slack configuration instructions (2 of 2)',
  items: [
    {
      list: [
        { content: 'Go to Event Subscriptions tab and hit the Toggle button to Enable Events' },
        {
          content: (
            <span>
              For Request URL, insert{' '}
              <span className={styles.link}>https://app.skael.ai/interaction/slack/callback/«App ID»</span>
            </span>
          ),
        },
        { content: 'You will see a Verified check message if you correctly added your App ID at the end of the URL' },
      ],
      image: { title: 'Slack event subscriptions', src: SlackEventSubscriptions },
    },
    {
      list: [
        { content: 'On Event Subscriptions page, click on Subscribe to bot events' },
        { content: 'Add the Bot User Events as shown below. Click Save Changes' },
      ],
      image: { title: 'Slack subscribe to bot events', src: SlackSubscribeToBotEvents },
    },
    {
      list: [
        { content: <span>Go to OAuth &amp; Permissions page</span> },
        {
          content: (
            <span>
              Add a Redirect URL <span className={styles.link}>https://app.skael.ai/oauth/slack/redirect/«App ID»</span>
            </span>
          ),
        },
        { content: 'Click Add and then click Save URLs' },
      ],
      image: { title: 'OAuth slack application', src: SlackOAuthPermissions },
    },
    {
      list: [
        { content: <span>On the OAuth &amp; Permissions page, scroll down to Scopes section</span> },
        { content: 'Add Bot Token Scopes as shown below' },
      ],
      image: { title: 'Slack scopes', src: SlackScopes },
    },
    {
      list: [{ content: <span>On the OAuth &amp; Permissions page, add User Token Scopes as shown below</span> }],
      image: { title: 'Slack user token scopes', src: SlackUserTokenScopes },
    },
    {
      list: [{ content: 'Go to Incoming Webhooks page and hit the Toggle button to Activate Incoming Webhooks' }],
      image: { title: 'Slack incoming webohooks', src: SlackIncomingWebhooks },
    },
    {
      list: [
        { content: 'Go to Interactivity & Shortcuts page and hit the toggle button' },
        {
          content: (
            <span>
              Add a Request URL{' '}
              <span className={styles.link}>https://app.skael.ai/interaction/slack/callback/«App ID»</span>
            </span>
          ),
        },
        { content: 'Click Save Changes' },
      ],
      image: { title: 'Slack interactivity', src: slackInteractivityShortcuts },
    },
    {
      list: [
        { content: 'Go to App Home page and Edit the App Display Name (for e-g: match it to your App Name)' },
        { content: 'Hit the Toggle button to Always Show your Bot as Online' },
      ],
      image: { title: 'Slack app home', src: SlackAppHome },
    },
    {
      list: [{ content: 'Go to Install App page and click Install App to Workspace' }],
      image: { title: 'Slack install app to your team', src: SlackInstallAppToYourTeam },
    },
    {
      list: [
        { content: 'Select a channel where your app will post and click Allow' },
        { content: 'This will install your newly created app into your Workspace' },
        { content: 'You will also receive an email confirming installation of app to your workspace' },
      ],
      image: { title: 'Slack app requesting permissions', src: SlackAppRequestingPermissions },
    },
    {
      list: [
        { content: 'Go to Manage Distribution page and click on Add to Slack button' },
        {
          content:
            'With this step you will add your Slack app to your workspace. Please select the app name from the drop down menu',
        },
      ],
      image: { title: 'Slack manage distribution', src: SlackManageDistribution },
    },
  ],
  footerMessage: <h2>That’s all the configuration you need for your Slack workspace</h2>,
};

export const createTeamsAppContent: IContent = {
  name: 'MS Teams configuration instructions (1 of 2)',
  items: [
    {
      list: [
        {
          content: (
            <span>
              Visit <a {...teamsLinkProps}>{teamsLinkProps.href}</a>
            </span>
          ),
        },
        {
          content: (
            <span>
              From the main menu, click on <strong>Create a resource</strong>
            </span>
          ),
        },
      ],
      image: { title: 'Create MS Teams resource', src: CreateTeamsResource },
    },
    {
      list: [
        {
          content: (
            <span>
              In Azure Marketplace, search for <strong>Bot Channels Registration</strong>
            </span>
          ),
        },
        {
          content: (
            <span>
              Click on <strong>Create</strong>
            </span>
          ),
        },
      ],
      image: { title: 'MS Teams bot channel registration', src: TeamsBotChannelReg },
    },
    {
      list: [
        { content: 'Please complete Bot Channels Registration with the following details:' },
        {
          content: (
            <div>
              <span>Provide a name for your bot in the Bot Handle text window</span>
              <ul className={styles.innerList}>
                <li>
                  Select “Pay-As-You-Go” <strong>Subscription</strong> (or whichever active subscription you have)
                </li>
                <li>
                  Select an existing{' '}
                  <strong>
                    Resource Group from the drop down menu, or <strong>Create a new</strong> one
                  </strong>
                </li>
                <li>
                  Select a <strong>Location</strong> in your geographical proximity
                </li>
                <li>Select the free pricing tier (F0 10K Premium Messages)</li>
                <li>
                  Insert <span className={styles.link}>https://app.skael.ai/interaction/azure/</span> as{' '}
                  <strong>Messaging endpoint</strong>
                </li>
                <li>Applications Insights (optional)</li>
                <li>
                  Click the <strong>Create</strong> button at the bottom. It will take a few minutes to create the
                  resource
                </li>
              </ul>
            </div>
          ),
        },
      ],
      image: { title: 'MS Teams bot channel registration credentials', src: TeamsBotChannelRegCreds },
    },
    {
      list: [
        {
          content: (
            <span>
              Once the new resource is created, you can search for it by name. The following page shows the{' '}
              <strong>Overview</strong> details of your newly created bot
            </span>
          ),
        },
      ],
      image: { title: 'MS Teams bot overview', src: TeamsBotOverview },
    },
    {
      list: [
        {
          content: (
            <span>
              Click on <strong>Settings</strong> from the left panel
            </span>
          ),
        },
        {
          content: (
            <span>
              Copy the <strong>Microsoft App ID</strong> (you will need it later)
            </span>
          ),
        },
        {
          content: (
            <span>
              Click on <strong>Manage</strong> to generate a new <strong>Client Secret</strong>
            </span>
          ),
        },
      ],
      image: { title: 'MS Teams bot settings', src: TeamsBotSettings },
    },
    {
      list: [
        {
          content: (
            <span>
              After you click on <strong>Manage,</strong> a new section called <strong>Certificates & Secrets</strong>{' '}
              will open up. Click on <strong>+New client secret</strong> button, select the radio button “Never Expires” 
              and create a new secret. Copy that value
            </span>
          ),
        },
      ],
      image: { title: 'MS Teams bot certificates & Secrets', src: TeamsBotCertificatesSecrets },
    },
  ],
  footerMessage: <h2>Set up these credentials on the Wizard page</h2>,
};

export const integrateTeamsAppContent: IContent = {
  name: 'MS Teams configuration instructions (2 of 2)',
  items: [
    {
      list: [
        {
          content: (
            <span>
              Go to <strong>Channels</strong> and click on <strong>MS Teams</strong> icon under{' '}
              <strong>Add a featured channel</strong>
            </span>
          ),
        },
      ],
      image: { title: 'MS Teams Add featured channel', src: TeamsAddFeaturedChannel },
    },
    {
      list: [
        {
          content: (
            <span>
              Click <strong>Save</strong> on the next page
            </span>
          ),
        },
        { content: 'NOTE: Once MS Teams is added, click Cancel to exit back to the Channels page' },
      ],
      image: { title: 'Teams configure', src: TeamsConfigure },
    },
    {
      list: [
        {
          content: (
            <span>
              From the Channels page, click on <strong> Microsoft Teams</strong>. This will start the process of adding
              your Azure Bot to your MS Teams environment
            </span>
          ),
        },
        { content: 'NOTE: You should be logged into your MS Teams instance' },
      ],
      image: { title: 'MS Teams connect to channel', src: TeamsConnectToChannel },
    },
    {
      list: [
        {
          content: (
            <span>
              Your new Azure bot will show up in the <strong>Chat</strong> section
            </span>
          ),
        },
      ],
      image: { title: 'MS Teams Chat section', src: TeamsChatSection },
    },
  ],
  footerMessage: <h2>That’s all the configuration you need for your MS Teams application setup</h2>,
};
