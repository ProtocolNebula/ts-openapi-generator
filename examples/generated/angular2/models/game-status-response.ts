import { GameStatusENUM } from './game-status-enum';

export class GameStatusResponse {

  /**
   * Date of creation &#39;YYYY-MM-DD HH:mm:ss&#39;
   */
  creation_date_time?: string;

  /**
   * Game ID
   */
  id?: number;

  /**
   * Information message (if any)
   */
  message?: string;

  /**
   * Room id if any
   */
  room_id?: string;

  /**
   * Room name
   */
  room_name?: string;

  status?: GameStatusENUM;

}
