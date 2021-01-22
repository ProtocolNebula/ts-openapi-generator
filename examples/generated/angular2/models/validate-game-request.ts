import { ModelBase } from '../../ApiBase/model-base.model';

export interface ValidateGameRequestI {

  /**
   * Minutes spend to complete the game
   */
  completion_time?: number;

  /**
   * User geolocation latitude
   */
  geo_latitude?: string;

  /**
   * User geolocation longitude
   */
  geo_longitude?: string;

  /**
   * Passport number scanned code
   */
  passport_code?: string;

  /**
   * Escape Room and players photo (base 64)
   */
  photo?: string;

}


export class ValidateGameRequest extends ModelBase implements ValidateGameRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _completion_time: number;
  get completion_time(): number {
    return this._completion_time;
  }
  set completion_time(value: number) {
    this._completion_time = this.parseParam('completion_time', value);
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

  private _passport_code: string;
  get passport_code(): string {
    return this._passport_code;
  }
  set passport_code(value: string) {
    this._passport_code = this.parseParam('passport_code', value);
  }

  private _photo: string;
  get photo(): string {
    return this._photo;
  }
  set photo(value: string) {
    this._photo = this.parseParam('photo', value);
  }

  constructor(params?: ValidateGameRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  completion_time: {
    type: 'number',
  },
  geo_latitude: {
    type: 'string',
  },
  geo_longitude: {
    type: 'string',
  },
  passport_code: {
    type: 'string',
  },
  photo: {
    type: 'string',
  },
};
