import React from 'react'
import { createStore } from 'redux'
import Counter from '../Counter/index'


function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREASE': return ++state;
        case 'DECREASE': return --state;
        default: return state;
    }
}

let store = createStore(counter);

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counterNumber: 0,
            total: 0,
        };
    }

    updateInputNumber = (e) => {
        if (e.target.value === '') {
            this.setState({ counterNumber: 0 });
        } else {
            let num = parseInt(e.target.value);
            this.setState({ counterNumber: num });
        }
        store = createStore(counter);
        this.setState({total: 0});
    }

    render() {
        store.subscribe(() => {
            this.setState({
                total: store.getState()
            })
        });
        return (
            [
                <div>
                    <button>number of counter</button>
                    <input type="text" value={this.state.counterNumber} onChange={this.updateInputNumber}></input>
                </div>,
                <div>total: {this.state.total}</div>,
                <div>
                    {
                        new Array(parseInt(this.state.counterNumber)).fill(0).map((value, index) => <Counter key={index} store={store}/>)
                    }
                </div>
            ]
        );
    }
}

export default CounterGroup