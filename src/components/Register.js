import React from "react";
import Container from  "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { Redirect } from 'react-router-dom';
import { registerUserAction } from '../actions/authActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

/** This component creates and renders the Registration Form and calls functions 
 * that send API calls to the backend that create a new user*/

class RegisterForm extends React.Component {
  // Used to keep track of the user's inputs
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
  @param formValues: contains the information that the user typed into the Register form
  @return: When the submit button is clicked the registerUserAction function is called and the request to the backend is sent
  that will create a new account for the user
  **/
  onSubmit = formValues => {
    this.props.registerUserAction(formValues);
  }

  render() {
    // if the user is already logged in they will be rederected to the home page
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }

    return (
    <div>
    {/* The registration form with all of the necessary fields */}
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

                <button type="submit" className="btn btn-dark">Submit</button>
              </form>
            </div>
          </Jumbotron>
        </Col>
      </Container>
      </div>
    );
  }
}

// used to set which fields are required
const required = value => (value ? undefined : 'Required');

//Passwords must have a minLength of 8
const minLength = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

const minLength8 = minLength(8);

// Checking that the passwords match
const passwordsMatch = (value, allValues) =>
  (value !== allValues.password ? 'Passwords do not match' : undefined);


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

// used to connect this component and its data to the redux store
RegisterForm = connect(
  mapStateToProps,
  { registerUserAction }
)(RegisterForm);

export default reduxForm({
  form: 'registerForm'
})(RegisterForm);
