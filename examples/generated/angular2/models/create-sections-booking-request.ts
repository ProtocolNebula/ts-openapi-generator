import { RoomApiAuth } from './room-api-auth';
import { RoomsPricesDTO } from './rooms-prices-dto';

export class CreateSectionsBookingRequest {

  auth?: RoomApiAuth;

  /**
   * Name
   */
  name?: string;

  prices?: RoomsPricesDTO;

}
