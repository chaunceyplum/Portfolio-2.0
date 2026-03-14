import React from "react";
import { Col, Container, Row } from "reactstrap";
import trianglify from "../images/square.svg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ReactGA from "react-ga";

const About = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <div className="bg">
        <div
          // className='titleBlock title textColor'
          style={{
            backgroundImage: `url(${trianglify})`,
            objectFit: "scaleDown",
          }}
        >
          <Container>
            <h3 className="titleBlock title textColor">About</h3>
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
              I'm a Senior Solutions Consultant at TAP, a martech consultancy
              where I lead technical strategy across enterprise Adobe
              implementations. My work sits at the intersection of data
              architecture, digital analytics, and real-time personalization —
              translating complex business requirements into precise, scalable
              technical solutions. I specialize in Adobe Experience Platform
              (AEP), Adobe Analytics, Adobe Target, and the Web SDK (Alloy),
              with deep hands-on experience designing XDM schemas, edge
              segmentation strategies, identity graphs, and consent management
              frameworks. I've architected end-to-end personalization pipelines
              — from data collection through Launch/Tags and Web SDK, to
              audience activation via AEP Edge and delivery through platforms
              like and Adobe Target. On the analytics side, I serve as a de
              facto solutions architect across multi-suite Adobe Analytics
              implementations, owning tagging governance, data layer strategy,
              and implementation QA for clients at the scale of Comcast
              Business, NBCU, and Sky Europe. I've led full Launch property
              audits, EDDL migrations, and cross-platform observability
              frameworks spanning GTM, AEP, CJA, and BigQuery. I hold
              certifications in Adobe Campaign and Adobe Journey Optimizer.
            </p>
            <p>
              My background also spans the broader martech stack beyond analytics and data collection. I've worked across email platform migrations end-to-end, from data ingestion and audience transport through to template implementation across multiple ESPs. On the campaign side, I've implemented real-time messaging in Adobe Campaign and Adobe Journey Optimizer, and have worked on converting batch programs into API-triggered, event-driven journeys. I've built internal tooling including marketing dashboards for non-technical stakeholders and preference management applications, and have used CDPs to build and activate audiences across channels. I also put together data pipeline demos visualizing the full activation path — from data warehouse and lake through to CDP and ESP — to help stakeholders understand how customer data moves and gets used.
            </p>
          </Row>
        </Container>
        <Container>
          <Row>
            <div>
              <h3 className="titleBlock title">My Skills</h3>
            </div>
          </Row>

          <Row className="bgColor">
            <Col className="text-center" xs={12} md={6}>
              <div>
                <h3 className="bgColor1">Martech & Analytics</h3>
                <ul>
                  <li>Adobe Experience Platform (AEP)</li>
                  <li>Adobe Analytics</li>
                  <li>Adobe Target</li>
                  <li>Adobe Launch / Tags</li>
                  <li>Adobe Customer Journey Analytics(CJA)</li>
                  <li>Adobe Campaign Classic</li>
                  <li>Adobe Journey Optimizer</li>
                  <li>Adobe Web SDK (Alloy)</li>
                  <li>AppMeasurement</li>
                  <li>Google Tag Manager</li>
                  <li>Google Analytics</li>
                  <li>Zeta Marketing Platform</li>
                  <li>Snowflake</li>
                </ul>
              </div>
              <br />
            </Col>
            <Col className="text-center" xs={12} md={6}>
              <div>
                <h3 className="bgColor1">Full Stack Engineering</h3>

                <ul>
                  <li>Node</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>FastAPI</li>
          
                  <li>Flask</li>
                  <li>Postgres</li>
                  <li>SQL</li>
                  <li>Next.js</li>
                  <li>Retrival Augmented Generation</li>
                  <li>Agentic AI</li>
                </ul>
              </div>
              <br />
            </Col>
            <Col className="text-center" xs={12} md={6}>
              <div>
                <h3 className="bgColor1">Data Engineering</h3>
                <ul>
                  <li>Snowflake</li>
                                      <li>Databricks</li>

                  <li>Apache Iceberg</li>
                  <li>Apache Airflow</li>
                  <li>Apache Kafka</li>
                </ul>
              </div>
              <br />
            </Col>
                        <Col className="text-center" xs={12} md={6}>
              <div>
                <h3 className="bgColor1">Cloud architecture</h3>
                <ul>
                  <li>Amazon Web Services</li>
                    <li>Amazon EC2</li>
                    <li>Amazon S3</li>
                    <li>Amazon RDS</li>
                    <li>Amazon Lambda</li>
                    <li>Amazon EMR</li>
                  
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
  );
};

export default About;
