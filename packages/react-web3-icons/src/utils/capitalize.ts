import { ToWords } from "to-words";

const toWords = new ToWords();

export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export function normalizeIconName(rawName: string) {
  const [firstNumChars] = extractBeginningNumber(rawName)!;

  if (firstNumChars.length) {
    const num = parseInt(firstNumChars, 10);
    const remainingSubStr = rawName.slice(firstNumChars.length);
    return `${toWords.convert(num)}${capitalize(remainingSubStr)}`;
  }

  return capitalize(rawName);
}

export function extractBeginningNumber(str: string) {
  return str.match(/^\d*/);
}
