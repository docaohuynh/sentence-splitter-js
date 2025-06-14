import { splitIntoSentencesSimpleLo } from "./sentence-split-lo.util";
import { expect, describe, it } from "bun:test";

describe("splitIntoSentencesSimpleLo", () => {
  it("expect to 3 sntences", () => {
    const input = `ຂ້ອຍບໍ່ແນ່ໃຈວ່າຂ້ອຍຈະຢູ່ທີ່ນີ້ຕະຫຼອດໄປ. ຂ້ອຍມີຄວາມສຸກກັບໂອກາດແລະບັນຍາກາດທີ່ມີຊີວິດຊີວາ, ແຕ່ບາງຄັ້ງຂ້ອຍຄິດກ່ຽວກັບການຍ້າຍໄປບ່ອນທີ່ງຽບສະຫງົບໃນອະນາຄົດ, ບາງທີເປັນເມືອງນ້ອຍ, ອາດຈະມີຊີວິດທີ່ຜ່ອນຄາຍ. ມັນຂື້ນກັບວຽກແລະແຜນການຄອບຄົວຂອງຂ້ອຍ.`;
    expect(splitIntoSentencesSimpleLo(input).length).toEqual(3);
  });
  
});