
export class AskForPlayersRequest {

  /**
   * YYYY-MM-DD
   */
  day?: string;

  /**
   * Optional, extra information about request
   */
  description?: number;

  /**
   * HH:mm
   */
  hour?: string;

  /**
   * Only if no room_id specified
   */
  id_province?: string;

  /**
   * Max quantity of players to accept
   */
  num_request_players?: number;

  room_id?: string;

  /**
   * Only if not room_id specified
   */
  room_name?: string;

}
