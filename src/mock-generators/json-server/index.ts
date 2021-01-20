import { ApiModel } from '@model/api.model';
import { ConfigI } from '@model/config.model';
import { MockGenerator } from '@model/entities';
import { EnumModel } from '../../models/enum.model';
import { ModelAttributessModel } from '@model/model-attributes.model';
import { StoreI } from '@root/src/stores/entities.store';
import { lower } from 'case';
import * as Casual from 'casual';
import { resolve as pathResolve } from 'path';
import { ModelModel } from '../../models/model.model';
import { copyDir, generateFileSync, makeDir } from '../../utils/files.util';

const BINDING_REGEX = /{(.+)}/gi;
const BINDING_DB = /[^A-Za-z0-9_]/gi;

export default class JsonServerGenerator implements MockGenerator {
  config: ConfigI;
  store: StoreI;

  private jsonDatabase: any = {};
  private customRoutes: { [url: string]: string } = {};

  async generate(): Promise<void> {
    console.group('');
    console.log('Generating with JSON Server');
    this.generateResources();

    console.debug('GENERATED DB:');
    console.debug(this.jsonDatabase);

    this.writeFiles();
    console.groupEnd();
  }

  private fixURLBindings(url: string): string {
    const newURL = url.replace(BINDING_REGEX, ':$1');
    console.debug('Fix bindings:', url, '->', newURL);
    return newURL;
  }

  private generateDatabaseKey(url: string): string {
    const dbKey = url.replace(BINDING_REGEX, '$1').replace(BINDING_DB, '_');
    console.debug('Creating DB KEY:', dbKey);
    return dbKey;
  }

  private generateResources(): void {
    // Avoid duplicated APIs (not supported by json-server without effort)
    const generatedPaths = new Set<string>();
    for (const api of this.store.apis.apis) {
      console.log(api.verb.toUpperCase(), api.url);
      console.group();
      const parsedURL = this.fixURLBindings(api.url);

      try {
        if (generatedPaths.has(parsedURL)) {
          console.log('Skipped because already exist');
        } else if (!this.isResponseMappeable(api)) {
          console.log('Skipped because response is not compatible');
        } else {
          generatedPaths.add(parsedURL);

          const dbKey = this.generateDatabaseKey(api.url);
          this.customRoutes[parsedURL] = `/${dbKey}`;
          this.generateDB(dbKey, api);
        }
      } catch (ex) {
        console.log('Skipped due:', ex);
      }
      console.groupEnd();
    }
  }

  private isResponseMappeable(api: ApiModel): boolean {
    return api.response?.typeNotPrimitive;
  }

  private generateDB(dbKey: string, api: ApiModel): void {
    const response = api.response;
    const responseData = this.generateFakeData(response);

    this.jsonDatabase[dbKey] = responseData;
  }

  private generateFakeData(modelAttribute: ModelAttributessModel): any {
    const model = this.store.models.getByUri(modelAttribute.typeURI);
    const data = {};
    if (model instanceof ModelModel) {
      for (const attribute of model.attributes) {
        console.debug('Reading attribute:', attribute.name);
        // console.group();
        data[attribute.name] = this.generateValueFor(attribute);
        // console.groupEnd();
      }
    } else if (model instanceof EnumModel) {
      const rnd = Math.floor(Math.random() * (model.values?.length - 1));
      return model.values[rnd];
    }
    return data;
  }

  private generateValueFor(attribute: ModelAttributessModel): any {
    const getData = () => {
      return attribute.typeIsPrimitive
        ? this.randomValue(attribute)
        : this.generateFakeData(attribute);
    };

    let response;
    if (attribute.isArray) {
      for (let level = 0; level < attribute.arrayLevels; level++) {
        // Create an array with the value repeated
        if (!response) {
          response = [getData(), getData(), getData()];
        } else {
          response = [response, response];
        }
      }
    } else {
      response = getData();
    }
    console.debug('Generated response:', response);
    return response;
  }

  private randomValue(attribute: ModelAttributessModel): any {
    if (attribute.default) return attribute.default;
    if (attribute.example) return attribute.example;

    // Try to generate from Casual
    const keysToFindCasual = [attribute.name, attribute.description];

    for (const key of keysToFindCasual) {
      const generated = Casual[lower(key, '_', true)];
      if (generated) {
        console.debug(key, 'found in casual:', generated);
        return generated;
      }
    }

    switch (attribute.typeURI) {
      case 'number':
      case 'integer':
        return Casual.integer(0, 100);
      case 'boolean':
        return Casual.boolean;
      default:
        return Casual['word'];
    }
  }

  private writeFiles(): void {
    makeDir(this.config.mock.output);
    copyDir(
      pathResolve(__dirname, 'assets'),
      this.config.mock.output,
      !this.config.mock.partial,
    );
    generateFileSync(
      pathResolve(this.config.mock.output, 'db.json'),
      JSON.stringify(this.jsonDatabase, null, 2),
    );
    generateFileSync(
      pathResolve(this.config.mock.output, 'routes.json'),
      JSON.stringify(this.customRoutes, null, 2),
    );
  }
}
