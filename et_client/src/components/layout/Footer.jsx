import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../index.css';

const Footer = () => {
  return (
    <Container fluid className="bg-dark p-5 mar">
      <Row className="text-center">
        <Col>&copy; Copyright all reserved, Developed By DevJourney</Col>
      </Row>
    </Container>
  );
};

export default Footer;
