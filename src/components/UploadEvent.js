import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Multiselect } from 'multiselect-react-dropdown';


function UploadEvent(){
  const [eventInfo, setEventInfo] = useState({
    userID: "",
    description: "",
    eventTime: "",
    poster: "",
    name: "",
    location:"",
    email:"", 
    tags:""
  });

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

  
  console.log(eventInfo);

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);

    setEventInfo(prevValue => {
      if (name === "userID") {
        return {
          userID: value,
          description: prevValue.description,
          eventTime: prevValue.eventTime,
          poster: prevValue.poster,
          name: prevValue.name,
          location: prevValue.location,
          email: prevValue.email,
          tags: prevValue.tags
        };
      } else if (name === "description") {
        return {
          userID: prevValue.userID,
          description: value,
          eventTime: prevValue.eventTime,
          poster: prevValue.poster,
          name: prevValue.name,
          location: prevValue.location,
          email: prevValue.email,
          tags: prevValue.tags
        };
      } else if (name === "eventTime") {
        return {
          userID: prevValue.userID,
          description: prevValue.description,
          eventTime: value,
          poster: prevValue.poster,
          name: prevValue.name,
          location: prevValue.location,
          email: prevValue.email,
          tags: prevValue.tags
        };
      } else if (name === "poster") {
        return {
          userID: prevValue.userID,
          description: prevValue.description,
          eventTime: prevValue.eventTime,
          poster: value,
          name: prevValue.name,
          location: prevValue.location,
          email: prevValue.email,
          tags: prevValue.tags
        };
      }else if (name === "name") {
        return {
          userID: prevValue.userID,
          description: prevValue.description,
          eventTime: prevValue.eventTime,
          poster: prevValue.poster,
          name: value,
          location: prevValue.location,
          email: prevValue.email,
          tags: prevValue.tags
        };
      }else if (name === "location") {
        return {
          userID: prevValue.userID,
          description: prevValue.description,
          eventTime: prevValue.eventTime,
          poster: prevValue.poster,
          name: prevValue.name,
          location: value,
          email: prevValue.email,
          tags: prevValue.tags
        };
      }else if (name === "email") {
        return {
          userID: prevValue.userID,
          description: prevValue.description,
          eventTime: prevValue.eventTime,
          poster: prevValue.poster,
          name: prevValue.name,
          location: prevValue.location,
          email: value,
          tags: prevValue.tags
        };
      }else if (name === "poster") {
        return {
          userID: prevValue.userID,
          description: prevValue.description,
          eventTime: prevValue.eventTime,
          poster: event.target.files[0],
          name: prevValue.name,
          location: prevValue.location,
          email: prevValue.email,
          tags: prevValue.tags
        };
      }
    });
  }

  /**
   * 
   * @param {*} selectedList 
   *      The items selected by the user
   * 
   * Sets the tags field of the state
   */
  function onTagSelect(selectedList){
    setEventInfo(prevValue => {
        return {
          userID: prevValue.userID,
          description: prevValue.description,
          eventTime: prevValue.eventTime,
          poster: prevValue.poster,
          name: prevValue.name,
          location: prevValue.location,
          email: prevValue.email,
          tags: selectedList
        };
        });
  }

  /**
   * 
   * @param {*} none
   * @returns 
   *     TRUE if all required properties are non null
   *     FALSE otherwise
   *     REPORTS ERRORS TO USER
   */
  function checkRequiredFields(){
      let errors = "";
      let formIsValid = true;

      //UserID
      if(!eventInfo.userID){
    //  formIsValid = false;
    //  errors = errors + "userID, ";
      }

      //Date and Time
      if(!eventInfo.eventTime){
        formIsValid = false;
        errors = errors + "event date, ";
      }

      //Name
      if(!eventInfo.name){
        formIsValid = false;
        errors = errors + "name, ";
      }
      else if(eventInfo.name){
          if(eventInfo.name.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors = errors + "name, ";
          }        
      }

      //Email
      if(!eventInfo.email){
          formIsValid = false;
          errors = errors + "email, ";
        }

      if(eventInfo.email !== "undefined"){
          let lastAtPos = eventInfo.email.lastIndexOf('@');
          let lastDotPos = eventInfo.email.lastIndexOf('.');

          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && eventInfo.email.indexOf('@@') === -1 && lastDotPos > 2 && (eventInfo.email.length - lastDotPos) > 2)) {
            formIsValid = false;
          }
      } 


      if (errors !== "") {
        errors += "are empty or have errors";
        alert(errors);
      }
      return formIsValid;
  }

  /**
		@param event: submit button is hit
		Make sure all information is there and send PUT request
		**/
  function handleSubmit(event){
    event.preventDefault();
		if( checkRequiredFields()){
      alert('An event was submitted.');
      console.log(eventInfo);
    }
	} 

  
    return (
      <div className="container">
        <Container >

        <Jumbotron>
        <div>
        <h1 style={{textAlign:"center"}}>
          Upload an Event
        </h1>
        </div>
        <br/>
        <br/>
          <Container className ="justify-content-center">
          <Row>
          <Col>
          <Form>
          <Form.Group controlId="eventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              onChange = {handleChange}
              name="name"
              type="name"
              placeholder="First Name" />
          </Form.Group>

          <Form.Group controlId="eventTime">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              onChange = {handleChange}
              name="eventTime"
              type="datetime-local"
              placeholder="Choose Event Date" />
          </Form.Group>

          <Form.Group controlId="eventDescription">
            <Form.Label>Event Description</Form.Label>
            <Form.Control
              onChange = {handleChange}
              as="textarea"
              rows={3}
              name="description"
              placeholder="Write Event Description Here" />
          </Form.Group>

          <Form.Group controlId="poster">
            <Form.File
              onChange = {handleChange}
              name="poster"
              id="custom-file"
              label="Upload Poster Image"
              custom/>
          </Form.Group>

          </Form>
          </Col>
          <Col>
          <Form>

          <Form.Group controlId="eventTags">
            <Form.Label>Choose Event Tags</Form.Label>
            <Multiselect
            options={tags} // Options to display in the dropdown
            onSelect={onTagSelect}
            onRemove={onTagSelect} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange = {handleChange}
              name="email"
              type="email"
              placeholder="Enter email" />
          </Form.Group>
          </Form>

          <Button variant="danger" type="submit" onClick = {handleSubmit}>
            Submit
          </Button>
          </Col>
</Row>

</Container>
</Jumbotron>
</Container>
      </div>
    );
}

export default UploadEvent;