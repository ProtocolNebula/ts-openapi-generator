import { RoomApiAuth } from './room-api-auth';

export class CreateDiscountBookingRequest {

  /**
   * Affected WeekDays, 0 &#x3D; Sunday &amp; 6 &#x3D; Saturday
   */
  affected_weekdays?: number[];

  auth?: RoomApiAuth;

  /**
   * Discount Percentage
   */
  discount_percentage?: number;

  /**
   * From which Date
   */
  from_date?: string;

  /**
   * From which Hour
   */
  from_hour?: string;

  /**
   * Replace Existing
   */
  replace_existing?: boolean;

  /**
   * To which Date
   */
  to_date?: string;

  /**
   * To which Hour
   */
  to_hour?: string;

}
