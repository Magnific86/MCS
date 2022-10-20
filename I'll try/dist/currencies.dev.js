"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDropdown = getDropdown;

function getDropdown(currencies) {
  var value = "<option value=\"\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043B\u044E\u0442\u0443</option>";
  currencies.forEach(function (currency) {
    value += "<option value=\"".concat(currency.toLowerCase(), "\">").concat(currency, "</option>");
    console.log(currency);
  });
  console.log(value);
  return value;
}