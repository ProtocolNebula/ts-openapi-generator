import { ModelBase } from '../../ApiBase/model-base.model';

export interface FillRoomReservationRequestI {

  /**
   * Number of days to fill
   */
  days?: number;

}


export class FillRoomReservationRequest extends ModelBase implements FillRoomReservationRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _days: number;
  get days(): number {
    return this._days;
  }
  set days(value: number) {
    this._days = this.parseParam('days', value);
  }

  constructor(params?: FillRoomReservationRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  days: {
    type: 'number',
  },
};
