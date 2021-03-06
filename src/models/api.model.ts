import { camel, capital } from 'case';
import { getFixedTypeName } from '../utils/models.util';
import { ModelStore } from '../stores/model.store';
import { ApiURLModel } from './api-url.model';
import { PhysycalFile } from './entities';
import { ModelAttributessModel } from './model-attributes.model';

export class ApiModel implements PhysycalFile {
  url: string;
  _verb: string;
  childrens: ApiURLModel[];
  description?: string;
  example?: string;
  deprecated?: boolean;
  tags: string[] = [];
  private _operationId: string;

  queryParams: ModelAttributessModel;
  requestContentType?: string;
  requestBody: ModelAttributessModel;
  responseContentType?: string;
  response: ModelAttributessModel;

  get name(): string {
    return capital(`${this.groupName} ${this.operationId}`, '', true);
  }

  get groupName(): string {
    return this.tags[0]?.length ? capital(this.tags[0], '', true) : null;
  }

  get isFormRequest(): boolean {
    return this.requestContentType === 'multipart/form-data';
  }

  get isResponsePrimitive(): boolean {
    return !this.response || this.response?.typeIsPrimitive;
  }

  get isResponseArray(): boolean {
    return this.response?.isArray;
  }

  get isResponseTypeText(): boolean {
    return this.responseContentType?.indexOf('text/') === 0;
  }

  get isResponseTypeJson(): boolean {
    return this.responseContentType === 'application/json';
  }

  get isResponseTypeXML(): boolean {
    return this.responseContentType === 'application/xml';
  }

  get isResponseTypeFile(): boolean {
    return (
      !this.isResponseTypeText &&
      !this.isResponseTypeJson &&
      !this.isResponseTypeXML
    );
  }

  get responseArrayLevelsRepeater(): any[] {
    return this.response?.arrayLevelsRepeater;
  }

  get models(): ModelAttributessModel[] {
    return [this.queryParams, this.requestBody, this.response].filter(
      (el) => !!el,
    );
  }

  get fileName(): string {
    return this.groupName;
  }

  get operationId(): string {
    if (!this._operationId) {
      // Avoid multiple generations (to increase performance)
      this._operationId = this.generateOperationId();
    }
    return this._operationId;
  }
  set operationId(operation: string) {
    this._operationId = camel(operation);
  }

  get hasComments(): boolean {
    return !!this.description || !!this.example || !!this.deprecated;
  }

  get queryParamsType(): string {
    return this.queryParams?.type;
  }
  get requestBodyType(): string {
    return this.requestBody?.type;
  }
  get responseType(): string {
    return this.response?.type || getFixedTypeName('empty');
  }

  get verb(): string {
    return this._verb;
  }
  set verb(verb: string) {
    this._verb = capital(verb, '', true);
  }

  constructor(url: string, verb: string) {
    this.url = url;
    this.verb = verb;
  }

  getDependences(modelStore: ModelStore): PhysycalFile[] {
    const dependences = new Set<PhysycalFile>();

    for (const model of this.models) {
      const type = model.typeURI;
      if (type.includes('#')) {
        const dependence = modelStore.getByUri(type);
        if (dependence) {
          dependences.add(dependence);
        } else {
          console.error('ERROR: Dependence', type, 'not found!');
        }
      }
    }

    return [...dependences];
  }

  toString(): string {
    return this.operationId;
  }

  private generateOperationId(): string {
    const name = this.url.substring(this.url.lastIndexOf('/') + 1);
    return `${this.verb.toLowerCase()}${name}`;
  }
}
