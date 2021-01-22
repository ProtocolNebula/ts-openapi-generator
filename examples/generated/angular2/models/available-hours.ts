import { ModelBase } from '../../ApiBase/model-base.model';

export interface AvailableHoursI {

  /**
   * Hour. hh:mm
   */
  hour?: string;

  /**
   * Shows if available or not
   */
  is_available?: boolean;

}


export class AvailableHours extends ModelBase implements AvailableHoursI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _hour: string;
  get hour(): string {
    return this._hour;
  }
  set hour(value: string) {
    this._hour = this.parseParam('hour', value);
  }

  private _is_available: boolean;
  get is_available(): boolean {
    return this._is_available;
  }
  set is_available(value: boolean) {
    this._is_available = this.parseParam('is_available', value);
  }

  constructor(params?: AvailableHoursI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  hour: {
    type: 'string',
  },
  is_available: {
    type: 'boolean',
  },
};
