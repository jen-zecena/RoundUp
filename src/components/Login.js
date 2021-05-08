import React from "react";
import Container from  "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link, Redirect } from 'react-router-dom';

import { loginUserAction } from '../actions/authActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
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

  onSubmit = formValues => {
    this.props.loginUserAction(formValues);
  };

  render() {

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

// export default Login;

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
