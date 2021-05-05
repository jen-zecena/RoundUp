import React from "react";
import Container from  "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { Redirect } from 'react-router-dom';
import { registerUserAction } from '../actions/authActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class RegisterForm extends React.Component {
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
    this.props.registerUserAction(formValues);
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }

    return (
    <div>
      <Container>
        <Col className="col-sm-6 mx-auto">
          <Jumbotron>
            <h2>Register </h2>
            <br/>
            <div className="login-form">
              <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
                <Field
                  name='firstName'
                  type='text'
                  label='First Name'
                  placeholder='First Name'
                  component={this.renderField}
                  validate={[required]}
                />

                <Field
                  name='lastName'
                  type='text'
                  label='Last Name'
                  placeholder='Last Name'
                  component={this.renderField}
                  validate={[required]}
                />

                <Field
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email'
                  component={this.renderField}
                  validate={[required]}
                />

                <Field
                  name='password'
                  type='password'
                  label='Password'
                  placeholder='Password'
                  component={this.renderField}
                  validate={[required, minLength8]}
                />

                <Field
                  name='password2'
                  type='password'
                  label='Password'
                  placeholder='Password'
                  component={this.renderField}
                  validate={[required, passwordsMatch]}
                />
                <div className="form-group">
                  <Field
                    name="campus"
                    component="select"
                    className="form-control"
                    validate={[required]}
                  >
                    <option value="CMC">Claremont McKenna</option>
                    <option value="HMC">Harvey Mudd</option>
                    <option value="PTZ">Pitzer College</option>
                    <option value="POM">Pomona College</option>
                    <option value="SCR">Scripps College</option>
                  </Field>
                </div>

                <button type="submit" class="btn btn-dark">Submit</button>
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

const minLength = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

const minLength8 = minLength(8);

const passwordsMatch = (value, allValues) =>
  (value !== allValues.password ? 'Passwords do not match' : undefined);


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

RegisterForm = connect(
  mapStateToProps,
  { registerUserAction }
)(RegisterForm);

export default reduxForm({
  form: 'registerForm'
})(RegisterForm);
