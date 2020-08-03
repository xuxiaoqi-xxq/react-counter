import React from 'react'
import Counter from '../Counter/index'
import InputNumber from '../InputNumber/index'

class CounterGroup extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            counterNumber: 1
        };
    }

    getInputNumber(inputCounterNumber) {
        console.log(inputCounterNumber);
        this.setState({counterNumber: inputCounterNumber});
    }

    render() {
        return (
            [
                <InputNumber getInputNumber={this.getInputNumber.bind(this)}/>,
                <div>{new Array(this.state.counterNumber).fill(parseInt(this.state.counterNumber)).map((value, index) => <Counter key = {index}/>)}</div>
            ]
        );
    }
}

export default CounterGroup