import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // TODO: Get current time to identify start and end working time
  let getCalendarEventsUrl = "https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=2020-07-27T00:00:00.0000000&endDateTime=2020-07-27T23:59:00.0000000&$select=subject,start,end";
  let addEventUrl = "https://graph.microsoft.com/v1.0/me/calendar/events";

  // TODO: Call Login API to fetch Auth Token

  var events;
  fetch(getCalendarEventsUrl, {
    headers: {
      "Authorization": "" //Paste Token from Graph Explorer Access Token tab until the generating auth token part is plugged in
    }
  }).then((response) => {
    response.json().then((body) => {
      events = body.value;
      console.log(events);
      events.forEach(element => {
        console.log(element.subject + " : " + element.start.dateTime + " to " + element.end.dateTime);
      });
      // TODO: Scheduling algorithm to indentify free times from the calendar
    }).catch((err) => {
      console.log("Error in parsing json response: " + err);
    });
  }).catch((error) => {
    console.log("Error in calling graph API: " + error.message);
  });

  // TODO: Create calendar event when a free time is identified
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
