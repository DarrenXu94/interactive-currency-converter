import React, { Component } from 'react';

import AutocompleteWrapper from './AutoCompleteWrapper'
import StepConvertor from './StepConvertor'

import FetchConversion from '../api/FetchConversion'

class ConverterForm extends Component {
    state = {
        rate: 1,
        fromValue: 1,
        toValue: ''
    }

    requestConversion = async () => {
        let { convertFrom, convertTo } = this.props;
        let { fromValue } = this.state;

        if (convertFrom !== '' && convertTo !== '') {
            let data = await FetchConversion(convertFrom, convertTo)
            console.log(data)
            let rate = JSON.stringify(data.data.rates[convertTo])
            let resultToValue = parseFloat(fromValue) * parseFloat(rate)
            this.setState({ rate, toValue: resultToValue })
        }
    }

    onSelect = (value, type) => {
        this.props.updateValue(value, type);
    }

    handleInputChange = (event) => {
        let calculatedToValue = event.target.value * this.state.rate
        this.setState({fromValue: event.target.value, toValue: calculatedToValue})
    }

    render() {
        let { toValue, fromValue } = this.state;
        let { convertFrom, convertTo } = this.props;
        let { onSelect } = this
        return (
            <div>
                <h1>
                    Convert currencies live!
                </h1>
                <label>Choose a currency to convert from</label>
                <br />
                <AutocompleteWrapper onSelectParent={onSelect} value={convertFrom} onChange={onSelect} type={'from'} />
                <br />
                <br />
                <label>Choose a currency to convert to</label>
                <br />
                <AutocompleteWrapper onSelectParent={onSelect} value={convertTo} onChange={onSelect} type={'to'} />
                <br />
                <br />
                <button className="myButton" onClick={this.requestConversion}>Convert</button>

                <button className="myButton" onClick={this.props.onSwapClick}>Swap</button>

                <h2>Converting {convertFrom} to {convertTo}</h2>
                <StepConvertor 
                    convertFrom={convertFrom} 
                    convertTo={convertTo} 
                    handleChange={this.handleInputChange}
                    toValue={toValue}
                    fromValue={fromValue}
                />
                <style jsx>
                    {`
                    text-align: center;                        
                        .myButton {
                            -moz-box-shadow: 0px 1px 0px 0px #1c1b18;
                            -webkit-box-shadow: 0px 1px 0px 0px #1c1b18;
                            box-shadow: 0px 1px 0px 0px #1c1b18;
                            background-color:#7396ae;
                            -moz-border-radius:15px;
                            -webkit-border-radius:15px;
                            border-radius:15px;
                            border:2px solid #333029;
                            display:inline-block;
                            cursor:pointer;
                            color:#ffffff;
                            font-family:Arial;
                            font-size:14px;
                            font-weight:bold;
                            padding:12px 16px;
                            text-decoration:none;
                            text-shadow:0px 1px 0px #525252;
                        }
                        .myButton:hover {
                            background-color:#91b9d6;
                        }
                        .myButton:active {
                            position:relative;
                            top:1px;
                        }
                        label {
                            padding-left: 0.5rem;
                        }
                    `}
                </style>
            </div>

        );
    }
}

export default ConverterForm;
