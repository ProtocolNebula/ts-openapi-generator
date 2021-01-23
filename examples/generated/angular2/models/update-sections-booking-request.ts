import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';
import { RoomPriceSectionDTO } from './room-price-section-dto';
import { RoomsPricesDTO } from './rooms-prices-dto';

export interface UpdateSectionsBookingRequestI {

  auth?: RoomApiAuth;

  /**
   * Name
   */
  name?: string;

  prices?: RoomsPricesDTO;

  section?: RoomPriceSectionDTO;

}


export class UpdateSectionsBookingRequest extends ModelBase implements UpdateSectionsBookingRequestI {

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

  private _section: RoomPriceSectionDTO;
  get section(): RoomPriceSectionDTO {
    return this._section;
  }
  set section(value: RoomPriceSectionDTO) {
    this._section = this.parseParam('section', value);
  }

  constructor(params?: UpdateSectionsBookingRequestI) {
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
  section: {
    type: RoomPriceSectionDTO,
  },
};
