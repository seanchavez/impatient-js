export function removeExtension(str) {
  const dotIndex = str.lastIndexOf('.');
  return dotIndex === -1 ? str : str.slice(0, dotIndex);
}
