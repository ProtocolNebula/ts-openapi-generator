import { resolve as pathResolve } from 'path';
import { Store } from '../stores/entities.store';
import { resolvePluggablePath } from '../utils/files.util';
import { config } from './config.model';
import { MockGenerator } from './entities';

export interface ConfigMockI {
  generator: string;
  output: string;
  partial: boolean;
  generateBuilder(): MockGenerator;
  parseYargs(yargs): void;
}

export class ConfigMockModel implements ConfigMockI {
  private _generator: string;
  private _output: string;
  private _partial: boolean;

  get generator(): string {
    return this._generator;
  }
  set generator(generator: string) {
    this._generator = generator;
  }

  get output(): string {
    return this._output;
  }
  set output(output: string) {
    this._output = output;
  }

  get partial(): boolean {
    return this._partial;
  }
  set partial(partial: boolean) {
    this._partial = partial;
  }

  generateBuilder(): MockGenerator {
    if (!this.generator) {
      throw 'No generator defined for Mocks';
    }
    const generatorPath = resolvePluggablePath(
      this.generator,
      'mock-generators',
    );
    console.debug(`Loading generator from ${generatorPath}`);
    const generatorClass = require(generatorPath).default;
    const generator = new generatorClass();
    generator.config = config;
    generator.store = Store;
    return generator;
  }

  parseYargs(yargs): void {
    if (yargs.mockGenerator) {
      this.generator = yargs.mockGenerator;
    }
    this.output = yargs.mockOutput || pathResolve(yargs.output, 'mocks');
    if (yargs.mockPartial) {
      this.partial = yargs.mockPartial;
    }
  }
}
