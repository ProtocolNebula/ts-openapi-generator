import { ModelBase } from '../../ApiBase/model-base.model';

export interface GetSearchSearchRoomsParamsI {

  /**
   * ID of country
   */
  country?: number;

  /**
   * At least 4 characters
   */
  name: string;

  /**
   * ID of province (will ignore country)
   */
  province?: number;

}


export class GetSearchSearchRoomsParams extends ModelBase implements GetSearchSearchRoomsParamsI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _country: number;
  get country(): number {
    return this._country;
  }
  set country(value: number) {
    this._country = this.parseParam('country', value);
  }

  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = this.parseParam('name', value);
  }

  private _province: number;
  get province(): number {
    return this._province;
  }
  set province(value: number) {
    this._province = this.parseParam('province', value);
  }

  constructor(params?: GetSearchSearchRoomsParamsI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  country: {
    type: 'number',
  },
  name: {
    type: 'string',
  },
  province: {
    type: 'number',
  },
};
