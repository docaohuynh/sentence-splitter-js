export const splitIntoSentencesSimpleJa = (text: string): string[] => {
  // 日本語の句点（。）や疑問符（？）、感嘆符（！）で文を区切る
  const sentenceEndRegex = /(?<=[。！？])\s*/;
  // 文末句点のあとで分割し、トリムして空でない文だけ残す
  return text.split(sentenceEndRegex).map(s => s.trim()).filter(s => s.length > 0);
}