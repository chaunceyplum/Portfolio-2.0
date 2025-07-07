import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import cheese from '../images/cheese.svg'
import ReactGA from 'react-ga'

const Resume = () => {
  return (
    <div>
      <div className='bg'>
        <div
          // className='titleBlock title textColor'
          style={{
            backgroundImage: `url(${cheese})`,
            objectFit: 'scaleDown',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', // Or 'contain' depending on your needs
          }}
        >
          <Container>
            <h3 className='titleBlock title textColor'>Resume</h3>
          </Container>
        </div>

        <Container>
          {/* <Row>
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
          <br /> */}
          {/* <Row>
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
          </Row> */}
          <br />
          <br />
          <Row>
            <Col>
              <h3>Professional experience</h3>
              <br />

              <Container>
                <h6>
                  <strong>TAP CXM</strong> ~ <i>Technical Consultant</i> ~ (Feb
                  2022 - Present)
                </h6>
                <ul>
                  <li>
                    ~ Built production-grade real-time data pipelines on AWS to
                    power low-latency connections between Customer Data
                    Platforms and orchestration tools, ensuring reliable and
                    scalable event delivery for personalization use cases.
                  </li>
                  <li>
                    ~ Designed end-to-end data workflows leveraging AWS S3,
                    Snowflake, and Adobe Experience Platform to automate the
                    transformation of raw behavioral data into curated datasets
                    for advanced segmentation and targeting.
                  </li>
                  <li>
                    ~ Migrated complex marketing programs from Adobe Campaign to
                    Adobe Journey Optimizer, using its event-driven architecture
                    to enable real-time, personalized customer journeys at
                    scale.
                  </li>
                  <li>
                    ~ Developed real-time marketing dashboards and internal
                    applications, including a preference center and behavioral
                    tracking systems, enabling teams to activate data insights
                    and manage customer experiences dynamically.
                  </li>
                  <li>
                    ~ Led strategic martech initiatives such as an IP warming
                    campaign with Zeta Marketing Platform (boosting email
                    deliverability to 97%) and the API-driven migration of Adobe
                    Target and Adobe Analytics configurations for a major
                    telecom client.
                  </li>
                  <li>
                    ~ Contributed to solution design and adoption, working
                    alongside marketers, engineers, and sales teams to present
                    high-impact use cases and demos that bridge business needs
                    with technical delivery.
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
                  <li>Comcast Residential (multiple contracts)</li>
                  <li>Comcast Business (multiple contracts)</li>
                  <li>Salt River Projects</li>
                  <li>giff gaff</li>
                  <li>QIH Group</li>
                  <li>Target</li>
                  <li>Adobe</li>
                </ul>
              </Container>
            </Col>
          </Row>
          <br />
          <br />
          {/* <Row>
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
                  <li>
                    Earned multiple Adobe certifications, including Business
                    Practitioner Expert (Adobe Campaign Classic, Adobe Campaign
                    Standard) and Developer Expert (Adobe Journey Optimizer),
                    demonstrating deep cross-platform expertise.
                  </li>
                </ul>
              </Container>
            </Col>
          </Row> */}
          <br />
          <br />
          {/* <Row>
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
          </Row> */}
        </Container>
      </div>
    </div>
  )
}

export default Resume
