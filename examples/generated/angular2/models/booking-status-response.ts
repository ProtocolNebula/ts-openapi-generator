import { ModelBase } from '../../ApiBase/model-base.model';

export interface BookingStatusResponseI {

  /**
   * Percentage of comission
   */
  comission_percentage?: number;

  /**
   * Day and Time of Booking
   */
  date?: string;

  /**
   * Booking ID
   */
  id?: number;

  /**
   * Number of Players
   */
  players?: number;

  /**
   * Price
   */
  price?: number;

  /**
   * Room id if any
   */
  room_id?: number;

  /**
   * Status of Booking
   */
  status?: any;

  /**
   * User id if any
   */
  user_id?: number;

}


export class BookingStatusResponse extends ModelBase implements BookingStatusResponseI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _comission_percentage: number;
  get comission_percentage(): number {
    return this._comission_percentage;
  }
  set comission_percentage(value: number) {
    this._comission_percentage = this.parseParam('comission_percentage', value);
  }

  private _date: string;
  get date(): string {
    return this._date;
  }
  set date(value: string) {
    this._date = this.parseParam('date', value);
  }

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _players: number;
  get players(): number {
    return this._players;
  }
  set players(value: number) {
    this._players = this.parseParam('players', value);
  }

  private _price: number;
  get price(): number {
    return this._price;
  }
  set price(value: number) {
    this._price = this.parseParam('price', value);
  }

  private _room_id: number;
  get room_id(): number {
    return this._room_id;
  }
  set room_id(value: number) {
    this._room_id = this.parseParam('room_id', value);
  }

  private _status: any;
  get status(): any {
    return this._status;
  }
  set status(value: any) {
    this._status = this.parseParam('status', value);
  }

  private _user_id: number;
  get user_id(): number {
    return this._user_id;
  }
  set user_id(value: number) {
    this._user_id = this.parseParam('user_id', value);
  }

  constructor(params?: BookingStatusResponseI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  comission_percentage: {
    type: 'number',
  },
  date: {
    type: 'string',
  },
  id: {
    type: 'number',
  },
  players: {
    type: 'number',
  },
  price: {
    type: 'number',
  },
  room_id: {
    type: 'number',
  },
  status: {
    type: 'any',
  },
  user_id: {
    type: 'number',
  },
};
