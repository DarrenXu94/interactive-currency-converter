const CurrencySelector = require('../configs/CurrencySelector')

const currencyList = CurrencySelector.currency_and_countries

function findCountryFromCurrencyCode(currencyCode){
    return currencyList.find(x => x.CurrencyCode == currencyCode)
}

function findCurrencyCodeFromCountryCode(countryCode){
    return currencyList.find(cur => cur.CountryCodes.includes(countryCode))
}

findCurrencyCodeFromCountryCode('AU')

// let res = findCountryFromCurrencyCode('AED')
// console.log(res)
module.exports = {
    findCountryFromCurrencyCode,
    findCurrencyCodeFromCountryCode
}