import { expect, describe, it } from "bun:test";
import { splitIntoSentencesSimple } from "./sentence-split.util";

describe('splitIntoSentencesSimple', () => {
 

  it('should split to 2 sentence', () => {
    const text = `The song blends reggaeton and pop, creating an infectious vibe that makes people want to dance. "Despacito" became incredibly popular worldwide, especially after Justin Bieber joined the remix version`;
    const result = splitIntoSentencesSimple(text);    
    expect(result.length).toEqual(2);
  });
  it(`should split to 4 sentence not split  'on my way!' text`, () => {
    const text = `I send messages quite frequently throughout the day, for a variety of reasons. For instance, I'll often message colleagues about work-related updates or quick questions. With friends and family, I use messaging to make plans, share interesting articles or photos, or just check in and see how they're doing. It's my go-to for anything that doesn't require an immediate, real-time conversation, like confirming appointments or sending a quick 'on my way!' text.`;
    const result = splitIntoSentencesSimple(text);    
    expect(result.length).toEqual(4);
  });
  it(`should split to 4 sentence not split Mr. Toan`, () => {
    const text = `That would be Mr. Toan, my 4th-grade science teacher. He made every lesson feel like an adventure—we built volcanoes, observed insects, and even stargazed during night classes! His enthusiasm was contagious, and that’s when I first realized learning could be fun.`;
    const result = splitIntoSentencesSimple(text);    
    expect(result.length).toEqual(3);
  });
  it(`should split to 4 sentence not split Ms. Carter `, () => {
    const text = `Ms. Carter helped me tremendously by boosting my confidence in speaking English. She always encouraged me to express my ideas, even if I made mistakes, and gave constructive feedback that helped me improve my writing and speaking skills. Her patience and creative teaching methods, like using storytelling and debates, made learning enjoyable and effective.`;
    const result = splitIntoSentencesSimple(text);    
    expect(result.length).toEqual(3);
  });
  it(`should split to 1 sentence not split U.S`, () => {
    const text = `For example, many young people enjoy anime from Japan, hip-hop from the U.S. and street food from Korea, creating a hybrid cultural experience.`;
    const result = splitIntoSentencesSimple(text);        
    expect(result.length).toEqual(1);
  });
  it(`should split to 1 sentence not split  R. Kelly, Fire by George R.R. Martin`, () => {
    let text = `it was written by R. Kelly and produced`;
    let result = splitIntoSentencesSimple(text);    
    expect(result.length).toEqual(1);

    expect(result.length).toEqual(1);
    text = `Fire by George R.R. Martin.`;
    result = splitIntoSentencesSimple(text);    
    expect(result.length).toEqual(1);
    
  });
  it(`do not split J. Robert Oppenheimer,`, () => {
    let text = `J. Robert Oppenheimer,`;
    let result = splitIntoSentencesSimple(text);    
    expect(result.length).toEqual(1);
    
  });
  it(`split with number abc. 12`, () => {
    let text = ` abc. 12 years old`;
    let result = splitIntoSentencesSimple(text);    
    expect(result.length).toEqual(2);
  });
});