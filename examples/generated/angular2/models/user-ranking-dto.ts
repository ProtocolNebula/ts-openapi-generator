
export class UserRankingDTO {

  /**
   * Total completed rooms (points)
   */
  completed_rooms?: number;

  /**
   * Total extra points
   */
  extra_points?: number;

  /**
   * The league ID
   */
  league?: number;

  /**
   * League name
   */
  league_description?: string;

  /**
   * Position in TOP country
   */
  position_country?: number;

  /**
   * Position in TOP league
   */
  position_league?: number;

  /**
   * Position in TOP province
   */
  position_province?: number;

  /**
   * Total time played
   */
  time_played?: number;

}
