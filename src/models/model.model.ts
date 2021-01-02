import { kebab } from 'case';
import { ModelStore } from '../stores/model.store';
import { sortDependences } from '../utils/models.util';
import { PhysycalFile } from './entities';
import { ModelAttributessModel } from './model-attributes.model';

const regexKebabDTO = /[d]-?[t]-?[o]$/gi;
export class ModelModel implements PhysycalFile {
  name: string;
  description?: string;
  example?: string;
  deprecated?: boolean;

  private _attributes: ModelAttributessModel[] = [];

  get fileName(): string {
    let fileName = kebab(this.name);
    fileName = fileName.replace(regexKebabDTO, 'dto');
    return fileName;
  }

  get uri(): string {
    return `#/components/schemas/${this.name}`;
  }

  get attributes(): ModelAttributessModel[] {
    return this._attributes;
  }

  get hasComments(): boolean {
    return !!this.description || !!this.example || !!this.deprecated;
  }

  getDependences(store: ModelStore): PhysycalFile[] {
    const dependences = new Set<PhysycalFile>();

    for (const attribute of this.attributes) {
      const type = attribute.typeURI;
      if (type.includes('#')) {
        const dependence = store.getByUri(type);
        if (dependence) {
          dependences.add(dependence);
        } else {
          console.error('ERROR: Dependence', type, 'not found!');
        }
      }
    }

    return sortDependences([...dependences]);
  }

  constructor(name: string) {
    this.name = name;
  }

  addAttributes(attributes: ModelAttributessModel[]): void {
    if (attributes?.length > 0) {
      attributes.forEach((attribute) => {
        this.addAttribute(attribute);
      });
    }
  }

  addAttribute(attribute: ModelAttributessModel): void {
    attribute.model = this;
    this._attributes.push(attribute);
  }

  toString(): string {
    return this.name;
  }

  /**
   * Sort the attributesthe attributes
   */
  sort(): ModelModel {
    this._attributes = this.attributes.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    return this;
  }
}
