import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';

export interface ListSectionsBookingRequestI {

  auth?: RoomApiAuth;

  /**
   * Section Id
   */
  sectionId?: number;

}


export class ListSectionsBookingRequest extends ModelBase implements ListSectionsBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _sectionId: number;
  get sectionId(): number {
    return this._sectionId;
  }
  set sectionId(value: number) {
    this._sectionId = this.parseParam('sectionId', value);
  }

  constructor(params?: ListSectionsBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
  sectionId: {
    type: 'number',
  },
};
