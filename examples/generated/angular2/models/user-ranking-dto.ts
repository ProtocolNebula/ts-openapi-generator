import { ModelBase } from '../../ApiBase/model-base.model';

export interface UserRankingDTOI {

  /**
   * Total completed rooms (points)
   */
  completed_rooms?: number;

  /**
   * Total extra points
   */
  extra_points?: number;

  /**
   * The league ID
   */
  league?: number;

  /**
   * League name
   */
  league_description?: string;

  /**
   * Position in TOP country
   */
  position_country?: number;

  /**
   * Position in TOP league
   */
  position_league?: number;

  /**
   * Position in TOP province
   */
  position_province?: number;

  /**
   * Total time played
   */
  time_played?: number;

}


export class UserRankingDTO extends ModelBase implements UserRankingDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _completed_rooms: number;
  get completed_rooms(): number {
    return this._completed_rooms;
  }
  set completed_rooms(value: number) {
    this._completed_rooms = this.parseParam('completed_rooms', value);
  }

  private _extra_points: number;
  get extra_points(): number {
    return this._extra_points;
  }
  set extra_points(value: number) {
    this._extra_points = this.parseParam('extra_points', value);
  }

  private _league: number;
  get league(): number {
    return this._league;
  }
  set league(value: number) {
    this._league = this.parseParam('league', value);
  }

  private _league_description: string;
  get league_description(): string {
    return this._league_description;
  }
  set league_description(value: string) {
    this._league_description = this.parseParam('league_description', value);
  }

  private _position_country: number;
  get position_country(): number {
    return this._position_country;
  }
  set position_country(value: number) {
    this._position_country = this.parseParam('position_country', value);
  }

  private _position_league: number;
  get position_league(): number {
    return this._position_league;
  }
  set position_league(value: number) {
    this._position_league = this.parseParam('position_league', value);
  }

  private _position_province: number;
  get position_province(): number {
    return this._position_province;
  }
  set position_province(value: number) {
    this._position_province = this.parseParam('position_province', value);
  }

  private _time_played: number;
  get time_played(): number {
    return this._time_played;
  }
  set time_played(value: number) {
    this._time_played = this.parseParam('time_played', value);
  }

  constructor(params?: UserRankingDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  completed_rooms: {
    type: 'number',
  },
  extra_points: {
    type: 'number',
  },
  league: {
    type: 'number',
  },
  league_description: {
    type: 'string',
  },
  position_country: {
    type: 'number',
  },
  position_league: {
    type: 'number',
  },
  position_province: {
    type: 'number',
  },
  time_played: {
    type: 'number',
  },
};
