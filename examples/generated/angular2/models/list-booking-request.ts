import { ModelBase } from '../../ApiBase/model-base.model';
import { ListBookingRequestShowENUM } from './list-booking-request-show-enum';
import { RoomApiAuth } from './room-api-auth';

export interface ListBookingRequestI {

  auth: RoomApiAuth;

  /**
   * Day
   */
  day?: string;

  /**
   * Month
   */
  month: string;

  /**
   * Show only with status
   */
  show?: ListBookingRequestShowENUM;

  /**
   * Year
   */
  year: string;

}


export class ListBookingRequest extends ModelBase implements ListBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _day: string;
  get day(): string {
    return this._day;
  }
  set day(value: string) {
    this._day = this.parseParam('day', value);
  }

  private _month: string;
  get month(): string {
    return this._month;
  }
  set month(value: string) {
    this._month = this.parseParam('month', value);
  }

  private _show: ListBookingRequestShowENUM;
  get show(): ListBookingRequestShowENUM {
    return this._show;
  }
  set show(value: ListBookingRequestShowENUM) {
    this._show = this.parseParam('show', value);
  }

  private _year: string;
  get year(): string {
    return this._year;
  }
  set year(value: string) {
    this._year = this.parseParam('year', value);
  }

  constructor(params?: ListBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
  day: {
    type: 'string',
  },
  month: {
    type: 'string',
  },
  show: {
    type: ListBookingRequestShowENUM,
  },
  year: {
    type: 'string',
  },
};
