import { StoreI } from "src/stores/entities.store";
import { ConfigI } from "./config.model";

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
