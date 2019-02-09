import React, { Component } from 'react';
// import Currency from '../api/Currency'
var axios = require("axios");

import AutocompleteWrapper from './AutoCompleteWrapper'
import StepConvertor from './StepConvertor'
import PropTypes from 'prop-types';



class ConverterForm extends Component {

    state = {
        apiResponse: ''
    }


    fetchConversionData = async (from, to) =>{
        let url;
        if (process.env.NODE_ENV === 'development'){
            url = `/convert/${from}/${to}`
        } else {
            url = `https://currency-convertor.netlify.com/.netlify/functions/requestSample?base=${from}&target=${to}`
        }
        return await axios.get(url)
    }

    requestConversion = async () => {
        let { convertFrom, convertTo } = this.props;
        if (convertFrom !== '' && convertTo !== '') {
            let data = await this.fetchConversionData(convertFrom, convertTo)
            console.log(data)
            this.setState({ apiResponse: JSON.stringify(data.data) })
        }

    }

    onChange = (value, type) => {
        this.props.updateValue(value, type);

    }

    onSelect = (value, type) => {
        this.props.updateValue(value, type);
    }

    render() {
        let {apiResponse} = this.state;
        let { convertFrom, convertTo } = this.props;
        let { onChange, onSelect } = this
        return (
            <div>
                <h1>
                    Convert currencies live!
                </h1>
                <label>Choose a currency to convert from</label>
                <br />
                <AutocompleteWrapper onSelectParent={onSelect} value={convertFrom} onChange={onChange} type={'from'} />
                <br />

                <br />

                <label>Choose a currency to convert to</label>
                <br />
                <AutocompleteWrapper onSelectParent={onSelect} value={convertTo} onChange={onChange} type={'to'} />
                <br />
                <br />

                <button onClick={this.requestConversion}>Convert</button>

                <button onClick={this.props.onSwapClick}>Swap</button>

                <h2>Converting {convertFrom} to {convertTo}</h2>
                {apiResponse !== '' &&
                    <StepConvertor convertFrom={convertFrom} convertTo={convertTo} apiResponse={apiResponse} />
                }

            </div>
        );
    }
}

export default ConverterForm;

ConverterForm.propTypes = {
    updateMapCountryCodes: PropTypes.func
}