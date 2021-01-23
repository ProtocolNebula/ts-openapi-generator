import { ModelBase } from '../../ApiBase/model-base.model';

export interface AskForPlayersEndRequestI {

  /**
   * Request ID
   */
  id?: string;

}


export class AskForPlayersEndRequest extends ModelBase implements AskForPlayersEndRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _id: string;
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = this.parseParam('id', value);
  }

  constructor(params?: AskForPlayersEndRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  id: {
    type: 'string',
  },
};
