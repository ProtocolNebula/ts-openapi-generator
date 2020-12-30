import { ApiModel } from '../models/api.model';
import { PhysycalFile } from '../models/entities';
import { sortApi, sortDependences } from '../utils/models.util';
import { ModelStore } from './model.store';

export class ApiStore {
  private _apis: Set<ApiModel> = new Set<ApiModel>();

  get apis(): ApiModel[] {
    return [...this._apis];
  }

  get apisGrouped(): { [group: string]: ApiModel[] } {
    const groups = {};
    for (const api of this.apis) {
      const group = api.groupName;
      if (!groups[group]) {
        groups[group] = [api];
      } else {
        groups[group].push(api);
      }
    }
    return groups;
  }

  add(api: ApiModel): void {
    if (!this._apis.has(api)) {
      this._apis.add(api);
    } else {
      throw `API ${api.verb.toUpperCase()} ${api.url} declared twice`;
    }
  }

  getByGroupName(groupName: string): ApiModel[] {
    return this.apis.filter((api) => api.groupName === groupName);
  }

  getDependencesByGroupName(
    groupName: string,
    store: ModelStore,
  ): PhysycalFile[] {
    return this.getDependencesFor(this.getByGroupName(groupName), store);
  }

  getDependencesFor(apiList: ApiModel[], store: ModelStore): PhysycalFile[] {
    const dependences = new Set<PhysycalFile>();

    for (const api of apiList) {
      api
        .getDependences(store)
        .forEach((apiElement) => dependences.add(apiElement));
    }

    return sortDependences([...dependences]);
  }

  /**
   * Sort apis and store them sorted
   */
  sort(): ApiStore {
    this._apis = new Set<ApiModel>(sortApi(this.apis));
    return this;
  }
}
