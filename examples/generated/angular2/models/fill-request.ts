import { FillRoomReservationRequest } from './fill-room-reservation-request';
import { RoomApiAuth } from './room-api-auth';

export class FillRequest {

  auth?: RoomApiAuth;

  reservation_info?: FillRoomReservationRequest;

}
