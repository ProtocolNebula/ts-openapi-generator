import { ModelBase } from '../../ApiBase/model-base.model';

export interface AskForPlayersRequestI {

  /**
   * YYYY-MM-DD
   */
  day?: string;

  /**
   * Optional, extra information about request
   */
  description?: number;

  /**
   * HH:mm
   */
  hour?: string;

  /**
   * Only if no room_id specified
   */
  id_province?: string;

  /**
   * Max quantity of players to accept
   */
  num_request_players?: number;

  room_id?: string;

  /**
   * Only if not room_id specified
   */
  room_name?: string;

}


export class AskForPlayersRequest extends ModelBase implements AskForPlayersRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

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

  private _hour: string;
  get hour(): string {
    return this._hour;
  }
  set hour(value: string) {
    this._hour = this.parseParam('hour', value);
  }

  private _id_province: string;
  get id_province(): string {
    return this._id_province;
  }
  set id_province(value: string) {
    this._id_province = this.parseParam('id_province', value);
  }

  private _num_request_players: number;
  get num_request_players(): number {
    return this._num_request_players;
  }
  set num_request_players(value: number) {
    this._num_request_players = this.parseParam('num_request_players', value);
  }

  private _room_id: string;
  get room_id(): string {
    return this._room_id;
  }
  set room_id(value: string) {
    this._room_id = this.parseParam('room_id', value);
  }

  private _room_name: string;
  get room_name(): string {
    return this._room_name;
  }
  set room_name(value: string) {
    this._room_name = this.parseParam('room_name', value);
  }

  constructor(params?: AskForPlayersRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  day: {
    type: 'string',
  },
  description: {
    type: 'number',
  },
  hour: {
    type: 'string',
  },
  id_province: {
    type: 'string',
  },
  num_request_players: {
    type: 'number',
  },
  room_id: {
    type: 'string',
  },
  room_name: {
    type: 'string',
  },
};
