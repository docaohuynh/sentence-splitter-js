// Spanish
export const splitIntoSentencesSimpleEs = (text: string): string[] => {
   // List of abbreviations that should not trigger a split
  const protectedAbbreviations = ['Sr.', 'Sra.', 'Dr.', 'Dra.', 'Ing.', 'Lic.', 'Prof.', 'R.', 'SM.', 'J.'];

  // Temporarily replace protected abbreviations with placeholders
  let tempText = text;
  protectedAbbreviations.forEach((abbr, index) => {
    const placeholder = `__ABBR_${index}__`;
    const abbrRegex = new RegExp(abbr.replace('.', '\\.'), 'g');
    tempText = tempText.replace(abbrRegex, placeholder);
  });

  // Split after punctuation marks that typically end sentences
  const sentenceEndRegex = /(?<=[.!?])\s+(?=["“”'«»]*[A-ZÁÉÍÓÚÜÑ¡¿])/g;
  let sentences = tempText.split(sentenceEndRegex).map(s => s.trim());

  // Restore the original abbreviations
  sentences = sentences.map(sentence => {
    protectedAbbreviations.forEach((abbr, index) => {
      const placeholder = `__ABBR_${index}__`;
      sentence = sentence.replace(new RegExp(placeholder, 'g'), abbr);
    });
    return sentence;
  });

  return sentences.filter(sentence => sentence.length > 0);
}