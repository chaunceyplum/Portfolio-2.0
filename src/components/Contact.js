import React, { useState } from 'react'
import { FormControl, FormLabel } from 'react-bootstrap'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Row,
} from 'reactstrap'
import axios from 'axios'
import scales from '../images/scales.svg'
const Contact = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const clearBoth = () => {
    setUserEmail('')
    setUserPassword('')
    setUserMessage('')
  }
  const submitUser = (event) => {
    const userDetails = {
      email: userEmail,
      firstName: userPassword,
      message: userMessage,
    }
    // const form = event.currentTarget
    // if (form.checkValidity() === false) {
    //   event.preventDefault()
    //   event.stopPropagation()
    // }
    console.log(userDetails)
    logIn(userDetails)

    return userDetails
  }
  const user = {
    user: userEmail,
    email: userPassword,
    message: userMessage,
  }
  const apiUrl = 'https://classycutzbackend.herokuapp.com/newportContactinfo'

  //const apiUrl = 'http://localhost:3007/newportContactinfo'

  const forceUpdateHandler = () => {
    this.forceUpdate()
  }
  const logIn = async (user) => {
    try {
      const res = await axios.post(`${apiUrl}`, user)

      console.log(res.data)

      res.data
        ? console.log(res.data)
        : console.log('unable to run setter func')

      return res.data
    } catch (err) {
      return err.message
    }
    forceUpdateHandler()
  }

  return (
    <div>
      <div className='bg '>
        <div
          style={{
            backgroundImage: `url(${scales})`,
            objectFit: 'cover',
          }}
        >
          <Container className='titleBlock title textColor'>
            Get In Touch
          </Container>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col xs={10} className=' Form center'>
              <div>
                <Container>
                  <Form>
                    <Container>
                      <h3>
                        Got a question or proposal, or just want to say hello?
                        Go ahead.
                      </h3>
                    </Container>
                    <br />
                    <Container>
                      <Row>
                        <Col>
                          <FormGroup>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl
                              size='sm'
                              type='text'
                              placeholder='Enter Your Name Here!'
                              onChange={(e) => setUserEmail(e.target.value)}
                            ></FormControl>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl
                              size='sm'
                              type='email'
                              placeholder='Enter Your Email Here!'
                              onChange={(e) => setUserPassword(e.target.value)}
                            ></FormControl>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Container>
                    <Container>
                      <FormGroup>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl
                          size='sm'
                          type='textarea'
                          placeholder='Enter a message here!'
                          onChange={(e) => setUserMessage(e.target.value)}
                        ></FormControl>
                      </FormGroup>
                    </Container>
                    <br />
                    <Container>
                      <Row>
                        <Col>
                          <div className='center text-center'>
                            <Button
                              className='bgColor'
                              onClick={() => {
                                clearBoth()
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                        </Col>
                        <Col>
                          <div className='center text-center'>
                            <Button
                              className='bgColor'
                              onClick={(e) => {
                                submitUser(e)
                              }}
                            >
                              Submit
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Form>
                </Container>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
        </Container>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default Contact
