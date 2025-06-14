export const splitIntoSentencesSimpleKo = (text: string): string[] => {
  // This regex handles typical sentence enders in Korean: . ? ! and includes cases with Korean-specific sentence markers like "다."
  const sentenceEndRegex = /(?<=[\.!?])\s+|(?<=[다|요|까])[\.!?]\s+/g;
  
  // First, replace any newlines with spaces to normalize the input
  const normalizedText = text.replace(/\s+/g, ' ').trim();

  // Split text based on sentence-ending punctuation
  const sentences = normalizedText.split(sentenceEndRegex).map(sentence => sentence.trim()).filter(Boolean);

  return sentences;
}