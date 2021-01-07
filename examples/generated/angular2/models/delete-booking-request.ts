import { RoomApiAuth } from './room-api-auth';

export class DeleteBookingRequest {

  auth?: RoomApiAuth;

  /**
   * Section Id
   */
  sectionId?: number;

}
