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
        let num = this.state.number;
        this.setState({number: ++num});
        this.props.getCount(1);
    }

    decrease = () => {
        let num = this.state.number;
        this.setState({number: --num});
        this.props.getCount(-1);
    }

    render() {
        return (
            <div>
                <button onClick={this.increase.bind(this, this.state.number)}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.decrease.bind(this, this.state.number)}>-</button>
            </div>
        );

    }
}

export default Counter