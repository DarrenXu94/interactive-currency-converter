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

    requestConversion = async () => {
        let { convertFrom, convertTo } = this.state;
        if (convertFrom !== '' && convertTo !== '') {
            let res = await Currency(convertFrom, convertTo)
            this.setState({ apiResponse: res })
        }
    }

    updateValue = (value, type) => {
        switch(type){
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

    onChange = (value,type) => {
        this.updateValue(value,type);

    }

    onSelect = (value, type) => {
        this.updateValue(value,type);
    }


    onSwapClick = () => {
        let {convertFrom, convertTo} = this.state;
        this.setState({convertFrom: convertTo, convertTo: convertFrom})

    }

    render() {
        let { convertFrom, convertTo, apiResponse } = this.state;
        let {onChange, onSelect} = this
        return (
            <div>
                <h1>
                    Convert currencies live!
                </h1>
                <label>Choose a currency to convert from</label>
                <br />
                <AutocompleteWrapper onSelectParent={onSelect} value={convertFrom} onChange={onChange} type={'from'}/>
                <br />

                <br />

                <label>Choose a currency to convert to</label>
                <br />
                <AutocompleteWrapper onSelectParent={onSelect} value={convertTo} onChange={onChange} type={'to'}/>
                <br />
                <br />

                <button onClick={this.requestConversion}>Convert</button>

                <button onClick={this.onSwapClick}>Swap</button>

                <h2>Converting {convertFrom} to {convertTo}</h2>
                {apiResponse !== '' &&
                    <StepConvertor convertFrom={convertFrom} convertTo={convertTo} apiResponse={apiResponse} />
                }

            </div>
        );
    }
}

export default ConverterForm;