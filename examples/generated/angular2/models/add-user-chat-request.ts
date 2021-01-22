import { ModelBase } from '../../ApiBase/model-base.model';

export interface AddUserChatRequestI {

  chat_id?: string;

  nicknames?: string[];

}


export class AddUserChatRequest extends ModelBase implements AddUserChatRequestI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _chat_id: string;
  get chat_id(): string {
    return this._chat_id;
  }
  set chat_id(value: string) {
    this._chat_id = this.parseParam('chat_id', value);
  }

  private _nicknames: string[];
  get nicknames(): string[] {
    return this._nicknames;
  }
  set nicknames(value: string[]) {
    this._nicknames = this.parseParam('nicknames', value);
  }

  constructor(params?: AddUserChatRequestI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  chat_id: {
    type: 'string',
  },
  nicknames: {
    type: 'string',
  },
};
