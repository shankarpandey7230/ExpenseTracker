import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';
import SignInForm from '../components/SignInForm';
import { useUser } from '../context/UserContext';

const Login = () => {
  // const { user, setUser } = useUser();
  // console.log(data);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <SignInForm />
        </Col>
        <Col md={6}>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ height: '100%' }}
          >
            <div className="text-danger fs-1 text-decoration-line-through">
              <BsGraphDownArrow />
              <span className="mx-2">Reduce your expenses</span>
            </div>
            <div className="text-success fs-1 ">
              <BsGraphUpArrow />
              <span className="mx-2">Increase your income</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
