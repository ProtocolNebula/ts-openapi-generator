module.exports = {
  // Templates file
  apiFile: 'api.ts',
  modelFile: 'model.ts',
  enumModelFile: 'enumModel.ts',

  // Types mapping from 'OpenAPI' to the language template
  typesMapped: {
    default: 'any',
    empty: 'void',
    array: 'any[]',
    boolean: 'boolean',
    file: 'File',
    integer: 'number',
    number: 'number',
    object: 'any',
    string: 'string',
  },
};
