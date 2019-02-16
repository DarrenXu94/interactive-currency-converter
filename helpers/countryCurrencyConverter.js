const CurrencySelector = require('../configs/CurrencySelector')

const currencyList = CurrencySelector.currency_and_countries

function findCountryFromCurrencyCode(currencyCode){
    return currencyList.find(x => x.CurrencyCode == currencyCode)
}

function findCurrencyCodeFromCountryCode(countryCode){
    return currencyList.find(cur => cur.CountryCodes.includes(countryCode))
}

function concatenateCountryCodes (from = {}, to = {}) {
    let fullList = []
    if (from.hasOwnProperty('CountryCodes')){
        fullList = fullList.concat(from.CountryCodes)
    }
    if (to.hasOwnProperty('CountryCodes')){
        fullList = fullList.concat(to.CountryCodes)
    }
    return fullList
}

module.exports = {
    findCountryFromCurrencyCode,
    findCurrencyCodeFromCountryCode,
    concatenateCountryCodes
}