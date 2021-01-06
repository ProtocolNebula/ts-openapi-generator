import { createWriteStream, readFileSync, writeFileSync } from 'fs';
import * as http from 'http';
import * as yaml from 'js-yaml';
import { mkdirSync } from 'mkdir-recursive';
import { basename, dirname, extname, resolve as pathResolve } from 'path';

const getExtensionRegex = /(\.[a-z0-9]+).*/i;

export function getAllFoldersFrom(path) {
  return readdirSync(path, { withFileTypes: true })
    .filter(el => el.isDirectory())
    .map(el => el.name);
}

export function makeDir(dest): void {
  mkdirSync(dest);
}

export async function downloadFile(url, dest): Promise<string> {
  makeDir(dirname(dest));
  return new Promise((resolve, error) => {
    try {
      const file = createWriteStream(dest);
      http.get(url, function (response) {
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
  const fullPath = pathResolve(__dirname, '..', '..', 'templates', templateFile);
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
