import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigate() {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold text-primary'>
        <img src="/logo.png" alt="logo" style={{height:"40px"}}/>
          LearnSphere
        </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-center">
            <Nav.Link as={Link} to="/home" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>Home</Nav.Link>
            <Nav.Link as={Link} to="/course" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>Courses</Nav.Link>
            <Nav.Link as={Link} to="/about" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>About</Nav.Link>
            <Nav.Link as={Link} to="/login" className='fs-5 text-primary  px-4 mx-2 fw-bold '>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;
