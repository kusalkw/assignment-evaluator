import React, { Component } from 'react';
import {createStore,applyMiddleware} from 'redux'
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import history from './history';
import Login from './Components/Auth/Login/Login'
import{BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import {browserHistory} from 'react-router'
import store from './store'
import  Register from './Components/Auth/Register/Register';

import {Provider } from 'react-redux'
import RouteFile from './RouteFile';


import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
class App extends Component {

  
  render() {
    return (
    <Provider store={store}>
      <Router history={history} >
        <div className="App">
        <Loading
  show={true}
  color="red"
  change={false}
  showSpinner={true}
/>
         
          <Switch>

            <Route exact path ="/" component={Login}/>
            <Route exact path ="/login" component={Login}/>  
            <Route exact path ="/register" component={Register}/>
            {/* <Route component={PageNotFound} /> */}
          </Switch>
        </div>
      </Router> 
      </Provider> 
  
    );
  }
}

export default App;
