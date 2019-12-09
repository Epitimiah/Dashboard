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

import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PolarGrid, PolarAngleAxis,RadarChart, Radar, PolarRadiusAxis,
} from 'recharts';
/*
import { 
  Navbar,
 } from 'reactstrap';
*/

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
]



class App extends React.Component {
  render(){
  return (
    
    <div className="App">
      
      <header className="App-header">
        <Row className="NavBar"> 

          <Col  md={4} className="Admin">
            <Button size="lg" variant="outline-light"> Admin </Button>
          </Col>

          <Col  md={4} className="Brand rounded">
              <h1> Objets connectés </h1>
          </Col>
          
          <Col md={4}>
            <Form inline className="Form" >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button  variant="outline-light">Search</Button>
            </Form>
          </Col>
          
        </Row>
        <hr color="white" width="90%"/>

      </header>

      <section className="Section rounded" >
        <Row className="Row">

          <Col md={4} className="Col-Ahead rounded">
            <Row className="Col-Top">
              <Col> 
                <h4 > User location : </h4>
                <p> China </p>
              </Col>
            </Row>
            <Row className="Col-Bottom rounded">
              <Col>
                <h4> Nb sensors :</h4> 
                <p>  46 </p>
              </Col>
            </Row>
          </Col>
          <Col md={2} >
            <h3> Worldwide West </h3>
          </Col>

          <Col md={5} className="Col rounded">
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

          
        </Row>

        <Row className="Row">

          <Col  md={6} className="Col rounded">
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

          <Col  md={3} className="Col-sensor-location rounded" >
             <h4> sensor location  </h4>
          </Col>

          <Col className="Col-Down rounded">
            <Row className="Col-Top rounded">
              <Col> 
                <h4> Number of persons at home : </h4> 
                <p> 4 </p>
              </Col>
            </Row>
            <Row  md={3} className="Col-Bottom rounded">
              <Col> 
                <h4> House size : </h4>
                <p> 40 m²</p> </Col>
            </Row>
          </Col>
          
        </Row>
      </section>

    </div>
    );
  }
}
export default App;
