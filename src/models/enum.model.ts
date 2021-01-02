import { kebab } from 'case';
import { PhysycalFile } from './entities';

const regexKebabEnum = /[e]-?[n]-?[u]-?[m]$/gi;
export class EnumModel<T = string> implements PhysycalFile {
  name: string;
  isOptional: boolean;
  isArray: boolean;
  description?: string;
  example?: string;
  deprecated?: boolean;

  private _type: string;
  private _values: T[];

  /**
   * Get the path to the file if is not a primitive
   */
  get fileName(): string | null {
    let fileName = kebab(this.name);
    fileName = fileName.replace(regexKebabEnum, 'enum');
    return fileName;
  }

  get type(): string {
    return this._type;
  }
  set type(type: string) {
    this._type = type;
  }

  get uri(): string {
    return `#/components/schemas/${this.name}`;
  }

  get hasComments(): boolean {
    return !!this.description || !!this.example || !!this.deprecated;
  }

  get values(): T[] {
    return this._values;
  }
  set values(values: T[]) {
    this._values = values;
  }

  constructor(name: string) {
    this.name = name;
  }

  toString(): string {
    return this.name;
  }
}
