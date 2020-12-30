const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

export function isURL(url: string): boolean {
  return urlRegex.test(url);
}
