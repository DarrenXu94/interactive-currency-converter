import React, { Component, Fragment } from 'react';
import Autocomplete from 'react-autocomplete'
import CurrencySelector from '../configs/CurrencySelector'

function matchCurrencyToTerm(currency, value) {
    return (
        currency.CurrencyCode.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        currency.CurrencyName.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
}

class AutoCompleteWrapper extends Component {

    render() {
        let { value, type, onChange, onSelectParent } = this.props

        return (
            <Fragment>
                <Autocomplete
                    getItemValue={(item) => item.CurrencyCode}
                    items={CurrencySelector.currency_list}
                    renderItem={(item, isHighlighted) =>
                        <div key={item.CurrencyCode} style={{ background: isHighlighted ? 'lightgray' : 'black', cursor: 'pointer' }}>
                            {item.CurrencyCode} - {item.CurrencyName}
                        </div>
                    }
                    shouldItemRender={matchCurrencyToTerm}
                    value={value}
                    onChange={(event,value)=>onChange(value, type)}
                    onSelect={(value)=>onSelectParent(value,type)}
                />
            </Fragment>
        );
    }
}

export default AutoCompleteWrapper;