import { RoomApiAuth } from './room-api-auth';

export class ListSectionsBookingRequest {

  auth?: RoomApiAuth;

  /**
   * Section Id
   */
  sectionId?: number;

}
