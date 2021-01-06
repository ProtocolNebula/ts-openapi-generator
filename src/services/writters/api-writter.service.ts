import * as mustache from 'mustache';
import { resolve as pathResolve } from 'path';
import { ApiModel } from '../../models/api.model';
import { config, ConfigI } from '../../models/config.model';
import { StoreI } from '../../stores/entities.store';
import { generateFileSync, getTemplate, makeDir } from '../../utils/files.util';

/**
 * This service Process all COMPONENTS (components/schemas/*) and convert it to ModelModel instances
 *
 */
export class ApiWritterService {
  private mustacheTemplate;

  private exportExtension;

  constructor(private store: StoreI, private configuration: ConfigI = config) {}

  write(): void {
    this.prepareMustacheInstance();
    console.group('Generating api files');
    const folder = this.configuration.outputApisPath;
    makeDir(folder);

    const groups = this.store.apis.sort().apisGrouped;
    for (const groupName in groups) {
      const apis = groups[groupName];
      const exportFileName = `${groupName}.${this.exportExtension}`;
      console.info(groupName, '->', exportFileName);
      console.group();
      generateFileSync(
        pathResolve(folder, exportFileName),
        this.getGeneratedTemplate(groupName, apis),
      );
      console.groupEnd();
    }

    console.groupEnd();
  }

  private prepareMustacheInstance(): void {
    this.mustacheTemplate = getTemplate(this.configuration.templateConfig.apiFile);
    mustache.parse(this.mustacheTemplate);
    this.exportExtension = this.configuration.templateConfig.apiExtension;
  }

  private getGeneratedTemplate(groupName: string, apis: ApiModel[]): string {
    return mustache.render(this.mustacheTemplate, {
      groupName,
      apis,
      dependences: this.store.apis.getDependencesFor(apis, this.store.models),
    });
  }
}
