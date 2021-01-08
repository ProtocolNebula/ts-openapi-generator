# TypeScript OpenApi/Swagger Generator - Templates

- [TypeScript OpenApi/Swagger Generator - Templates](#typescript-openapiswagger-generator---templates)
  - [Details](#details)
  - [How to create a custom template](#how-to-create-a-custom-template)
    - [1 - Duplicate any template folder](#1---duplicate-any-template-folder)
    - [2 - Customize your template](#2---customize-your-template)
    - [3 - Generate the api files with your own template](#3---generate-the-api-files-with-your-own-template)
    - [4 - Just enjoy your saved time!](#4---just-enjoy-your-saved-time)
  - [File naming (for each template)](#file-naming-for-each-template)
    - [config.js](#configjs)
    - [api.?](#api)
    - [model.?](#model)
    - [enumModel.?](#enummodel)

## Details

This folder contain a list of presets for different languages.

Also you can create your own, it's easy!

## How to create a custom template

### 1 - Duplicate any template folder

To create a new template, first duplicate some folder (recommended `angular2`) to use as base.

Just name it as you whish.

> If you trying to create a preset to push it to the main repo, you should create it in this folder with a **coherent full-name** in **kevab case**.
> For example for "TypeScript": `type-script`, instead `ts`.

> If you are creating a **custom template** for you own, just create anywhere in your machine/repository, it's not a requirement to be in this folder.

### 2 - Customize your template

This step is the hardest one, you have to change all files to adapt to your Language/Framework/Library.

Just change the current templates/files to that.

### 3 - Generate the api files with your own template

Just launch the command to generate your files BUT changing (or adding) `template` flag (`-t`).

```bash
# Using a "preset"
transform-swagger -f URI/TO/SWAGGER/JSON/OR/YAML -o src/generatedApi/ -t type-script

# Using a "custom path"
transform-swagger -f URI/TO/SWAGGER/JSON/OR/YAML -o src/generatedApi/ -t ./path/to/your/template
```

### 4 - Just enjoy your saved time!

Easy, right?


## File naming (for each template)

Some files are customizable in a `config.js`, that files are explained in `TemplateConfigI` (and are self-explanatory).
### config.js

File which specify mappings.
This file implement `TemplateConfigI` interface (`src/models/template-config.model.ts`).

### api.?

> Main model file: [models/api.model.ts](../src/models/api.model.ts)

File used as template to generate each `Api` class.

An API class is composed by some `endpoints` which share the `same 1rst "tag"`.

### model.?

> Main model file: [models/model.model.ts](../src/models/model.model.ts)

File used to generate `each model`.

It's exported in a shared folder with all models.

### enumModel.?

> Main model file: [models/enum.model.ts](../src/models/enum.model.ts)

Same as `model` but for `enums`.
