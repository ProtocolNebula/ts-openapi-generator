import * as mustache from 'mustache';
import { resolve as pathResolve } from 'path';
import { config, ConfigI } from '../../models/config.model';
import { EnumModel } from '../../models/enum.model';
import { StoreI } from '../../stores/entities.store';
import { ModelType } from '../../stores/model.store';
import { generateFileSync, getTemplate, makeDir } from '../../utils/files.util';

/**
 * This service Process all COMPONENTS (components/schemas/*) and convert it to ModelModel instances
 *
 */
export class ModelWritterService {
  private modelMustacheTemplate;
  private enumMustacheTemplate;

  private exportExtension;

  constructor(private store: StoreI, private configuration: ConfigI = config) {}

  write(): void {
    this.prepareMustacheInstance();
    console.group('Generating model files');
    makeDir(this.configuration.outputModelsPath);

    for (const model of this.store.models.models) {
      const exportFileName = `${model.fileName}.${this.exportExtension}`;
      console.info(model.name, '->', exportFileName);
      console.group();
      generateFileSync(
        pathResolve(this.configuration.outputModelsPath, exportFileName),
        this.getGeneratedTemplate(model),
      );
      console.groupEnd();
    }

    console.groupEnd();
  }

  private prepareMustacheInstance(): void {
    this.modelMustacheTemplate = getTemplate(this.configuration.templateConfig.modelFile);
    mustache.parse(this.modelMustacheTemplate);
    this.enumMustacheTemplate = getTemplate(this.configuration.templateConfig.enumModelFile);
    mustache.parse(this.enumMustacheTemplate);
    this.exportExtension = this.configuration.templateConfig.modelExtension;
  }

  private getGeneratedTemplate(model: ModelType): string {
    if (model instanceof EnumModel) {
      return mustache.render(this.enumMustacheTemplate, {
        model,
      });
    }
    model.sort();
    return mustache.render(this.modelMustacheTemplate, {
      model,
      dependences: model.getDependences(this.store.models),
    });
  }
}
