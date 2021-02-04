import { getFixedTypeName } from '../utils/models.util';
import { USED_IN_ATTRIBUTE } from './entities';
import { ModelModel } from './model.model';

export class ModelAttributessModel {
  name: string;
  usedIn: USED_IN_ATTRIBUTE;
  description?: string;
  example?: string;
  deprecated?: boolean;
  default?: any;
  isOptional: boolean = true;
  isArray: boolean;

  /**
   * Must be increased for each array level
   */
  arrayLevels: number = 0;

  private _typeURI;
  private _model: ModelModel;

  get typeURI(): string {
    return this._typeURI;
  }
  set typeURI(typeURI: string) {
    this._typeURI = typeURI;
  }

  get hasComments(): boolean {
    return !!this.description || !!this.example || !!this.deprecated;
  }

  /**
   * Return the type parsed, (class or primitive)
   */
  get type(): string {
    return getFixedTypeName(this._typeURI);
  }

  get typeIsPrimitive(): boolean {
    return this.typeURI.indexOf('#/') === -1;
  }
  get typeNotPrimitive(): boolean {
    return !this.typeIsPrimitive;
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

  /**
   * Return a fake array with "arrayLevels" elements to print it in mustache.js
   */
  get arrayLevelsRepeater(): any[] {
    if (!this.arrayLevels) return null;
    return new Array(this.arrayLevels).fill(true);
  }

  constructor(name: string) {
    this.name = name;
  }

  toString(): string {
    return this.name;
  }
}
