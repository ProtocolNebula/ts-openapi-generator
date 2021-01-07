import { existsSync } from 'fs';
import { resolve as pathResolve } from 'path';
import { TemplateConfigModel } from './template-config.model';

export interface ConfigI {
  outputPath: string;
  exportPath: string;
  outputModelsPath: string;
  outputApisPath: string;
  templateConfig: TemplateConfigModel;
}

class ConfigModel implements ConfigI {
  private _outputPath: string;
  private _outputBaseFolder: string = '';
  private _outputModelsFolder: string = 'models';
  private _outputApisFolder: string = 'apis';

  private _template: string;
  private _templatePath: string;
  private _templateConfig: TemplateConfigModel;

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
      this._templateConfig = new TemplateConfigModel(pathResolve(this.templatePath, 'config'));
    }
    return this._templateConfig;
  }

  constructor() {}

  parseYargs(yargs): void {
    this._outputPath = yargs.outputFolder;
    this.template = yargs.template;
  }
}

export const config = new ConfigModel();
