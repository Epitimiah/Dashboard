import React from 'react';
import './App.css';
import {
  Form,
  FormControl, //
  Button,
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import BarreChart from './Components/BarreChart/BarreChart.js'; 
import Worldwide from './Components/Worldwide/Worldwide.js'; 
import NbSensors from './Components/NbSensors/NbSensors.js'; 
import SensorLocation from './Components/SensorLocation/SensorLocation.js'; 
import UserLocation from './Components/UserLocation/UserLocation.js'; 
import PerHome from './Components/PerHome/PerHome.js'; 
import HouseSize from './Components/HouseSize/HouseSize.js'; 
import FormAddUser from './Components/FormAddUser/FormAddUser.js'; 


class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      admin: false,
      toggleButton: "Admin",
      Form: "<FormAddUser> <FormAddUser/>",
    }
  }
  //Permet de passer d'une page admin à une autres 
    adminPage() {
      //Change le contenue du bouton Admin en Home si on est sur la page admin 
      if ( this.state.admin === true){
        this.setState({
          admin: !this.state.admin,
          toggleButton: "Home",
        })
      }
      //Change le contenue du bouton Admin en "Admin" si on est sur la page Home 
      else{
        this.setState({
          admin: !this.state.admin,
          toggleButton: "Admin",
        })
      }
  }

  renderNavBar () {
    return (
      <header className="App-header">
        <Row className="NavBar"> 
      
          <Col sm={12} md={4} className="Admin">
            <Button size="lg" variant="outline-light" onClick={ () => this.adminPage() }> {this.state.toggleButton} </Button>
          </Col>
      
          <Col sm={12} md={4} className="Brand rounded">
            <h1> Objets connectés </h1>
          </Col>
                
          <Col sm={12} md={4}>
             <Form inline className="Form" >
               <Form.Control type="text" placeholder="Search"  className="search mr-sm-0 mr-md-1" />
                 <Button  variant="outline-light" className="search">Search</Button>
              </Form>
         </Col>
                
        </Row>
          
        <hr color="white" width="90%"/>
      
      </header>
    ) 
  } 

  render(){
    if(this.state.admin === false){
      return (
    
        <div className="App">
          
          {this.renderNavBar()}
    
          <section className="Section" >
            <Row className="Row">
    
              <Col md={4} className="Col-Ahead rounded">
                {/* Pour metter le widget user location */}
                <UserLocation> 
                </UserLocation>
                <br></br>
                <br></br>
                {/* Pour metter le widget Nb sensor */}
                <NbSensors>
                </NbSensors>
              </Col>

              <Col md={2}  >
                <h3> Worldwide West </h3>
              </Col>
              {/* Pour metter le widget pie chart worldwide  */}
              <Worldwide>
              </Worldwide>
              
            </Row>
    
            <Row className="Row">
              {/* Pour metter le widget user location */}
              <BarreChart>
              </BarreChart>
              {/* Pour metter le widget sensor location */}
              <SensorLocation>
              </SensorLocation>
              
    
              <Col className="Col-Down rounded">
                {/* Pour metter le widget personne/Home */}
                <PerHome>
                </PerHome>
                
                {/* Pour metter le widget HouseSize */}
                <HouseSize>
                </HouseSize>
               
              </Col>
              
            </Row>
          </section>
    
        </div>
        );
    }
    else{
      return(
        <div className="App">
          
          {this.renderNavBar()}
          <section className="Section">
          
             <Row>
              <Col  md={3}>
                <Row>
                  <Col> <h3> Requêtes dispo </h3></Col>
                </Row>
                <br></br>
                <Row>
                  <Col> <Button variant="outline-info"> <h5>Add new User </h5></Button> </Col>
                </Row>
                <br></br>
                <Row>
                  <Col> <Button variant="outline-info"> <h5>Delete User  </h5></Button> </Col>
                </Row>
                <br></br>
                <Row>
                  <Col> <Button variant="outline-info"> <h5>Add new sensor </h5></Button> </Col>
                </Row>
              </Col>

              <Col  md={9}>
                
                <FormAddUser>
                </FormAddUser>
              
              
              </Col>
            </Row>
          </section>
           
          
          
        </div>
      ); 
    }
  }
}
export default App;
