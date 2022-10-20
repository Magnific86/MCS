export function getDropdown(currencies) {
    let value = `<option value="">Выберите валюту</option>`;
  
    currencies.forEach(function (currency) {
      value += `<option value="${currency.toLowerCase()}">${currency}</option>`;
      console.log(currency);
    });
    console.log(value);
    return value;
  }
  