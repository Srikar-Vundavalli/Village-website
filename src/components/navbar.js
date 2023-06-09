import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';
import axios from 'axios';
import '../styles/navbar.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";



class Nbar extends Component {

  

  
    render() {
     
        return (
            <>

<Navbar collapseOnSelect expand="lg" className='pandu' variant="dark">
    <Container>
    <Navbar.Brand href="http://localhost:3000"><img src="https://dynamic.brandcrowd.com/asset/logo/667054c4-233e-4bb5-bfa3-13f1da10cbc0/logo-search-grid-2x?v=637339474578800000&text=Konaseema&colorpalette=green" className="brand-img"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" className="adjust text-white mx-2" aria-disabled >Home</Nav.Link>
        <Nav.Link href="/about" className="adjust text-white mx-2">About</Nav.Link>
       
      </Nav>
      <Nav>
        <Nav.Link href="/places" className="adjust text-white mx-2">Places</Nav.Link>
        <Nav.Link eventKey={2} href="https://www.google.com/maps/place/16%C2%B054'36.8%22N+81%C2%B045'05.6%22E/@16.9102203,81.7510128,171m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0xf8eed1b2d02d6022!7e2!8m2!3d16.9102191!4d81.75156" className="adjust text-white mx-2">
          Location
        </Nav.Link>
        <NavDropdown title="Social Media" className="adjust text-white mx-2" id="collasible-nav-dropdown">
          <NavDropdown.Item href="https://www.linkedin.com/in/srikar-v-22b760201">Linkedin</NavDropdown.Item>
          <NavDropdown.Item href="https://github.com/Srikar-Vundavalli">Github</NavDropdown.Item>
          <NavDropdown.Item href="https://www.facebook.com/profile.php?id=100070504010099&mibextid=ZbWKwL">Facebook</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://www.hackerrank.com/srikarv11822">Hacker Rank</NavDropdown.Item>
          <NavDropdown.Item href="https://auth.geeksforgeeks.org/user/srikarvlvji">GeeksForGeeks</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link data-toggle="modal" data-target="#exampleModalCenter" className="adjust text-white mx-2 ">Queries</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <Tabs>
    <TabList>
      <Tab>User Queries</Tab>
      <Tab>User Details</Tab>
     
      
    </TabList>

    <TabPanel>
      <form action="http://localhost:5000/query" method="post" className='mt-4'>
      <input className='form-control mx-4' type="text" placeholder='recommend a place' name='recomend' required /><br />
        <input className='form-control mx-4' type="text" placeholder='about place' name='about' required /><br />
        <button  class=" btn btn-success mx-5" name="submit" type="submit">submit</button>
      </form>
    </TabPanel>
    <TabPanel>
    <form action="http://localhost:5000/signup" method="post" className='mt-4'>
        <input className='form-control mx-4' type="text" placeholder='enter first name' name='fname' required /><br />
        <input className='form-control mx-4' type="text" placeholder='enter lastname' name='lname' required /><br />
        <input className='form-control mx-4' type="text" placeholder='enter email' name='email' required /><br />
        <input className='form-control mx-4' type="text" placeholder='enter mobile no' name='mobile' required /><br />
        <button  class=" btn btn-success mx-5" name="submit" type="submit">submit</button>
      </form>
    </TabPanel>
   
  </Tabs>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>

 
  
           
            </>
        );
    }
}

export default Nbar;