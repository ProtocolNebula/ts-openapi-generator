import { ModelBase } from '../../ApiBase/model-base.model';

export interface RateGameRequestI {

  /**
   * (Optional) User free comment
   */
  comment?: string;

  /**
   * User rating (1 to 5)
   */
  rate?: string;

}


export class RateGameRequest extends ModelBase implements RateGameRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _comment: string;
  get comment(): string {
    return this._comment;
  }
  set comment(value: string) {
    this._comment = this.parseParam('comment', value);
  }

  private _rate: string;
  get rate(): string {
    return this._rate;
  }
  set rate(value: string) {
    this._rate = this.parseParam('rate', value);
  }

  constructor(params?: RateGameRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  comment: {
    type: 'string',
  },
  rate: {
    type: 'string',
  },
};
