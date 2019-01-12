import React, { Component } from 'react';
import Currency from '../api/Currency'

import CountryCodes from '../configs/CountryCodes'

class ConverterForm extends Component {
    componentDidMount() {
        // Currency()
        // console.log(CountryCodes)
    }
    render() {
        return (
            <div>
                <h1>
                    Convert currencies live!
                </h1>
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