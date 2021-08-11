export interface Response {}

export interface CheckConfigurationResponse {
  slack_connected: boolean;
  ms_teams_connected: boolean;
  google_chat_connected: boolean;
}
