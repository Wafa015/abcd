import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export default function Herosection() {
  return (
    < > 

    <Container>
      <Row className=" justify-content-md-center">
        <div className=' col-lg-6 col-md-12 col-sm-12'>
          <p style={{ color: `linear-gradient(to right, #208FFD, #A5FA94)` }} className=' hero fw-bold'> The Fast Pinpoint <br />
<span className='text-danger'>  Get Started - </span>
Tracking & Reservation.</p>
          </div>
        <div className='my-5  justify-content-center text-center col-lg-6 col-md-12 col-sm-12'>
        <p className='circular-div'>
      <Link style={{ textDecoration: 'none',color:'white' }} to='/abt'>
        Get Started
      </Link>
    </p>
        </div>
      </Row>
    </Container>
      
    </ >
  );
}

