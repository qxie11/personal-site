export const parseReadMoreText = (text, min, isOpen) =>
  isOpen ? text : `${text.slice(0, min)}...`;
