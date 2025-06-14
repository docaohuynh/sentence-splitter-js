export const splitIntoSentencesSimpleKy = (text: string): string[] => {
  const dashPlaceholder = "___NO_SPLIT_DASH___";
  const dotPlaceholder = "___NO_SPLIT_DOT___";

  // Step 1: Protect punctuation inside dashes like "-foo!-" => "-foo___NO_SPLIT_DASH___-"
  let safeText = text.replace(/-([^–—-]*[!?][^–—-]*)-/g, match =>
    match.replace(/[!?]/g, dashPlaceholder)
  );

  // Step 2: Protect abbreviation dots (e.g., "Дж." => "Дж___NO_SPLIT_DOT___")
  // Match any word (1–4 letters) ending with a period
  safeText = safeText.replace(
    /\b([А-ЯЁа-яёA-Za-z]{1,4})\./g,
    (_, abbr) => `${abbr}${dotPlaceholder}`
  );

  // Step 3: Split at sentence-ending punctuation followed by whitespace
  // Only split on unprotected .!? followed by whitespace
  const rawSentences = safeText.split(/(?<!___NO_SPLIT_DOT___)(?<=[.!?])\s+/);

  // Step 4: Restore protected characters
  return rawSentences
    .map(sentence =>
      sentence
        .replace(new RegExp(dotPlaceholder, 'g'), '.')
        .replace(new RegExp(dashPlaceholder, 'g'), '!')
        .trim()
    )
    .filter(Boolean);
}