export const splitIntoSentencesSimpleKo = (text: string): string[] => {
  // Normalize whitespace
  const normalizedText = text.replace(/\s+/g, ' ').trim();

  // Match sentence-ending expressions in Korean more precisely
  // Look for patterns like: "다.", "요.", "까.", etc., followed by space or end of string
  const sentenceEndRegex = /(?<=[다요까])\.(?=\s|$)/g;

  // Insert a special delimiter at those points, then split by it
  const markedText = normalizedText.replace(sentenceEndRegex, '.|SPLIT|');
  const sentences = markedText.split('|SPLIT|').map(s => s.trim()).filter(Boolean);

  return sentences;
}
