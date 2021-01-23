import { ModelBase } from '../../ApiBase/model-base.model';

export interface UserProfileDTOI {

  /**
   * The user id
   */
  perfil_publico?: boolean;

  /**
   * Total of played rooms except current ranking
   */
  played_rooms?: boolean;

  /**
   * Total played minutes except current ranking
   */
  time_played?: boolean;

}


export class UserProfileDTO extends ModelBase implements UserProfileDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _perfil_publico: boolean;
  get perfil_publico(): boolean {
    return this._perfil_publico;
  }
  set perfil_publico(value: boolean) {
    this._perfil_publico = this.parseParam('perfil_publico', value);
  }

  private _played_rooms: boolean;
  get played_rooms(): boolean {
    return this._played_rooms;
  }
  set played_rooms(value: boolean) {
    this._played_rooms = this.parseParam('played_rooms', value);
  }

  private _time_played: boolean;
  get time_played(): boolean {
    return this._time_played;
  }
  set time_played(value: boolean) {
    this._time_played = this.parseParam('time_played', value);
  }

  constructor(params?: UserProfileDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  perfil_publico: {
    type: 'boolean',
  },
  played_rooms: {
    type: 'boolean',
  },
  time_played: {
    type: 'boolean',
  },
};
