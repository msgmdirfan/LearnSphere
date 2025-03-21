import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Check login and admin status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const adminStatus = localStorage.getItem("isAdmin") === "true";

    setIsLoggedIn(!!token); // True if token exists, false otherwise
    setIsAdmin(token && adminStatus); // Only true if both token exists AND isAdmin is true
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-white shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold text-primary'>
          <img src="/logo.png" alt="logo" style={{ height: "40px" }} />
          LearnSphere
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-center">
            <Nav.Link as={Link} to="/home" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>Home</Nav.Link>
            <Nav.Link as={Link} to="/course" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>Courses</Nav.Link>
            <Nav.Link as={Link} to="/about" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>About</Nav.Link>
            
            {/* Show Admin link only if user is logged in AND is an admin */}
            {isLoggedIn && isAdmin && (
              <Nav.Link as={Link} to="/admin" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>Admin</Nav.Link>
            )}

            {/* Show Login or Logout based on authentication status */}
            {isLoggedIn ? (
              <button onClick={handleLogout} className='btn btn-danger px-4 mx-2 fw-bold'>Logout</button>
            ) : (
              <Nav.Link as={Link} to="/login" className='fs-5 text-primary px-4 mx-2 fw-bold'>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;