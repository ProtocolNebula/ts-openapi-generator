# TypeScript OpenApi/Swagger Generator

## Description

This script is written in `TypeScript`, it can generate all `Models` and `APIs` (serivces) in any kind of language.

By default (and at this moment) it only exports to `Angular 2`.

You can modify those files to adapt to your code.

It's planned for a future to let configure this script instead need to modify the source code.

## Installation

```bash
npm i @protocolnebula/ts-openapi-generator
```

> You need to copy "ApiBase" which is the "dependences" to work. This will be changed in a future and will not be required to be copied.
> You can just download `ApiBase` folder and save in your project in the `same folder that you will "output" the generated data` or copy with this command.

```bash
mkdir -p src/generatedApi
cp -r node_modules/ts-openapi-generator/ApiBase src/generatedApi/ApiBase
```

## Usage

### The script

Is recommended to add a script to your `package.json` or package manager that you use.

> Change `src/generatedApi` by your desired folder to generate the code.

```bash
transform-swagger -f URI/TO/SWAGGER/JSON/OR/YAML -o src/generatedApi/
```

### Main CLI commands

```bash
Usage: transform-swagger [options]

Options:
  --version            Show version number                             [boolean]
  --clean              No clean the output-folder, so old files will remain
                                                       [boolean] [default: true]
  -f, --file           Path OR URL to the swagger document to parse   [required]
  -o, --output-folder  Specify the output folder (generated folders will be
                       replaced)                             [default: "output"]
  -h, --help           Show help                                       [boolean]

Examples:
  transform-swagger -f swagger.js  Convert a Swagger JSON file to
                                   compatible-angular API
```

## Development

### Run with watch (internet file)

> This will generate a file in `output/temp.json|yaml`

```
npm run start:dev -- -f URL_TO_SWAGGER.JSON/YAML
```


### Run with watch (local file)

> You can re-use the downloaded file or specify another folder

```
npm run start:dev -- -f output/temp.json
```

