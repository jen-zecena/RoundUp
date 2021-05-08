import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { Multiselect } from 'multiselect-react-dropdown';

import { addEventAction } from '../actions/eventActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { uploadFile } from 'react-s3';

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

const config = {
  bucketName: 'roundupposters',
  region: 'us-east-1',
  accessKeyId: 'AKIA6CRJN2MSKJZOJQBH',
  secretAccessKey: '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'
}



class UploadEvent extends React.Component {
  componentDidMount() {
    this.multiselectRef = React.createRef();
  }
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     file: null
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleUpload = this.handleUpload.bind(this);
  // }
  state = {file: null}

  // handleFileInput(e) {
  //   console.log("state before setting");
  //   console.log(this.state.file);
  //   console.log("e");
  //   console.log(e);
  //   console.log("e.target");
  //   console.log(e.target);
  //   console.log("e.target.value");
  //   console.log(e.target.value);
  //   console.log("e.target.files[0]");
  //   console.log(e.target.files[0]);
  //   this.setState({[e.target.id]: e.target.files[0]});

  //   console.log("state after setting");
  //   console.log(this.state.file);

  // }
  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.files[0]
    })
    console.log("state after setting");
    console.log(this.state.file);
}

  handleUpload(file){
    uploadFile(file, config)
        .then(data => console.log(data))
        .catch(err => console.error(err))
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

  onSubmit = formValues => {
    var tags = this.multiselectRef.current.state.selectedValues.map((tag) => {
      return tag.name;
    });

    this.handleUpload(this.state.file);
    console.log("this.state.file");
    console.log(this.state.file);
    const posterUrlLink = "https://roundupposters.s3.amazonaws.com/" + this.state.file.name
    console.log("posterUrl");
    console.log(posterUrlLink);
    this.props.addEventAction({...formValues, posterUrl: posterUrlLink, "uID": 1, "tags": tags });
    
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
              id="file"
              placeholder='Add Poster Image'
              component={this.renderField}
              value={this.props.uID}
              onChange={this.handleChange}
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
