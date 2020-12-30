import { ApiStore } from './api.store';
import { ModelStore } from './model.store';

export interface StoreI {
  models: ModelStore;
  apis: ApiStore;
}

export const Store = {
  models: new ModelStore(),
  apis: new ApiStore(),
} as StoreI;
