import { ModelAttributessModel } from './model-attributes.model';

export class ParameterModel extends ModelAttributessModel {
  parameterNameRef: string;

  get uri(): string {
    return `#/components/parameters/${this.parameterNameRef}`;
  }

  constructor(
    parameterNameRef: string,
    attributeModel?: ModelAttributessModel,
  ) {
    super(null);
    this.parameterNameRef = parameterNameRef;

    if (attributeModel) {
      Object.assign(this, attributeModel);
    }
  }

  getAttribute(): ModelAttributessModel {
    return this as ModelAttributessModel;
  }
}
