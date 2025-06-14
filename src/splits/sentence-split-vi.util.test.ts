import { splitIntoSentencesSimpleVi } from "./sentence-split-vi.util";
import { expect, describe, it } from "bun:test";

describe('splitIntoSentencesSimple Vi', () => {
 

  it('should split to 3 sentence', () => {
    const text = `Đúng vậy, nhưng cần có sự cẩn trọng. Vườn thú cung cấp một môi trường an toàn  và công tác bảo tồn. Tuy nhiên, cha mẹ cũnga khi có thể, vì những nơi này mang lại một môi trường tự nhiên hơn.`;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(3);
  });
  it('should split to 2 sentence', () => {
    const text = `Tôi hiện đang sống tại Hà Nội, thủ đô của Việt Nam. Đây là một thành phố sôi động và nhộn nhịp với sự kết hợp giữa văn hóa hiện đại và truyền thống, khiến nơi đây trở thành một nơi thú vị để sinh sống.`;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(2);
  });
  it('do not split này... chà', () => {
    const text = `Cảm nhận của tôi về chuyến đi này... chà`;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(1);
  });
  it('do not split này là?" trước khi', () => {
    const text = `điều này là?" trước khi chuyển sang phần hard rock `;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(1);
  });
  it('split to 2 sentences ."', () => {
    const text = `ake you cry." Bài hát sau đó chuyển sang`;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(2);
  });
  it('do not splits R. Kelly "', () => {
    const text = `by R. Kelly `;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(1);
  });
  it('split this to 2 sentences ', () => {
    const text = `muốn nhảy múa. "Viet nam" `;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(2);
  });
  it('do not split M. En ', () => {
    const text = `M. Lee" `;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(1);
  });
  it('do not split em. En ', () => {
    const text = `em. Lee" `;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(2);
  });

  it('split botaniques. Çam nhan ', () => {
    const text = `botaniques. Ça" `;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(2);
  });
  it('do not split Sra. Carter ', () => {
    const text = `Sra. Carter" `;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(1);
  });
  it('do not split Dra. Elena ', () => {
    const text = `Dra. Elena" `;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(1);
  });
  it('do not split J. Robert ', () => {
    let text = `J. Robert" `;
    let result = splitIntoSentencesSimpleVi(text);  
    expect(result.length).toEqual(1);
  
    text = `z. Patel" `;
    result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(1);
  });
  it('split it frymëzues. Është ', () => {
    const text = `frymëzues. Është" `;
    const result = splitIntoSentencesSimpleVi(text);    
    expect(result.length).toEqual(2);
  });
  
});
