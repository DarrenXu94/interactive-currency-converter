import React, { Component } from 'react';
// import Currency from '../api/Currency'

import AutocompleteWrapper from './AutoCompleteWrapper'


class ConverterForm extends Component {

    onSelectParent = (value) => {
        console.log(value)
    }

    render() {
        return (
            <div>
                <h1>
                    Convert currencies live!
                </h1>
                <label>Choose a currency to convert from</label>
                <br />
                <AutocompleteWrapper onSelectParent={this.onSelectParent} />
                <br />

                <br />

                <label>Choose a currency to convert to</label>
                <br />
                <AutocompleteWrapper onSelectParent={this.onSelectParent} />
                <br />

            </div>
        );
    }
}

export default ConverterForm;