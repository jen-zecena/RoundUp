import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { addRsvpAction } from '../actions/rsvpActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


class RSVPForm extends React.Component {
  renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => {
    return (
      <div className={`form-group ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        {type === 'hidden'
          ?
        <input {...input} className='form-control' type={type} placeholder={placeholder} value={value} />
          :
        <input {...input} className='form-control' type={type} placeholder={placeholder} />
        }
        {touched && error && (
          <span className='text text-danger'>{error}</span>
        )}
      </div>
    );
  };

  onSubmit = formValues => {
    const eID = this.props.eID;
    const time = new Date().getTime();
    this.props.addRsvpAction({...formValues, eID, time });
  }

  render() {
    return (
      <div className="container">
        <Container>
          <h1>
            RSVP Form
          </h1>
          <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              name='firstName'
              type='text'
              label='First Name'
              placeholder='First Name'
              component={this.renderField}
              validate={required}
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
              name='eID'
              type='hidden'
              component={this.renderField}
              value={this.props.eID}
            />

            <Button variant="danger" type="submit">
              Submit
            </Button>
          </form>

        </Container>
      </div>
    );
  }
}

const required = value => (value ? undefined : 'Required');

RSVPForm = connect(
  null,
  { addRsvpAction }
)(RSVPForm);

export default reduxForm({
  form: 'rsvpForm'
})(RSVPForm);
