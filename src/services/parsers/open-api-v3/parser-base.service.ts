import { capital } from 'case';
import { OpenAPIV3 } from 'openapi-types';
import { EnumModel } from '../../../models/enum.model';
import { ModelAttributessModel } from '../../../models/model-attributes.model';
import { ModelModel } from '../../../models/model.model';
import { StoreI } from '../../../stores/entities.store';
import { ModelStore } from '../../../stores/model.store';

/**
 * This service Process all COMPONENTS (components/schemas/*) and convert it to ModelModel instances
 *
 */
export abstract class ParserBaseService {
  constructor(
    protected document: OpenAPIV3.Document,
    protected store: StoreI,
  ) {}

  get modelStore(): ModelStore {
    return this.store.models;
  }

  protected isEnumObject(
    rawAttribute: any,
  ): rawAttribute is OpenAPIV3.SchemaObject {
    if ((rawAttribute as OpenAPIV3.SchemaObject)?.enum) {
      return true;
    }
    return false;
  }

  protected isRefObject(
    rawAttribute: any,
  ): rawAttribute is OpenAPIV3.ReferenceObject {
    if ((rawAttribute as OpenAPIV3.ReferenceObject)?.$ref) {
      return true;
    }
    return false;
  }

  protected isSchemaObject(
    rawAttribute: any,
  ): rawAttribute is OpenAPIV3.SchemaObject {
    if ((rawAttribute as OpenAPIV3.SchemaObject)?.type) {
      return true;
    }
    return false;
  }

  protected isParameterObject(
    rawAttribute: any,
  ): rawAttribute is OpenAPIV3.ParameterObject {
    if ((rawAttribute as OpenAPIV3.ParameterObject)?.name) {
      return true;
    }
    return false;
  }

  protected isRequestBodyObject(
    rawAttribute: any,
  ): rawAttribute is OpenAPIV3.RequestBodyObject {
    if ((rawAttribute as OpenAPIV3.RequestBodyObject)?.content) {
      return true;
    }
    return false;
  }

  protected isResponseObject(
    rawAttribute: any,
  ): rawAttribute is OpenAPIV3.ResponseObject {
    if ((rawAttribute as OpenAPIV3.ResponseObject)?.content) {
      return true;
    }
    return false;
  }

  // Generic parsers
  /**
   * Get an Schema and get the REF
   * If is a custom model (scheme), it will create a new model
   * @param schema
   * @param modelName Name for the model if is not a "ref"
   */
  protected parseParameters(
    parameters: (OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject)[],
    modelName: string,
  ): ModelAttributessModel {
    const newModel = new ModelModel(modelName);
    for (const rawParameter of parameters) {
      if (this.isRefObject(rawParameter)) {
        throw 'Not implemented REF OBJECT for parameterParser';
        // const instance = new ModelAttributessModel(null);
        // instance.typeURI = parameter.$ref;
        // newModel.addAttribute(instance);
      } else if (this.isParameterObject(rawParameter)) {
        const parameter = new ModelAttributessModel(rawParameter.name);
        parameter.typeURI = this.parseSchema(
          rawParameter.schema,
          capital(`${modelName} ${rawParameter.name}`, '', true),
        )?.typeURI;
        parameter.description = rawParameter.description;
        parameter.deprecated = rawParameter.deprecated;
        parameter.example = rawParameter.example;
        newModel.addAttribute(parameter);
      } else {
        throw 'No schema available for this schema';
      }
    }

    if (newModel.name) {
      this.store.models.add(newModel);
    }

    const instance = new ModelAttributessModel(null);
    instance.typeURI = newModel.uri;
    return instance;
  }

  protected parseSchema(
    schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
    defaultName: string,
    mediaType: string = null,
  ): ModelAttributessModel {
    if (!schema) {
      console.warn('WARNING: No schema defined! Any will be use instead');
      console.warn('TIP: Don\'t fill "content" for responses if void');
      const instance = new ModelAttributessModel(null);
      instance.typeURI = 'default';
      return instance;
    }
    if (this.isRefObject(schema)) {
      const instance = new ModelAttributessModel(null);
      instance.typeURI = schema.$ref;
      return instance;
    } else if (this.isSchemaObject(schema)) {
      if (schema.type === 'array') {
        const instance = this.parseSchema(schema.items, defaultName, mediaType);
        instance.isArray = true;
        return instance;
      }

      if (mediaType === 'text/html' || schema?.type !== 'object') {
        const instance = new ModelAttributessModel(null);
        instance.typeURI = schema.type;
        return instance;
      }

      const newModel = new ModelModel(defaultName);
      newModel.addAttributes(this.parseAttributes(schema, defaultName));

      this.store.models.add(newModel);

      const instance = new ModelAttributessModel(null);
      instance.typeURI = newModel.uri;
      return instance;
    } else {
      throw `No schema available for ${defaultName}. Check that property contains the TYPE property.`;
    }
  }

  protected parseAttributes(
    rawModel: OpenAPIV3.NonArraySchemaObject,
    parentName: string,
  ): ModelAttributessModel[] {
    const attributes: ModelAttributessModel[] = [];
    console.group('Parsing attributes');
    for (const attrName in rawModel.properties) {
      const rawAttribute = rawModel.properties[attrName];
      const attribute = new ModelAttributessModel(attrName);
      attribute.isOptional = !this.isAttributeRequired(
        attrName,
        rawModel.required,
      );
      this.fillAttribute(
        attribute,
        rawAttribute,
        capital(`${parentName} ${attrName}`, '', true),
      );
      attributes.push(attribute);
    }
    console.groupEnd();
    return attributes;
  }

  protected isAttributeRequired(
    attrName: string,
    requiredList: string[],
  ): boolean {
    return requiredList?.indexOf(attrName) > -1;
  }

  protected fillAttribute(
    attribute: ModelAttributessModel,
    rawAttribute,
    defaultName: string,
  ) {
    const attrName = attribute.name;
    if (this.isRefObject(rawAttribute)) {
      console.debug(`${attrName} is ref of ${rawAttribute.$ref}`);
      attribute.typeURI = rawAttribute.$ref;
    } else {
      attribute.description = rawAttribute.description;
      attribute.example = rawAttribute.example;
      attribute.deprecated = rawAttribute.deprecated;
      if (rawAttribute.nullable !== undefined) {
        attribute.isOptional = rawAttribute.nullable;
      }
      if (this.isSchemaObject(rawAttribute)) {
        if (rawAttribute.type === 'array') {
          console.group(`${attrName} is an array`);
          attribute.isArray = true;
          attribute.arrayLevels++;
          this.fillAttribute(attribute, rawAttribute.items, defaultName);
          console.groupEnd();
        } else if (rawAttribute.enum) {
          // (this.isEnumObject(schema)) -> error TS2339:, so "pure if" is used instead
          console.debug(`${attrName} is ENUM of type ${rawAttribute.type}`);
          const newModel = new EnumModel(`${defaultName}ENUM`);
          newModel.type = rawAttribute.type;
          newModel.values = rawAttribute.enum;
          this.store.models.add(newModel);
          attribute.typeURI = newModel.uri;
        } else {
          console.debug(`${attrName} of type ${rawAttribute.type}`);
          attribute.typeURI = rawAttribute.type;
        }
      } else {
        console.warn(
          `WARNING: ${attrName} not recognized OpenAPIV3 Schema type ${JSON.stringify(
            rawAttribute,
          )}. DEFAULT will be used instead.`,
        );
        attribute.typeURI = 'default';
      }
    }
  }
}
