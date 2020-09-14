import React from 'react';
import NavbarTop from './components/NavbarTop';
import Card from './components/card/Card';
import NextMeetUp from './components/NextMeetUp';
import Members from './components/Members';
import PastMeetUp from './components/PastMeetUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const PastMeetUpData = [
    {
      id: 0,
      header: '27 November 2017',
      title: '#39 JakartaJS April Meetup with Kumparan',
      content: '139',
    },
    {
      id: 1,
      header: '27 November 2017',
      title: '#38 JakartaJS April Meetup with Blibli',
      content: 113,
    },
    {
      id: 2,
      header: '27 November 2017',
      title: '#37 JakartaJS April Meetup with Hacktiv8',
      content: 110,
    }
  ]
  return (
    <div className="App">
       <NavbarTop/>
       <br></br>
        <div className="container">
            <Card
              event="Hactiv8 Meeting"
              location="Jakarta, Indonesia"
              member="Members : 1,078"
              organizer="Organizers : Alhambra"
              button="Join Us"
            />
            <h4 className="text-left">Next Meetup</h4>
            <NextMeetUp/>
            <h4 className="text-left">About Meet Up</h4>
            <p className="text-left ml-4"> 
              Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br />
              Twitter: @JakartaJS and we user the hashtag #jakartajs
            </p>
            <br></br>
            <h4 className="text-left">Members</h4>
            <h6 className="text-right">See all</h6>
            <Members name="Adhy Wiranata" count="1,041" />
            <h4 className="text-left">Past Meetups</h4>
            <h6 className="text-right">See all</h6>
            <PastMeetUp data={PastMeetUpData}/>
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
