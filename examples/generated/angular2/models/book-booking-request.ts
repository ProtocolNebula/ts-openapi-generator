import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';
import { RoomReservationInfoRequest } from './room-reservation-info-request';

export interface BookBookingRequestI {

  auth?: RoomApiAuth;

  reservation_info?: RoomReservationInfoRequest;

}


export class BookBookingRequest extends ModelBase implements BookBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _reservation_info: RoomReservationInfoRequest;
  get reservation_info(): RoomReservationInfoRequest {
    return this._reservation_info;
  }
  set reservation_info(value: RoomReservationInfoRequest) {
    this._reservation_info = this.parseParam('reservation_info', value);
  }

  constructor(params?: BookBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
  reservation_info: {
    type: RoomReservationInfoRequest,
  },
};
