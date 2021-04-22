import React from "react";
import Form from "react-bootstrap/Form";
import Container from  "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Register() {
  return (
  <div>
    <Container>
      <Col class="col-sm-6 mx-auto">
        <Jumbotron>
          <h2>Register </h2>
          <div class="login-form">
            <form>
              <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name"/>
              </div>

              <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name"/>
              </div>

              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Email"/>
              </div>

              <div class="form-group">
                <label>Password</label>
                  <input type="password" class="form-control" placeholder="Password"/>
              </div>

              <button type="submit" class="btn btn-dark">Register</button>
            </form>
          </div>
        </Jumbotron>
      </Col>
    </Container>
    </div>
  );
}


export default Register;
