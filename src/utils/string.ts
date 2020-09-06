export const pickAndInsert = (text: string, pickedText: string, start: number = 1): string => {
  const end = start + pickedText.length;

  return text.slice(start, end) + text.slice(0, start) + text.slice(end);
};
