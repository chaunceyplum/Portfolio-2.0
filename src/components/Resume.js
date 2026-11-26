import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import cheese from '../images/cheese.svg'
import ReactGA from 'react-ga'

const Resume = () => {
  return (
    <div>
      <div className='bg'>
        <div
          style={{
            backgroundImage: `url(${cheese})`,
            objectFit: 'scaleDown',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Container>
            <h3 className='titleBlock title textColor'>Resume</h3>
          </Container>
        </div>

        <Container>
          <br />
          <br />
          <Row>
            <Col>
              <br />

              <Container>
                <h3>
                  <strong>TAP CXM</strong> ~{' '}
                  <i>Martech Architect (Senior Solutions Consultant)</i>
                  ~ (Feb 2022 to Present)
                </h3>
                <br /><br />
                <ul>
                  <li>
                    Tagging Product Owner on enterprise Adobe Analytics and Web
                    SDK implementations. I set the implementation standards,
                    governance, and QA process across large digital properties.
                  </li><br />

                  <li>
                    Led architecture conversations on enterprise AEP
                    implementations, advising on identity strategy, real time
                    segmentation, data collection standards, and how audiences get
                    activated downstream.
                  </li><br />

                  <li>
                    Built real time personalization pipelines with AEP Edge, Web
                    SDK (Alloy), and CMS platforms, resolving audiences at the
                    edge and changing on site content without relying on server
                    side sessions.
                  </li><br />

                  <li>
                    Designed how CMS platforms, personalization tools, and CDPs
                    talk to each other so web experiences can react to audiences
                    in real time.
                  </li><br />

                  <li>
                    Ran full Adobe Launch property audits and delivered findings
                    reports plus monitoring frameworks covering GTM, Launch, AEP,
                    CJA, and cloud data platforms, working across several teams.
                  </li><br />

                  <li>
                    Worked on XDM schema design, identity graph setup, and edge
                    segmentation for large AEP implementations, including tracking
                    down authentication state issues, audience mismatches, and
                    gaps in profile data collection.
                  </li><br />

                  <li>
                    Set governance standards for enterprise data collection,
                    covering data layer standards, schema design, naming
                    conventions, and QA.
                  </li><br />

                  <li>
                    Designed consent setups that map CMP vendor consent objects to
                    AEP's consentStrings schema for GDPR compliant rollouts.
                  </li><br />

                  <li>
                    Fixed Adobe Target delivery problems on a range of
                    implementations, including config leaking across properties,
                    flicker handling failures, and offer rendering conflicts
                    caused by Web SDK migrations.
                  </li><br />

                  <li>
                    Debugged tough production issues in Adobe Analytics, Target,
                    and AEP by digging into Web SDK payloads, network traffic,
                    identity resolution, and edge responses.
                  </li><br />

                  <li>
                    Supported large Adobe Analytics and Adobe Target migrations
                    between organizations, including moving objects through the
                    API, validating configs, and mapping dependencies across
                    properties.
                  </li><br />

                  <li>
                    Led email work including IP warming, improving deliverability,
                    and moving batch campaigns over to API triggered journeys in
                    Adobe Journey Optimizer.
                  </li><br />

                  <li>
                    Acted as the go between for marketing stakeholders, platform
                    architects, and engineering, turning what the business wants
                    into something the team can actually build.
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col>
              <h3>Enterprise Clients</h3>
              <br />
              <Container>
                <ul>
                  <li>Comcast Business (multiple contracts)</li>
                  <li>Comcast Residential (multiple contracts)</li>
                  <li>Sky Europe (Sky GB / Sky IE)</li>
                  <li>NBCUniversal</li>
                  <li>Salt River Project</li>
                  <li>giffgaff</li>
                  <li>QIH Group</li>
                  <li>Target</li>
                  <li>Adobe</li>
                </ul>
              </Container>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col>
              <h3>Certifications</h3>
              <br />
              <Container>
                <ul>
                  <li>
                    Adobe Certified Expert: Adobe Campaign Classic Business
                    Practitioner
                  </li>
                  <li>
                    Adobe Certified Expert: Adobe Campaign Standard Business
                    Practitioner
                  </li>
                  <li>
                    Adobe Certified Expert: Adobe Journey Optimizer Developer
                  </li>
                  <li>
                    Adobe Certified Expert: Adobe Customer Journey Analytics
                    Developer Expert
                  </li>
                  <li>
                    Adobe Certified Expert: Adobe Experience Platform Business
                    Practitioner
                  </li>
                  {/* <li>
                    Adobe Analytics Architect Master (AD0-E207) — In Progress
                  </li> */}
                </ul>
              </Container>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
          </Row>

        </Container>
      </div>
    </div>
  )
}

export default Resume