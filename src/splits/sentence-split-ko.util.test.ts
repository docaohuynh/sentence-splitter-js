import { splitIntoSentencesSimpleKo } from "./sentence-split-ko.util";
import { expect, describe, it } from "bun:test";

describe("splitIntoSentencesSimpleKo", () => {
  it("actual", () => {
    const input = "직장 생활 균형을 달성하려면 지정된 근무 시간 및 개인 시간과 같은 경계를 설정해야합니다. 많은 사람들이 작업을 효율적으로 우선 순위를 정하고 책임을 위임하며 생산성 도구를 사용하여 소진을 피합니다. 고용주는 또한 유연한 일정 또는 원격 작업 옵션을 제공하여 역할을합니다. 궁극적으로 취미, 운동 및 가족 시간을 유지하면 개인이 두 영역 모두에서 재충전하고 동기를 유지하는 데 도움이됩니다.";
    expect(splitIntoSentencesSimpleKo(input).length).toEqual(4);
  });
  it("actual", () => {
    const input = "직장 생활 균형을 달성하려면 지정된 근무 시간 및 개인 시간과 같은 경계를 설정해야합니다. 많은 사람들이 작업을 효율적으로 우선 순위를 정하고 책임을 위임하며 생산성 도구를 사용하여 소진을 피합니다.";
    expect(splitIntoSentencesSimpleKo(input).length).toEqual(2);
    expect(splitIntoSentencesSimpleKo(input)[0]).toEqual('직장 생활 균형을 달성하려면 지정된 근무 시간 및 개인 시간과 같은 경계를 설정해야합니다.');
  });
  
});