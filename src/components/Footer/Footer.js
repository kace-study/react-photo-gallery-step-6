import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {

  const getYear = () =>  {
    return new Date().getFullYear();
  }

  return (
    <footer id="footer" className='pt-3 text-center'>
      <Container>
        <Row>
          <Col>
            <p className="small">
              Kace Gallery created by kace, Copyright &copy; {getYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;