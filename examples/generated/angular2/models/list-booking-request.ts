import { ListBookingRequestShowENUM } from './list-booking-request-show-enum';
import { RoomApiAuth } from './room-api-auth';

export class ListBookingRequest {

  auth: RoomApiAuth;

  /**
   * Day
   */
  day?: string;

  /**
   * Month
   */
  month: string;

  /**
   * Show only with status
   */
  show?: ListBookingRequestShowENUM;

  /**
   * Year
   */
  year: string;

}
