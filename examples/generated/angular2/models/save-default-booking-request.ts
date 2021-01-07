import { RoomApiAuth } from './room-api-auth';
import { RoomsAvailabilityDefaultDTO } from './rooms-availability-default-dto';

export class SaveDefaultBookingRequest {

  auth?: RoomApiAuth;

  availability?: RoomsAvailabilityDefaultDTO[][];

}
