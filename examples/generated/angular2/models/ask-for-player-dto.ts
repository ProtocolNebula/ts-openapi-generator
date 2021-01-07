import { AskForPlayerStatusENUM } from './ask-for-player-status-enum';

export class AskForPlayerDTO {

  /**
   * Creation request date
   */
  date?: number;

  /**
   * YYYY-MM-DD
   */
  day?: string;

  description?: number;

  hour?: any;

  id?: number;

  id_province?: number;

  num_request_player?: number;

  /**
   * User ID that generate the request
   */
  owner_id?: number;

  room_id?: number;

  room_name?: number;

  status?: AskForPlayerStatusENUM;

}
