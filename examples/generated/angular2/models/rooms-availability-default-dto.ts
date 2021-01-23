import { ModelBase } from '../../ApiBase/model-base.model';

export interface RoomsAvailabilityDefaultDTOI {

  /**
   * Comission Percentage
   */
  comission_percentage?: number;

  /**
   * Price Section
   */
  price_section?: number;

  /**
   * Room Id
   */
  room_id?: number;

  /**
   * Session Start
   */
  session_start?: string;

  /**
   * Week Day
   */
  week_day?: number;

}


export class RoomsAvailabilityDefaultDTO extends ModelBase implements RoomsAvailabilityDefaultDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _comission_percentage: number;
  get comission_percentage(): number {
    return this._comission_percentage;
  }
  set comission_percentage(value: number) {
    this._comission_percentage = this.parseParam('comission_percentage', value);
  }

  private _price_section: number;
  get price_section(): number {
    return this._price_section;
  }
  set price_section(value: number) {
    this._price_section = this.parseParam('price_section', value);
  }

  private _room_id: number;
  get room_id(): number {
    return this._room_id;
  }
  set room_id(value: number) {
    this._room_id = this.parseParam('room_id', value);
  }

  private _session_start: string;
  get session_start(): string {
    return this._session_start;
  }
  set session_start(value: string) {
    this._session_start = this.parseParam('session_start', value);
  }

  private _week_day: number;
  get week_day(): number {
    return this._week_day;
  }
  set week_day(value: number) {
    this._week_day = this.parseParam('week_day', value);
  }

  constructor(params?: RoomsAvailabilityDefaultDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  comission_percentage: {
    type: 'number',
  },
  price_section: {
    type: 'number',
  },
  room_id: {
    type: 'number',
  },
  session_start: {
    type: 'string',
  },
  week_day: {
    type: 'number',
  },
};
