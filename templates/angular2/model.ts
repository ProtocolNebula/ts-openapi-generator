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
export class {{ name }} {

  {{#attributes}}
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
  {{name}}{{#isOptional}}?{{/isOptional}}: {{type}}{{#isArray
  }}{{#arrayLevelsRepeater}}[]{{/arrayLevelsRepeater}}{{
  /isArray}}{{#default}} = {{default}}{{/default}};

  {{/attributes}}
}
{{/model}}
