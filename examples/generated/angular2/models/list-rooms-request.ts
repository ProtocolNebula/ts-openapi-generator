import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';

export interface ListRoomsRequestI {

  auth?: RoomApiAuth;

}


export class ListRoomsRequest extends ModelBase implements ListRoomsRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  constructor(params?: ListRoomsRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
};
