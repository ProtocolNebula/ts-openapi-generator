# TypeScript OpenApi/Swagger Generator - Templates

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
