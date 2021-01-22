import { ModelBase } from '../../ApiBase/model-base.model';
import { AskForPlayerStatusENUM } from './ask-for-player-status-enum';

export interface AskForPlayerResponseI {

  id?: number;

  /**
   * Action response message
   */
  message?: string;

  /**
   * User ID that generate the request
   */
  owner_id?: string;

  status?: AskForPlayerStatusENUM;

}


export class AskForPlayerResponse extends ModelBase implements AskForPlayerResponseI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _message: string;
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = this.parseParam('message', value);
  }

  private _owner_id: string;
  get owner_id(): string {
    return this._owner_id;
  }
  set owner_id(value: string) {
    this._owner_id = this.parseParam('owner_id', value);
  }

  private _status: AskForPlayerStatusENUM;
  get status(): AskForPlayerStatusENUM {
    return this._status;
  }
  set status(value: AskForPlayerStatusENUM) {
    this._status = this.parseParam('status', value);
  }

  constructor(params?: AskForPlayerResponseI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  id: {
    type: 'number',
  },
  message: {
    type: 'string',
  },
  owner_id: {
    type: 'string',
  },
  status: {
    type: AskForPlayerStatusENUM,
  },
};
