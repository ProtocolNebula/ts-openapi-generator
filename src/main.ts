import * as fs from 'fs-extra';
import * as path from 'path';
import { argumentsInstance } from './services/arguments.service';
import { FileReaderService } from './services/parsers/file-reader.service';
import { APIParserService } from './services/parsers/open-api-v3/api-parser.service';
import { ComponentsParserService } from './services/parsers/open-api-v3/components-parser.service';
import { ApiWritterService } from './services/writters/api-writter.service';
import { ModelWritterService } from './services/writters/model-writter.service';
import { Store } from './stores/entities.store';

// FOLDERS INFORMATION
const OUTPUT_PATH = argumentsInstance.outputFolder + path.sep;

const GENERATED_FOLDER = OUTPUT_PATH + 'generated' + path.sep;
const OUTPUT_FOLDERS = {
  OUTPUT_PATH: OUTPUT_PATH,
  BASE_FOLDER: GENERATED_FOLDER,
  MODELS: GENERATED_FOLDER + 'models',
  APIS: GENERATED_FOLDER + 'api',
};
console.info('Output folders:');
console.table(OUTPUT_FOLDERS);

console.log('');
if (argumentsInstance.clean) {
  console.log('Removing previously generated data...');
  fs.removeSync(GENERATED_FOLDER);
} else {
  console.log('no-clean flag recevived, clean folder skipped');
}
console.log('');

// Read the file
async function run() {
  try {
    console.log('Opening file:', argumentsInstance.file);
    const fileParser = new FileReaderService(
      argumentsInstance.file,
      OUTPUT_FOLDERS,
    );
    console.log('Parsing file...');
    console.log('');
    const documentParsed = await fileParser.readFile();
    fileParser.showDocumentInfo();

    const modelParser = new ComponentsParserService(documentParsed, Store);
    modelParser.process();
    const apiParser = new APIParserService(documentParsed, Store);
    apiParser.process();
    console.info('Read complete');

    console.info('');
    console.info('Generating files');
    const modelWritter = new ModelWritterService(OUTPUT_FOLDERS, Store);
    modelWritter.write();
    const apiWritter = new ApiWritterService(OUTPUT_FOLDERS, Store);
    apiWritter.write();
    console.info('Files generation finished');

    console.log();
  } catch (exception) {
    console.error('FATAL ERROR');
    console.error(exception);

    // Close up to three levels
    console.groupEnd();
    console.groupEnd();
    console.groupEnd();
    console.log('');
    console.error('Application stopped');
  }
}

run();
