import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Multiselect } from 'multiselect-react-dropdown';

import { addEventAction } from '../actions/eventActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const tags = [{name: 'Africana Studies'},
  {name: 'American Studies'},
  {name: 'Anthropology'},
  {name: 'Art'},
  {name: 'Art History'},
  {name: 'Asian American Studies'},
  {name: 'Asian Languages & Literatures'},
  {name: 'Asian Studies'},
  {name: 'Biology'},
  {name: 'Chemistry'},
  {name: 'Chicana/o-Latina/o Studies'},
  {name: 'Chinese'},
  {name: 'Classics'},
  {name: 'Computer Science'},
  {name: 'Classics'},
  {name: 'Economics'},
  {name: 'English'},
  {name: 'Environmental Analysis'},
  {name: 'French'},
  {name: 'Gender & Womens Studies'},
  {name: 'Geology'},
  ]

class UploadEvent extends React.Component {
  componentDidMount() {
    this.multiselectRef = React.createRef();
  }

  resetSelectedValues() {
  this.multiselectRef.current.resetSelectedValues();
}

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
//{uID, description, eventTime, poster, name, location, tags }
  onSubmit = formValues => {
    var tags = this.multiselectRef.current.state.selectedValues.map((tag) => {
      return tag.name;
    });

    const uID = this.props.uID;
    this.props.addEventAction({...formValues, posterUrl: "something2", "uID": 1, "tags": tags });
  }
  // onChange(e) {
  //   const { input: { onChange } } = this.props
  //   onChange(e.target.files[0])
  // }

  render() {
    return (
      <div className="container">
        <Container>
          <h1>
            Add Event Form
          </h1>
          <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              name='name'
              type='text'
              label='Event Name'
              placeholder='Event Name'
              component={this.renderField}
              validate={required}
            />
            <Field
              name='description'
              rows={3}
              type='text'
              label='Description'
              placeholder='Description'
              component={this.renderField}
            />

            <Field
              name='eventTime'
              type='datetime-local'
              label='Select Event Date'
              placeholder='Select Event Date'
              component={this.renderField}
              validate={[required]}
            />

            <Form.File
              name='poster'
              label='Poster'
              type='hidden'
              id="custom-file"
              placeholder='Add Poster Image'
              component={this.renderField}
              value={this.props.uID}
              // onChange={this.onChange}
            />

            <Field
              name='location'
              type='text'
              label='Location'
              placeholder='Location'
              component={this.renderField}

            />


          <Form.Group>
            <Multiselect
            name='tags'
            placeholder='Tags'
            options={tags} // Options to display in the dropdown
            displayValue="name" // Property name to display in the dropdown options
            ref={this.multiselectRef}
          />
          </Form.Group>


            <Button variant="danger" type="submit">
              Submit
            </Button>
          </form>

        </Container>
      </div>
    );
  }
}
console.log(addEventAction);

const required = value => (value ? undefined : 'Required');

UploadEvent = connect(
  null,
  { addEventAction }
)(UploadEvent);

export default reduxForm({
  form: 'eventForm'
})(UploadEvent);
