import React from 'react';
import { Button, Form } from 'react-bootstrap';

const BillFOrm = () => {
    return (
        <Form className='fw-bold'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control className='text-black' type="email" placeholder="Email Address" />
                  <Form.Text className="text-muted">
                    Please input a real Email address
                  </Form.Text>
                </Form.Group>

                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password*</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                      <Form.Text className="text-muted">
                        Please enter your password
                      </Form.Text>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                      Password need to match
                    </Form.Text>
                  </Form.Group>
                </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I accept the Terms and Privacy Policy" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
    );
};

export default BillFOrm;