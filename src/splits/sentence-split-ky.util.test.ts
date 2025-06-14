import { splitIntoSentencesSimpleKy } from "./sentence-split-ky.util";
import { expect, describe, it } from "bun:test";

describe("splitIntoSentencesSimpleKy", () => {
  it("expect to 1 sentences", () => {
    const input = `Бир аз онлайн изилдөөлөрдөн кийин жана бир нече YouTube Tutorials көрүү - Интернеттен бата бериңиз! - Ал диск куру же балким мотор менен көйгөй болушу мүмкүн деп шектелүүдө.`;
    expect(splitIntoSentencesSimpleKy(input).length).toEqual(1);
  });

  it("expect split into 2 sentences", () => {
    const input = `Плюс, я могу выбрать музыку! Тем не менее, быть пассажиром - это хорошо в долгих поездках, когда я могу расслабиться или взять на пейзаж.`;
    expect(splitIntoSentencesSimpleKy(input).length).toEqual(2);
  });
  it("do not split name", () => {
    const input = `R. Kelly`;
    expect(splitIntoSentencesSimpleKy(input).length).toEqual(1);
  });

  it("do not split name", () => {
    const input = `R.R. Kelly`;
    expect(splitIntoSentencesSimpleKy(input).length).toEqual(1);
  });
  it("split this EV. ", () => {
    const input = `высокопроизводительный EV. Моя главная причина`;
    console.log(splitIntoSentencesSimpleKy(input));
    expect(splitIntoSentencesSimpleKy(input).length).toEqual(2);
  });
  
});