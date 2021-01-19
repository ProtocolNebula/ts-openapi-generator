
export interface ConfigMockI {
  generator: string;
  output: string;
  partial: boolean;
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

  parseYargs(yargs): void {
    if (yargs.mockGenerator) {
      this.generator = yargs.mockGenerator;
    }
    if (yargs.mockOutput) {
      this.output = yargs.mockOutput;
    }
    if (yargs.mockPartial) {
      this.partial = yargs.mockPartial;
    }
  }
}
