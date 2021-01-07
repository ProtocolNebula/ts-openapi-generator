import { RoomApiAuth } from './room-api-auth';

export class CancelBookingRequest {

  auth?: RoomApiAuth;

  /**
   * Booking Id
   */
  booking_id?: string;

  /**
   * If has to do Reimbursment
   */
  do_reimbursment?: boolean;

}
