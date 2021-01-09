# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.3.1] - 2021-01-09
### Added
- Parameter to choose where to save the `open api (swagger) file` if `--file` is an `URL`. Default path is `./open-api` (.json/.yaml added automatically).

### Fixed
- Now "properties" inside "properties" inside "schema" are transformed to an object, previously was `any`.

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
