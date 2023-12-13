import Container from 'react-bootstrap/Container';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import logo from '../assets/images/material-symbols_home-pin (1).png' 
import { Link } from 'react-router-dom';
export const Header=()=>{
    return(
      
      <Navbar expand="lg" className="">
      <Container>
        <div className=" container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
<div className='col-lg-4'><Link to={'/'}>
  <Image src={logo} alt="" /></Link>
</div>
<div className='col-lg-8'>
          <Nav className="head me-auto mx-5">
      
            
            <Nav.Link className='mx-3 fw-bold' >About</Nav.Link>
            
            <Nav.Link className='mx-3 fw-bold'>Contact</Nav.Link>
            <Nav.Link className=' mx-3 fw-bold'> Timetable</Nav.Link>
            <Nav.Link className=' mx-3 fw-bold'> Live_Location</Nav.Link>

            <Button className='but mx-5 'variant='danger' >Signin</Button>
          </Nav>
          </div>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    
    )
}