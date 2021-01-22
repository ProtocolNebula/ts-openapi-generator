import { ModelBase } from '../../ApiBase/model-base.model';

export interface RoomApiAuthI {

  /**
   * Private api key for the Owner
   */
  owner_key?: string;

  /**
   * If no room key specified, this will be used
   */
  room_id?: string;

  /**
   * Private api key for the Room
   */
  room_key?: string;

}


export class RoomApiAuth extends ModelBase implements RoomApiAuthI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _owner_key: string;
  get owner_key(): string {
    return this._owner_key;
  }
  set owner_key(value: string) {
    this._owner_key = this.parseParam('owner_key', value);
  }

  private _room_id: string;
  get room_id(): string {
    return this._room_id;
  }
  set room_id(value: string) {
    this._room_id = this.parseParam('room_id', value);
  }

  private _room_key: string;
  get room_key(): string {
    return this._room_key;
  }
  set room_key(value: string) {
    this._room_key = this.parseParam('room_key', value);
  }

  constructor(params?: RoomApiAuthI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  owner_key: {
    type: 'string',
  },
  room_id: {
    type: 'string',
  },
  room_key: {
    type: 'string',
  },
};
