import { ModelBase } from '../../ApiBase/model-base.model';
import { GameStatusENUM } from './game-status-enum';

export interface GameStatusResponseI {

  /**
   * Date of creation &#39;YYYY-MM-DD HH:mm:ss&#39;
   */
  creation_date_time?: string;

  /**
   * Game ID
   */
  id?: number;

  /**
   * Information message (if any)
   */
  message?: string;

  /**
   * Room id if any
   */
  room_id?: string;

  /**
   * Room name
   */
  room_name?: string;

  status?: GameStatusENUM;

}


export class GameStatusResponse extends ModelBase implements GameStatusResponseI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _creation_date_time: string;
  get creation_date_time(): string {
    return this._creation_date_time;
  }
  set creation_date_time(value: string) {
    this._creation_date_time = this.parseParam('creation_date_time', value);
  }

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _message: string;
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = this.parseParam('message', value);
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

  private _status: GameStatusENUM;
  get status(): GameStatusENUM {
    return this._status;
  }
  set status(value: GameStatusENUM) {
    this._status = this.parseParam('status', value);
  }

  constructor(params?: GameStatusResponseI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  creation_date_time: {
    type: 'string',
  },
  id: {
    type: 'number',
  },
  message: {
    type: 'string',
  },
  room_id: {
    type: 'string',
  },
  room_name: {
    type: 'string',
  },
  status: {
    type: GameStatusENUM,
  },
};
