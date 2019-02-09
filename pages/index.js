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
        selected: []
    }

    concatenateCountryCodes = (from = {}, to = {}) => {
        let fullList = []
        if (from.hasOwnProperty('CountryCodes')){
            fullList = fullList.concat(from.CountryCodes)
        }
        if (to.hasOwnProperty('CountryCodes')){
            fullList = fullList.concat(to.CountryCodes)
        }
        return fullList
    }

    updateSelectedList = () => {
        let {convertFrom, convertTo} = this.state
        let currencyList = CurrencySelector.currency_and_countries

        let convertFromCountries = currencyList.find(x => x.CurrencyCode == convertFrom)
        let convertToCountries = currencyList.find(x => x.CurrencyCode == convertTo)

        let listOfCountryCodes = this.concatenateCountryCodes(convertFromCountries, convertToCountries)
        this.setState({selected: listOfCountryCodes})
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
        // this.updateSelectedList()
    }
    render() {
        return (
            <div>
                <ConverterForm updateMapCountryCodes={this.updateMapCountryCodes}/>
                {/* <World /> */}
                <WorldMap selected={this.state.selected} />
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
