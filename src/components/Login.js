import React from "react";
import Container from  "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link, Redirect } from 'react-router-dom';

import { loginUserAction } from '../actions/authActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


/* This React component creates and renders the login page and communicates with the backend */

class LoginForm extends React.Component {

  // Updating the form object in the redux state as the user inputs their information
  renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => {
    return (
      <div className={`form-group ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} className='form-control' type={type} placeholder={placeholder}/>
        {touched && error && (
          <span className='text text-danger'>{error}</span>
        )}
      </div>
    );
  };

  /**
  @param formValues: contains the information that the user typed into the Login form
  @return: When the submit button is clicked the loginUserAction function is called and the request to the backend is sent
  user will then be authenticated
  **/
  onSubmit = formValues => {
    this.props.loginUserAction(formValues);
  };

  render() {

    // if the user is already logged in they will be rederected to the home page
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }

  return (
  <div className="login">
    <Container>
      <Col className="col-sm-6 mx-auto">
        <Jumbotron className="format">
          <h2>Login Page </h2>
          <br/>
          <div className="login-form">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
              <Field
                name='email'
                type='email'
                label='Email'
                placeholder='Email'
                component={this.renderField}
                validate={required}
              />

              <Field
                name='password'
                type='password'
                label='Password'
                placeholder='Password'
                component={this.renderField}
                validate={required}
              />
              {/* If a user does not have an account they click the Register button to be redirected to the register page */}
              <button type="submit" className="btn btn-dark">Login</button>
              <Link to="/register">
              <button type="button" className="btn btn-secondary">Register</button>
              </Link>
            </form>
          </div>
        </Jumbotron>
      </Col>
    </Container>
    </div>
  );
}
}


const required = value => (value ? undefined : 'Required');

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

LoginForm = connect(
  mapStateToProps,
  { loginUserAction }
)(LoginForm);

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
