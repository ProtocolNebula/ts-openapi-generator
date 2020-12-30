import * as mustache from 'mustache';
import { resolve as pathResolve } from 'path';
import { ApiModel } from 'src/models/api.model';
import { StoreI } from '../../stores/entities.store';
import { generateFileSync, getTemplate, makeDir } from '../../utils/files.util';

/**
 * This service Process all COMPONENTS (components/schemas/*) and convert it to ModelModel instances
 *
 */
export class ApiWritterService {
  private mustacheTemplate;

  private template = 'api.ts';
  private exportExtension = 'ts';

  constructor(private outputFolders: any, private store: StoreI) {}

  write(): void {
    this.prepareMustacheInstance();
    console.group('Generating api files');
    const folder = this.outputFolders.APIS;
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
    this.mustacheTemplate = getTemplate(this.template);
    mustache.parse(this.mustacheTemplate);
  }

  private getGeneratedTemplate(groupName: string, apis: ApiModel[]): string {
    return mustache.render(this.mustacheTemplate, {
      groupName,
      apis,
      dependences: this.store.apis.getDependencesFor(apis, this.store.models),
    });
  }
}
