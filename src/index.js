import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import  AdventuresReducer from './Reducers/AdventuresReducer'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(AdventuresReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>

    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);



// createstore accepts two args reducer & devtools
// we pass thunk to apply middleware
