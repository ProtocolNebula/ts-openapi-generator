import { ModelBase } from '../../ApiBase/model-base.model';

export interface RoomPriceSectionDTOI {

  /**
   * Id
   */
  id?: number;

  /**
   * Name of the section
   */
  name?: string;

  /**
   * Room Id
   */
  room_id?: number;

}


export class RoomPriceSectionDTO extends ModelBase implements RoomPriceSectionDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _id: number;
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = this.parseParam('id', value);
  }

  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = this.parseParam('name', value);
  }

  private _room_id: number;
  get room_id(): number {
    return this._room_id;
  }
  set room_id(value: number) {
    this._room_id = this.parseParam('room_id', value);
  }

  constructor(params?: RoomPriceSectionDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  id: {
    type: 'number',
  },
  name: {
    type: 'string',
  },
  room_id: {
    type: 'number',
  },
};
