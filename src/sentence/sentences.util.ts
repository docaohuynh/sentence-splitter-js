import type { LanguageCode } from "../models/language.model";
import { splitIntoSentencesSimpleAr } from "../splits/sentence-split-ar.util";
import { splitIntoSentencesSimpleEs } from "../splits/sentence-split-es.util";
import { splitIntoSentencesSimpleFa } from "../splits/sentence-split-fa.util";
import { splitIntoSentencesSimpleHi } from "../splits/sentence-split-hi.util";
import { splitIntoSentencesSimpleJa } from "../splits/sentence-split-ja.util";
import { splitIntoSentencesSimpleKo } from "../splits/sentence-split-ko.util";
import { splitIntoSentencesSimpleKy } from "../splits/sentence-split-ky.util";
import { splitIntoSentencesSimpleLo } from "../splits/sentence-split-lo.util";
import { splitIntoSentencesSimpleUr } from "../splits/sentence-split-ur.util";
import { splitIntoSentencesSimpleVi } from "../splits/sentence-split-vi.util";
import { splitIntoSentencesSimple } from "../splits/sentence-split.util";

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
      case 'ru':
        return splitIntoSentencesSimpleKy(sentence)
      case 'ur':
        return splitIntoSentencesSimpleUr(sentence)
      case 'ar':
        return splitIntoSentencesSimpleAr(sentence)
      case 'hi':
      case 'he':
        return splitIntoSentencesSimpleHi(sentence)
      case 'fa':
        return splitIntoSentencesSimpleFa(sentence)
      case 'es':
        return splitIntoSentencesSimpleEs(sentence)
      case 'id':
      case 'de':
      case 'uz':
      case 'ms':
        return splitIntoSentencesSimple(sentence)
      default:
        return splitIntoSentencesSimple(sentence)
    }
}