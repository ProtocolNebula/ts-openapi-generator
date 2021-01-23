import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';
import { RoomsPricesDTO } from './rooms-prices-dto';

export interface CreateSectionsBookingRequestI {

  auth?: RoomApiAuth;

  /**
   * Name
   */
  name?: string;

  prices?: RoomsPricesDTO;

}


export class CreateSectionsBookingRequest extends ModelBase implements CreateSectionsBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = this.parseParam('name', value);
  }

  private _prices: RoomsPricesDTO;
  get prices(): RoomsPricesDTO {
    return this._prices;
  }
  set prices(value: RoomsPricesDTO) {
    this._prices = this.parseParam('prices', value);
  }

  constructor(params?: CreateSectionsBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
  name: {
    type: 'string',
  },
  prices: {
    type: RoomsPricesDTO,
  },
};
