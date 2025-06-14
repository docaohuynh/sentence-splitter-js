export enum LanguageCode {
    EN = 'en',
    VI = 'vi',
    JA = 'ja',
    ZH_CN = 'zh-CN',
    ZH_TW = 'zh-TW',
    KO = 'ko',
    TH = 'th',
    KM = 'km',
    IT = 'it',
    KY = 'ky',
    RU = 'ru',
    UR = 'ur',
    ID = 'id',
    ES = 'es',
    DE = 'de',
    FR = 'fr',
    UZ = 'uz',
    SQ = 'sq',
    LO = 'lo',
    MY = 'my',
    MS = 'ms',
    HI = 'hi',
    AR = 'ar',
    IW = 'iw',
    FA = 'fa',
    PT = 'pt'
}
export interface LanguageModel {
    code: LanguageCode;
    name: string;
}