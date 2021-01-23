import { ModelBase } from '../../ApiBase/model-base.model';

export interface RoomReservationInfoRequestI {

  /**
   * Date of the Booking
   */
  date?: string;

  /**
   * City of the room
   */
  players?: number;

  /**
   * City of the room
   */
  price?: number;

  /**
   * Time of the Booking
   */
  time?: string;

}


export class RoomReservationInfoRequest extends ModelBase implements RoomReservationInfoRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _date: string;
  get date(): string {
    return this._date;
  }
  set date(value: string) {
    this._date = this.parseParam('date', value);
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

  private _time: string;
  get time(): string {
    return this._time;
  }
  set time(value: string) {
    this._time = this.parseParam('time', value);
  }

  constructor(params?: RoomReservationInfoRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  date: {
    type: 'string',
  },
  players: {
    type: 'number',
  },
  price: {
    type: 'number',
  },
  time: {
    type: 'string',
  },
};
