![Logo](assets/logo.png)
# TypeScript OpenApi/Swagger Generator


- [TypeScript OpenApi/Swagger Generator](#typescript-openapiswagger-generator)
  - [Description :scroll:](#description-scroll)
  - [Installation :electric_plug:](#installation-electric_plug)
  - [Usage :hammer_and_pick:](#usage-hammer_and_pick)
    - [The script](#the-script)
    - [Config file :gear:](#config-file-gear)
      - [Create the config file (you choose the name and the location)](#create-the-config-file-you-choose-the-name-and-the-location)
      - [Launch the script](#launch-the-script)
    - [Main CLI commands :open_book:](#main-cli-commands-open_book)
  - [Supported generators :toolbox:](#supported-generators-toolbox)
    - [API/Models](#apimodels)
    - [Mock engine](#mock-engine)
  - [Development :memo:](#development-memo)
    - [Run with watch (internet file)](#run-with-watch-internet-file)
    - [Run with watch (local file)](#run-with-watch-local-file)

## Description :scroll:

This script is written in `TypeScript`, it can generate all `Models` and `APIs` (serivces) in any kind of language.

Currently it exports to `Angular 2` but you can create your own templates (check [templates folder](templates)).

You can modify those files to adapt to your code.

It's planned for a future to let configure this script instead need to modify the source code.

## Installation :electric_plug:

```bash
npm i @protocolnebula/ts-openapi-generator
```

> You need to copy "ApiBase" which is the "dependences" to work. This will be changed in a future and will not be required to be copied.
> You can just download `ApiBase` folder and save in your project in the `same folder that you will "output" the generated data` or copy with this command.

```bash
mkdir -p src/generatedApi
cp -r node_modules/ts-openapi-generator/ApiBase src/generatedApi/ApiBase
```

## Usage :hammer_and_pick:

### The script

Is recommended to add a script to your `package.json` or package manager that you use.

> Change `src/generatedApi` by your desired folder to generate the code.
> If you not specify `mock-output`, `-o + mock/` will be used.

> Note that `-t` (template) and `--mock-engine` are optional, you can only use some of them.

```bash
transform-swagger \
  -f URI/TO/SWAGGER/JSON/OR/YAML \
  -o src/generatedApi/ \
  -t angular2 \
  --mock-engine json-server \
  --mock-output path/to/mock
```

### Config file :gear:

> The settings of the config file are the same than cli one (but in `camelCase`).

#### Create the config file (you choose the name and the location)

We will use as example [transfrom-config.json](examples/transform-config.json) example's one.

```json
{
  "clean": true,
  "file": "./examples/openApiFiles/passportescaperoom.com.json",
  "outputFolder": "./examples/generated/angular2",
  "template": "angular2",
  "mock-generator": "json-server",
  "mock-output": "examples/generated/mocks/json-server",
  "saveFile": "./openApiFiles/passportescaperoom.com"
}
```

#### Launch the script

```bash
transform-swagger --config-file ./examples/transform-config.json
```

### Main CLI commands :open_book:

```bash
Usage: transform-swagger [options]

Options:
  --version, -v        Show version number                             [boolean]
  --config-file        Configuration file to use (values from cli will overwrite
                       this file).
  --mock-generator     Specify the generator to use to generate mocks. If none
                       provider, mocks will not be generated
  --mock-output        The path where mock will be generated. If no specified,
                       output-folder/mock will be used
  --mock-partial       If true, only mock data will be generated instead of all
                       files                          [boolean] [default: false]
  --clean              No clean the output-folder, so old files will remain
                                                       [boolean] [default: true]
  -f, --file           Path OR URL to the swagger document to parse   [required]
  -o, --output-folder  Specify the output folder (generated folders will be
                       replaced)                             [default: "output"]
  -t, --template       Template (preset) name or path to a template
  -h, --help           Show help                                       [boolean]
  -s, --save-file                                    [default: "./openapi_temp"]

Examples:
  cli -f swagger.js -o api/ -t angular2  Convert a Swagger JSON file to
                                         compatible-angular API
```

## Supported generators :toolbox:
### API/Models

> `Plugin name` refers to the `template` parameter (`-t` or `--template` in the cli)

| Language/Framework | Status | Plugin name (-t) |
|--------------------|--------|------------------|
| Angular 2 | Beta | `angular2` |

### Mock engine

> `Generator name` refers to the `mock-generator` parameter (`--mock-generator` in the cli)

| Engine | Status | Generator name (--mock-generator) |
|--------|--------|-----------------------------------|
| json-server | Beta | `json-server` |

## Development :memo:

### Run with watch (internet file)

> This will generate a file in `output/temp.json|yaml`

```
npm run start:dev -- -f URL_TO_SWAGGER.JSON/YAML
```


### Run with watch (local file)

> You can re-use the downloaded file or specify another folder

```
npm run start:dev -- -f output/temp.json -o src/generatedApi/ -t angular2
```

