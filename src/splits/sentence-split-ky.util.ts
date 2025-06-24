export const splitIntoSentencesSimpleKy = (text: string): string[] => {
  const dashPlaceholder = "___NO_SPLIT_DASH___";
  const dotPlaceholder = "___NO_SPLIT_DOT___";

  // Step 1: Protect punctuation inside dashes
  let safeText = text.replace(/-([^–—-]*[!?][^–—-]*)-/g, match =>
    match.replace(/[!?]/g, dashPlaceholder)
  );

  // Step 2: Protect initials like "R. Kelly", "R.R. Kelly"
  safeText = safeText.replace(
    /\b([A-ZА-ЯЁ])\.(?=\s([A-ZА-ЯЁ][a-zа-яё]+))/g,
    (_, initial) => `${initial}${dotPlaceholder}`
  );

  // Step 3: Protect abbreviations (1–4 chars) if not followed by capital word (i.e. not sentence)
  safeText = safeText.replace(
    /\b([А-ЯЁа-яёA-Za-z]{1,4})\.(?!\s[А-ЯЁA-Z])/g,
    (_, abbr) => `${abbr}${dotPlaceholder}`
  );

  // Step 4: Split at sentence-ending punctuation followed by space + capital (excluding protected)
  const rawSentences = safeText.split(/(?<!___NO_SPLIT_DOT___)[.!?]\s+(?=[А-ЯЁA-Z])/);

  // Step 5: Restore placeholders
  return rawSentences
    .map(sentence =>
      sentence
        .replace(new RegExp(dotPlaceholder, 'g'), '.')
        .replace(new RegExp(dashPlaceholder, 'g'), '!')
        .trim()
    )
    .filter(Boolean);
};
