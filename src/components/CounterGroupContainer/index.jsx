import updateCounterCount from '../../actions/updateCounterCount'
import updateTotal from '../../actions/updateTotal'
const { connect } = require("react-redux")
const { default: CounterGroup } = require("../CounterGroup")

const mapStateToProps = state => {
    return {
        counterCount: state.counterCount,
        total: state.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCounterCount : (count) => {dispatch(updateCounterCount(count))},
        updateTotal : (type) => {dispatch(updateTotal(type))}
    }
}

const CounterGroupContainer = connect(mapStateToProps, mapDispatchToProps)(CounterGroup);

export default CounterGroupContainer;