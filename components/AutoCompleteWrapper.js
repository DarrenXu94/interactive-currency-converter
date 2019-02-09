import React, { Component, Fragment } from 'react';
import Autocomplete from 'react-autocomplete'
import CurrencySelector from '../configs/CurrencySelector'

function matchCurrencyToTerm(currency, value) {
    return (
        currency.CurrencyCode.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        currency.CurrencyName.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
}

function renderInput(props) {
    return <div>
            <input style={{color: '#252529', lineHeight: '1.2', fontSize: '16px', height: '1.2rem', padding: '0.3rem 20px 0.3rem 20px'}} {...props} />
            <style jsx>
        {`
            border-radius: 20px;
            font-family:Arial;
            box-shadow: 2px 3px 4px #4e4e54;
            -moz-box-shadow: 2px 3px 4px #4e4e54;
            -webkit-box-shadow: 2px 3px 4px #4e4e54;
            -o-box-shadow: 2px 3px 4px #4e4e54;
            -ms-box-shadow: 2px 3px 4px #4e4e54;

            margin-top: 0.3rem;

        `}
        </style>
        </div>


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
                        <div key={item.CurrencyCode} style={{ 
                            background: isHighlighted ? '#c3ddef' : '#7395ae', 
                            cursor: 'pointer', 
                            fontFamily:'Arial',
                            lineHeight: '1.3rem'
                            }}>
                            {item.CurrencyCode} - {item.CurrencyName}
                        </div>
                    }
                    shouldItemRender={matchCurrencyToTerm}
                    value={value}
                    onChange={(event,value)=>onChange(value, type)}
                    onSelect={(value)=>onSelectParent(value,type)}
                    renderInput={renderInput}
                />
            </Fragment>
            
        );
    }
}

export default AutoCompleteWrapper;