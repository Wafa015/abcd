import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export const Contact =()=>{
const [userinfo,setUserInfo]=useState({
  email:'',
  feedback:'',
  contact:''

});
const Submit=(e)=>{
  console.log(userinfo);
}
const Handleinput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserInfo({...userinfo,[name]:value});
    
  }
  return(
    < >
<div className=''>
  <h2 className='mx-5'>Feedback form</h2>
         <br />
         
     <div className="my-5 container">
      <div className='my-3 row'>
        <div className="justify-content-center text-center col-lg-6 col-md-6 col-sm-6">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control value={userinfo.email} onChange={Handleinput} name='email' type="email" placeholder="Enter email" />
        
      </Form.Group>
       <InputGroup>
        
      <Form.Control value={userinfo.feedback} onChange={Handleinput} name='feedback' as="textarea" placeholder='type your feedback here'  />
      </InputGroup>
      <InputGroup>
      <Button onClick={Submit} className='my-5 button1' variant="dark" >
        Send
      </Button>
      
      </InputGroup>
      
      </Form>
        </div>
        <div className='col-lg-6 col-sm-6 col-md-6'>
       <InputGroup>
        
      <Form.Control value={userinfo.contact} onChange={Handleinput} name='contact' as="textarea" placeholder='contact'  />
      </InputGroup>
      
        </div>
        </div>
        </div>   
        </div>

    </>
)


}
