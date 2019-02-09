import World from '../components/World'
import WorldMap from '../components/WorldMap'
import ConverterForm from '../components/ConverterForm'
import Head from '../components/Head'
import React, { Component } from 'react';

import CurrencySelector from '../configs/CurrencySelector'

class Formatter extends Component {
    state = {
        convertFrom: null,
        convertTo: null,
        selected: [],
        countryNames: [],
        clickCountryFrom: null,
        clickCountryTo: null,
        clickTracker: 'from'
    }

    concatenateCountryCodes = (from = {}, to = {}) => {
        let fullList = []
        let countryNames = []
        if (from.hasOwnProperty('CountryCodes')){
            fullList = fullList.concat(from.CountryCodes)
            countryNames = countryNames.concat(from.CountriesUsing)
        }
        if (to.hasOwnProperty('CountryCodes')){
            fullList = fullList.concat(to.CountryCodes)
            countryNames = countryNames.concat(to.CountriesUsing)
        }

        return {fullList, countryNames}
    }

    updateSelectedList = () => {
        let {convertFrom, convertTo} = this.state
        let currencyList = CurrencySelector.currency_and_countries

        let convertFromCountries = currencyList.find(x => x.CurrencyCode == convertFrom)
        let convertToCountries = currencyList.find(x => x.CurrencyCode == convertTo)

        let listOfCountryCodes = this.concatenateCountryCodes(convertFromCountries, convertToCountries)
        this.setState({selected: listOfCountryCodes.fullList, countryNames: listOfCountryCodes.countryNames})
    }

    updateMapCountryCodes = (value,type) => {
        switch (type) {
            case 'from':
                this.setState({ convertFrom: value }, () => this.updateSelectedList())
                break;
            case 'to':
                this.setState({ convertTo: value }, () => this.updateSelectedList())
                break;
            default:
                break;
        }
    }

    populateForm = () => {
        let {clickCountryFrom, clickCountryTo, clickTracker} = this.state;
        console.log(clickCountryFrom, clickCountryTo)

        let currencyList = CurrencySelector.currency_and_countries

        let targetCountry = (clickTracker == 'to') ? clickCountryFrom : clickCountryTo

        let currencyObject = currencyList.find(cur => cur.CountryCodes.includes(targetCountry))
        let currency = currencyObject.CurrencyCode
        console.log(currency)


    }

    onMapClick = (item) => {
        let id = item.target.id
        console.log(id)
        let {clickCountryFrom, clickCountryTo, clickTracker} = this.state;
        if (clickTracker === 'from') {
            this.setState({clickCountryFrom: id, clickTracker: 'to'}, () => this.populateForm())
        } else {
            this.setState({clickCountryTo: id, clickTracker: 'from'}, () => this.populateForm())
        }
        
    }

    render() {
        return (
            <div>
                <ConverterForm updateMapCountryCodes={this.updateMapCountryCodes} />
                {/* <World /> */}
                <WorldMap selected={this.state.selected} onMapClick={this.onMapClick} />
                <style jsx>
                    {` 
        font-family: 'PT Sans', sans-serif;
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media(max-width: 960px) {
            display: block;

        }
    `}
                </style>
            </div>
        );
    }
}


export default () => <div>
    <Head />
    <Formatter />

</div>
