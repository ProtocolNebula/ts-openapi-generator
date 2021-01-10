// THIS FILE IS AN AUTO GENERATED FILE
// PLEASE, DO NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

// Models dependences
{{#dependences}}
import { {{name}} } from '../models/{{fileName}}';
{{/dependences}}

{{!
  // TODO: To define which will be provided in root and which not
  // Maybe all auto-generated will be provided as module-level
  // For now provided in root to start-up the project
}}
@Injectable({
  providedIn: 'root'
})
export class {{groupName}}Service {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  {{#apis}}
  {{#hasComments}}
  /**
  {{#description}}
   * {{description}}
  {{/description}}
  {{#example}}
   * @example {{example}}
  {{/example}}
  {{#deprecated}}
   * @deprecated
  {{/deprecated}}
  */
  {{/hasComments}}
  {{!
    // Will add options and requestBody if necessary
    // If both, will add comma between
  }}
  public {{ operationId }}({{#queryParamsType}}
    uriOptions: {{.}},{{/queryParamsType}}{{
  #requestBodyType}}
    requestBody: {{.}},{{/requestBodyType
  }}
  ): Observable<{{ responseType }}> {
    return this.apiService.do{{verb}}(
      '{{{ url }}}',
      {{#queryParamsType}}uriOptions{{/queryParamsType}}{{^queryParamsType}}null{{/queryParamsType}},
      {{#requestBodyType}}requestBody{{/requestBodyType}}{{^requestBodyType}}null{{/requestBodyType}}
    );
  }

  {{/apis}}
}
