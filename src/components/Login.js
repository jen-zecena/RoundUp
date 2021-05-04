import React from "react";
import Container from  "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';

function Login() {
  return (
  <div>
    <Container>
      <Col class="col-sm-6 mx-auto">
        <Jumbotron>
          <h2>Login Page </h2>
          <br/>
          <div class="login-form">
            <form>
              <div class="form-group">
                <label>User Name</label>
                <input type="text" class="form-control" placeholder="User Name"/>
              </div>

              <div class="form-group">
                <label>Password</label>
                  <input type="password" class="form-control" placeholder="Password"/>
              </div>

              <button type="submit" class="btn btn-dark">Login</button>
              <Link to="/register">
              <button type="submit" class="btn btn-secondary">Register</button>
              </Link>
            </form>
          </div>
        </Jumbotron>
      </Col>
    </Container>
    </div>
  );
}


export default Login;
