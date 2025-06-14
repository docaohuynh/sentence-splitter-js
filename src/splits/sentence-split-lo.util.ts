// Lao
export const splitIntoSentencesSimpleLo = (text: string): string[] => {
  // Match after sentence-ending punctuation followed by whitespace
  const sentenceEndRegex = /(?<=[.?!])\s+(?=\S)/g;

  const sentences = text.split(sentenceEndRegex).map(s => s.trim());

  return sentences.filter(sentence => sentence.length > 0);
}