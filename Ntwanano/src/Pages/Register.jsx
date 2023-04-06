import React from 'react'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
  return (
    <div><Header />
      <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="Username" placeholder="Enter Username" />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Password" />
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password Confirm" placeholder="Password Confirm" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register