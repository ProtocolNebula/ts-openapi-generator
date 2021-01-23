import { ModelBase } from '../../ApiBase/model-base.model';
import { FillRoomReservationRequest } from './fill-room-reservation-request';
import { RoomApiAuth } from './room-api-auth';

export interface FillRequestI {

  auth?: RoomApiAuth;

  reservation_info?: FillRoomReservationRequest;

}


export class FillRequest extends ModelBase implements FillRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _reservation_info: FillRoomReservationRequest;
  get reservation_info(): FillRoomReservationRequest {
    return this._reservation_info;
  }
  set reservation_info(value: FillRoomReservationRequest) {
    this._reservation_info = this.parseParam('reservation_info', value);
  }

  constructor(params?: FillRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
  reservation_info: {
    type: FillRoomReservationRequest,
  },
};
