export const splitIntoSentencesSimpleUr = (text: string): string[] => {
    // اردو میں جملے کی علامتیں: "۔", "!", "؟"
  const sentenceEndRegex = /([۔!?؟])(?:\s+|$)/g;

  const sentences: string[] = [];
  let lastIndex = 0;
  let match;

  while ((match = sentenceEndRegex.exec(text)) !== null) {
    const end = sentenceEndRegex.lastIndex;
    const sentence = text.slice(lastIndex, end).trim();
    if (sentence.length > 0) {
      sentences.push(sentence);
    }
    lastIndex = end;
  }

  // Add any remaining text after the last match
  const remaining = text.slice(lastIndex).trim();
  if (remaining.length > 0) {
    sentences.push(remaining);
  }

  return sentences;
}