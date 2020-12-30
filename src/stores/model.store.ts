import { EnumModel } from '../models/enum.model';
import { ModelModel } from '../models/model.model';

export type ModelType = ModelModel | EnumModel;

export class ModelStore {
  private _models: Set<ModelType> = new Set<ModelType>();

  get models(): ModelType[] {
    return [...this._models];
  }

  add(model: ModelType): void {
    if (!this._models.has(model)) {
      console.debug('Added model to the store:', model.name, model.uri);
      this._models.add(model);
    } else {
      throw `Model ${model.uri} declared twice`;
    }
  }

  getByUri(uri: string): ModelType {
    return this.models.find((model) => model.uri === uri);
  }
}
