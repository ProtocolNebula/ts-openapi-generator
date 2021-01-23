import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';

export interface DeleteBookingRequestI {

  auth?: RoomApiAuth;

  /**
   * Section Id
   */
  sectionId?: number;

}


export class DeleteBookingRequest extends ModelBase implements DeleteBookingRequestI {

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

  constructor(params?: DeleteBookingRequestI) {
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
