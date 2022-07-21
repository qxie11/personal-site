export const parseReadMoreText = (
  text: string,
  min: number,
  max: number,
  ideal: number,
  isOpen: boolean
): string => {
  if (isOpen) return text;
  const slicedText = `${text.slice(0, ideal)}...`;

  if (slicedText.length < min) return `${text.slice(0, min)}...`;
  if (slicedText.length > max) return `${text.slice(0, max)}...`;

  return slicedText;
};
