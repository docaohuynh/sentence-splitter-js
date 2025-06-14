import { splitIntoSentencesSimpleEs } from "./sentence-split-es.util";
import { expect, describe, it } from "bun:test";

describe("splitIntoSentencesSimpleEs", () => {
  it("expect to 2 sntences", () => {
    const input = `Todavía no me he ido porque los viajes internacionales pueden ser caros y lentos, pero con 2025 siendo un año de nuevas tendencias de viaje, espero planificar un viaje pronto. ¡Definitivamente está en lo alto de mi lista!`;
    expect(splitIntoSentencesSimpleEs(input).length).toEqual(2);
  });
  it("do not split la Sra. Huong", () => {
    const input = `la Sra. Huong`;
    expect(splitIntoSentencesSimpleEs(input).length).toEqual(1);
  });
  it("split this into 2 sentences ", () => {
    const input = `mundo profesional. Él cree que vestirse`;
    expect(splitIntoSentencesSimpleEs(input).length).toEqual(2);
  });
  it("split this into 2 sentences ", () => {
    const input = `especialmente los adolescentes. "Baby" fue enormemente popular cuando salió.`;
    expect(splitIntoSentencesSimpleEs(input).length).toEqual(2);
  });
  it('do not split J. Robert ', () => {
    const text = `J. Robert" `;
    const result = splitIntoSentencesSimpleEs(text);    
    expect(result.length).toEqual(1);
  });
  
});