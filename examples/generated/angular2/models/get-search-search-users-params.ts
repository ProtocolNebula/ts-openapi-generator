import { ModelBase } from '../../ApiBase/model-base.model';

export interface GetSearchSearchUsersParamsI {

  /**
   * User nickname to find, at least 2 characters
   */
  nickname?: string;

}


export class GetSearchSearchUsersParams extends ModelBase implements GetSearchSearchUsersParamsI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _nickname: string;
  get nickname(): string {
    return this._nickname;
  }
  set nickname(value: string) {
    this._nickname = this.parseParam('nickname', value);
  }

  constructor(params?: GetSearchSearchUsersParamsI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  nickname: {
    type: 'string',
  },
};
