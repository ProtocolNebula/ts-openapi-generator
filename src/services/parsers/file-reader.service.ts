import { OpenAPIV3 } from 'openapi-types';
import {
  downloadFile,
  fileExtension,
  fileIsJSON,
  fileIsYAML,
  parseJSON,
  parseYAML,
} from '../../utils/files.util';
import { isURL } from '../../utils/string.util';

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

  constructor(private path, private outputFolders: any) {}

  async readFile(): Promise<OpenAPIV3.Document> {
    await this.prepareFile();
    this._document = await this.parseFile();
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

  private async prepareFile(): Promise<void> {
    let extension = fileExtension(this.path);
    if (!fileIsJSON(this.path) && !fileIsYAML(this.path)) {
      console.warn(
        'WARNING: URL not match with JSON nor YAML, JSON will be used by default to read the file',
      );
      extension = 'json';
    }

    if (isURL(this.path)) {
      this.localFilePath = `${this.outputFolders.OUTPUT_PATH}temp.${extension}`;
      console.log(`${this.path} will be saved as ${this.localFilePath}...`);
      await downloadFile(this.path, this.localFilePath);
      console.log(`${this.localFilePath} saved!`);
    } else {
      this.localFilePath = this.path;
    }
  }

  private parseFile(): OpenAPIV3.Document {
    const filePath = this.localFilePath;
    switch (fileExtension(filePath)) {
      case 'yaml':
        return parseYAML(filePath);
      default:
        return parseJSON(filePath);
    }
  }
}
