export const splitIntoSentencesSimpleAr = (text: string): string[] => {
  // Regular expression to split by Arabic sentence-ending punctuation
  const sentenceEndRegex = /(?<=[.؟!])\s+(?=[^\s])/g;

  // Split the text
  const sentences = text.split(sentenceEndRegex).map(s => s.trim());

  // Filter out any empty strings
  return sentences.filter(sentence => sentence.length > 0);
}