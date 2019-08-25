import React, { Component } from 'react';
import './App.css';

class MyDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            width,
            height,
            background,
            ...otherProps
        } = this.props;
        return (
            <div className="MyDiv" style={{
                width: this.props.width,
                height: this.props.height,
                background: this.props.background
            }}
            />
        );
    }
}

MyDiv.defaultProps = {
    height: 300,
    width: 300,
    background: '#008000'
};

export default MyDiv;