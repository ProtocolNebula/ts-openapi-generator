import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';

export interface GetDiscountBookingRequestI {

  auth?: RoomApiAuth;

  /**
   * From Id
   */
  from_id?: number;

}


export class GetDiscountBookingRequest extends ModelBase implements GetDiscountBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _from_id: number;
  get from_id(): number {
    return this._from_id;
  }
  set from_id(value: number) {
    this._from_id = this.parseParam('from_id', value);
  }

  constructor(params?: GetDiscountBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
  from_id: {
    type: 'number',
  },
};
