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
                  <i>Senior Solutions Consultant</i>
                  ~ (Feb 2022 - Present)
                </h3>
                <br /><br />
                <ul>
                  <li>
                    Tagging Product Owner on enterprise Adobe Analytics and Web SDK
                    implementations — covering implementation standards, governance
                    frameworks, and QA across large-scale digital properties.
                  </li><br />

                  <li>
                    Led architecture discussions for enterprise Adobe Experience
                    Platform implementations, advising on identity strategy,
                    real-time segmentation, data collection standards, and
                    downstream activation patterns.
                  </li><br />

                  <li>
                    Worked on real-time personalization pipelines using AEP Edge,
                    Web SDK (Alloy), and CMS platforms — handling edge audience
                    resolution and on-site content variation without server-side
                    session dependencies.
                  </li><br />

                  <li>
                    Designed integration patterns between CMS platforms,
                    personalization engines, and customer data platforms to enable
                    real-time audience-driven experiences across web properties.
                  </li><br />

                  <li>
                    Conducted full Adobe Launch property audits, producing structured
                    findings and observability frameworks spanning GTM, Launch,
                    AEP/CJA, and cloud data platforms across multi-team environments.
                  </li><br />

                  <li>
                    Worked across XDM schema design, identity graph configuration,
                    and edge segmentation for large-scale AEP implementations —
                    including diagnosing authentication state issues, audience
                    discrepancies, and profile-level data collection gaps.
                  </li><br />

                  <li>
                    Defined governance frameworks for enterprise data collection
                    strategies including data layer standards, schema design,
                    naming conventions, and QA processes across large digital
                    ecosystems.
                  </li><br />

                  <li>
                    Contributed to consent management architectures mapping CMP
                    vendor consent objects to AEP's consentStrings schema for
                    GDPR-compliant deployments.
                  </li><br />

                  <li>
                    Troubleshot Adobe Target delivery issues across a range of
                    implementations — including cross-property configuration bleed,
                    flickerless activity failures, and offer rendering conflicts
                    introduced by Web SDK migration.
                  </li><br />

                  <li>
                    Diagnosed complex production issues across Adobe Analytics,
                    Target, and AEP implementations by analyzing Web SDK payloads,
                    network traffic, identity resolution behavior, and edge
                    decisioning responses.
                  </li><br />

                  <li>
                    Supported large-scale migrations of Adobe Analytics and Adobe
                    Target implementations across organizations, including
                    API-driven object migration, configuration validation, and
                    cross-property dependency analysis.
                  </li><br />

                  <li>
                    Involved in email channel work including IP warming,
                    deliverability optimization, and the migration of batch
                    campaigns into API-triggered, event-driven journeys in Adobe
                    Journey Optimizer.
                  </li><br />

                  <li>
                    Acted as the technical liaison between marketing stakeholders,
                    platform architects, and engineering teams to translate
                    business requirements into scalable technical solutions.
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
                    Adobe Certified Expert — Adobe Campaign Classic Business
                    Practitioner
                  </li>
                  <li>
                    Adobe Certified Expert — Adobe Campaign Standard Business
                    Practitioner
                  </li>
                  <li>
                    Adobe Certified Expert — Adobe Journey Optimizer Developer
                  </li>
                  {/* <li>
                    Adobe Analytics Architect Master (AD0-E207) — In Progress
                  </li>
                  <li>
                    Adobe Customer Journey Analytics Developer Expert (AD0-E604) —
                    In Progress
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