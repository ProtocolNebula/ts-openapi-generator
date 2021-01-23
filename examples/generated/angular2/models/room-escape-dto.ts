import { ModelBase } from '../../ApiBase/model-base.model';

export interface RoomEscapeDTOI {

  /**
   * Room Escape country ID
   */
  country?: number;

  id?: number;

  /**
   * Max players allowed
   */
  max_players?: number;

  /**
   * Room Escape country ID
   */
  name?: string;

  /**
   * Room Escape province ID
   */
  province?: number;

}


export class RoomEscapeDTO extends ModelBase implements RoomEscapeDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _country: number;
  get country(): number {
    return this._country;
  }
  set country(value: number) {
    this._country = this.parseParam('country', value);
  }

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _max_players: number;
  get max_players(): number {
    return this._max_players;
  }
  set max_players(value: number) {
    this._max_players = this.parseParam('max_players', value);
  }

  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = this.parseParam('name', value);
  }

  private _province: number;
  get province(): number {
    return this._province;
  }
  set province(value: number) {
    this._province = this.parseParam('province', value);
  }

  constructor(params?: RoomEscapeDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  country: {
    type: 'number',
  },
  id: {
    type: 'number',
  },
  max_players: {
    type: 'number',
  },
  name: {
    type: 'string',
  },
  province: {
    type: 'number',
  },
};
