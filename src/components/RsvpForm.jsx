import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function App() {
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    userID: "",
    eventID: ""
  });

  const [user,setUser] = useState([]);

  console.log(userInfo);
  console.log(user);

  function handleChange(event) {
    const { name, value } = event.target;

    setUserInfo(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  function sendUserRSVP(e) {
    setUser(userInfo);
    // user and userInfo now both hold the user data that we
    // want to send in the PUT erquest to the API to let it
    // know that the user has subscribed
    // on the click we should call the function for the PUT Request
  }

  return (
    <div className="container">
      <Container>
        <h1>
          RSVP Form
        </h1>
        <Form>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange = {handleChange}
              value={userInfo.fName}
              name="fName"
              type="fname"
              placeholder="First Name" />
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={userInfo.lName}
              name="lName"
              type="lname"
              placeholder="Last Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={userInfo.email}
              name="email"
              type="email"
              placeholder="Enter email" />
          </Form.Group>

          <Button variant="danger" type="submit" onClick = {sendUserRSVP} >
            Submit
          </Button>
        </Form>

      </Container>


    </div>
  );
}

export default App;
