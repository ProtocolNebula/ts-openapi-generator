import { ModelBase } from '../../ApiBase/model-base.model';

export interface LoginRequestI {

  password?: string;

  user?: string;

}


export class LoginRequest extends ModelBase implements LoginRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _password: string;
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = this.parseParam('password', value);
  }

  private _user: string;
  get user(): string {
    return this._user;
  }
  set user(value: string) {
    this._user = this.parseParam('user', value);
  }

  constructor(params?: LoginRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  password: {
    type: 'string',
  },
  user: {
    type: 'string',
  },
};
