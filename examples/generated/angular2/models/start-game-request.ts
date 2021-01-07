
export class StartGameRequest {

  /**
   * City of the room
   */
  city?: string;

  /**
   * User geolocation latitude
   */
  geo_latitude?: string;

  /**
   * User geolocation longitude
   */
  geo_longitude?: string;

  /**
   * Optional room ID get from rooms list service
   */
  room_id?: string;

  room_name?: string;

}
