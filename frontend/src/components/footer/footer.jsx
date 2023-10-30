import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const currentYear = useCurrentYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              ProShop &copy;
              {currentYear}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

function useCurrentYear() {
  return new Date().getFullYear();
}
