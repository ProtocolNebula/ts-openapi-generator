import { ModelBase } from '../../ApiBase/model-base.model';

export interface AvailableDaysI {

  /**
   * Day. dd
   */
  day?: string;

  /**
   * Shows if available or not
   */
  is_available?: boolean;

}


export class AvailableDays extends ModelBase implements AvailableDaysI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _day: string;
  get day(): string {
    return this._day;
  }
  set day(value: string) {
    this._day = this.parseParam('day', value);
  }

  private _is_available: boolean;
  get is_available(): boolean {
    return this._is_available;
  }
  set is_available(value: boolean) {
    this._is_available = this.parseParam('is_available', value);
  }

  constructor(params?: AvailableDaysI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  day: {
    type: 'string',
  },
  is_available: {
    type: 'boolean',
  },
};
