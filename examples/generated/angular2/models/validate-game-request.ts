
export class ValidateGameRequest {

  /**
   * Minutes spend to complete the game
   */
  completion_time?: number;

  /**
   * User geolocation latitude
   */
  geo_latitude?: string;

  /**
   * User geolocation longitude
   */
  geo_longitude?: string;

  /**
   * Passport number scanned code
   */
  passport_code?: string;

  /**
   * Escape Room and players photo (base 64)
   */
  photo?: string;

}
