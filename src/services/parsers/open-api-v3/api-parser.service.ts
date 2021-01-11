import { OpenAPIV3 } from 'openapi-types';
import { ApiModel } from '../../../models/api.model';
import { ModelAttributessModel } from '../../../models/model-attributes.model';
import { StoreI } from '../../../stores/entities.store';
import { getApiDefaultModelName } from '../../../utils/models.util';
import { ParserBaseService } from './parser-base.service';

export class APIParserService extends ParserBaseService {
  constructor(protected document: OpenAPIV3.Document, protected store: StoreI) {
    super(document, store);
  }

  process(): void {
    console.group("Processing APIs from 'paths'");
    const apiRawList = this.document.paths;
    for (let url in apiRawList) {
      console.group('Processing api', url);
      const rawModel = apiRawList[url] as OpenAPIV3.NonArraySchemaObject;
      this.parseVerbs(rawModel, url);
      console.groupEnd();
    }
    console.groupEnd();
  }

  private parseVerbs(
    rawModel: OpenAPIV3.NonArraySchemaObject,
    url: string,
  ): void {
    for (const verb in rawModel) {
      const verbRaw = rawModel[verb] as OpenAPIV3.OperationObject;
      console.group(verb.toUpperCase(), '-', verbRaw.operationId);
      const api = new ApiModel(url, verb);
      api.tags = verbRaw.tags || url.substr(1).split('/');
      api.description = verbRaw.summary;
      api.operationId = verbRaw.operationId;

      console.info('Parsing parameters');
      console.group();
      this.parseRquestParameters(api, verbRaw.parameters);
      console.groupEnd();

      console.info('Parsing requestBody');
      console.group();
      this.parseRequestBody(api, verbRaw.requestBody);
      console.groupEnd();

      console.info('Parsing response');
      console.group();
      this.parseResponse(api, verbRaw.responses);
      console.groupEnd();

      this.store.apis.add(api);
      console.groupEnd();
    }
  }

  private parseRquestParameters(
    apiModel: ApiModel,
    parameters: (OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject)[],
  ): void {
    if (!parameters) {
      console.debug(`No query parameters`);
      return;
    }
    apiModel.queryParams = this.parseParameters(
      parameters,
      getApiDefaultModelName(apiModel, 'Params'),
    );
  }

  private parseRequestBody(
    apiModel: ApiModel,
    scheme: OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject,
  ): void {
    if (!scheme) {
      console.debug(`No requestBody`);
      return;
    }
    if (this.isRefObject(scheme)) {
      console.debug(`is ref of ${scheme.$ref}`);
      const instance = new ModelAttributessModel(null);
      instance.typeURI = scheme.$ref;
    } else if (this.isRequestBodyObject(scheme)) {
      const keys = Object.keys(scheme.content);
      const mainKey = keys[0];
      apiModel.requestBody = this.parseSchema(
        scheme.content[mainKey].schema,
        getApiDefaultModelName(apiModel, 'Request'),
        mainKey,
      );
    } else {
      throw `${apiModel.verb.toUpperCase()} ${
        apiModel.url
      } has no correct scheme.`;
    }
  }

  private parseResponse(
    apiModel: ApiModel,
    responses: OpenAPIV3.ResponsesObject,
  ): void {
    const response = responses['200'];
    if (this.isResponseObject(response)) {
      const keys = Object.keys(response.content);
      const mainKey = keys[0];
      apiModel.response = this.parseSchema(
        response.content[mainKey].schema,
        getApiDefaultModelName(apiModel, 'Response'),
        mainKey,
      );
    }
  }
}
