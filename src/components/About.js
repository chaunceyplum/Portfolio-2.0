import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import trianglify from '../images/square.svg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const About = () => {
  return (
    <div>
      <div className='bg'>
        <div
          className='titleBlock title textColor'
          style={{
            backgroundImage: `url(${trianglify})`,
            objectFit: 'cover',
          }}
        >
          <Container>
            <h3 className='titleBlock title textColor'>About</h3>
          </Container>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <h2> Chauncey Plummer</h2>
            <br />
            <br />
            <p>
              My objective is to obtain a challenging position as a Full-Stack
              Developer in a dynamic company that allows me to use my advanced
              technical skills, creativity, and experience to contribute to the
              growth of the company and my personal development.
            </p>
            <br />
            <p>Currently I am a Technical Consultant for </p>
          </Row>
          <br />
          <Row></Row>
          <br />
          <Row></Row>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </div>
    </div>
  )
}

export default About
