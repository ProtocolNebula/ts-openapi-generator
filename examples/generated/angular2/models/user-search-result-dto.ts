import { ModelBase } from '../../ApiBase/model-base.model';

export interface UserSearchResultDTOI {

  /**
   * User ID
   */
  id?: number;

  /**
   * User nickname
   */
  nickname?: string;

}


export class UserSearchResultDTO extends ModelBase implements UserSearchResultDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _nickname: string;
  get nickname(): string {
    return this._nickname;
  }
  set nickname(value: string) {
    this._nickname = this.parseParam('nickname', value);
  }

  constructor(params?: UserSearchResultDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  id: {
    type: 'number',
  },
  nickname: {
    type: 'string',
  },
};
