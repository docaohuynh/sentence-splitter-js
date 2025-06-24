export const splitIntoSentencesSimpleKo = (text: string): string[] => {
  const sentenceEndPlaceholder = '|SPLIT|';

  // Normalize whitespace
  const normalizedText = text.replace(/\s+/g, ' ').trim();

  // First: Korean-style sentence enders like 다., 요!, 죠?, etc.
  let safeText = normalizedText.replace(
    /(?<=[다요죠까네군나자셨습음])([.!?])(?=\s[가-힣A-Z0-9])/g,
    '$1' + sentenceEndPlaceholder
  );

  // Second: fallback generic split for any .!? followed by space + Hangul, capital letter, or digit
  safeText = safeText.replace(
    /([.!?])(?=\s[가-힣A-Z0-9])/g,
    '$1' + sentenceEndPlaceholder
  );

  // Split and clean
  return safeText
    .split(sentenceEndPlaceholder)
    .map(s => s.trim())
    .filter(Boolean);
};
