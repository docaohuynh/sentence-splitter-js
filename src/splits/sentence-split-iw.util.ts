export const splitIntoSentencesSimpleIw = (text: string): string[] => {
  // List of known abbreviations (add more as needed)
  const abbreviations = ['डॉ', 'R', 'आर', 'डॉ', 'Dr', 'आर.आर', 'R.R', 'jr'];

  // Temporarily replace periods in known abbreviations with a placeholder
  let protectedText = text;
  for (const abbr of abbreviations) {
    const regex = new RegExp(`${abbr}\\.`, 'g');
    protectedText = protectedText.replace(regex, `${abbr}<DOT>`);
  }

  // Regex to split at sentence-ending punctuation followed by whitespace and non-whitespace
  const sentenceEndRegex = /(?<=[।.?!])\s+(?=[^\s])/g;
  let sentences = protectedText.split(sentenceEndRegex).map(s => s.trim());

  // Restore periods in abbreviations
  sentences = sentences.map(s => s.replace(/<DOT>/g, '.'));

  return sentences.filter(sentence => sentence.length > 0);
}