# Examples - TypeScript OpenApi/Swagger Generator

- [Examples - TypeScript OpenApi/Swagger Generator](#examples---typescript-openapiswagger-generator)
  - [Generating Examples](#generating-examples)
    - [Passport Escape Room](#passport-escape-room)

Here you can view some examples of Swagger -> converted files without pain!

> Take in mind that those files can be modified and generated files can be removed for exampling purposes.

You can also try to use `the original files` from each source or test with `your desired` OpenApi/Swagger file

## Generating Examples

> Example commands are run from **source code** instead `transform-swagger` command.

### Passport Escape Room

**OpenAPI URL:** [pasaporteescaperoom.com API](http://api.pasaporteescaperoom.com/swagger/)

**Local file command:**
```bash
npm start -- -f examples/openApiFiles/passportescaperoom.com.json -o examples/generated/angular2 -t angular2
```

**Generate from url**
```bash
npm start -- -f http://api.pasaporteescaperoom.com/swagger/ -o examples/generated/angular2 -t angular2
```
