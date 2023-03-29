import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import trianglify from '../images/square.svg'

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
        <Container>
          <Row>
            <h3> who Am I?</h3>
            <br />
            <p>
              I am a full stack web dev bootcamp graduate seeking to utilize
              advanced expertise in JavaScript
            </p>
          </Row>
          <Row>
            <h3> what I do?</h3>
            <br />
            <p>
              I specialize in building beautiful User interfaces so that
              companies can interact with their clients seemlessly.
            </p>
          </Row>
          <Row>
            <Col>
              <h3> companies I've collabed with</h3>
              <br />
              <Container>
                <ul>
                  <li>TAP CXM</li>
                  <li>giff gaff</li>
                  <li>QIH Group</li>
                  <li>Target</li>
                  <li>Adobe</li>
                </ul>
                <p>...and many more</p>
              </Container>
            </Col>
          </Row>
          <Row>
            <h3> List of some Technologies I use</h3>
            <br />
            <br />
            <Container>
              <Row>
                <Col>
                  <h4>Front End</h4>
                  <br />
                  <ul>
                    <li>HTML Email</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Scss</li>
                  </ul>
                </Col>
                <Col>
                  <h4>Back End</h4>
                  <br />
                  <ul>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>API Development</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About
