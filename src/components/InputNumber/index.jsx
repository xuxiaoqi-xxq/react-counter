import React from 'react'

class InputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCounterNumber: 0
        }
    }

    transInput(inputNumber) {
        this.props.getInputNumber(inputNumber);
    }

    updateInputNumber = (e) => {
        if(!isNaN(e.target.value)) {
            let num = parseInt(e.target.value);
            this.setState({inputCounterNumber: num});
        }else {
            this.setState({inputCounterNumber: 0});
        }
    }

    render() {
        return (
            <div>
                <button>number of counter</button>
                <input type="text" value={this.state.inputCounterNumber} onChange={this.updateInputNumber}></input>
                <button onClick={this.transInput.bind(this, this.state.inputCounterNumber)}>ok</button>
            </div>
        );
    }
}

export default InputNumber