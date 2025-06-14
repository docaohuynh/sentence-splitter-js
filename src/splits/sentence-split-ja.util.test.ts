import { splitIntoSentencesSimpleJa } from "./sentence-split-ja.util";
import { expect, describe, it } from "bun:test";

describe("splitIntoSentencesSimpleJp", () => {
  it("expect to 5 sntences", () => {
    const input = `それは私が以前に検討したことではありませんが、機会があった場合、私はそれを真剣に考慮すると思います。私の現在のキャリアの願望は他の場所にありますが、私は図書館で働くことの魅力を見ることができます。知識に囲まれ、人々が情報やリソースにアクセスできるようにすることは非常にやりがいがあります。学生から研究者、一般読者まで、多様な個人との多くの相互作用が含まれると思います。だから、はい、もしチャンスがそれ自体を示したなら、私はそれを探求することにオープンだろう。`;
    expect(splitIntoSentencesSimpleJa(input).length).toEqual(5);
  });
  
});