export function removeExtension(str) {
  const dotIndex = str.lastIndexOf('.');
  return dotIndex !== -1 ? str.slice(0, dotIndex) : str;
}
