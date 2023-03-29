import React from 'react'
import { FormControl, FormLabel } from 'react-bootstrap'
import { Card, Col, Container, Form, FormGroup, Row } from 'reactstrap'
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
        <Container>
          <Row>
            <Col xs={8} className='center'>
              <div>
                <Form>
                  <FormGroup>
                    <FormLabel>Enter your Email Here</FormLabel>
                    <FormControl
                      size='sm'
                      type='email'
                      placeholder='Enter Your Email Here!'
                    ></FormControl>
                  </FormGroup>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contact
