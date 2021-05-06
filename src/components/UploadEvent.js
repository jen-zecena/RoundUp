// import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function UploadEvent(){
//   const [eventInfo, setEventInfo] = useState({
//     userID: "",
//     description: "",
//     eventTime: "",
//     poster: "",
//     name: "",
//     location:"",
//     email:"", 
//   });

//   var dateFormat = "0"; 
//   var timeFormat = "0";

//   const [setEvent] = useState([]);

//   const requiredProps = ["userID" , "eventTime" , "name" , "location", "email"];
  
//   console.log(eventInfo);

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setEventInfo(prevValue => {
//       if (name === "userID") {
//         return {
//           userID: value,
//           description: prevValue.description,
//           eventTime: prevValue.eventTime,
//           poster: prevValue.poster,
//           name: prevValue.name,
//           location: prevValue.location,
//           email: prevValue.email
//         };
//       } else if (name === "description") {
//         return {
//           userID: prevValue.userID,
//           description: value,
//           eventTime: prevValue.eventTime,
//           poster: prevValue.poster,
//           name: prevValue.name,
//           location: prevValue.location,
//           email: prevValue.email
//         };
//       } else if (name === "eventDate") {
//         dateFormat = value;
//         return {
//           userID: prevValue.userID,
//           description: prevValue.description,
//           eventTime: dateFormat + timeFormat,
//           poster: prevValue.poster,
//           name: prevValue.name,
//           location: prevValue.location,
//           email: prevValue.email
//         };
//       } else if (name === "eventTime") {
//         timeFormat = value;
//         return {
//           userID: prevValue.userID,
//           description: prevValue.description,
//           eventTime: dateFormat + timeFormat,
//           poster: prevValue.poster,
//           name: prevValue.name,
//           location: prevValue.location,
//           email: prevValue.email
//         };
//       }else if (name === "poster") {
//         return {
//           userID: prevValue.userID,
//           description: prevValue.description,
//           eventTime: prevValue.eventTime,
//           poster: value,
//           name: prevValue.name,
//           location: prevValue.location,
//           email: prevValue.email,
//         };
//       }else if (name === "name") {
//         return {
//           userID: prevValue.userID,
//           description: prevValue.description,
//           eventTime: prevValue.eventTime,
//           poster: prevValue.poster,
//           name: value,
//           location: prevValue.location,
//           email: prevValue.email,
//         };
//       }else if (name === "location") {
//         return {
//           userID: prevValue.userID,
//           description: prevValue.description,
//           eventTime: prevValue.eventTime,
//           poster: prevValue.poster,
//           name: prevValue.name,
//           location: value,
//           email: prevValue.email,
//         };
//       }else if (name === "email") {
//         return {
//           userID: prevValue.userID,
//           description: prevValue.description,
//           eventTime: prevValue.eventTime,
//           poster: prevValue.poster,
//           name: prevValue.name,
//           location: prevValue.location,
//           email: value,
//         };
//       }
//     });
//   }

//   /**
//    * 
//    * @param {*} state 
//    *    The state obj
//    * @returns 
//    *     TRUE if all required properties are non null
//    *     FALSE otherwise
//    */
//   function checkRequiredFields(state){
//     for (var prop in state){
//       if (requiredProps.includes(prop)){
//         if (state[prop] === null || state[prop] === ""){
//           return false;
//         }
//       }
//     }   
//     return true;
//   }

//   /**
// 		@param event: submit button is hit
// 		Make sure all information is there and send PUT request
// 		**/
//   function handleSubmit(event){
//     event.preventDefault();
//     setEvent(eventInfo);
// 		if( checkRequiredFields(this.state)){
//       alert('A name was submitted: ' + this.state.value);
//       console.log(this.state.value);
//     }
// 	} 

  
//     return (
//       <div className="container ">
//         <Container >

//         <Jumbotron>
//         <div>
//         <h1 style={{textAlign:"center"}}>
//           Upload an Event
//         </h1>
//         </div>
//         <br/>
//         <br/>
//           <Container class ="justify-content-center">
//           <Row>
//           <Col>
//           <Form>
//           <Form.Group controlId="eventName">
//             <Form.Label>Event Name</Form.Label>
//             <Form.Control
//               onChange = {handleChange}
//               value={eventInfo.name}
//               name="name"
//               type="name"
//               placeholder="First Name" />
//           </Form.Group>

//           <Form.Group controlId="eventDate">
//             <Form.Label>Event Date</Form.Label>
//             <Form.Control
//               onChange = {handleChange}
//               value={eventInfo.eventTime}
//               name="eventDate"
//               type="date"
//               placeholder="Choose Event Date" />
//           </Form.Group>

//           <Form.Group controlId="eventTime">
//             <Form.Label>Event Time</Form.Label>
//             <Form.Control
//               onChange = {handleChange}
//               value={eventInfo.eventTime}
//               name="eventTime"
//               type="time"
//               placeholder="Choose Event Date" />
//           </Form.Group>

//           <Form.Group controlId="eventDescription">
//             <Form.Label>Event Description</Form.Label>
//             <Form.Control
//               onChange = {handleChange}
//               value={eventInfo.description}
//               as="textarea"
//               rows={3}
//               placeholder="Write Event Description Here" />
//           </Form.Group>

//           <Form.Group controlId="firstName">
//             <Form.File
//               onChange = {handleChange}
//               value={eventInfo.poster}
//               id="custom-file"
//               label="Upload Poster Image"
//               custom/>
//           </Form.Group>

//           </Form>
//           </Col>
//           <Col>
//           <Form>

//           <Form.Group controlId="eventTags">
//             <Form.Label>Choose Event Tags</Form.Label>
//             <Form.Control as="select" multiple htmlSize={5} custom>
//               <option>Tag 1</option>
//               <option>Tag 2</option>
//               <option>Tag 3</option>
//               <option>Tag 4</option>
//               <option>Tag 5</option>
//               <option>Tag 6</option>
//               <option>Tag 7</option>
//               <option>Tag 8</option>
//               <option>Tag 9</option>
//               <option>Tag 10</option>
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               onChange = {handleChange}
//               value={eventInfo.email}
//               name="email"
//               type="email"
//               placeholder="Enter email" />
//           </Form.Group>
//           </Form>

//           <Button variant="danger" type="submit" onClick = {handleSubmit}>
//             Submit
//           </Button>
//           </Col>
// </Row>

// </Container>
// </Jumbotron>
// </Container>
//       </div>
//     );
// }

// export default UploadEvent;