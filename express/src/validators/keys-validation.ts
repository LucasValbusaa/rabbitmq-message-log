export function compareKeys(a: object, b: object) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}
