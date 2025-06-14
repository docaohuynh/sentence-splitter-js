export const splitIntoSentencesSimpleVi = (text: string): string[] => {
  // Minimal abbreviations for Vietnamese; adjust based on context
  const specificNames = ['V.V', 'T.T', 'R', 'TP', 'R.R', 'J'];
  const abbreviations = [...specificNames, 'v.v',
    'Mr', 'Mrs', 'Ms', 'Dr', 'Jr', 'Sr', 'Prof', 'etc', 'vs',
    'e.g', 'i.e', 'a.m', 'p.m', 'U.S', 'U.K', 'St', 'Ave', 'Blvd', 'Rd', 'M',
    'sra', 'Sra', 'Dra', 'Znj', 'Z', 'znj', 'z'
  ];

  // Build regex to avoid splitting on abbreviations
  const abbrevPattern = abbreviations.map(a => a.replace('.', '\\.')).join('|');

  // Regex to match sentence-ending punctuation, excluding ellipses, with proper sentence boundaries
  const sentenceEndRegex = new RegExp(
    `(?<!\\b(?:${abbrevPattern}))(?<!\\.\\.)([.?!]['"”’)?\\]]*\\s*)(?=[A-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐÇË]|["'”’][A-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ])`,
    'g'
  );

  const sentences: string[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = sentenceEndRegex.exec(text)) !== null) {
    // Ensure match[1] is defined before accessing its length
    const matchedText = match[1] || '';
    const endPos = match.index + matchedText.length;
    const sentence = text.slice(lastIndex, endPos).trim();
    if (sentence) sentences.push(sentence);
    lastIndex = endPos; // Move past the matched punctuation and spaces
  }

  const remaining = text.slice(lastIndex).trim();
  if (remaining) {
    sentences.push(remaining);
  }

  return sentences;
};
