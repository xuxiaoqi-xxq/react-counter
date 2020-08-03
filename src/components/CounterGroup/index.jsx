import React from 'react'
import Counter from '../Counter/index'

class CounterGroup extends React.Component{

    render() {
        return (
            new Array(9).fill(0).map((value, index) => <Counter key = {index}/>)
        );
    }
}

export default CounterGroup