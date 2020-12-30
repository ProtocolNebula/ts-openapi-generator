import { getFixedTypeName } from '../utils/models.util';
import { ModelModel } from './model.model';

export class ModelAttributessModel {
  name: string;
  description?: string;
  example?: string;
  deprecated?: boolean;
  default?: any;
  isOptional: boolean = true;
  isArray: boolean;

  private _typeURI;
  private _model: ModelModel;

  get typeURI(): string {
    return this._typeURI;
  }
  set typeURI(typeURI: string) {
    this._typeURI = typeURI;
  }

  /**
   * Return the type parsed, (class or primitive)
   */
  get type(): string {
    return getFixedTypeName(this._typeURI);
  }

  /**
   * Get the path to the file if is not a primitive
   */
  get fileName(): string | null {
    return this.name;
  }

  get model(): ModelModel {
    return this._model;
  }
  set model(model: ModelModel) {
    this._model = model;
  }

  constructor(name: string) {
    this.name = name;
  }

  toString(): string {
    return this.name;
  }
}
