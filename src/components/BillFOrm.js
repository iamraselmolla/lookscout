import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';

const BillFOrm = () => {

  const handleFormData = (e) => {
    e.preventDefault();
    if (!e.target.agree.checked) {
      return toast.error("Please agree our terms and condition")
    }
    if(e.target.pass.value !== e.target.repass.value){
      return toast.error("Password didn't match")
    }
    const name = e.target.name.value
    const email = e.target.email.value
    const pass = e.target.pass.value
    const repass = e.target.repass.value;
    const userData = { name, email, pass, repass }
    fetch('http://localhost:5000/user-data', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
      return toast.success("User data added successfully")
    })
    .catch(err => console.log(err.message))
  }
  return (
    <Form onSubmit={handleFormData} className='fw-bold'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail2">
        <Form.Label>Email*</Form.Label>
        <Form.Control name='email' className='text-black' type="email" placeholder="Email Address" />
        <Form.Text className="text-muted">
          Please input a real Email address
        </Form.Text>
      </Form.Group>

      <div className="row">
        <div className="col-md-6">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control name='pass' type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              Please enter your password
            </Form.Text>
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Confirm Password*</Form.Label>
            <Form.Control name='repass' type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              Password need to match
            </Form.Text>
          </Form.Group>
        </div>
      </div>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="agree" type="checkbox" label="I accept the Terms and Privacy Policy" />
      </Form.Group>
      <Button className=' ms-auto' variant="primary" type="submit">
        Next
      </Button>
    </Form>
  );
};

export default BillFOrm;