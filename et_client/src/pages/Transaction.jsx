import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Transaction = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded">
        <Col md={6}>Transaction</Col>
      </Row>
    </Container>
  );
};

export default Transaction;
