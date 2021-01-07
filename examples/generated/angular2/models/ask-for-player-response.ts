import { AskForPlayerStatusENUM } from './ask-for-player-status-enum';

export class AskForPlayerResponse {

  id?: number;

  /**
   * Action response message
   */
  message?: string;

  /**
   * User ID that generate the request
   */
  owner_id?: string;

  status?: AskForPlayerStatusENUM;

}
