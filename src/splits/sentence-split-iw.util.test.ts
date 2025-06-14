import { splitIntoSentencesSimpleIw } from "./sentence-split-iw.util";
import { expect, describe, it } from "bun:test";

describe("splitIntoSentencesSimpleIw", () => {
  it("expect to 5 sentences", () => {
    const input = `मुझे यकीन नहीं है कि मैं हमेशा के लिए यहां रहूंगा। मैं अवसरों और जीवंत माहौल का आनंद लेता हूं, लेकिन मैं कभी -कभी भविष्य में एक शांत जगह पर जाने के बारे में सोचता हूं, शायद एक छोटा शहर, अधिक आराम से जीवन शैली है। यह मेरी नौकरी और परिवार की योजनाओं पर निर्भर करता है।`;
    expect(splitIntoSentencesSimpleIw(input).length).toEqual(3);
  });
  it("do not split डॉ. एलेना", () => {
    const input = `उनका नाम डॉ. एलेना रोड्रिगेज था`;
    expect(splitIntoSentencesSimpleIw(input).length).toEqual(1);
  });
  it("do not split name R. Kelly", () => {
    const input = `R. Kelly`;
    expect(splitIntoSentencesSimpleIw(input).length).toEqual(1);
    const input2 = `यह तथ्य कि इसे आर. केली ने लिखा और इतने न्यूनतम लेकिन प्रभावशाली व्यवस्था के साथ निर्मित किया गया`;
    expect(splitIntoSentencesSimpleIw(input2).length).toEqual(1);
  });
  it("do not split Dr. Linh", () => {
    const input = `Dr. Linh`;
    expect(splitIntoSentencesSimpleIw(input).length).toEqual(1);
    const input2 = `वह मेरी मौसी, डॉ. लिन्ह हैं`;
    expect(splitIntoSentencesSimpleIw(input2).length).toEqual(1);
  });
  it("do not split R.R Martin", () => {
    const input = `R.R Martin`;
    expect(splitIntoSentencesSimpleIw(input).length).toEqual(1);
    const input2 = `आर.आर. मार्टिन की `;
    expect(splitIntoSentencesSimpleIw(input2).length).toEqual(1);
  });
  it("do not split R.R Martin", () => {
    const input = `R.R Martin`;
    expect(splitIntoSentencesSimpleIw(input).length).toEqual(1);
    const input2 = `आर.आर. मार्टिन की `;
    expect(splitIntoSentencesSimpleIw(input2).length).toEqual(1);
  });
  it("do not split R.R Martin", () => {
    const input = `R.R Martin`;
    expect(splitIntoSentencesSimpleIw(input).length).toEqual(1);
    const input2 = `आर.आर. मार्टिन की `;
    expect(splitIntoSentencesSimpleIw(input2).length).toEqual(1);
  });

});