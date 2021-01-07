import { RoomApiAuth } from './room-api-auth';

export class StatusBookingRequest {

  auth?: RoomApiAuth;

  /**
   * Booking Id
   */
  booking_id?: string;

}
