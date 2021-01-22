import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';

export interface RemoveDiscountBookingRequestI {

  auth?: RoomApiAuth;

  /**
   * Reservation Id
   */
  reservation_ids?: number[];

}


export class RemoveDiscountBookingRequest extends ModelBase implements RemoveDiscountBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _reservation_ids: number[];
  get reservation_ids(): number[] {
    return this._reservation_ids;
  }
  set reservation_ids(value: number[]) {
    this._reservation_ids = this.parseParam('reservation_ids', value);
  }

  constructor(params?: RemoveDiscountBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
  reservation_ids: {
    type: 'number',
  },
};
