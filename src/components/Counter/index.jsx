import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    increase = () => {
        let num = this.state.number;
        this.setState({number: ++num});
    }

    decrease = () => {
        let num = this.state.number;
        this.setState({number: --num});
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.decrease}>-</button>
            </div>
        );

    }
}

export default Counter