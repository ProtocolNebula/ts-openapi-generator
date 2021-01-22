import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';

export interface StatusBookingRequestI {

  auth?: RoomApiAuth;

  /**
   * Booking Id
   */
  booking_id?: string;

}


export class StatusBookingRequest extends ModelBase implements StatusBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _booking_id: string;
  get booking_id(): string {
    return this._booking_id;
  }
  set booking_id(value: string) {
    this._booking_id = this.parseParam('booking_id', value);
  }

  constructor(params?: StatusBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
  booking_id: {
    type: 'string',
  },
};
