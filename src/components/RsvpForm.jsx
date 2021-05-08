import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { addRsvpAction } from '../actions/rsvpActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

/** This component creates and renders the RSVP Form and calls a function 
 * that sends an API calls to the backend to add an rsvp*/
class RSVPForm extends React.Component {
  // Used to keep track of the user's inputs
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

  /**
  @param formValues: contains the information that the user typed into the RSVP form
  @return: When the submit button is clicked the addRsvpAction function is called and the request to the backend is sent
  that will rsvp the user for the event
  **/
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
          {/* The RSVP form */}
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
