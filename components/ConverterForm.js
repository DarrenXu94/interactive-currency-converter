import React, { Component } from 'react';
import Currency from '../api/Currency'

import AutocompleteWrapper from './AutoCompleteWrapper'


class ConverterForm extends Component {

    state ={
        convertFrom: '',
        convertTo: ''
    }

    requestConversion = () => {
        let {convertFrom, convertTo} = this.state;
        if (convertFrom !== '' && convertTo !== ''){
            let res = Currency(convertFrom, convertTo)
            console.log(res)
        }
    }

    onSelectConvertFrom = (value) => {
        console.log(value)
        this.setState({convertFrom: value})
    }

    onSelectConvertTo = (value) => {
        console.log(value)
        this.setState({convertTo: value})
        this.requestConversion()

    }

    render() {
        let { convertFrom, convertTo } = this.state
        return (
            <div>
                <h1>
                    Convert currencies live!
                </h1>
                <label>Choose a currency to convert from</label>
                <br />
                <AutocompleteWrapper onSelectParent={this.onSelectConvertFrom} />
                <br />

                <br />

                <label>Choose a currency to convert to</label>
                <br />
                <AutocompleteWrapper onSelectParent={this.onSelectConvertTo} />
                <br />

                <h2>Converting {convertFrom} to {convertTo}</h2>

            </div>
        );
    }
}

export default ConverterForm;