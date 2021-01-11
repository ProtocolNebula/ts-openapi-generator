import { OpenAPIV3 } from 'openapi-types';
import { config, ConfigI } from '../../models/config.model';
import {
  downloadFile,
  fileExtension,
  fileIsJSON,
  fileIsYAML,
  parseJSON,
  parseYAML,
} from '../../utils/files.util';
import { isURL } from '../../utils/string.util';

const versionRegx = /^([0-9]+)/;

/**
 * Main calss which parse the JSON/YAML file
 * If the file is a URL, it will download
 */
export class FileReaderService {
  private localFilePath: string;

  /**
   * Readed document
   */
  private _document: OpenAPIV3.Document = null;

  get document(): OpenAPIV3.Document {
    return this._document;
  }

  constructor(private path, private configuration: ConfigI = config) {}

  async readFile(): Promise<OpenAPIV3.Document> {
    await this.prepareFile();
    const document = await this.parseFile();
    this._document = await this.upgradeFile(document);
    return this.document;
  }

  showDocumentInfo(): void {
    const info = this.document.info;
    console.group('API details');
    console.info(info.title);
    console.info(info.description);
    console.info('Terms of service:', info.termsOfService);
    if (info.contact) {
      console.group('Contact details');
      console.info('Name:', info.contact.name);
      console.info('URL:', info.contact.url);
      console.info('Email:', info.contact.email);
      console.groupEnd();
    }
    console.groupEnd();
    console.info('');
  }

  async upgradeFile(document: any): Promise<OpenAPIV3.Document> {
    let version: string;
    if (document.openapi) {
      version = versionRegx.exec(document.openapi)[1];
    } else if (document.swagger) {
      version = versionRegx.exec(document.swagger)[1];
    }

    if (!version) {
      throw 'This is not a valid OpenApi/Swagger document';
    }

    console.info('Swagger/API version detected:', version);
    switch (version) {
      case '3':
        return document;
      case '2':
        console.info('Convertin to OpenAPI V3');
        return this.convertFile('swagger_2', document);
      case '1':
        return this.convertFile('swagger_1', document);
      default:
        throw 'This OpenAPi/Swagger version is not compatible with this tool';
    }
  }

  /**
   * Convert from file definition to OpenAPI V3
   * @param from
   * @param document
   * @url https://github.com/LucyBot-Inc/api-spec-converter
   */
  private async convertFile(
    from: string,
    document: any,
  ): Promise<OpenAPIV3.Document> {
    const Converter = require('api-spec-converter');
    return Converter.convert({
      from,
      to: 'openapi_3',
      source: 'https://api.gettyimages.com/swagger/api-docs',
    });
  }

  private async prepareFile(): Promise<void> {
    let extension = fileExtension(this.path);
    if (!fileIsJSON(this.path) && !fileIsYAML(this.path)) {
      console.warn(
        'WARNING: URL not match with JSON nor YAML, JSON will be used by default to read the file',
      );
      extension = 'json';
    }

    if (isURL(this.path)) {
      this.localFilePath = `${this.configuration.tempFilePath}.${extension}`;
      console.log(`${this.path} will be saved as ${this.localFilePath}...`);
      await downloadFile(this.path, this.localFilePath);
      console.log(`${this.localFilePath} saved!`);
    } else {
      this.localFilePath = this.path;
    }
  }

  private parseFile(): any {
    const filePath = this.localFilePath;
    switch (fileExtension(filePath)) {
      case 'yaml':
        return parseYAML(filePath);
      default:
        return parseJSON(filePath);
    }
  }
}
