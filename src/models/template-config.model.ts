import { fileExtension } from "../utils/files.util";

export interface TypesMapped {
  /**
   * Type if NO TYPE (literally nothing)
   */
  empty: string;

  [type: string]: string;
  default: string;
  boolean: string;
  file: string;
  integer: string;
  number: string;
  object: string;
  string: string;
}

export interface TemplateConfigI {
  // Template files
  apiFile: string;
  modelFile: string;
  enumModelFile: string;

  /**
   * Types mapping from 'OpenAPI' to the language template
   * `default` will be used as default type (if not defined/not in the list)
   */
  typesMapped: TypesMapped;
}

export class TemplateConfigModel implements TemplateConfigI {
  private configMapped: TemplateConfigI;

  get apiFile(): string {
    return this.configMapped.apiFile;
  }
  get apiExtension(): string {
    return fileExtension(this.configMapped.apiFile);
  }
  get modelFile(): string {
    return this.configMapped.modelFile;
  }
  get modelExtension(): string {
    return fileExtension(this.configMapped.modelFile);
  }
  get enumModelFile(): string {
    return this.configMapped.enumModelFile;
  }
  get enumModelExtension(): string {
    return fileExtension(this.configMapped.enumModelFile);
  }

  get typesMapped(): TypesMapped {
    return this.configMapped.typesMapped;
  }

  constructor(templatePath: string) {
    this.configMapped = require(templatePath);
  }
}
