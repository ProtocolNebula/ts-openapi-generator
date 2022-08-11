import * as yargs from 'yargs';
import { readFileSync } from 'fs-extra';

export const argumentsInstance = yargs
  .alias('version', 'v')
  .usage('Usage: $0 [options]')
  // .command('count', 'Count the lines in a file')
  .example(
    '$0 -f swagger.js -o api/ -t angular2',
    'Convert a Swagger JSON file to compatible-angular API',
  )

  .config('config-file', (configPath) => {
    return JSON.parse(readFileSync(configPath, 'utf-8'));
  })
  .describe(
    'config-file',
    'Configuration file to use (values from cli will overwrite this file).',
  )
  .default('save-file', './openapi_temp')

  .nargs('save-file', 1)
  .alias('s', 'save-file')
  .describe(
    'file',
    'Path to save the file IF --file IS AN URL (without extension)',
  )
  .default('save-file', './openapi_temp')

  .nargs('file', 1)
  .alias('f', 'file')
  .describe('file', 'Path OR URL to the swagger document to parse')
  .demandOption(['file'])

  .alias('o', 'output-folder')
  .nargs('output-folder', 1)

  .nargs('template', 1)
  .alias('t', 'template')
  .describe('template', 'Template (preset) name or path to a template')

  .implies('template', 'output-folder')
  .describe(
    'output-folder',
    'Specify the output folder (generated folders will be replaced)',
  )
  .default('output-folder', 'output')

  // Mock generator
  .nargs('mock-generator', 1)
  .describe(
    'mock-generator',
    'Specify the generator to use to generate mocks. If none provider, mocks will not be generated',
  )
  .nargs('mock-output', 1)
  .describe(
    'mock-output',
    'The path where mock will be generated. If no specified, output-folder/mock will be used',
  )
  .boolean('mock-partial')
  .describe(
    'mock-partial',
    'If true, only mock data will be generated instead of all files',
  )
  .default('mock-partial', false)

  .boolean('clean')
  .describe('clean', 'No clean the output-folder, so old files will remain')
  .default('clean', true)

  .help('help')
  .alias('h', 'help')

  .epilog(
    'For more info visit: https://github.com/ProtocolNebula/ts-openapi-generator/',
  ).argv;
