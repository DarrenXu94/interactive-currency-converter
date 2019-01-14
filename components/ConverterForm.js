import React, { Component } from 'react';
import Currency from '../api/Currency'

import CountryCodes from '../configs/CountryCodes'
import CurrencySelector from '../configs/CurrencySelector'

import Autocomplete from 'react-autocomplete'

function matchCurrencyToTerm(currency, value) {
    return (
        currency.CurrencyCode.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        currency.CurrencyName.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
}

class ConverterForm extends Component {
    componentDidMount() {
        // Currency()
        // console.log(CountryCodes)
        console.log(CurrencySelector.currency_list)
    }
    state = { value: 'AUD' }

    render() {
        let { value } = this.state
        return (
            <div>
                <h1>
                    Convert currencies live!
                </h1>
                <Autocomplete
                    getItemValue={(item) => item.CurrencyCode}
                    items={CurrencySelector.currency_list}
                    renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'lightgray' : 'black' }}>
                            {item.CurrencyCode}
                        </div>
                    }
                    shouldItemRender={matchCurrencyToTerm}
                    value={value}
                    onChange={(event, value) => this.setState({ value })}
                    onSelect={value => this.setState({ value })}
                />
                <form>
                    <label>
                        Convert from:
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <label>
                        Convert to:
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ConverterForm;