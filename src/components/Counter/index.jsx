import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    static getDerivedStateFromProps(nextProps, preProps) {
        if (nextProps.total === 0) {
            return {number: 0};
        }
        return null;
    }

    increase = () => {
        this.props.increase();
    }

    decrease = () => {
        const ins = this.props.decrease;
        ins();
        console.log(this.props.number);
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <mark>{this.props.number}</mark>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }

    
}

export default Counter