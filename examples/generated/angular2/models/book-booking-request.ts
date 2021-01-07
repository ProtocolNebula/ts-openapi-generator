import { RoomApiAuth } from './room-api-auth';
import { RoomReservationInfoRequest } from './room-reservation-info-request';

export class BookBookingRequest {

  auth?: RoomApiAuth;

  reservation_info?: RoomReservationInfoRequest;

}
