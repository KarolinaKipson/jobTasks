import React, { Component } from 'react';

class SliderPage extends Component {
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
            <div className="slider-div">
                <div>
                    <label htmlFor="customRange1">{text}</label>
                    <input type="range"
                        className="custom-range"
                        value={value}
                        onChange={onChange}
                        min="1"
                        max="500"
                        step="1"
                        {...otherProps}

                    />
                </div>
            </div>
        );
    }
}

export default SliderPage;