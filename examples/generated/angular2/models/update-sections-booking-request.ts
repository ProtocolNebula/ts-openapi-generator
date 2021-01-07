import { RoomApiAuth } from './room-api-auth';
import { RoomPriceSectionDTO } from './room-price-section-dto';
import { RoomsPricesDTO } from './rooms-prices-dto';

export class UpdateSectionsBookingRequest {

  auth?: RoomApiAuth;

  /**
   * Name
   */
  name?: string;

  prices?: RoomsPricesDTO;

  section?: RoomPriceSectionDTO;

}
