import * as mustache from 'mustache';
import { resolve as pathResolve } from 'path';
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

  private modelTemplate = 'model.ts';
  private enumTemplate = 'enumModel.ts';
  private exportExtension = 'ts';

  constructor(private outputFolders: any, private store: StoreI) {}

  write(): void {
    this.prepareMustacheInstance();
    console.group('Generating model files');
    makeDir(this.outputFolders.MODELS);

    for (const model of this.store.models.models) {
      const exportFileName = `${model.fileName}.${this.exportExtension}`;
      console.info(model.name, '->', exportFileName);
      console.group();
      generateFileSync(
        pathResolve(this.outputFolders.MODELS, exportFileName),
        this.getGeneratedTemplate(model),
      );
      console.groupEnd();
    }

    console.groupEnd();
  }

  private prepareMustacheInstance(): void {
    this.modelMustacheTemplate = getTemplate(this.modelTemplate);
    mustache.parse(this.modelMustacheTemplate);
    this.enumMustacheTemplate = getTemplate(this.enumTemplate);
    mustache.parse(this.enumMustacheTemplate);
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
