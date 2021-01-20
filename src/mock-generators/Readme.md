# TypeScript OpenApi/Swagger Generator - Mocks

- [TypeScript OpenApi/Swagger Generator - Mocks](#typescript-openapiswagger-generator---mocks)
  - [Details](#details)
  - [How to create a custom mock](#how-to-create-a-custom-mock)
    - [1 - Duplicate any mock folder](#1---duplicate-any-mock-folder)
    - [2 - Customize your mock](#2---customize-your-mock)
    - [3 - Generate the api files with your own mock](#3---generate-the-api-files-with-your-own-mock)
    - [4 - Just enjoy your saved time!](#4---just-enjoy-your-saved-time)

## Details

This folder contain a list of presets for different languages.

Also you can create your own, it's easy!

## How to create a custom mock

### 1 - Duplicate any mock folder

To create a new mock, first duplicate some folder (recommended `json-server`) to use as base.

Just name it as you whish.

> If you trying to create a preset to push it to the main repo, please use a coherent name.

> If you are creating a **custom mock** for you own, just create anywhere in your machine/repository, it's not a requirement to be in this folder.

### 2 - Customize your mock

This step is the hardest one, you have to change all files to adapt to your desires.

Just change the current mocks/files to that.

### 3 - Generate the api files with your own mock

```bash
# Using a "preset"
transform-swagger -f URI/TO/SWAGGER/JSON/OR/YAML --mock-generator `my-mock-generator` --mock-output `examples/generated/mocks/json-server`

# Using a "custom path"
transform-swagger -f URI/TO/SWAGGER/JSON/OR/YAML --mock-generator `./path/to/my-mock-generator` --mock-output `examples/generated/mocks/json-server`
```

### 4 - Just enjoy your saved time!

You should add documentation or "base files" to do it easier to use by others.
