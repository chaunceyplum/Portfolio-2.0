import React from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Nav,
  Row,
} from 'react-bootstrap'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='footerClass'>
      <Container sticky='bottom' className=''>
        <Row></Row>
        <Row>
          <Col xs={12} md={4}>
            <br />
            <h2 className='text-center textColor'>Chaunce.dev</h2>
            <br />
            <br />

            <Container>
              <Row>
                <Col xs={2} />
                <Col xs={8}>
                  {/* <Form>
                    <FormGroup className='text-center'>
                      <FormLabel className='text-center'>
                        join our newsletter for free stuff
                      </FormLabel>
                      <br />
                      <br />
                      <FormControl
                        size='sm'
                        type='email'
                        placeholder='Enter Your Email Here!'
                      />
                    </FormGroup>
                  </Form> */}

                  <p className='text-center' target='blank'>
                    ©2025
                  </p>
                </Col>
                <Col xs={2} />
              </Row>
            </Container>
            <br />
            <br />
            <br />
          </Col>
          <Col xs={12} md={4} className=' '>
            <br />
            <h3 className='text-center'>Useful Links</h3>

            <br />
            <ul className='footerClass '>
              <li className='text-center'>
                <Link activeClass='active' spy to='About'>
                  About
                </Link>
              </li>
              <br />
              <li className='text-center'>
                <Link activeClass='active' spy to='Project'>
                  Projects
                </Link>
              </li>
              <br />

              <li
                className='text-center'
                style={{ textDecoration: 'none', listStyle: 'none' }}
              >
                <Link activeClass='active' to='Contact'>
                  Contact
                </Link>
              </li>
              <br />
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <br />
            <h3 className='text-center'>Social Media</h3>
            <br />
            <ul className='footerClass'>
              {/* <li className='text-center'>
                <FaTwitter />
              </li> */}
              <br />
              <li className='text-center'>
                <Button
                  href='https://github.com/chaunceyplum'
                  className='bgColor'
                  size='20em'
                  variant='dark'
                >
                  <FaGithub />
                </Button>
              </li>
              <br />
              <li className='text-center'>
                <Button
                  href='https://www.linkedin.com/in/chauncey-plummer-5457361bb/'
                  className='bgColor'
                  size='20em'
                  variant='dark'
                >
                  <FaLinkedin />
                </Button>
              </li>
              <br />
            </ul>
          </Col>
          <br />
          <br />
          <br />
        </Row>
        <Row>
          <hr />
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4} />
          <Col xs={12} md={4}>
            <ul className='footerClass'>
              {/* <li className='text-center'>privacy policy</li> */}
              {/* <li className='text-center'>cookie policy</li>
              <li className='text-center'>cookie settigns</li> */}
            </ul>
          </Col>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Row>
      </Container>
    </div>
  )
}

export default Footer
