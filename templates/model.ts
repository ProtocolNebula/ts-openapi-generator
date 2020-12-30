{{#dependences}}
import { {{name}} } from './{{fileName}}';
{{/dependences}}

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
{{#model}}
export class {{ name }} {

  {{#attributes}}
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
  {{name}}{{#isOptional}}?{{/isOptional}}: {{type}}{{#isArray}}[]{{/isArray}}{{#default}} = {{default}}{{/default}};

  {{/attributes}}
}
{{/model}}
