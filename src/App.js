import React from 'react';
import { Navbar, Container, Nav, Card } from 'react-bootstrap';
import ceo from './Images/react+boostrap.jpg';
import ay from './Images/react pic2.png';
import az from './Images/react-bootstrap.png';

function App() {
  return (
    <div className="App">
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#"> Navbar</Navbar.Brand>
          <Navbar.Toggle ari-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container className="mt-4 md-4" >
          <h1> Bootstrap </h1>

          <div className="row">
            <div className="col-md-4">
              <Card>
                <Card.Img className='h-30' variant="top" src={ceo} />
                <Card.Body>
                  <Card.Title>React + Bootstrap</Card.Title>

                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4">
              <Card>
                <Card.Img variant="top" src={ay} />
                <Card.Body>
                  <Card.Title>B</Card.Title>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4">
              <Card>
                <Card.Img variant="top" src={az} />
                <Card.Body>
                  <Card.Title>CDN</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </>
    </div>
  );
}

export default App;
