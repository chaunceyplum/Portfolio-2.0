import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Row,
  Collapse,
} from 'reactstrap'
import ProjectList from './ProjectList.js'
import prism from '../images/prism.svg'
import ReactGA from 'react-ga'

const Project = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)

  const [openIndex, setOpenIndex] = useState(null)

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <div className='bg'>
        <div style={{ backgroundImage: `url(${prism})`, objectFit: 'cover' }}>
          <Container>
            <Row>
              <Col>
                <h3 className='titleBlock title textColor'>Projects</h3>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <Container>
          <Row>
            {ProjectList.map((k, i) => (
              <Col xs={12} key={i} className='mb-5'>
                <Card className='footer-card'>
                  {
                    k.image ? <CardImg
                    top
                    width='100%'
                    height='300px'
                    src={k.image}
                    alt={`${k.name} preview`}
                    style={{ objectFit: 'cover' }}
                  /> : <></> 
                  }
                  <CardBody className='bg3'>
                    <h2 className='text-center mb-3 footer-text'>
                      <strong>{k.name}</strong>
                    </h2>
                    <ul className='list-unstyled footer-text'>
                      {k.stack && (
                        <li>
                          <strong className='footer-text'>Stack:</strong>{' '}
                          <span className='footer-text'>{k.stack}</span>
                        </li>
                      )}
                      {k.technologies && (
                        <li>
                          <strong className='footer-text'>Tech used:</strong>{' '}
                          <span className='footer-text'>{k.technologies}</span>
                        </li>
                      )}
                      {k.description && (
                        <li>
                          <strong className='footer-text'>Description:</strong>{' '}
                          <span className='footer-text'>{k.description}</span>
                        </li>
                      )}
                    </ul>

                    <div className='text-center mt-4'>
                      <Button
                        className='footer-btn text-white me-3 bgColor'
                        href={k.githubLink}
                        target='_blank'
                      >
                        GitHub
                      </Button>
                      <Button
                        className='footer-btn text-white me-3 bgColor'
                        href={k.projectLink || '#'}
                        target='_blank'
                        disabled={!k.projectLink}
                      >
                        Live Project
                      </Button>
                      <Button
                        color='secondary'
                        onClick={() => toggleDetails(i)}
                        className='bgColor'
                      >
                        {openIndex === i ? 'Hide Details' : 'More Details'}
                      </Button>
                    </div>

                    <Collapse
                      isOpen={openIndex === i}
                      className='mt-4 footer-text'
                    >
                      {k.role && (
                        <p className='footer-text'>
                          <strong className='footer-text'>My Role:</strong>{' '}
                          <span className='footer-text'>{k.role}</span>
                        </p>
                      )}
                      {k.challenges && (
                        <p className='footer-text'>
                          <strong className='footer-text'>Challenges:</strong>{' '}
                          <span className='footer-text'>{k.challenges}</span>
                        </p>
                      )}
                      {k.impact && (
                        <p className='footer-text'>
                          <strong className='footer-text'>Impact:</strong>{' '}
                          <span className='footer-text'>{k.impact}</span>
                        </p>
                      )}
                      {k.architecture && (
                        <div>
                          <strong className='footer-text'>Architecture:</strong>
                          <img
                            src={k.architecture}
                            alt='architecture'
                            className='img-fluid rounded mt-2'
                          />
                        </div>
                      )}
                    </Collapse>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Project
