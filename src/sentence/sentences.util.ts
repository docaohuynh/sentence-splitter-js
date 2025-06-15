import type { LanguageCode } from "../models/language.model";
import { splitIntoSentencesSimple, splitIntoSentencesSimpleAr, splitIntoSentencesSimpleEs, splitIntoSentencesSimpleFa, splitIntoSentencesSimpleHe, splitIntoSentencesSimpleJa, splitIntoSentencesSimpleKo, splitIntoSentencesSimpleKy, splitIntoSentencesSimpleLo, splitIntoSentencesSimpleUr, splitIntoSentencesSimpleVi } from "../splits";


export const splitSentenceByLanguge = (sentence: string, languageCode: LanguageCode): string[] => {
    switch (languageCode) {
      case 'vi':
        return splitIntoSentencesSimpleVi(sentence)
      case 'ko':
        return splitIntoSentencesSimpleKo(sentence)
      case 'ja':
      case 'zh-CN':
      case 'zh-TW':
        return splitIntoSentencesSimpleJa(sentence)
      case 'th':
      case 'km':
      case 'my':
        console.log(`not support Thai, Khmer, Myanmar (Burmese) split`);
        return [sentence]
      case 'lo':
        return splitIntoSentencesSimpleLo(sentence)
      case 'it':
      case 'pt':
      case 'fr':
      case 'sq':
        return splitIntoSentencesSimpleVi(sentence)
      case 'ky':
        return splitIntoSentencesSimpleKy(sentence)
      case 'ur':
        return splitIntoSentencesSimpleUr(sentence)
      case 'ar':
        return splitIntoSentencesSimpleAr(sentence)
      case 'hi':
      case 'he':
        return splitIntoSentencesSimpleHe(sentence)
      case 'fa':
        return splitIntoSentencesSimpleFa(sentence)
      case 'es':
        return splitIntoSentencesSimpleEs(sentence)
      case 'id':
      case 'de':
      case 'uz':
      case 'ms':
      case 'ru':
        return splitIntoSentencesSimple(sentence)
      default:
        return splitIntoSentencesSimple(sentence)
    }
}