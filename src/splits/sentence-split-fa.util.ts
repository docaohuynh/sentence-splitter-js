// Persian
export const splitIntoSentencesSimpleFa = (text: string): string[] => {
  // Split after Persian/English punctuation followed by whitespace
  const sentenceEndRegex = /(?<=[.؟!])\s+(?=\S)/g;

  const sentences = text.split(sentenceEndRegex).map(s => s.trim());

  return sentences.filter(sentence => sentence.length > 0);
}