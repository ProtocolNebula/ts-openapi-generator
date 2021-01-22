import { ModelBase } from '../../ApiBase/model-base.model';

export interface RoomsPricesDTOI {

  /**
   * Total completed rooms (points)
   */
  max_players?: number;

  /**
   * Total extra points
   */
  price_total?: number;

  /**
   * Room Id
   */
  section_id?: number;

}


export class RoomsPricesDTO extends ModelBase implements RoomsPricesDTOI {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

  private _max_players: number;
  get max_players(): number {
    return this._max_players;
  }
  set max_players(value: number) {
    this._max_players = this.parseParam('max_players', value);
  }

  private _price_total: number;
  get price_total(): number {
    return this._price_total;
  }
  set price_total(value: number) {
    this._price_total = this.parseParam('price_total', value);
  }

  private _section_id: number;
  get section_id(): number {
    return this._section_id;
  }
  set section_id(value: number) {
    this._section_id = this.parseParam('section_id', value);
  }

  constructor(params?: RoomsPricesDTOI) {
    super();
    this.parse(params);
  }
}

const PARAMS_MAPPER = {
  max_players: {
    type: 'number',
  },
  price_total: {
    type: 'number',
  },
  section_id: {
    type: 'number',
  },
};
