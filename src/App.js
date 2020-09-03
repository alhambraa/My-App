import React from 'react';
import NavbarTop from './components/NavbarTop';
import Card from './components/card/Card';
import NextMeetUp from './components/NextMeetUp';
import Members from './components/Members';
import PastMeetUp from './components/PastMeetUp';
import {Row, Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
       <NavbarTop/>
       <br></br>
        <div className="container">
            <Card/>
            <h4 className="text-left">Next Meetup</h4>
            <NextMeetUp/>
            <h4 className="text-left">About Meet Up</h4>
            <p className="text-left ml-4"> 
              Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br />
              Twitter: @JakartaJS and we user the hashtag #jakartajs
            </p>
            <h4 className="text-left">Members</h4>
            <h6 className="text-right">See all</h6>
            <Members/>
            <h4 className="text-left">Past Meetups</h4>
            <h6 className="text-right">See all</h6>
            <Container className="text-left">
              <Row className="ml-0">
                <PastMeetUp
                  header="27 November 2020"
                  title="#39 JakartaJS April Meetup with Kumparan"
                  content="139 went"
                />
                <PastMeetUp
                  header="27 Oktober 2020"
                  title="#38 JakartaJS April Meetup with BliBli"
                  content="113 went"
                />
                <PastMeetUp
                  header="27 November 2020"
                  title="#39 JakartaJS April Meetup with Hacktiv8"
                  content="110 went"
                />
              </Row>
            </Container>
            <hr style={{background:"black"}}></hr>
          <br />
          <center>
            <p className="copyright">Copyright &copy; Hacktiv8 2020 </p>
          </center>
          <br />  
        </div>
    </div>
  );
}

export default App;
