{{#model}}
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
export enum {{ name }} {
  {{#values}}
  '{{.}}' = '{{.}}',
  {{/values}}
}
{{/model}}
