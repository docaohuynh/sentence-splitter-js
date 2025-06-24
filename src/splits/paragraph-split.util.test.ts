
import { expect, describe, it } from "bun:test";
import { splitTextByParagraphAndSentenceWithSpacing } from "./paragraph-split.util";

describe('splitTextByParagraphAndSentenceWithSpacing', () => {
  it('should split a single paragraph into individual sentences with spacing', () => {
    const input = `This is sentence one. This is sentence two.`;
    const expected = `This is sentence one.\n\nThis is sentence two.`;
    expect(splitTextByParagraphAndSentenceWithSpacing(input)).toBe(expected);
  });

  it('should split multiple paragraphs correctly with extra spacing', () => {
    const input = `First paragraph sentence one. First paragraph sentence two.

Second paragraph sentence one. Second paragraph sentence two.`;
    
    const expected = `First paragraph sentence one.\n\nFirst paragraph sentence two.\n\n\nSecond paragraph sentence one.\n\nSecond paragraph sentence two.`;

    expect(splitTextByParagraphAndSentenceWithSpacing(input)).toBe(expected);
  });

  it('should handle trailing whitespace and multiple blank lines', () => {
    const input = `  Sentence one.  Sentence two.  


  Sentence three.`;
    
    const expected = `Sentence one.\n\nSentence two.\n\n\nSentence three.`;

    expect(splitTextByParagraphAndSentenceWithSpacing(input)).toBe(expected);
  });

  it('should return empty string if input is empty', () => {
    expect(splitTextByParagraphAndSentenceWithSpacing('')).toBe('');
  });

  it('should handle no punctuation gracefully', () => {
    const input = `This is one paragraph without punctuation`;
    const expected = `This is one paragraph without punctuation`;
    expect(splitTextByParagraphAndSentenceWithSpacing(input)).toBe(expected);
  });
});
