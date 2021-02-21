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
    if (model[key] === null || model[key] === undefined) {
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
    if (typeof params?.json === 'function') {
      params = params.json();
    }
    for (const paramKey in params) {
      if (!params[paramKey]) {
        continue;
      }
      const paramValue = params[paramKey];
      if (this.PARAMS_MAPPER[paramKey]) {
        // Parser will be executed by the setter
        this[paramKey] = paramValue;
      }
    }
  }

  parseParam(key: string, value: any): any {
    const mapper = this.PARAMS_MAPPER[key];
    if (!mapper) {
      return value;
    }
    if (value?.__proto__?.constructor?.name === 'Array') {
      if (value[0]?.constructor.name !== mapper.type?.name) {
        return recursiveInstance(mapper.type, value);
      }
      return value;
    }
    if (typeof mapper?.type === 'function' && typeof value !== 'function') {
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
