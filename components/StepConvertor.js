import React, { Component, Fragment } from 'react';

class StepConvertor extends Component {
    state = {
        rate: 0,
        fromValue: 1,
        toValue: 1
    }

    handleChange = (event) => {
        this.setState({fromValue: event.target.value})
    }

    calculateValue = () => {
        let apiResponse = this.props.apiResponse;
        let JSONResponse = JSON.parse(apiResponse);
        let rates = JSONResponse.rates;
        let rate = rates[this.props.convertTo]
        this.setState({rate})

        let toValue = this.state.toValue;
        toValue = toValue * rate;
        this.setState({toValue})

    }

    componentDidMount(){
        this.calculateValue()
    }

    render() {
        let {fromValue, toValue} = this.state
        return (
            <Fragment>
                <form>
                    <label>Converting from {this.props.convertFrom}</label>

                    <input type="number" name="convertedFrom" value={fromValue} onChange={this.handleChange}/>
                    <br />
                    <label>Converting to {this.props.convertTo}</label>

                    <input type="number" name="convertedTo" value={toValue} readOnly/>

                </form>
            </Fragment>
        );
    }
}

export default StepConvertor;