import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import trianglify from '../images/square.svg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ReactGA from 'react-ga'

const About = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div>
      <div className='bg'>
        <div
          // className='titleBlock title textColor'
          style={{
            backgroundImage: `url(${trianglify})`,
            objectFit: 'scaleDown',
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
            {/* <h2> Chauncey Plummer</h2> */}
            <p>
              I am a Full-Stack Developer with experience in building scalable
              data pipelines and web applications. Proficient in AWS, SQL,
              Python, Flask/FastAPI, Apache Airflow, Kafka, Snowflake,
              PostgreSQL, JavaScript, and React, I specialize in automating
              workflows, integrating data sources, and developing user-friendly
              solutions.
            </p>
            <p>
              I have led development across multiple email platform migrations,
              managing the full lifecycle from data ingestion to template
              implementation across various ESPs. My work includes building
              real-time marketing dashboards for non-technical stakeholders,
              developing preference management applications for recipients, and
              using web SDKs to send behavioral events to customer data
              platforms. I've architected data pipelines to demonstrate how
              customer data flows from data warehouses and lakes to CDPs and
              ESPs, enabling clear visualization of the activation path. I’ve
              also used CDPs to build and activate audiences across channels for
              targeted engagement. Additionally, I’ve implemented real-time
              messaging in Adobe Campaign and Adobe Journey Optimizer, and
              transformed batch campaigns into API-triggered, event-driven
              journeys for a major U.S. telecom provider.
            </p>
            <p>
              Certified in Adobe Campaign and Adobe Journey Optimizer, I
              continuously refine my skills to stay ahead in data and web
              technologies. Outside of work, I enjoy exploring the outdoors and
              playing video games.
            </p>
          </Row>
        </Container>
        <Container>
          <Row>
            <div>
              <h3 className='titleBlock title'>My Skills</h3>
            </div>
          </Row>

          <Row className='bgColor'>
            <Col className='text-center' xs={12} md={4}>
              <div>
                <h3 className='bgColor1'>Front end</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next</li>
                  <li>Email Development</li>
                </ul>
              </div>
              <br />
            </Col>
            <Col className='text-center' xs={12} md={4}>
              <div>
                <h3 className='bgColor1'>Back end</h3>
                <ul>
                  <li>Node</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Python</li>
                  <li>Flask</li>
                  <li>Postgres</li>
                  <li>SQL</li>
                </ul>
              </div>
              <br />
            </Col>
            <Col className='text-center' xs={12} md={4}>
              <div>
                <h3 className='bgColor1'>Other</h3>
                <ul>
                  <li>Amazon Web Services</li>
                  <li>Snowflake</li>
                  <li>Adobe Campaign</li>
                  <li>Adobe Journey Optimizer</li>
                  <li>Adobe Experience Platform</li>
                  <li>Zeta Marketing Platform</li>
                  <li>Apache Airflow</li>
                  <li>Apache Kafka</li>
                </ul>
              </div>
              <br />
            </Col>
          </Row>
          <br />

          <br />
          <br />
        </Container>
      </div>
    </div>
  )
}

export default About
