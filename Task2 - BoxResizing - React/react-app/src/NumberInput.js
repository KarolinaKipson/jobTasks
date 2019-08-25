import React, { Component } from 'react';

class NumberInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            onChange,
            value,
            text,
            ...otherProps
        } = this.props;
        return (
            <div>
                <div className="numberInput">
                    <label htmlFor="number1">{text}</label>
                    <input type="number"
                        value={value}
                        onChange={onChange}
                        min="1"
                        max="500"
                        step="1"
                        {...otherProps}
                    />
                </div>
            </div>);
    }
}
export default NumberInput;