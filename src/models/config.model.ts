import { existsSync } from 'fs';
import { resolve as pathResolve } from 'path';

export interface ConfigI {
  outputPath: string;
  exportPath: string;
  outputModelsPath: string;
  outputApisPath: string;
}

class ConfigModel implements ConfigI {
  private _outputPath: string;
  private _outputBaseFolder: string = 'generated';
  private _outputModelsFolder: string = 'models';
  private _outputApisFolder: string = 'apis';

  private _template: string;
  private _templatePath: string;

  get outputPath(): string {
    return this._outputPath;
  }

  get exportPath(): string {
    return pathResolve(this.outputPath, this._outputBaseFolder);
  }

  get outputModelsPath(): string {
    return pathResolve(this.exportPath, this._outputModelsFolder);
  }

  get outputApisPath(): string {
    return pathResolve(this.exportPath, this._outputApisFolder);
  }

  get template(): string {
    if (!this._template) {
      throw 'No template defined';
    }
    return this._template;
  }

  set template(template: string) {
    this._template = template;
    this._templatePath = null;
  }

  get templatePath(): string {
    if (!this._templatePath) {
      // Generate the template path
      const template = this.template;
      if (existsSync(template)) {
        this._templatePath = template;
      } else {
        this._templatePath = pathResolve(
          __dirname,
          '..',
          '..',
          'templates',
          template,
        );
      }
    }

    if (!existsSync(this._templatePath)) {
      throw `Template ${this.template} not exist`;
    }
    return this._templatePath;
  }

  constructor() {}

  parseYargs(yargs): void {
    this._outputPath = yargs.outputFolder;
    this.template = yargs.template;
  }
}

export const config = new ConfigModel();
