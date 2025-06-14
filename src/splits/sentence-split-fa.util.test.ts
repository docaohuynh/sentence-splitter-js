import { splitIntoSentencesSimpleFa } from "./sentence-split-fa.util";
import { expect, describe, it } from "bun:test";

describe("splitIntoSentencesSimpleFa", () => {
  it("expect to 3 sentences", () => {
    const input = `من مطمئن نیستم که آیا من برای همیشه در اینجا خواهم ماند. من از فرصت ها و فضای پر جنب و جوش لذت می برم ، اما بعضی اوقات فکر می کنم در آینده ، ممکن است یک شهر کوچکتر ، به یک مکان ساکت تر حرکت کنم تا یک سبک زندگی آرام تر داشته باشم. این به برنامه های شغلی و خانواده من بستگی دارد.`;
    expect(splitIntoSentencesSimpleFa(input).length).toEqual(3);
  });
  
});