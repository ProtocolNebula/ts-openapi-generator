#!/usr/bin/env node
import { config } from './models/config.model';
import { argumentsInstance } from './services/arguments.service';
import { generateAPIFiles } from './main';

config.parseYargs(argumentsInstance);
// FOLDERS INFORMATION
console.info('Output folders:');
console.table({
  OUTPUT_PATH: config.outputPath,
  BASE_FOLDER: config.exportPath,
  MODELS: config.exportPath,
  APIS: config.exportPath,
});
generateAPIFiles(config);
