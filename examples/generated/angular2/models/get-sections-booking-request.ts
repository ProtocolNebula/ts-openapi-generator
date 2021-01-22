import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';

export interface GetSectionsBookingRequestI {

  auth?: RoomApiAuth;

}


export class GetSectionsBookingRequest extends ModelBase implements GetSectionsBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  constructor(params?: GetSectionsBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
};
