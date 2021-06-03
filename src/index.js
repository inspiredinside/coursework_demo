/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider
            store={createStore(
                rootReducer,
                compose(
                    applyMiddleware(thunk),
                    window.__REDUX_DEVTOOLS_EXTENSION__ &&
                        window.__REDUX_DEVTOOLS_EXTENSION__()
                )
            )}
        >
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
