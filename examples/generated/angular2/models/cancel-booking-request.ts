import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';

export interface CancelBookingRequestI {

  auth?: RoomApiAuth;

  /**
   * Booking Id
   */
  booking_id?: string;

  /**
   * If has to do Reimbursment
   */
  do_reimbursment?: boolean;

}


export class CancelBookingRequest extends ModelBase implements CancelBookingRequestI {

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

  private _do_reimbursment: boolean;
  get do_reimbursment(): boolean {
    return this._do_reimbursment;
  }
  set do_reimbursment(value: boolean) {
    this._do_reimbursment = this.parseParam('do_reimbursment', value);
  }

  constructor(params?: CancelBookingRequestI) {
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
  do_reimbursment: {
    type: 'boolean',
  },
};
