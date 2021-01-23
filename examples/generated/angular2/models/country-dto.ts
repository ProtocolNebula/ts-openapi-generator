import { ModelBase } from '../../ApiBase/model-base.model';

export interface CountryDTOI {

  id?: number;

  /**
   * Original country name
   */
  local_name?: number;

  /**
   * Country name translated
   */
  name?: number;

}


export class CountryDTO extends ModelBase implements CountryDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _local_name: number;
  get local_name(): number {
    return this._local_name;
  }
  set local_name(value: number) {
    this._local_name = this.parseParam('local_name', value);
  }

  private _name: number;
  get name(): number {
    return this._name;
  }
  set name(value: number) {
    this._name = this.parseParam('name', value);
  }

  constructor(params?: CountryDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  id: {
    type: 'number',
  },
  local_name: {
    type: 'number',
  },
  name: {
    type: 'number',
  },
};
