import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import trianglify from '../images/square.svg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const About = () => {
  return (
    <div>
      <div className='bg'>
        <div
          // className='titleBlock title textColor'
          style={{
            backgroundImage: `url(${trianglify})`,
            objectFit: 'cover',
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
            <h2> Chauncey Plummer</h2>
            <br />
            <br />
            <p>
              My objective is to obtain a challenging position as a Full-Stack
              Developer in a dynamic company that allows me to use my advanced
              technical skills, creativity, and experience to contribute to the
              growth of the company and my personal development.
            </p>
            <br />
            <p>
              I have a solid foundation in both front-end and back-end
              development, which allows me to build complete web solutions from
              start to finish. I am proficient in languages such as JavaScript,
              HTML, CSS, and have experience with popular front-end frameworks
              such as React. On the back-end, I am comfortable working with
              Node.js, Express and databases like MySQL and MongoDB.
            </p>
            <br />
            <p>
              Throughout my career, I have had the opportunity to work on a
              variety of projects ranging from small business websites to HTML
              Email development to building Restful backend services.
            </p>
            <br />
            <p>
              In addition to technical skills, I am a problem solver, a critical
              thinker, and a quick learner. I am always looking for ways to
              improve my skills and stay up-to-date with the latest technologies
              in the industry.
            </p>
            <br />
            <p>
              When I am not coding, you can find me exploring the outdoors,
              playing video games or shopping. I am excited to continue my
              journey as a Full Stack Developer and contribute to the
              development of innovative web solutions.
            </p>
          </Row>
          <br />

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

export default About
