import { capital } from 'case';
import { ApiModel } from '../models/api.model';
import { config } from '../models/config.model';
import { PhysycalFile } from '../models/entities';
import { Store } from '../stores/entities.store';

export function getFixedTypeName(type: string): string {
  const typesMapped = config.templateConfig.typesMapped;

  let newType = typesMapped[type];
  if (newType !== undefined) {
    if (newType !== type) {
      console.debug('Type', type, 'changed to', newType);
    }
    return typesMapped[type];
  }

  if (type.indexOf('#/') === 0) {
    if (Store.models.getByUri(type)) {
      newType = type.substring(type.lastIndexOf('/') + 1);
    } else {
      newType = typesMapped.default;
      console.error(`ERROR: Type ${type}, not defined. ${newType} will be used.`);
    }
  } else {
    newType = typesMapped.default;
    console.warn(`WARNING: Type ${type}, not defined. ${newType} will be used.`);
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
