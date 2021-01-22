import { ModelBase } from '../../ApiBase/model-base.model';
import { RoomApiAuth } from './room-api-auth';
import { RoomsAvailabilityDefaultDTO } from './rooms-availability-default-dto';

export interface SaveDefaultBookingRequestI {

  auth?: RoomApiAuth;

  availability?: RoomsAvailabilityDefaultDTO[];

}


export class SaveDefaultBookingRequest extends ModelBase implements SaveDefaultBookingRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _auth: RoomApiAuth;
  get auth(): RoomApiAuth {
    return this._auth;
  }
  set auth(value: RoomApiAuth) {
    this._auth = this.parseParam('auth', value);
  }

  private _availability: RoomsAvailabilityDefaultDTO[][];
  get availability(): RoomsAvailabilityDefaultDTO[][] {
    return this._availability;
  }
  set availability(value: RoomsAvailabilityDefaultDTO[][]) {
    this._availability = this.parseParam('availability', value);
  }

  constructor(params?: SaveDefaultBookingRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  auth: {
    type: RoomApiAuth,
  },
  availability: {
    type: RoomsAvailabilityDefaultDTO,
  },
};
