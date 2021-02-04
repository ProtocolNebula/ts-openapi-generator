import { StoreI } from 'src/stores/entities.store';
import { ConfigI } from './config.model';

export type USED_IN_ATTRIBUTE = 'query' | 'param';
export interface PhysycalFile {
  name: string;
  fileName: string;
  hasComments: boolean;
}

export interface MockGenerator {
  config: ConfigI;
  store: StoreI;
  generate(): Promise<void>;
}
