import React, { Component, Fragment } from 'react';

class StepConvertor extends Component {

    render() {
        let { fromValue, toValue } = this.props
        let inputStyle = {color: '#252529', lineHeight: '1.2', fontSize: '16px', height: '1.2rem', padding: '0.3rem 20px 0.3rem 20px', outline: 'none'}
        return (
            <Fragment>
                <form>
                    <label>Converting from {this.props.convertFrom}</label>
                    <br/>
                    <input style={inputStyle} className='inputStyle' type="number" name="convertedFrom" value={(toValue !== '') ? fromValue: ''} onChange={this.props.handleChange}/>
                    <br />
                    <br />
                    <label>Converting to {this.props.convertTo}</label>
                    <br/>
                    <input style={inputStyle} className='inputStyle' type="number" name="convertedTo" value={toValue} readOnly/>
                </form>
                <style jsx>
                {`
                .inputStyle {
                    border-radius: 20px;
                    font-family:Arial;
                    box-shadow: 2px 3px 4px #4e4e54;
                    -moz-box-shadow: 2px 3px 4px #4e4e54;
                    -webkit-box-shadow: 2px 3px 4px #4e4e54;
                    -o-box-shadow: 2px 3px 4px #4e4e54;
                    -ms-box-shadow: 2px 3px 4px #4e4e54;
                    margin-top: 0.3rem;
                    }
                `}
                </style>

            </Fragment>
        );
    }
}

export default StepConvertor;