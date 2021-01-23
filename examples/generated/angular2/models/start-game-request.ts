import { ModelBase } from '../../ApiBase/model-base.model';

export interface StartGameRequestI {

  /**
   * City of the room
   */
  city?: string;

  /**
   * User geolocation latitude
   */
  geo_latitude?: string;

  /**
   * User geolocation longitude
   */
  geo_longitude?: string;

  /**
   * Optional room ID get from rooms list service
   */
  room_id?: string;

  room_name?: string;

}


export class StartGameRequest extends ModelBase implements StartGameRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _city: string;
  get city(): string {
    return this._city;
  }
  set city(value: string) {
    this._city = this.parseParam('city', value);
  }

  private _geo_latitude: string;
  get geo_latitude(): string {
    return this._geo_latitude;
  }
  set geo_latitude(value: string) {
    this._geo_latitude = this.parseParam('geo_latitude', value);
  }

  private _geo_longitude: string;
  get geo_longitude(): string {
    return this._geo_longitude;
  }
  set geo_longitude(value: string) {
    this._geo_longitude = this.parseParam('geo_longitude', value);
  }

  private _room_id: string;
  get room_id(): string {
    return this._room_id;
  }
  set room_id(value: string) {
    this._room_id = this.parseParam('room_id', value);
  }

  private _room_name: string;
  get room_name(): string {
    return this._room_name;
  }
  set room_name(value: string) {
    this._room_name = this.parseParam('room_name', value);
  }

  constructor(params?: StartGameRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  city: {
    type: 'string',
  },
  geo_latitude: {
    type: 'string',
  },
  geo_longitude: {
    type: 'string',
  },
  room_id: {
    type: 'string',
  },
  room_name: {
    type: 'string',
  },
};
