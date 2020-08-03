import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    static getDerivedStateFromProps(nextProps, preProps) {
        if (nextProps.store.getState() === 0) {
            return {number: 0};
        }
        return null;
    }

    increase = () => {
        this.props.store.dispatch({type:'INCREASE'});
        let num = this.state.number;
        this.setState({
            number: ++num
        });
    }

    decrease = () => {
        this.props.store.dispatch({type:'DECREASE'});
        let num = this.state.number;
        this.setState({
            number: --num
        });
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