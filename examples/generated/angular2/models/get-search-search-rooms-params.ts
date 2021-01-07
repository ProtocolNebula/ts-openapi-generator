
export class GetSearchSearchRoomsParams {

  /**
   * ID of country
   */
  country?: number;

  /**
   * At least 4 characters
   */
  name?: string;

  /**
   * ID of province (will ignore country)
   */
  province?: number;

}
