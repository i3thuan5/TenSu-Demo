import config from "../config";

const api = {};
const self = api;

api.tensu網域 = () => ("https://tensu-hokbu.ithuan.tw/");
api.網域 = () => ("https://hts.ithuan.tw/");

api.標漢字音標 = () => `${self.tensu網域()}`;

api.語音合成 = ({ 腔口 = "", 分詞 = "" } = {}) =>
  encodeURI(`${self.網域()}語音合成?` +
    `查詢腔口=${腔口}&查詢語句=${分詞}`);

api.取得查詢函式名稱 = (專案 = config.專案()) => {
  switch (專案) {
  case "寫啥物":
    return "正規化翻譯";
  case "鬥拍字":
    return "標漢字音標";
  default:
    return null;
  }
};

api.取得查詢函式 = (專案 = config.專案()) =>
  api[self.取得查詢函式名稱(專案)];

export default api;
