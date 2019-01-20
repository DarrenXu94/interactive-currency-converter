import React, { Component } from 'react';
import Currency from '../api/Currency'

import AutocompleteWrapper from './AutoCompleteWrapper'
import StepConvertor from './StepConvertor'

class ConverterForm extends Component {

    state = {
        convertFrom: '',
        convertTo: '',
        apiResponse: ''
    }

    requestConversion = () => {
        let { convertFrom, convertTo } = this.state;
        if (convertFrom !== '' && convertTo !== '') {
            let res = Currency(convertFrom, convertTo)
            this.setState({ apiResponse: res })
        }
    }

    onSelectConvertFrom = (value) => {
        console.log(value)
        this.setState({ convertFrom: value })
    }

    onSelectConvertTo = (value) => {
        console.log(value)
        this.setState({ convertTo: value })

    }

    render() {
        let { convertFrom, convertTo, apiResponse } = this.state
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
                <br />

                <button onClick={this.requestConversion}>Convert</button>

                <h2>Converting {convertFrom} to {convertTo}</h2>
                {apiResponse !== '' &&
                    <StepConvertor convertFrom={convertFrom} convertTo={convertTo} apiResponse={apiResponse} />
                }

            </div>
        );
    }
}

export default ConverterForm;