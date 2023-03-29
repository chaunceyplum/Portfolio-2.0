import React, { useState } from 'react'
import {
  Collapse,
  Container,
  // Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-scroll'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Button } from 'react-bootstrap'

const MyNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='bgColor'>
      <div>
        <Navbar fixed='top' className='bgColor text-white' expand='sm'>
          <Container className='text-white'>
            <Navbar.Brand className='textColor'>
              <strong>
                <Link spy to='Home' className='textColor'>
                  Chaunce.dev
                </Link>
              </strong>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className=''>
                <Nav.Item>
                  <Nav.Link className='text-center text-white'>
                    <Link activeClass='active' spy to='About'>
                      About
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='text-center text-white'>
                    <Link activeClass='active' spy to='Project'>
                      Projects
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link className='text-center text-white'>
                    <Link activeClass='active' spy to='Resume'>
                      Resume
                    </Link>
                  </Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link className='text-center text-white'>
                    <Link activeClass='active' spy to='Contact'>
                      Contact
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default MyNav
