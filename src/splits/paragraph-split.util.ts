import { LanguageCode } from "../models/language.model";
import { splitSentenceByLanguge } from "../sentence/sentences.util";

export const splitByParagraph = (text: string): string[] => {
  return text
    .trim()
    .split(/\n\s*\n+/) // split by one or more empty lines
    .map(paragraph => paragraph.trim()) // remove leading/trailing whitespace
    .filter(paragraph => paragraph.length > 0); // remove empty strings
}


export const splitTextByParagraphAndSentenceWithSpacing = (text: string): string => {
  const paragraphs = text.trim().split(/\n\s*\n+/);

  const result = paragraphs.map(paragraph => {
    const sentences = splitSentenceByLanguge(paragraph, LanguageCode.EN);
    return sentences.map(s => s.trim()).join('\n\n'); // blank line after each sentence
  });

  return result.join('\n\n\n'); // extra blank line between paragraphs
}