import { ModelBase } from '../../ApiBase/model-base.model';

export interface BookingElementsHolidaysI {

  /**
   * Date time
   */
  datetime?: string;

  /**
   * Id
   */
  id?: number;

  /**
   * Status
   */
  status?: number;

}


export class BookingElementsHolidays extends ModelBase implements BookingElementsHolidaysI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _datetime: string;
  get datetime(): string {
    return this._datetime;
  }
  set datetime(value: string) {
    this._datetime = this.parseParam('datetime', value);
  }

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _status: number;
  get status(): number {
    return this._status;
  }
  set status(value: number) {
    this._status = this.parseParam('status', value);
  }

  constructor(params?: BookingElementsHolidaysI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  datetime: {
    type: 'string',
  },
  id: {
    type: 'number',
  },
  status: {
    type: 'number',
  },
};
