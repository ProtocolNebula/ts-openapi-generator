import { ModelBase } from '../../ApiBase/model-base.model';
{{#dependences}}
import { {{name}} } from './{{fileName}}';
{{/dependences}}

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
{{#model}}
export interface {{ name }}I {

  {{#attributes}}
  {{#hasComments}}
  {{#description}}
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
  {{/description}}
  {{/hasComments}}
  {{name}}{{#isOptional}}?{{/isOptional}}: {{type}}{{#isArray}}[]{{/isArray}};

  {{/attributes}}
}


export class {{ name }} extends ModelBase implements {{ name }}I {

  protected readonly PARAMS_MAPPER = PARAMS_MAPPER;

{{#attributes}}
  private _{{name}}: {{type}}{{
    #arrayLevelsRepeater}}[]{{/arrayLevelsRepeater
  }}{{#default}} = {{default}}{{/default
  }};
  get {{name}}(): {{type}}{{#arrayLevelsRepeater}}[]{{/arrayLevelsRepeater}} {
    return this._{{name}};
  }
  set {{name}}(value: {{type}}{{#arrayLevelsRepeater}}[]{{/arrayLevelsRepeater}}) {
    this._{{name}} = this.parseParam('{{name}}', value);
  }

{{/attributes}}
  constructor(params?: {{name}}I) {
    super();
    this.parse(params);
  }
}
{{/model}}

const PARAMS_MAPPER = {
{{#model}}
{{#attributes}}
  {{name}}: {
    type: {{#typeIsPrimitive}}'{{/typeIsPrimitive}}{{
      type
    }}{{#typeIsPrimitive}}'{{/typeIsPrimitive}},
  },
{{/attributes}}
{{/model}}
};
