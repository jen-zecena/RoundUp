import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header';
import UploadEvent from './components/UploadEvent';
import AboutPage from './components/AboutPage';
import Login from './components/Login';
import Register from './components/Register';
import EventPage from './components/EventPage';
import MappedEvents from './components/MappedEvents';
import UserSearch from './components/UserSearch';
import 'bootstrap/dist/css/bootstrap.min.css'

import { loadUserAction } from './actions/authActions';


import { Provider } from 'react-redux';
import store from './store';

class Index extends React.Component {
  componentDidMount() {
    if (store.getState().auth.token != null) {
        store.dispatch(loadUserAction());
    }
  }

  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/uploadEvent" component={UploadEvent} />
            <Route path="/about" component={AboutPage} />
            <Route path="/events" component={MappedEvents}/>
            <Route path="/event/:eID" component={EventPage}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/userSearch" component={UserSearch}/>
          </Switch>
        </Router>
        </Provider>
      </React.StrictMode>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
