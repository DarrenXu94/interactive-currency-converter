import React, { Component } from 'react';
import WorldMap from '../components/WorldMap'
import countryCurrencyConverter from '../helpers/countryCurrencyConverter'
import ConverterForm from '../components/ConverterForm'

class Information extends Component {
    state = {
        convertFrom: '',            // Currency Code
        convertTo: '',              // Currency Code
        selected: [],               // To let world map know which countries to glow
        clickCountryFrom: null,     // For world map, CountryCode
        clickCountryTo: null,       // For world map. CountryCode
        clickTracker: 'from'
    }

    // Form Related
    onSwapClick = () => {
        let { convertFrom, convertTo } = this.state;
        this.setState({ convertFrom: convertTo, convertTo: convertFrom })
    }

    // End Form Related

    // Form Related called from map

    updateMapCountryCodes = (currency, type) => {
        (type === 'from') ? this.setState({convertFrom: currency}, () => this.updateSelectedList()) : this.setState({convertTo: currency}, () => this.updateSelectedList())
    }
    // Finds currencyCode based on the countryCode clicked and calls update function
    populateForm = (tracker) => {
        let {clickCountryFrom, clickCountryTo, clickTracker} = this.state;
        let targetCountry = (clickTracker == 'to') ? clickCountryFrom : clickCountryTo
        let currencyObject = countryCurrencyConverter.findCurrencyCodeFromCountryCode(targetCountry)
        let currency = currencyObject.CurrencyCode;

        this.updateMapCountryCodes(currency, tracker)
    }

    // Generic function that is called to update selected array with all countries that need to glow
    updateSelectedList = () => {
        let {convertFrom, convertTo} = this.state

        let convertFromCountries = countryCurrencyConverter.findCountryFromCurrencyCode(convertFrom)
        let convertToCountries = countryCurrencyConverter.findCountryFromCurrencyCode(convertTo)

        let listOfCountryCodes = countryCurrencyConverter.concatenateCountryCodes(convertFromCountries, convertToCountries)
        this.setState({selected: listOfCountryCodes})
    }
    // End Form Related

    // World map
    onMapClick = (item) => {
        let id = item.target.id
        let { clickTracker } = this.state;
        if (id !== '') {
            if (clickTracker === 'from') {
                this.setState({clickCountryFrom: id, clickTracker: 'to'}, () => this.populateForm('from'))
            } else {
                this.setState({clickCountryTo: id, clickTracker: 'from'}, () => this.populateForm('to'))
            }
        }
    }
    // End World map

    render() {
        let { selected, convertFrom, convertTo, clickTracker } = this.state
        return (
            <div>
                <ConverterForm 
                    convertFrom={convertFrom} 
                    convertTo={convertTo} 
                    updateValue={this.updateMapCountryCodes}
                    onSwapClick={this.onSwapClick}
                />
                <WorldMap selected={selected} onMapClick={this.onMapClick} clickTracker={clickTracker}/>
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

export default Information;