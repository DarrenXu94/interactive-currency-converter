import World from '../components/World'
import WorldMap from '../components/WorldMap'
import ConverterForm from '../components/ConverterForm'
import Head from '../components/Head'
import React, { Component } from 'react';

import CurrencySelector from '../configs/CurrencySelector'

class Formatter extends Component {
    state = {
        convertFrom: '',
        convertTo: '',
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

    populateForm = (tracker) => {
        let {clickCountryFrom, clickCountryTo, clickTracker} = this.state;

        let currencyList = CurrencySelector.currency_and_countries

        let targetCountry = (clickTracker == 'to') ? clickCountryFrom : clickCountryTo

        let currencyObject = currencyList.find(cur => cur.CountryCodes.includes(targetCountry))
        try {

            let currency = currencyObject.CurrencyCode
            switch(tracker){
                case('from'): 
                    this.setState({convertFrom: currency}, () => this.updateSelectedList())
                    break;
                case('to'):
                    this.setState({convertTo: currency}, () => this.updateSelectedList())
                    break;
                default:
                    break;    
            }
        } catch(e) {
            console.log('Did not click on a country')
        }
        
    }

    onMapClick = (item) => {
        let id = item.target.id
        let {clickTracker} = this.state;
        if (clickTracker === 'from') {
            this.setState({clickCountryFrom: id, clickTracker: 'to'}, () => this.populateForm('from'))
        } else {
            this.setState({clickCountryTo: id, clickTracker: 'from'}, () => this.populateForm('to'))
        }
        
    }

    updateValue = (value, type) => {
        this.updateMapCountryCodes(value,type)
        switch (type) {
            case 'from':
                this.setState({ convertFrom: value })
                break;
            case 'to':
                this.setState({ convertTo: value })
                break;
            default:
                break;
        }
    }

    onSwapClick = () => {
        let { convertFrom, convertTo } = this.state;
        this.setState({ convertFrom: convertTo, convertTo: convertFrom })

    }
    render() {
        let {convertFrom, convertTo} = this.state
        return (
            <div>
                <ConverterForm updateMapCountryCodes={this.updateMapCountryCodes} convertFrom={convertFrom} convertTo={convertTo} 
                updateValue={this.updateValue}
                onSwapClick={this.onSwapClick}
                />
                {/* <World /> */}
                <WorldMap selected={this.state.selected} onMapClick={this.onMapClick} />
                <style jsx>
                    {` 
	                font-family:Arial;
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
