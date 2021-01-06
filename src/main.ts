import * as fs from 'fs-extra';
import { config } from './models/config.model';
import { argumentsInstance } from './services/arguments.service';
import { FileReaderService } from './services/parsers/file-reader.service';
import { APIParserService } from './services/parsers/open-api-v3/api-parser.service';
import { ComponentsParserService } from './services/parsers/open-api-v3/components-parser.service';
import { ApiWritterService } from './services/writters/api-writter.service';
import { ModelWritterService } from './services/writters/model-writter.service';
import { Store } from './stores/entities.store';

config.parseYargs(argumentsInstance);

// FOLDERS INFORMATION
console.info('Output folders:');
console.table({
  OUTPUT_PATH: config.outputPath,
  BASE_FOLDER: config.exportPath,
  MODELS: config.exportPath,
  APIS: config.exportPath,
});

// Read the file
async function run() {
  try {
    // Check if the template does not exist
    config.templatePath;

    console.log('');
    if (argumentsInstance.clean) {
      console.log('Removing previously generated data...');
      fs.removeSync(config.exportPath);
    } else {
      console.log('no-clean flag recevived, clean folder skipped');
    }
    console.log('');

    console.log('Opening file:', argumentsInstance.file);
    const fileParser = new FileReaderService(argumentsInstance.file, config);
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
    const modelWritter = new ModelWritterService(Store, config);
    modelWritter.write();
    const apiWritter = new ApiWritterService(Store, config);
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
