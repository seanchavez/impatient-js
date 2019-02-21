export function concatStringArray(arr) {
  let resultString = '';
  for (const el of arr) {
    resultString += el;
  }
  return resultString;
}
