import React from 'react'
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
import scales from '../images/scales.svg'
const Contact = () => {
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
        <Container className='Form'>
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col xs={8} className='center'>
              <div>
                <Form>
                  <h3>
                    Got a question or proposal, or just want to say hello? Go
                    ahead.
                  </h3>
                  <Container>
                    <Row>
                      <Col>
                        <FormGroup>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl
                            size='sm'
                            type='email'
                            placeholder='Enter Your Name Here!'
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
                        placeholder='Enter Your Email Here!'
                      ></FormControl>
                    </FormGroup>
                  </Container>
                  <div className='center text-center'>
                    <Button className='bgColor' type='submit'>
                      Submit
                    </Button>
                  </div>
                </Form>
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
