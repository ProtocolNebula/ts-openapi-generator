{{#model}}
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
export enum {{ name }} {
  {{#values}}
  '{{.}}' = '{{.}}',
  {{/values}}
}
{{/model}}
