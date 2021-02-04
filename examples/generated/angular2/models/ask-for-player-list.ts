import { ModelBase } from '../../ApiBase/model-base.model';
import { AskForPlayerStatusENUM } from './ask-for-player-status-enum';

export interface AskForPlayerListI {

  /**
   * Creation request date
   */
  date?: number;

  /**
   * YYYY-MM-DD
   */
  day?: string;

  description?: number;

  hour?: any;

  id?: number;

  id_province?: number;

  num_request_player?: number;

  /**
   * User ID that generate the request
   */
  owner_id?: number;

  room_id?: number;

  room_name?: number;

  status?: AskForPlayerStatusENUM;

}


export class AskForPlayerList extends ModelBase implements AskForPlayerListI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _date: number;
  get date(): number {
    return this._date;
  }
  set date(value: number) {
    this._date = this.parseParam('date', value);
  }

  private _day: string;
  get day(): string {
    return this._day;
  }
  set day(value: string) {
    this._day = this.parseParam('day', value);
  }

  private _description: number;
  get description(): number {
    return this._description;
  }
  set description(value: number) {
    this._description = this.parseParam('description', value);
  }

  private _hour: any;
  get hour(): any {
    return this._hour;
  }
  set hour(value: any) {
    this._hour = this.parseParam('hour', value);
  }

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _id_province: number;
  get id_province(): number {
    return this._id_province;
  }
  set id_province(value: number) {
    this._id_province = this.parseParam('id_province', value);
  }

  private _num_request_player: number;
  get num_request_player(): number {
    return this._num_request_player;
  }
  set num_request_player(value: number) {
    this._num_request_player = this.parseParam('num_request_player', value);
  }

  private _owner_id: number;
  get owner_id(): number {
    return this._owner_id;
  }
  set owner_id(value: number) {
    this._owner_id = this.parseParam('owner_id', value);
  }

  private _room_id: number;
  get room_id(): number {
    return this._room_id;
  }
  set room_id(value: number) {
    this._room_id = this.parseParam('room_id', value);
  }

  private _room_name: number;
  get room_name(): number {
    return this._room_name;
  }
  set room_name(value: number) {
    this._room_name = this.parseParam('room_name', value);
  }

  private _status: AskForPlayerStatusENUM;
  get status(): AskForPlayerStatusENUM {
    return this._status;
  }
  set status(value: AskForPlayerStatusENUM) {
    this._status = this.parseParam('status', value);
  }

  constructor(params?: AskForPlayerListI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  date: {
    type: 'number',
  },
  day: {
    type: 'string',
  },
  description: {
    type: 'number',
  },
  hour: {
    type: 'any',
  },
  id: {
    type: 'number',
  },
  id_province: {
    type: 'number',
  },
  num_request_player: {
    type: 'number',
  },
  owner_id: {
    type: 'number',
  },
  room_id: {
    type: 'number',
  },
  room_name: {
    type: 'number',
  },
  status: {
    type: AskForPlayerStatusENUM,
  },
};
