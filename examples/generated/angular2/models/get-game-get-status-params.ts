import { ModelBase } from '../../ApiBase/model-base.model';

export interface GetGameGetStatusParamsI {

  /**
   * (Optional) Game ID, if not specified will return info about active game.
   */
  id?: string;

}


export class GetGameGetStatusParams extends ModelBase implements GetGameGetStatusParamsI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _id: string;
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = this.parseParam('id', value);
  }

  constructor(params?: GetGameGetStatusParamsI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  id: {
    type: 'string',
  },
};
