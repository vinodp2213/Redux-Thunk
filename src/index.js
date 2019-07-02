import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';
import {startGetTickets} from './redux/actions/tickets'; 

const store = configureStore()

store.subscribe(()=> {
    console.log(store.getState())
})

console.log(store.getState())

store.dispatch(startGetTickets())

const  jsx =(
    <Provider  store = {store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('root'));

 