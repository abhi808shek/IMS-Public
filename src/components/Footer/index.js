// components/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <h5>My Website</h5>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="/about" className="text-white me-3">About</a>
            <a href="/contact" className="text-white">Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
