import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import cheese from '../images/cheese.svg'

const Resume = () => {
  return (
    <div>
      <div className='bg'>
        <div
          // className='titleBlock title textColor'
          style={{
            backgroundImage: `url(${cheese})`,
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Container>
            <h3 className='titleBlock title textColor'>Resume</h3>
          </Container>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h2> Chauncey Plummer</h2>
              <br />
              <br />
              <p>
                An enthusiastic Full Stack Web Developer with experience in
                engineering scalable web applications. Proficient in a variety
                of programming languages and web technologies, including HTML,
                CSS, JavaScript, Python, Node.js, React, and MongoDB.
                Demonstrated ability to manage complex projects from concept to
                deployment, with a focus on delivering high-quality,
                user-friendly solutions.
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3> Technical Skills</h3>
              <br />

              <Container>
                <ul>
                  <li>Programming languages: HTML, CSS, JavaScript, Python</li>
                  <li>Web frameworks: Node.js, React, Express.js</li>
                  <li>Database technologies: MySQL, MongoDB</li>
                  <li>Version control: Git</li>
                  <li>Other tools: Jira, Slack and Teams</li>
                </ul>
              </Container>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <h3> Proffessional experience</h3>
              <br />

              <Container>
                <h6>
                  <strong>TAP CXM</strong> ~ <i>Technical Consultant</i> ~ (Feb
                  2022 - Present)
                </h6>
                <ul>
                  <li>
                    ~ Built API multiple endpoints via JSSP using JavaScript and
                    JSAPI methods in Adobe Campaign Classic
                  </li>
                  <li>
                    ~ Wrote SQL queries using JavaScript in Adobe Campaign
                    Classic Supported marketers in HTML Email development.
                  </li>
                  <li>
                    ~ Used tables and media queries to develop responsive Emails
                    for all devices in Adobe Campaign Standard
                  </li>
                  <li>
                    ~ Broke down marketing emails into fragments so marketers
                    could use adobe campaign standard drag-and-drop interface to
                    build interactive HTML Emails without a developer present in
                    Adobe Campaign Standard
                  </li>
                  <li>
                    ~ Used Adobe I/O to access adobe campaign standard APIs to
                    import and export table data to and from third parties
                  </li>
                  <li>
                    ~ Implemented a Full Stack custom instance monitoring
                    dashboard, which allows end users to proactivly monitor
                    their instance and get on top of issues before they occur.
                    this dashboard also enables marketers to view deliverability
                    and engagement metrics without having to acces the adobe
                    campaign classic console
                  </li>
                  <li>
                    ~ Provided documentation of design and development of
                    Projects
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <h3> Companies I've collabed with</h3>
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
          <br />
          <br />
          <Row>
            <Col>
              <h3> Certificates</h3>
              <br />

              <Container>
                <ul>
                  <li>
                    Nucamp Full Stack Web and Mobile Development Bootcamp
                    Certificate
                  </li>
                  <li>
                    Nucamp Front End Web and Mobile Development Bootcamp
                    Certificate
                  </li>
                  <li>Adobe Campaign Standard - Business Practitioner</li>
                </ul>
              </Container>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <h3> Education</h3>
              <br />

              <Container>
                <h6>
                  <strong>Laguardia Community College</strong> ~{' '}
                  <i>
                    Associates degree in Applied Scienece (Network
                    Administration)
                  </i>{' '}
                  ~ (Sep 2016 - Jan 2019)
                </h6>
              </Container>
            </Col>
          </Row>
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

export default Resume
