import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import {firebaseInit} from './firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  
  componentWillMount(){
    firebaseInit();
  }

  render(){
    return (
      <Provider store={createStore(reducers,{}, applyMiddleware(ReduxThunk))}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;