import { ModelBase } from '../../ApiBase/model-base.model';

export interface UserDirectionDTOI {

  /**
   * User country ID
   */
  country?: number;

  /**
   * User province ID
   */
  province?: number;

}


export class UserDirectionDTO extends ModelBase implements UserDirectionDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _country: number;
  get country(): number {
    return this._country;
  }
  set country(value: number) {
    this._country = this.parseParam('country', value);
  }

  private _province: number;
  get province(): number {
    return this._province;
  }
  set province(value: number) {
    this._province = this.parseParam('province', value);
  }

  constructor(params?: UserDirectionDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  country: {
    type: 'number',
  },
  province: {
    type: 'number',
  },
};
