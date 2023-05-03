import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardImgOverlay,
  Col,
  Container,
  Row,
} from 'reactstrap'
import ProjectList from './ProjectList.js'
import prism from '../images/prism.svg'
const Project = () => {
  return (
    <div>
      <div className='bg'>
        <div
          style={{
            backgroundImage: `url(${prism})`,
            objectFit: 'cover',
          }}
        >
          <Container>
            <Row>
              <Col>
                <h3 className='titleBlock title textColor'>Projects</h3>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            {ProjectList.map((k, i) => {
              return (
                <Col xs={12} key={i} className='index'>
                  <Container>
                    <Row>
                      <Col xs={12} lg={6} className='ProjectCol'>
                        <Card style={{ borderRadius: '25px' }}>
                          <CardImg
                            alt='Card image '
                            src={k.image}
                            width='100%'
                            height='100%'
                            style={{
                              objectFit: 'cover',
                              borderRadius: '20px',
                            }}
                          />
                        </Card>
                      </Col>

                      <Col xs={12} lg={6} className='ProjectCol'>
                        <div className='text-center'>
                          <br />
                          <h2 className=''>
                            <strong>{k.name}</strong>
                          </h2>
                          <ul className='text'>
                            <li>Stack: {k.stack}</li>
                            <li>Tech used: {k.technologies}</li>
                            <li>Project description: {k.description}</li>
                            <br />
                          </ul>
                          <Container>
                            <Row>
                              <Col xs={6}>
                                <Button
                                  className=' text-white bgColor1 '
                                  target='_blank'
                                  href={k.githubLink}
                                >
                                  Link to github
                                </Button>
                              </Col>
                              <Col xs={6}>
                                <Button
                                  className='btn text-white bgColor1'
                                  target='_blank'
                                  href={k.projectLink}
                                >
                                  Link to Project
                                </Button>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Project
