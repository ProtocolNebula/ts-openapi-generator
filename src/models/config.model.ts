import { existsSync } from 'fs';
import { resolve as pathResolve } from 'path';
import { TemplateConfigModel } from './template-config.model';

export interface ConfigI {
  cleanFolder: boolean;
  fileURI: string;
  outputPath: string;
  tempFilePath: string;
  template: string;

  readonly exportPath: string;
  readonly outputApisPath: string;
  readonly outputModelsPath: string;
  readonly templateConfig: TemplateConfigModel;
  readonly templatePath;
}

class ConfigModel implements ConfigI {
  private _tempFilePath: string;
  private _outputPath: string;
  private _outputBaseFolder: string = '';
  private _outputModelsFolder: string = 'models';
  private _outputApisFolder: string = 'apis';

  private _template: string;
  private _templatePath: string;
  private _templateConfig: TemplateConfigModel;

  fileURI: string;
  cleanFolder: boolean;

  get outputPath(): string {
    return this._outputPath;
  }
  set outputPath(outputPath: string) {
    this._outputPath = pathResolve(outputPath);
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

  get tempFilePath(): string {
    return this._tempFilePath;
  }

  set tempFilePath(tempFilePath: string) {
    this._tempFilePath = pathResolve(tempFilePath);
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
    this._templateConfig = null;
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

  get templateConfig(): TemplateConfigModel {
    if (!this._templateConfig) {
      this._templateConfig = new TemplateConfigModel(
        pathResolve(this.templatePath, 'config'),
      );
    }
    return this._templateConfig;
  }

  constructor() {}

  setConfig(config: ConfigI) {
    for (const key in config) {
      const value = config[key];
      if (value) {
        this[key] = value;
      } else {
        console.warn(`${key} in config not recognized`);
      }
    }
  }

  parseYargs(yargs): void {
    const config = {} as ConfigI;
    if (yargs.saveFile) {
      config.tempFilePath = yargs.saveFile;
    }
    if (yargs.file) {
      config.fileURI = yargs.file;
    }
    if (yargs.template) {
      config.template = yargs.template;
    }
    if (yargs.outputFolder) {
      config.outputPath = yargs.outputFolder;
    }
    if (this.cleanFolder === undefined || yargs.clean === false) {
      config.cleanFolder = yargs.clean;
    }
    this.setConfig(config);
  }
}

export const config = new ConfigModel();
