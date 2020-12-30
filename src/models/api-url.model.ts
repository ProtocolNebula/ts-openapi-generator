import { ModelModel } from './model.model';

export type Verbs = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export class ApiURLModel {
  url: string;
  type: Verbs;

  getModel?: ModelModel;
  bodyModel?: ModelModel;
  returnModel?: ModelModel;

  returnIsArray?: boolean;

  toString(): string {
    return this.url;
  }
}
