import React, { useState, useEffect, useRef } from 'react'

import { Link } from 'react-scroll'
import { Button, Col, Container, Row } from 'reactstrap'
import trianglify from '../images/square.svg'
import me from '../images/logo.png'
const Home = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [username, setUserName] = useState('')
  return (
    <div>
      <div className='bg bg2'>
        <Container className='homeDiv ' style={{}}>
          {/* <Col xs={2} /> */}
          <Col xs={12} className='center '>
            <div>
              <Container>
                <Row>
                  {/* <Col md={2} /> */}
                  <Col xs={12} md={8}>
                    {/* <span className='text center1 '> */}
                    <span className='title2'>Hi my name is</span>
                    <h3 className='title1 textColor'>
                      <strong>
                        <i className='textColor'> Chauncey Plummer</i>
                      </strong>
                    </h3>
                    <p className='title2'>
                      Im an enthusiastic Full Stack Web Developer with
                      experience in engineering scalable web applications.
                    </p>
                    {/* </span> */}
                    <br />
                    <Container>
                      <Button className='bgColor1'>
                        <Link activeClass='active' spy to='Project'>
                          Check out my work
                        </Link>
                      </Button>
                    </Container>
                    <br />
                  </Col>
                  <Col xs={12} md={4}>
                    <div className='center text-center'>
                      <Container>
                        {/* <div
                        style={{
                          backgroundImage: `url(${me})`,
                          objectFit: 'cover',
                        }}
                      ></div> */}
                        <img
                          src={me}
                          style={{ maxHeight: '40vh', maxWidth: '40vh' }}
                        />
                      </Container>
                    </div>
                  </Col>
                  {/* <Col md={2} lg={0} /> */}
                </Row>
              </Container>
              <br />

              <br />
              <br />
              <br />
            </div>
          </Col>
          {/* <Col xs={2} /> */}
        </Container>
      </div>
    </div>
  )
}

export default Home
