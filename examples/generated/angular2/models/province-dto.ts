import { ModelBase } from '../../ApiBase/model-base.model';

export interface ProvinceDTOI {

  /**
   * Country ID
   */
  country?: number;

  id?: number;

  /**
   * Local Province name
   */
  name?: number;

}


export class ProvinceDTO extends ModelBase implements ProvinceDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _country: number;
  get country(): number {
    return this._country;
  }
  set country(value: number) {
    this._country = this.parseParam('country', value);
  }

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _name: number;
  get name(): number {
    return this._name;
  }
  set name(value: number) {
    this._name = this.parseParam('name', value);
  }

  constructor(params?: ProvinceDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  country: {
    type: 'number',
  },
  id: {
    type: 'number',
  },
  name: {
    type: 'number',
  },
};
