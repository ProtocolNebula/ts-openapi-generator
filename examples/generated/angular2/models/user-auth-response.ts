import { ModelBase } from '../../ApiBase/model-base.model';
import { UserDirectionDTO } from './user-direction-dto';
import { UserDTO } from './user-dto';
import { UserProfileDTO } from './user-profile-dto';
import { UserRankingDTO } from './user-ranking-dto';

export interface UserAuthResponseI {

  direction?: UserDirectionDTO;

  profile?: UserProfileDTO;

  ranking?: UserRankingDTO;

  token?: string;

  user?: UserDTO;

}


export class UserAuthResponse extends ModelBase implements UserAuthResponseI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _direction: UserDirectionDTO;
  get direction(): UserDirectionDTO {
    return this._direction;
  }
  set direction(value: UserDirectionDTO) {
    this._direction = this.parseParam('direction', value);
  }

  private _profile: UserProfileDTO;
  get profile(): UserProfileDTO {
    return this._profile;
  }
  set profile(value: UserProfileDTO) {
    this._profile = this.parseParam('profile', value);
  }

  private _ranking: UserRankingDTO;
  get ranking(): UserRankingDTO {
    return this._ranking;
  }
  set ranking(value: UserRankingDTO) {
    this._ranking = this.parseParam('ranking', value);
  }

  private _token: string;
  get token(): string {
    return this._token;
  }
  set token(value: string) {
    this._token = this.parseParam('token', value);
  }

  private _user: UserDTO;
  get user(): UserDTO {
    return this._user;
  }
  set user(value: UserDTO) {
    this._user = this.parseParam('user', value);
  }

  constructor(params?: UserAuthResponseI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  direction: {
    type: UserDirectionDTO,
  },
  profile: {
    type: UserProfileDTO,
  },
  ranking: {
    type: UserRankingDTO,
  },
  token: {
    type: 'string',
  },
  user: {
    type: UserDTO,
  },
};
