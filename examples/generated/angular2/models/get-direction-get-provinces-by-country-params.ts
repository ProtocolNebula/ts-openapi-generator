import { ModelBase } from '../../ApiBase/model-base.model';

export interface GetDirectionGetProvincesByCountryParamsI {

  /**
   * Status values that need to be considered for filter
   */
  country: number;

}


export class GetDirectionGetProvincesByCountryParams extends ModelBase implements GetDirectionGetProvincesByCountryParamsI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _country: number;
  get country(): number {
    return this._country;
  }
  set country(value: number) {
    this._country = this.parseParam('country', value);
  }

  constructor(params?: GetDirectionGetProvincesByCountryParamsI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  country: {
    type: 'number',
  },
};
