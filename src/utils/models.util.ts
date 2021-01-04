import { capital } from 'case';
import { ApiModel } from '../models/api.model';
import { PhysycalFile } from '../models/entities';
import { Store } from '../stores/entities.store';

export function getFixedTypeName(type: string): string {
  let parsedTypes = {
    '': 'any',
    any: 'any',
    array: 'any[]',
    bool: 'boolean',
    boolean: 'boolean',
    double: 'number',
    empty: 'void',
    file: 'File',
    float: 'number',
    integer: 'number',
    number: 'number',
    object: 'any',
    string: 'string',
    undefined: 'any',
    void: 'void',
  };

  let newType = parsedTypes[type];
  if (newType !== undefined) {
    if (newType !== type) {
      console.info('Type', type, 'changed to', newType);
    }
    return parsedTypes[type];
  }

  if (type.indexOf('#/') === 0) {
    if (Store.models.getByUri(type)) {
      newType = type.substring(type.lastIndexOf('/') + 1);
    } else {
      newType = 'any';
      console.error('ERROR: Type', type, 'not defined. Any will be used');
    }
  } else {
    newType = 'any';
    console.warn('WARNING: Type', type, 'not defined.');
  }

  return newType;
}

export function sortDependences(models: PhysycalFile[]): PhysycalFile[] {
  return models.sort((a, b) => {
    let sort = 0;
    if (a.fileName > b.fileName) sort = 1;
    if (a.fileName < b.fileName) sort = -1;
    // console.debug ('Sorting:', a.name, 'vs', b.name, sort);

    return sort;
  });
}

export function sortApi(apis: ApiModel[]): ApiModel[] {
  return apis.sort((a, b) => {
    if (a.operationId > b.operationId) return 1;
    if (a.operationId < b.operationId) return -1;
    return 0;
  });
}

export function getApiDefaultModelName(
  api: ApiModel,
  modelFor: string = 'request',
): string {
  return capital(`${api.verb.toLowerCase()} ${api.name} ${modelFor}`, '', true);
}
