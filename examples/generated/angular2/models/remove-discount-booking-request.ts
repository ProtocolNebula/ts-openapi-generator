import { RoomApiAuth } from './room-api-auth';

export class RemoveDiscountBookingRequest {

  auth?: RoomApiAuth;

  /**
   * Reservation Id
   */
  reservation_ids?: number[];

}
