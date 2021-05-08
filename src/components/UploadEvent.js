import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { Multiselect } from "multiselect-react-dropdown";

import { addEventAction } from "../actions/eventActions";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { uploadFile } from "react-s3";

// List of tags that users can use to clasify their event
const tags = [
  { name: "Africana Studies" },
  { name: "American Studies" },
  { name: "Anthropology" },
  { name: "Art" },
  { name: "Art History" },
  { name: "Asian American Studies" },
  { name: "Asian Languages & Literatures" },
  { name: "Asian Studies" },
  { name: "Biology" },
  { name: "Chemistry" },
  { name: "Chicana/o-Latina/o Studies" },
  { name: "Chinese" },
  { name: "Classics" },
  { name: "Computer Science" },
  { name: "Classics" },
  { name: "Economics" },
  { name: "English" },
  { name: "Environmental Analysis" },
  { name: "French" },
  { name: "Gender & Womens Studies" },
  { name: "Geology" },
];

// This configuration object is needed to access the S3 bucket where we are storing our images
const config = {
  bucketName: "roundupposters",
  region: "us-east-1",
  accessKeyId: "AKIA6CRJN2MSKJZOJQBH",
  secretAccessKey: "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",
};

/** This component creates and renders the RSVP form,
 *  it also adds an event to the database by calling an API function and adds the poster file
 * to the S3 bucket*/

class UploadEvent extends React.Component {
  componentDidMount() {
    // initializing the multi selector
    this.multiselectRef = React.createRef();
  }

  // Defining a local state object that will store the file that the user uploades 
  state = { file: null };

  /**
  @param e: e is the event that corresponds to a user choosing a file using the selector
  @return: When a user chooses a file the local state will up updated (file will equal the file that 
    the user uploaded)
  **/
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.files[0],
    });
  };

  /**
  @param file: the file stored in the state
  @return: Use uploadFile (which is a react-s3 api function) and pass in the file and config
  in order to upload the poster file to the S3 bucket
  **/
  handleUpload(file) {
    uploadFile(file, config)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  resetSelectedValues() {
    this.multiselectRef.current.resetSelectedValues();
  }

  // used to track form changes
  renderField = ({ input, label, type, placeholder, value, meta: { touched, error } }) => {
    return (
      <div className={`form-group ${touched && error ? "error" : ""}`}>
        <label>{label}</label>
        {type === "hidden" ? (
          <input
            {...input}
            className="form-control"
            type={type}
            placeholder={placeholder}
            value={value}
          />
        ) : (
          <input
            {...input}
            className="form-control"
            type={type}
            placeholder={placeholder}
          />
        )}
        {touched && error && <span className="text text-danger">{error}</span>}
      </div>
    );
  };

  /**
  @param formValues: the values that the users typed into the form
  @return: get tags from the multiselect, upload the poster file to the S3, 
  the the addEventAction function to make an API call that adds the event to the database
  **/
  onSubmit = (formValues) => {
    // store the tags that the user chose in tags
    var tags = this.multiselectRef.current.state.selectedValues.map((tag) => {
      return tag.name;
    });
    
    //Call the handleUpload function and pass in the file that the user chose
    this.handleUpload(this.state.file);

    //Set the poster link equal to the poster url that will be stored in the redux state and used
    // to retrive the poster image when the poster EventCard has to be rendered
    const posterUrlLink =
      "https://roundupposters.s3.amazonaws.com/" + this.state.file.name;
    
    //Call the addEventAction function and pass in form values, the posterUrl, and tags
    this.props.addEventAction({
      ...formValues,
      posterUrl: posterUrlLink,
      uID: 1,
      tags: tags,
    });
  };

  render() {
    return (
      <div className="container">
        <Container>
          <h1>Add Event Form</h1>
          {/* The upload event form  */}
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name="name"
              type="text"
              label="Event Name"
              placeholder="Event Name"
              component={this.renderField}
              validate={required}
            />
            <Field
              name="description"
              rows={3}
              type="text"
              label="Description"
              placeholder="Description"
              component={this.renderField}
            />

            <Field
              name="eventTime"
              type="datetime-local"
              label="Select Event Date"
              placeholder="Select Event Date"
              component={this.renderField}
              validate={[required]}
            />

            <Form.File
              name="poster"
              label="Poster"
              type="hidden"
              id="file"
              placeholder="Add Poster Image"
              component={this.renderField}
              value={this.props.uID}
              onChange={this.handleChange} // when the poster is chosen call the handleChange function
            />

            <Field
              name="location"
              type="text"
              label="Location"
              placeholder="Location"
              component={this.renderField}
            />

            <Form.Group>
              <Multiselect
                name="tags"
                placeholder="Tags"
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

const required = (value) => (value ? undefined : "Required");

UploadEvent = connect(null, { addEventAction })(UploadEvent);

export default reduxForm({form: "eventForm",})(UploadEvent);
