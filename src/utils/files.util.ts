import {
  copySync,
  createWriteStream,
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs-extra';
import * as http from 'http';
import * as https from 'https';
import * as yaml from 'js-yaml';
import { mkdirSync } from 'mkdir-recursive';
import { basename, dirname, extname, resolve as pathResolve } from 'path';
import { config } from '../models/config.model';

const getExtensionRegex = /(\.[a-z0-9]+).*/i;
const isHttpsRegex = /^https/i;

/**
 * Find a resource for a pluggable element (like templates)
 * @param elementPath Element to find (template name, ...)
 * @param internalPath Path starting root (src/ parent folder) in case elementPath path not exists
 *  This will be concated elementPath: `${internalPath}/${elementPath}`
 * @example resolvePluggablePath('angular2', 'templates');
 * @returns The resolved path to the resource
 * @throws Exception if path not exist or not found
 */
export function resolvePluggablePath(
  elementPath: string,
  internalPath: string,
) {
  // Generate the template path
  if (existsSync(elementPath)) {
    return elementPath;
  }

  const resolvedPath = pathResolve(__dirname, '..', internalPath, elementPath);
  if (existsSync(resolvedPath)) {
    return resolvedPath;
  }

  throw `Pluggable path for ${elementPath} not found`;
}

export function getAllFoldersFrom(path) {
  return readdirSync(path, { withFileTypes: true })
    .filter((el) => el.isDirectory())
    .map((el) => el.name);
}

export function makeDir(dest): void {
  mkdirSync(dest);
}


function copyDirFilter(src, dst): boolean {
  return dst.indexOf('node_modules') === -1;
}

export function copyDir(
  src: string,
  dest: string,
  overwrite: boolean = false,
): void {
  console.debug('Copying', src, 'to', dest);
  copySync(src, dest, {
    overwrite: true,
    errorOnExist: true,
    filter: copyDirFilter,
  });
}

export async function downloadFile(url, dest): Promise<string> {
  makeDir(dirname(dest));
  return new Promise((resolve, error) => {
    try {
      const file = createWriteStream(dest);
      const protocol = isHttpsRegex.test(url) ? https : http;
      protocol.get(url, function (response) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(dest);
        });
        file.on('error', (err) => {
          error(err);
        });
      });
    } catch (err) {
      error(err);
    }
  });
}

export function getTemplate(templateFile) {
  const fullPath = pathResolve(config.templatePath, templateFile);
  return readFileSync(fullPath, 'utf-8');
}

export function generateFileSync(file, data) {
  writeFileSync(file, data);
}

export function fileExtension(filePath): string {
  const fileBasename = basename(filePath);
  const firstDot = fileBasename.indexOf('.');
  const lastDot = fileBasename.lastIndexOf('.');
  const fileExtname = extname(fileBasename).replace(getExtensionRegex, '$1');

  if (firstDot === lastDot) {
    return fileExtname.substr(1);
  }

  return fileBasename.slice(firstDot, lastDot) + fileExtname;
}

export function fileIsJSON(filePath): boolean {
  return fileExtension(filePath) === 'json';
}

export function fileIsYAML(filePath): boolean {
  return fileExtension(filePath) === 'yaml';
}

export function parseJSON(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

export function parseYAML(filePath) {
  return yaml.safeLoad(readFileSync(filePath, 'utf8'));
}
