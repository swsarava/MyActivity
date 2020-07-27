import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fetchData = async () => {
    try {
      // TODO: Get current time to identify start and end work hours
      let getCalendarEventsUrl = "https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=2020-07-27T00:00:00.0000000&endDateTime=2020-07-27T23:59:00.0000000&$select=subject,start,end";

      // TODO: Call Login API to fetch Auth Token

      const options = {
        headers: {
        "Authorization": "" //Paste Token from Graph Explorer Access Token tab until the generating auth token part is plugged in
        }
      };

      // Fetching user's calendar data for today
      var response = await fetch(getCalendarEventsUrl, options);
      if(response.status >= 300) {
        throw new Error(response.statusText);
      }

      var body = await response.json();
      var events = body.value;
      events.forEach(element => {
        console.log(element.subject + " : " + element.start.dateTime + " to " + element.end.dateTime);
      });

      // TODO: Scheduling algorithm to indentify free times from the calendar
    } catch (error) {
      console.log("Error in fetching calendar data: " + error.message);
    }
  }
    
  const createEvent = async () => {
    try {
      let addEventUrl = "https://graph.microsoft.com/v1.0/me/events";

      // TODO: Call Login API to fetch Auth Token

      const options = {
        method: "POST",
        body: JSON.stringify(
          {  
            subject: "Some Activity",
            start: {
              dateTime: "2020-07-27T17:00:00.000",
              timeZone: "Pacific Standard Time"
            },
            end: {
              dateTime: "2020-07-27T17:30:00.000",
              timeZone: "Pacific Standard Time"
            },
            responseRequested: true,
            allowNewTimeProposals: true
          }
        ),
        headers: {
          "Content-type": "application/json",
          "Authorization": "" //Paste Token from Graph Explorer Access Token tab until the generating auth token part is plugged in
        }
      };

      // TODO: Create calendar event for an identified free time
      var response = await fetch(addEventUrl, options);
      console.log(response);
      if(response.status >= 300) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log("Error in creating calendar event: " + error.message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button id="fetch" onClick={fetchData}>
            Fetch My Calendar Data
          </button>
          <br/>
          <button id="create" onClick={createEvent}>
            Create an Event in my Calendar
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
