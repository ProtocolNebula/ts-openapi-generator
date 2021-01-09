import { ConfigModel, generateAPIFiles } from '@protocolnebula/ts-openapi-generator';

const config = new ConfigModel();
// config.outputPath =
async function generate(config: ConfigI) {
  generateAPIFiles(config);
}

generate(config);
