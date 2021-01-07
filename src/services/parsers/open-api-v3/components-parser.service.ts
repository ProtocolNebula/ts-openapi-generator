import { OpenAPIV3 } from 'openapi-types';
import { EnumModel } from '../../../models/enum.model';
import { ModelModel } from '../../../models/model.model';
import { StoreI } from '../../../stores/entities.store';
import { ModelType } from '../../../stores/model.store';
import { ParserBaseService } from './parser-base.service';

/**
 * This service Process all COMPONENTS (components/schemas/*) and convert it to ModelModel instances
 *
 */
export class ComponentsParserService extends ParserBaseService {
  constructor(document: OpenAPIV3.Document, store: StoreI) {
    super(document, store);
  }

  process(): void {
    console.group("Processing models from 'components'");
    const modelRawList = this.document.components?.schemas;
    for (let modelName in modelRawList) {
      console.group('Processing model', modelName);
      const rawModel = modelRawList[
        modelName
      ] as OpenAPIV3.NonArraySchemaObject;

      let elementRef: ModelType;
      if (rawModel.type === 'object') {
        const modelInstance = new ModelModel(modelName);
        elementRef = modelInstance;
        modelInstance.addAttributes(
          this.parseAttributes(rawModel, modelInstance.name),
        );
        this.modelStore.add(modelInstance);
      } else if (this.isEnumObject(rawModel)) {
        console.debug(`${modelName} is ENUM of type ${rawModel.type}`);
        const enumInstance = new EnumModel(modelName);
        enumInstance.type = rawModel.type;
        enumInstance.values = rawModel.enum;
        this.modelStore.add(enumInstance);
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
      console.groupEnd();
    }
    console.groupEnd();
  }
}
