import React, { Component } from 'react'
import { registerService } from '../services/authService'
import toast from 'react-hot-toast'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

class RegisterForm extends Component {
  state = {
    password: 'admin',

    repeatpassword: 'admin',
    loading: true,
    error: {},
    validated: false,
  }

  handleChange = (e) => {
    console.log(e)
    const { name, value } = e.target
    console.log(this.state)
    console.log(e)
    this.setState({
      [name]: value,
    })
  }
  handleSubmits = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    const { email, password, repeatpassword } = this.state
    console.log(this.state)
    if (password !== repeatpassword) {
      alert('Password not match')
    } else {
      const body = {
        email,
        password,
      }
      try {
        const response = await registerService(body)
        alert(JSON.stringify(body))
        if (response.status === 201) {
          toast.success('Register Success')
        }
      } catch (error) {
        this.setState({ error: error.response.data.status })
        toast.error(error.response.data.status)
      }
    }

    this.setState({ validated: true })
  }

  render() {
    return (
      <>
        <Form style={{ height: '100vh' }}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  defaultValue={this.state.email}
                  type="email"
                  name={this.state.email}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Button type="submit">Submit form</Button>
        </Form>
      </>
    )
  }
}

export default RegisterForm