
export const splitIntoSentencesSimple = (text: string): string[] => {
  const specificName = ['R.R', 'R', 'J']
  // List of abbreviations to exclude from splitting
  const abbreviations = [...specificName,
    'Mr', 'Mrs', 'Ms', 'Dr', 'Jr', 'Sr', 'Prof', 'etc', 'vs',
    'e.g', 'i.e', 'a.m', 'p.m', 'U.S', 'U.K', 'St', 'Ave', 'Blvd', 'Rd', 'Tn', 'Ny'
  ];


  // Build regex to detect sentence-ending punctuation NOT preceded by known abbreviations
  const abbrevPattern = abbreviations.map(a => a.replace('.', '\\.')).join('|');

  // This regex matches sentence-ending punctuation only if NOT preceded by an abbreviation
   const sentenceEndRegex = new RegExp(
    `(?<!\\b(?:${abbrevPattern}))([.?!]['")\\]]*)(?=\\s+["'”‘\\(\\[]?[A-Z0-9])`,
    'g'
  );

  const sentences: string[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = sentenceEndRegex.exec(text)) !== null) {
    const matchedText = match[1] || '';
    const endPos = match.index + matchedText.length;
    const sentence = text.slice(lastIndex, endPos).trim();
    if (sentence) sentences.push(sentence);
    lastIndex = endPos;
  }

  const remaining = text.slice(lastIndex).trim();
  if (remaining) {
    sentences.push(remaining);
  }

  return sentences;
};