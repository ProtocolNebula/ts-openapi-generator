import { ModelBase } from '../../ApiBase/model-base.model';

export interface UserDTOI {

  /**
   * Login username
   */
  avatar?: string;

  /**
   * The user email
   */
  email?: string;

  /**
   * The user id
   */
  id?: string;

  /**
   * The user last name
   */
  lastname?: string;

  /**
   * The user name
   */
  name?: string;

  /**
   * 1&#x3D;Player, 2&#x3D;Room Owner
   */
  type?: number;

  /**
   * Login username
   */
  user?: string;

}


export class UserDTO extends ModelBase implements UserDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _avatar: string;
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = this.parseParam('avatar', value);
  }

  private _email: string;
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = this.parseParam('email', value);
  }

  private _id: string;
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = this.parseParam('id', value);
  }

  private _lastname: string;
  get lastname(): string {
    return this._lastname;
  }
  set lastname(value: string) {
    this._lastname = this.parseParam('lastname', value);
  }

  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = this.parseParam('name', value);
  }

  private _type: number;
  get type(): number {
    return this._type;
  }
  set type(value: number) {
    this._type = this.parseParam('type', value);
  }

  private _user: string;
  get user(): string {
    return this._user;
  }
  set user(value: string) {
    this._user = this.parseParam('user', value);
  }

  constructor(params?: UserDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  avatar: {
    type: 'string',
  },
  email: {
    type: 'string',
  },
  id: {
    type: 'string',
  },
  lastname: {
    type: 'string',
  },
  name: {
    type: 'string',
  },
  type: {
    type: 'number',
  },
  user: {
    type: 'string',
  },
};
