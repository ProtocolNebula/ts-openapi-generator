import { ApiStore } from './api.store';
import { ModelStore } from './model.store';
import { ParameterStore } from './parameter.store';

export interface StoreI {
  models: ModelStore;
  parameters: ParameterStore;
  apis: ApiStore;
}

export const Store = {
  models: new ModelStore(),
  parameters: new ParameterStore(),
  apis: new ApiStore(),
} as StoreI;
