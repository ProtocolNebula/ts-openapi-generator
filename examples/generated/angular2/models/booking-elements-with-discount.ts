import { ModelBase } from '../../ApiBase/model-base.model';

export interface BookingElementsWithDiscountI {

  /**
   * Date time
   */
  datetime?: string;

  /**
   * Number for the discount
   */
  discount_percent?: number;

  /**
   * Id
   */
  id?: number;

  /**
   * Status
   */
  status?: number;

}


export class BookingElementsWithDiscount extends ModelBase implements BookingElementsWithDiscountI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _datetime: string;
  get datetime(): string {
    return this._datetime;
  }
  set datetime(value: string) {
    this._datetime = this.parseParam('datetime', value);
  }

  private _discount_percent: number;
  get discount_percent(): number {
    return this._discount_percent;
  }
  set discount_percent(value: number) {
    this._discount_percent = this.parseParam('discount_percent', value);
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

  constructor(params?: BookingElementsWithDiscountI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  datetime: {
    type: 'string',
  },
  discount_percent: {
    type: 'number',
  },
  id: {
    type: 'number',
  },
  status: {
    type: 'number',
  },
};
