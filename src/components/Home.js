import React, { useState, useEffect, useRef } from 'react'

import { Link } from 'react-scroll'
import { Button, Col, Container } from 'reactstrap'
import trianglify from '../images/square.svg'
const Home = () => {
  return (
    <div>
      <div className='bg'>
        <Container className='homeDiv '>
          {/* <Col xs={2} /> */}
          <Col xs={12} className='center '>
            <div>
              <span>
                <span>Hi my name is</span>
                <h3 className='title1 textColor'>
                  <strong>
                    <i className='textColor'> Chauncey Plummer</i>
                  </strong>
                </h3>
              </span>

              <p>
                I am an infectiously enthusiastic Full stack Web Developent
                Bootcamp graduate with fundamental knowledge of web development.
                Seeking to utilize advanced expertise in javaScript.
              </p>
              <Button className='bgColor1'>
                <Link activeClass='active' spy to='Project'>
                  Check out my work
                </Link>
              </Button>
            </div>
          </Col>
          {/* <Col xs={2} /> */}
        </Container>
      </div>
    </div>
  )
}

export default Home
