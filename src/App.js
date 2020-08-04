import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import CounterGroupContainer from './components/CounterGroupContainer'
import store from './store'

function App() {
    return (
        <div className="App" >
            <Provider store={store}>
                <CounterGroupContainer />
            </Provider>
        </div>
    );
}

export default App;