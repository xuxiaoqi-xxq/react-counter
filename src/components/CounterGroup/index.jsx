import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component {

    updateInputNumber = (e) => {
        if (e.target.value === '') {
            this.setState({ counterNumber: 0 });
        } else {
            let count = parseInt(e.target.value);
            this.props.updateCounterCount(count);
            this.props.updateTotal('CLEAR');
        }
    }

    render() {
        return (
            [
                <div>
                    <button>number of counter</button>
                    <input type="text" value={this.props.counterCount} onChange={this.updateInputNumber}></input>
                </div>,
                <div>total: {this.props.total}</div>,
                <div>
                    {
                        new Array(parseInt(this.props.counterCount)).fill(0).map((value, index) => <Counter key={index} updateTotal={this.props.updateTotal} counterCount={this.props.counterCount}/>)
                    }
                </div>
            ]
        );
    }
}

export default CounterGroup