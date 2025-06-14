import { splitIntoSentencesSimpleAr } from "./sentence-split-ar.util";
import { expect, describe, it } from "bun:test";

describe("splitIntoSentencesSimpleAr", () => {
  it("expect to 5 sentences", () => {
    const input = `لست متأكدًا مما إذا كنت سأبقى هنا إلى الأبد. أنا أستمتع بالفرص والجو الحيوي ، لكنني أفكر أحيانًا في الانتقال إلى مكان أكثر هدوءًا في المستقبل ، وربما بلدة أصغر ، للحصول على نمط حياة أكثر استرخاء. ذلك يعتمد على وظيفتي وخطط الأسرة.`;
    expect(splitIntoSentencesSimpleAr(input).length).toEqual(3);
  });
  it("expect to 2 sentences", () => {
    const input = `الأمر يتعلق أيضًا بالفعالية؛ فلماذا تحفظ رقم هاتف أو قائمة مشتريات بينما يمكنك ببساطة إدخالها في هاتفك؟ بالإضافة إلى ذلك، مع حياتنا المزدحمة، من الصعب تتبع كل شيء، لذا تُعد الهواتف الذكية منقذًا للبقاء منظمين.`;
    expect(splitIntoSentencesSimpleAr(input).length).toEqual(2);
  });
});


