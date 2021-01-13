export interface ModelPropertyDef {
  type: any;
}

export function recursiveInstance(classType, value: any): any {
  if (value?.__proto__?.constructor?.name === 'Array') {
    return value.map((element) => recursiveInstance(classType, element));
  } else {
    return new classType(value);
  }
}

export function recursiveStringfy(model: any): any {
  if ((model as any)?.__proto__?.constructor?.name === 'Array') {
    return model.map((el) => recursiveStringfy(el));
  }
  const data = {};
  let paramsList;
  if (model.PARAMS_MAPPER) {
    paramsList = model.PARAMS_MAPPER;
  } else {
    paramsList = model;
  }
  for (const key in paramsList) {
    if (!model[key]) {
      continue;
    }
    const value = model[key];
    if (value?.__proto__?.constructor?.name === 'Array') {
      data[key] = value.map((el) => recursiveStringfy(el));
    } else if (value.json) {
      data[key] = value.json();
    } else {
      data[key] = value;
    }
  }
  return data;
}

export abstract class ModelBase {
  protected readonly PARAMS_MAPPER: { [param: string]: ModelPropertyDef } = {};

  parse(params: any): void {
    if (!params) {
      return;
    }

    for (const paramKey in params) {
      if (!params[paramKey]) {
        continue;
      }
      const paramValue = params[paramKey];
      if (this.PARAMS_MAPPER[paramKey]) {
        this[paramKey] = this.parseParam(paramKey, paramValue);
      }
    }
  }

  parseParam(key: string, value: any): any {
    const mapper = this.PARAMS_MAPPER[key];
    if (
      mapper &&
      typeof mapper?.type === 'function' &&
      typeof value !== 'function' &&
      value?.__proto__?.constructor?.name !== 'Array'
    ) {
      return recursiveInstance(mapper.type, value);
    }
    return value;
  }

  json(): any {
    return recursiveStringfy(this);
  }

  toString(): string {
    return JSON.stringify(this.json());
  }
}
