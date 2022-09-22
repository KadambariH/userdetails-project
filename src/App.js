import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row className='bg-secondary'>
        <Col>1st Row</Col>
        <Col>2nd Row</Col>
      </Row>
    </Container>
    );
}

export default App;
