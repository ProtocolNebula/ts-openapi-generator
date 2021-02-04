# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.5.1] - 2021-02-04

### Added
- Parser for Components -> Parameters
  - The parameters are added in a new store and are "copied" when are needed in the models or responses.
- Added `$ref` support in the `Components`
  - As the [standard specifies](https://swagger.io/docs/specification/using-ref/
), it will COPY the referenced `$ref` object only changing the `model name`, so the other attributes are ignored.

### Fixed
- `copy-pluggable-files` command was broken, so templates were not copied to dist folder
- Debugger tasks which call `copy-pluggable-files`

## [2.5.0] - 2021-01-23 (MOCK GENERATOR BETA)
> This change add some beta features (but are stable).

### Added
- Engine to generate a `mock server` (the task is done after write all files).
- `json-server` for the `mock engine` (beta).
- Method to resolve "pluggable" elements (`resolvePluggablePath`).

### Changes
- Core template paths (default templates) are moved inside `src` to be coherent with the `mock engine` and also add native support for TS (future versions).
- The "pluggable" folders now are coppied to the `build` folder to be published within the package, otherwise the `templates` will be ignored from this version and also the `mock assets`.
- Specify `template` (and `output-folder`) is now **optional**, so you can create `mocks` without generate all files.
  - Also you can simply launch this script to check if the `json/yaml` document is "well formed" (compatible with the script, there are some missing OpenAPI 3 features not added yet).
- Now `build` folder is empty before each compilation.

## [2.4.0] - 2021-01-18
> This can break your `angular 2` app, now all APIs require a model instance.
> Also returns an instance, this can be a big break change, please test your app after build (in another branch) and fix all manually.
### Added
- Added support for numeric enums
- In "api-model":
    - "contentType" (request)
- In "model-attributes" model:
    - isTypePrimitive
    - isNotPrimitive

### Changes
- `API Base` (angular 2):
    - You can add to your angular without doing changes
    - Removed all store dependences
    - Removed handle error
- `Angular 2` template:
    - Added "model-base" which are extended by all generated models to parse/stringfy models
    - Added "mapping" to all API responses (with model-base)

## [2.3.3] - 2021-01-11
### Added
- Support for https remote files
- Added **but not used** [swagger2openapi](https://github.com/Mermade/oas-kit/) to future validations (and first method to convert Swagger 2 to OpenAPI V3 with this library)
- Support for `Swagger 1` and `Swagger 2 (Open API)` files (using [api-spec-converter](https://github.com/LucyBot-Inc/api-spec-converter) which converts the file to `OpenAPI V3`.

### Changed
- APIs: If no `tags` provided, the URL is splitted and used as `tags`.
  
## [2.3.2] - 2021-01-09
### Addded
- `--config-file` parameter
- `index.ts` file which export the main classes and functions to work pragmatically from nodejs (pending docs)

### Fixed
- save-file alias for cli
- main.ts config usage
- Prepush hook

## [2.3.1] - 2021-01-09
### Added
- Parameter to choose where to save the `open api (swagger) file` if `--file` is an `URL`. Default path is `./open-api` (.json/.yaml added automatically).

### Fixed
- Now "properties" inside "properties" inside "schema" are transformed to an object, previously was `any`.
- 
## [2.3.0] - 2021-01-07
### Added
- Issue [#12 - Support for multi array in api schemes](https://github.com/ProtocolNebula/ts-openapi-generator/issues/12)
- JSON example
- `Angular 2` generated example (partial, not all files are uploaded)

### Changed
- Now `generated` folder is no created anymore.
> Please update your repositories or your "output" folder will be cleared on the next execution.
> You have to specify explicity `generated` folder or your desired one.

### Fixed
- Fix "Capitalize" on api's (it was creating files and classes with spaces)

## [2.2.0] - 2021-01-06
### Added
- Issue #3 - Custom templates: Now you can create a custom template and use it without modify the source code.
- Issue #6 - Custom enums mapping: As part of a template, enums are configurable.
- Issue #7 - Default templates support. Now current template is named `angular2`, so you must to add `-t angular2` to you `cli script`
```bash
transform-swagger -f ...json -o src/generatedApi/ -t angular2
```
- `ConfigModel` class
- `TemplateConfigModel` class

### Changed
- Output folders now are retrieved from ConfigModel.
- Now `template` is required as parameter.
- Default type added.
- `Yargs` (arguments) are not read directly, are parsed to `ConfigModel`.

## [2.1.3] - 2021-01-05

### Changed
- If **schema** has not been defined, `any` will set again (instead `void`). This **undoes** `2.1.2` partially.

### Fixed
- Added Elvis operator to all 'isXXX' internal conditional in `parser-base.service.ts`
  
## [2.1.2] - 2021-01-04
### Added
- New types to default mapping: File and Void

### Fixed
- If response schema is "empty" (ex: json -> with no content) it will detect as `void instead throw an error.
- Enums in "models" (components) and schemas now generated.

## [2.1.1] - 2021-01-03

### Added
- Now `-v` is available as parameter as `--version` alias.

### Changed
- Auto-generated types (parameters, request body, ... without explicit declaration) forced to to CapitalCase (UpperCamelCase).
> Please check and update your code after generate the template.

### Fixed
- "Native" types previously was generating a new model in parameters or other cases.

## [2.1.0] - 2021-01-02

### Changed
- Forced `groupName` (class name) to CapitalCase (UpperCamelCase).
> Please check and update your code after generate the template.

## [2.0.3] - 2021-01-02

### Fixed
- nodemon: added "templates" folder
- Removed empty comments in the generated **files**

## [2.0.2] - 2020-12-31
### Added
- Getter/Setter for verb in API

### Fixed
- API template "verb" was wrong
- nodemon settings for start:dev

## [2.0.1] - 2020-12-31
### Fixed
- Readme.md install command
- Moved package.json from devDependencies to dependencies

### Changed
- `templates` folder moved to `root` folder

### Removed
- Removed unused `mkdirp` dependencie
- Removed unused `rxjs` dependencie
