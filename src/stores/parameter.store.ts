import { ParameterModel } from '@model/parameter.model';

export class ParameterStore {
  private _parameters: Set<ParameterModel> = new Set<ParameterModel>();

  get parameters(): ParameterModel[] {
    return [...this._parameters];
  }

  add(attribute: ParameterModel): void {
    if (!this._parameters.has(attribute)) {
      console.debug(
        'Added parameter attribute to the store:',
        attribute.usedIn,
        attribute.uri,
      );
      this._parameters.add(attribute);
    } else {
      throw `Model ${attribute.uri} declared twice`;
    }
  }

  getByUri(uri: string): ParameterModel {
    return this.parameters.find((attribute) => attribute.uri === uri);
  }
}
