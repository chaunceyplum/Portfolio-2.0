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
        <Container>
          <Row>
            {ProjectList.map((k, i) => {
              return (
                <Col xs={12} key={i}>
                  <Container>
                    <Row>
                      <Col xs={12} md={6} className='ProjectCol'>
                        <Card>
                          <CardImg
                            alt='Card image '
                            src={k.image}
                            width='80%'
                          />
                        </Card>
                      </Col>
                      <Col xs={12} md={6} className='ProjectCol'>
                        <div className='text-center'>
                          <h3 className=''> {k.name}</h3>
                          <ul>
                            <li>stack: {k.stack}</li>
                            <li>Tech used: {k.technologies}</li>
                            <li>Project description: {k.description}</li>
                            <br />
                          </ul>
                          <Button
                            className=' text-white bgColor1'
                            target='_blank'
                            href={k.githubLink}
                          >
                            Link to github
                          </Button>
                          <br />
                          <br />
                          <Button
                            className='btn text-white bgColor1'
                            target='_blank'
                            href={k.projectLink}
                          >
                            Link to Project
                          </Button>
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
