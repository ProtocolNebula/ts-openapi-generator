import * as yargs from 'yargs';

export const argumentsInstance = yargs
  .alias('version', 'v')
  .usage('Usage: $0 [options]')
  // .command('count', 'Count the lines in a file')
  .example(
    '$0 -f swagger.js',
    'Convert a Swagger JSON file to compatible-angular API',
  )
  .alias('f', 'file')
  .nargs('file', 1)
  .describe('file', 'Path OR URL to the swagger document to parse')
  .demandOption(['file'])
  .alias('o', 'output-folder')
  .nargs('output-folder', 1)
  .implies('file', 'output-folder')
  .describe(
    'output-folder',
    'Specify the output folder (generated folders will be replaced)',
  )
  .default('output-folder', 'output')
  .boolean('clean')
  .describe('clean', 'No clean the output-folder, so old files will remain')
  .default('clean', true)
  .help('help')
  .alias('h', 'help')
  .epilog('For more info visit: https://github.com/ProtocolNebula/ts-openapi-generator/')
  .argv;
