import React from 'react'
import Counter from '../Counter/index'
import InputNumber from '../InputNumber/index'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counterNumber: 0,
            total: 0,
        };
    }

    getInputNumber(inputCounterNumber) {
        this.setState({ counterNumber: inputCounterNumber });
    }

    getCounterCount(total) {
        console.log(total);
        let oldTotal = this.state.total;
        this.setState({total: oldTotal + total});
    }

    render() {
        return (
            [
                <InputNumber getInputNumber={this.getInputNumber.bind(this)} />,
                <div>total: {this.state.total}</div>,
                <div>{new Array(this.state.counterNumber).fill(parseInt(this.state.counterNumber)).map((value, index) => <Counter key={index} getCount={this.getCounterCount.bind(this)}/>)}</div>
            ]
        );
    }
}

export default CounterGroup