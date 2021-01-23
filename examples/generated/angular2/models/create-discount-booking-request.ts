import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';

export interface CreateDiscountBookingRequestI {

  /**
   * Affected WeekDays, 0 &#x3D; Sunday &amp; 6 &#x3D; Saturday
   */
  affected_weekdays?: number[];

  auth?: RoomApiAuth;

  /**
   * Discount Percentage
   */
  discount_percentage?: number;

  /**
   * From which Date
   */
  from_date?: string;

  /**
   * From which Hour
   */
  from_hour?: string;

  /**
   * Replace Existing
   */
  replace_existing?: boolean;

  /**
   * To which Date
   */
  to_date?: string;

  /**
   * To which Hour
   */
  to_hour?: string;

}


export class CreateDiscountBookingRequest extends ModelBase implements CreateDiscountBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _affected_weekdays: number[];
  get affected_weekdays(): number[] {
    return this._affected_weekdays;
  }
  set affected_weekdays(value: number[]) {
    this._affected_weekdays = this.parseParam('affected_weekdays', value);
  }

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _discount_percentage: number;
  get discount_percentage(): number {
    return this._discount_percentage;
  }
  set discount_percentage(value: number) {
    this._discount_percentage = this.parseParam('discount_percentage', value);
  }

  private _from_date: string;
  get from_date(): string {
    return this._from_date;
  }
  set from_date(value: string) {
    this._from_date = this.parseParam('from_date', value);
  }

  private _from_hour: string;
  get from_hour(): string {
    return this._from_hour;
  }
  set from_hour(value: string) {
    this._from_hour = this.parseParam('from_hour', value);
  }

  private _replace_existing: boolean;
  get replace_existing(): boolean {
    return this._replace_existing;
  }
  set replace_existing(value: boolean) {
    this._replace_existing = this.parseParam('replace_existing', value);
  }

  private _to_date: string;
  get to_date(): string {
    return this._to_date;
  }
  set to_date(value: string) {
    this._to_date = this.parseParam('to_date', value);
  }

  private _to_hour: string;
  get to_hour(): string {
    return this._to_hour;
  }
  set to_hour(value: string) {
    this._to_hour = this.parseParam('to_hour', value);
  }

  constructor(params?: CreateDiscountBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  affected_weekdays: {
    type: 'number',
  },
  auth: {
    type: RoomApiAuth,
  },
  discount_percentage: {
    type: 'number',
  },
  from_date: {
    type: 'string',
  },
  from_hour: {
    type: 'string',
  },
  replace_existing: {
    type: 'boolean',
  },
  to_date: {
    type: 'string',
  },
  to_hour: {
    type: 'string',
  },
};
