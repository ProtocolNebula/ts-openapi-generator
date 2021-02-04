/**
 * Find an object inside another object by a given path
 * @param $ref Path to find EX: '#/level1/level2/level3'
 * @param fullObject Full instance of the object
 */
export function findInObject($ref: string, fullObject: any): any {
  const path = $ref.split('/');

  let child = path.shift(); // Skip the root (#)
  let currentPath = fullObject;
  while ((child = path.shift())) {
    if (!currentPath[child]) {
      return null;
    }
    currentPath = currentPath[child];
  }

  return currentPath;
}
