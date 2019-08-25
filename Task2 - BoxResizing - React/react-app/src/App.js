import React from 'react';
import './App.css';
import MyDiv from './MyDiv';
import SliderPage from './SliderPage';
import NumberInput from './NumberInput';

class App extends React.Component {
    state = {
        inputX: 300,
        sliderX: 300,
        inputY: 300,
        sliderY: 300,
        divHeight: 300,
        divWidth: 300
    };

    onInputChangeX = value => {
        if (value) {
            const inputX = parseInt(value, 10);
            this.setState({
                inputX: inputX,
                divWidth: inputX
            });

            if (inputX >= 1 && inputX <= 500) {
                this.setState({ sliderX: inputX, divWidth: inputX });
            }
        } else {
            this.setState({ inputX: "" });
        }
    };

    onSliderChangeX = value => {
        const inputX = parseInt(value, 10);

        this.setState({
            inputX,
            sliderX: inputX,
            divWidth: inputX
        });
    };

    onInputChangeY = value => {
        if (value) {
            const inputY = parseInt(value, 10);
            this.setState({
                inputY: inputY,
                divHeight: inputY
            });

            if (inputY >= 1 && inputY <= 500) {
                this.setState({ sliderY: inputY, divHeight: inputY });
            }
        } else {
            this.setState({ inputY: "" });
        }
    };

    onSliderChangeY = value => {
        const inputY = parseInt(value, 10);

        this.setState({
            inputY,
            sliderY: inputY,
            divHeight: inputY
        });
    };

    render() {
        return (
            <div>
                <MyDiv
                    width={this.state.divWidth}
                    height={this.state.divHeight}
                />
                <SliderPage
                    text="width"
                    value={this.state.inputX}
                    onChange={e => this.onInputChangeX(e.target.value)}
                />
                <NumberInput
                    text="width"
                    value={this.state.inputX}
                    onChange={e => this.onInputChangeX(e.target.value)}
                />
                <SliderPage
                    text="height"
                    value={this.state.inputY}
                    onChange={e => this.onInputChangeY(e.target.value)}
                />
                <NumberInput
                    text="height"
                    value={this.state.inputY}
                    onChange={e => this.onInputChangeY(e.target.value)}
                />
            </div >
        );
    }
}
export default App;