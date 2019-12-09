import React from 'react';
import './App.css';
import {
  Form,
  FormControl,
  Button,
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//Pour le recharts
import {
  XAxis,
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  //Utiliser pour adapeter la chart dans un container
  ResponsiveContainer, 
  //Elements utile pour barchart
  BarChart, 
  Bar, 
  PolarGrid, 
  PolarAngleAxis,
  RadarChart,
  Radar,
  PolarRadiusAxis,
} from 'recharts';

class NbSensors extends React.Component {

  render(){
    return(
      <Row sm={12}  className="Col-Bottom rounded">
          <Col>
              <h4> Nb sensors :</h4> 
              <p>  46 </p>
          </Col>
      </Row>
    );
  }
} 

class SensorLocation extends React.Component {

  render(){
    return(
      <Col sm={12}  md={3} className="Col-sensor-location rounded" >
        <h4> sensor location  </h4>
      
      </Col>
      
    ); 
  }
}

// Pour le test de rechart
const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];
class BarreChart extends React.Component {

  render(){
    return(
      <Col sm={12}  md={6} className="Col rounded">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
            width={730}
            height={250}
            data={data}
            margin= {{top: 20, right: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
                
      </Col>
    ); 
  }
}

const data_pie = [
  {
    "Country": "China",
    "number-people": 2 
  },
  {
    "Country": "Thailande",
    "number-people": 4 

  },
  {
    "Country": "Paris",
    "number-people": 1 

  },
  {
    "Country": "London",
    "number-people": 5 

  },
  {
    "Country": "Indonesia",
    "number-people": 0

  }
]; 
class Worldwide extends React.Component {

  render(){
    return(
     
    
      <Col sm={12} md={5} className="Col rounded">
          <ResponsiveContainer inline width="100%" height="100%">
             <RadarChart 
             outerRadius={80}
             width={730}
             height={250}
             data={data_pie}
             margin={{top: 30}}
             >
                <PolarGrid />
                <PolarAngleAxis dataKey="Country" tick={{fill:'white'}} />
                <PolarRadiusAxis angle={30} domain={[0, 5]} />
                <Radar name="World" dataKey="number-people"  fill="#8884d8" fillOpacity={0.8} />
                      
                <Legend />
              </RadarChart>
          </ResponsiveContainer>
      </Col>
    ); 
  }
}

class UserLocation extends React.Component {

  render(){
    return(
      <Row sm={12} className="Col-Top">
         <Col> 
            <h4 > User location : </h4>
            <p> China </p>
          </Col>
      </Row>
    ); 
  }
}

class PerHome extends React.Component {

  render(){
    return(
      <Row sm={12} className="Col-Top rounded">
       <Col> 
          <h4> Number of persons at home : </h4> 
          <p> 4 </p>
        </Col>
      </Row>
    ); 
  }
}

class HouseSize extends React.Component {

  render(){
    return(
      <Row  sm={12} md={3} className="Col-Bottom rounded">
         <Col> 
           <h4> House size : </h4>
           <p> 40 m²</p> 
          </Col>
      </Row>
    ); 
  }
}

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      admin: false,
      toggleButton: "Admin", 
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
               <FormControl type="text" placeholder="Search"  className="search mr-sm-0 mr-md-1" />
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
            <Col md={{ span: 6, offset: 3 }} >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            { /*Faire passer le tableau par une fonction onclick ou grâce à res de express  */}
            <Button variant="primary" type="submit">
              Submit
            </Button> 
             
            </Col>
            </Row>
        
          </section>

        </div>
      ); 
    }
  }
}
export default App;
