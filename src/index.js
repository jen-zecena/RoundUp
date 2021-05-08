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
import UserSearch from './components/UserSearch';
import 'bootstrap/dist/css/bootstrap.min.css'

import { loadUserAction } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';

/** This component is used to set up the react-router that dictates how and when pages will be displayed */

class Index extends React.Component {
  componentDidMount() {
    if (store.getState().auth.token) {
        store.dispatch(loadUserAction());
    }
    console.log("This is the state:");
    console.log(store.getState());
  }

  render() {
    return (
      // pass the store that contains the redux state to all of the components so they all have access to it
      <Provider store={store}>
        <Router>
        {/* always display the header */}
        <Header/>
        {/* Only one of these pages can be rendered at a time  */}
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/uploadEvent" component={UploadEvent} />
          <Route path="/about" component={AboutPage} />
          <Route path="/event/:eID" component={EventPage}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/userSearch" component={UserSearch}/>

        </Switch>
      </Router>
      </Provider>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
