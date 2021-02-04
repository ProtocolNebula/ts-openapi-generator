import { ParameterModel } from '../../../models/parameter.model';
import { OpenAPIV3 } from 'openapi-types';
import { EnumModel } from '../../../models/enum.model';
import { ModelModel } from '../../../models/model.model';
import { StoreI } from '../../../stores/entities.store';
import { ModelType } from '../../../stores/model.store';
import { ParserBaseService } from './parser-base.service';
import { findInObject } from '../../../utils/objects.util';

/**
 * This service Process all COMPONENTS (components/schemas/*) and convert it to ModelModel instances
 *
 */
export class ComponentsParserService extends ParserBaseService {
  constructor(document: OpenAPIV3.Document, store: StoreI) {
    super(document, store);
  }

  process(): void {
    this.processParameters();
    this.processSchemas();
  }

  private processParameters(): void {
    console.group("Processing parameters from 'components'");
    const parameterRawList = this.document.components?.parameters;
    for (let parameterName in parameterRawList) {
      console.group('Processing parameter', parameterName);
      const rawModel = parameterRawList[
        parameterName
      ] as OpenAPIV3.ParameterObject;
      const parameter = new ParameterModel(
        parameterName,
        this.parseParameter(rawModel, parameterName),
      );
      this.parameterStore.add(parameter);
      console.groupEnd();
    }
    console.groupEnd();
  }

  private processSchemas(): void {
    console.group("Processing models from 'components'");
    const modelRawList = this.document.components?.schemas;
    for (let modelName in modelRawList) {
      console.group('Processing model', modelName);
      const rawModel = modelRawList[
        modelName
      ] as OpenAPIV3.NonArraySchemaObject;

      const schemaParsed = this.processSchema(modelName, rawModel);
      if (schemaParsed) {
        this.modelStore.add(schemaParsed);
      }

      console.groupEnd();
    }
    console.groupEnd();
  }

  private processSchema(
    modelName,
    rawModel: OpenAPIV3.NonArraySchemaObject,
  ): ModelType {
    let elementRef: ModelType;
    if (rawModel.type === 'object') {
      elementRef = new ModelModel(modelName);
      elementRef.addAttributes(this.parseAttributes(rawModel, elementRef.name));
    } else if (this.isEnumObject(rawModel)) {
      console.debug(`${modelName} is ENUM of type ${rawModel.type}`);
      elementRef = new EnumModel(modelName);
      elementRef.type = rawModel.type;
      elementRef.values = rawModel.enum;
    } else if (this.isRefObject(rawModel)) {
      const ref = (rawModel as OpenAPIV3.ReferenceObject).$ref;
      console.error(`${modelName} is a pure ref of ${ref}`);
      const refSchema = this.findRefSchema(ref);
      if (!refSchema) {
        throw `Schema ${ref} not found`;
      }
      return this.processSchema(modelName, refSchema);
    } else {
      console.error(`ERROR: ${modelName} not a correct Schema`);
      if ((rawModel as any)?.type === 'array') {
        console.error(`ERROR: ARRAY not supported on COMPONENTS SCHEMA`);
      }
    }

    if (elementRef) {
      elementRef.description = rawModel.description;
      elementRef.example = rawModel.example;
      elementRef.deprecated = rawModel.deprecated;
    }
    return elementRef;
  }

  private findRefSchema($ref: string): OpenAPIV3.NonArraySchemaObject {
    if ($ref.indexOf('#') === 0) {
      return findInObject($ref, this.document);
    }

    throw `$ref: ${$ref} not supported yet!`;
  }
}
