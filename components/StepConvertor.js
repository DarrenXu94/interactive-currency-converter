import React, { Component, Fragment } from 'react';

class StepConvertor extends Component {
    state = {
        rate: 0,
        fromValue: 1,
        toValue: 0
    }

    handleChange = (event) => {
        this.setState({fromValue: event.target.value})
    }

    render() {
        let {fromValue} = this.state
        return (
            <Fragment>
                <form>
                    <label>Converting from {this.props.convertFrom}</label>

                    <input type="number" name="convertedFrom" value={fromValue} onChange={this.handleChange}/>
                    <br />
                    <label>Converting to {this.props.convertTo}</label>

                    <input type="number" name="convertedTo" readOnly/>

                </form>
            </Fragment>
        );
    }
}

export default StepConvertor;