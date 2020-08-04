import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            counterCount:0
        };
    }
// todo 用componentDidUpdate 为什么会出错
    static getDerivedStateFromProps(nextProps, preState){
        if(nextProps.counterCount !== preState.counterCount) {
            return {number: 0, counterCount: nextProps.counterCount};
        }
        return null;
    }

    increase = () => {
        this.props.updateTotal('INCREASE');
        let num = this.state.number;
        this.setState({
            number: ++num
        });
    }

    decrease = () => {
        this.props.updateTotal('DECREASE');
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