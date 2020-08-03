import React from 'react'
import Counter from '../Counter/index'

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
        let oldTotal = this.state.total;
        this.setState({ total: oldTotal + total });
    }

    updateInputNumber = (e) => {
        if (e.target.value === '') {
            this.setState({ counterNumber: 0 });
        } else {
            let num = parseInt(e.target.value);
            this.setState({ counterNumber: num });
        }
        this.setState({total: 0});
    }

    render() {
        return (
            [
                <div>
                    <button>number of counter</button>
                    <input type="text" value={this.state.counterNumber} onChange={this.updateInputNumber}></input>
                </div>,
                <div>total: {this.state.total}</div>,
                <div>
                    {new Array(parseInt(this.state.counterNumber)).fill(0).map((value, index) => <Counter key={index} total={this.state.total} getCount={this.getCounterCount.bind(this)} />)}
                </div>
            ]
        );
    }
}

export default CounterGroup