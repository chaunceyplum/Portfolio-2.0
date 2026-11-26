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
              I'm a martech architect at TAP, a martech consultancy, where I
              lead the technical side of enterprise Adobe implementations. Most
              of my day is spent on data architecture, analytics, and real time
              personalization, figuring out what a business actually needs and
              then building something that will hold up at scale. I work mostly
              in Adobe Experience Platform (AEP), Adobe Analytics, Adobe Target,
              and the Web SDK (Alloy). That means designing XDM schemas, edge
              segmentation, identity graphs, and consent setups. I've built
              personalization pipelines from start to finish, starting with data
              collection in Launch and Web SDK, moving through audience
              activation on AEP Edge, and ending with delivery in Adobe Target.
            </p>
            <p>
              On the analytics side, I'm usually the go to solutions architect
              on multi suite Adobe Analytics implementations. I own tagging
              governance, data layer strategy, and QA for clients like Comcast
              Business, NBCU, and Sky Europe. I've run full Launch property
              audits, led EDDL migrations, and set up monitoring that spans GTM,
              AEP, CJA, and BigQuery. I'm also an Adobe Certified Expert in
              Campaign, Journey Optimizer, Customer Journey Analytics, and
              Experience Platform.
            </p>
            <p>
              My work goes beyond analytics and data collection too. I've
              handled email platform migrations across multiple ESPs, covering
              everything from data ingestion and moving audiences over to
              building out templates. I've set up real time messaging in Adobe
              Campaign and Adobe Journey Optimizer, and turned batch programs
              into journeys that fire off API calls and live events. I've also
              built internal tools like marketing dashboards for non technical
              teams and preference management apps, and used CDPs to build and
              activate audiences across channels. When stakeholders need to see
              how their customer data actually moves, I've put together demos
              that walk through the whole path from the warehouse and lake to
              the CDP and ESP.
            </p>
            <p>
              Outside of client work, I build AI agents. My main project is an
              MCP (Model Context Protocol) server with 139 tools across Adobe
              Experience Platform, AWS, Databricks, and Snowflake, backed by a
              searchable knowledge base, plus a Next.js app that drives it. You
              give it a request in plain English and it carries out a full
              martech build, from XDM schema design all the way to audience
              activation. It's basically the same work I scope and deliver by
              hand for clients. Building it taught me a lot about agent
              orchestration, tool design, and routing between different LLM
              providers, and it's something I've actually shipped and demoed,
              not just read about.
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
                  <li>Adobe Customer Journey Analytics (CJA)</li>
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
                </ul>
              </div>
              <br />
            </Col>
            <Col className="text-center" xs={12} md={6}>
              <div>
                <h3 className="bgColor1">AI & Agentic Engineering</h3>
                <ul>
                  <li>Retrieval Augmented Generation (RAG)</li>
                  <li>Agentic AI and LLM Tool Use</li>
                  <li>Model Context Protocol (MCP)</li>
                  <li>Multi Agent Orchestration</li>
                  <li>AWS Lambda Agent Infrastructure</li>
                  <li>LLM Routing (Anthropic, Bedrock, OpenAI)</li>
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
                <h3 className="bgColor1">Cloud Architecture</h3>
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
