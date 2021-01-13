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
{{#isNumeric}}
  {{#values}}
  {{.}},
  {{/values}}
{{/isNumeric}}
{{#isString}}
  {{#values}}
  '{{.}}' = '{{.}}',
  {{/values}}
{{/isString}}
}
{{/model}}
