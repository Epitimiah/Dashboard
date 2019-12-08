import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
import { 
  Navbar,
 } from 'reactstrap';
*/

class App extends React.Component {
  render(){
  return (
    
    <div className="App">
      <header className="App-header">
   
        <Navbar fill  bg="dark" variant="dark" className="NavBar">

          
            <Form inline className="Form"  >
                <FormControl type="text" placeholder="Search" className="FormControl" />
                <Button variant="outline-light">Search</Button>
            </Form>
           
        </Navbar>
      </header>

      <section className="Section">
        <Row className="Row">

          <Col md={4} className="Col">
            <Row className="Row">
              <p> user location </p>
            </Row>
            <Row className="Row">
              <p> Number of sensor used </p>
            </Row>
          </Col>

          <Col md={8} className="Col">
            <p> pie chart </p>
          </Col>
        </Row>

        <Row className="Row">

          <Col  md={6} className="Col">
            <p> bar chart </p>
          </Col>

          <Col  md={3} className="Col">
            <p> sensor location </p>
          </Col>

          <Col className="Col">
            <Row className="Row">
              <p> number of persons home </p>
            </Row>
            <Row  md={3} className="Row">
              <p> House size </p>
            </Row>
          </Col>
          
        </Row>
      </section>

    </div>
    );
  }
}
export default App;
