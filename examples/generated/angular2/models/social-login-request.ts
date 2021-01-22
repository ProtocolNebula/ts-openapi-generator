import { ModelBase } from '../../ApiBase/model-base.model';

export interface SocialLoginRequestI {

  /**
   * Social network name: facebook
   */
  network?: string;

  token?: string;

  user?: string;

}


export class SocialLoginRequest extends ModelBase implements SocialLoginRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _network: string;
  get network(): string {
    return this._network;
  }
  set network(value: string) {
    this._network = this.parseParam('network', value);
  }

  private _token: string;
  get token(): string {
    return this._token;
  }
  set token(value: string) {
    this._token = this.parseParam('token', value);
  }

  private _user: string;
  get user(): string {
    return this._user;
  }
  set user(value: string) {
    this._user = this.parseParam('user', value);
  }

  constructor(params?: SocialLoginRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  network: {
    type: 'string',
  },
  token: {
    type: 'string',
  },
  user: {
    type: 'string',
  },
};
