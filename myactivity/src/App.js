import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const getActivityData = async () => {
    try {
      var url = window.location.href;
      var access_token;
      if (url !== "http://localhost:3000/") {
        var access_token = url.split("#")[1].split("=")[1].split("&")[0];
        var userId = url.split("#")[1].split("=")[2].split("&")[0]; 

        let getActivityDataUrl = 'https://api.fitbit.com/1/user/-/activities/steps/date/2020-07-20/today.json';

        const options = {
          headers: {
            "Authorization":["Bearer " + access_token]
          }
        };

        var response = await fetch(getActivityDataUrl, options);

        if(response.status >= 300) {
          throw new Error(response.statusText);
        }
        var data = await response.json();
        var steps = data['activities-steps']

        steps.forEach(element => {
          console.log(element.dateTime + " : " + element.value);
        });

        
      }

    } catch (error) {
      console.log("Error in getting Activity data: " + error.message);
    }
  }

  let activityStartTime, activityEndTime;

  const fetchData = async (startHour, endHour) => {
    try {
      var datePrefix = new Date().toISOString().substring(0, 11);
      var startTime = '2020-07-30T15:00:00.0000000';
      var endTime = '2020-07-30T23:59:00.0000000';
      let getCalendarEventsUrl = "https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=" + startTime + "&endDateTime=" + endTime + "&$select=subject,start,end";

      const options = {
        headers: {
          "Authorization": await getAuthorizationToken()
        }
      };

      // Fetching user's calendar data for today
      var response = await fetch(getCalendarEventsUrl, options);
      if(response.status >= 300) {
        throw new Error(response.statusText);
      }

      var body = await response.json();
      var events = body.value;

      let startTimes = [];
      let endTimes = [];
      let i = 0;

      console.log("Scanning your calendar");

      events.forEach(element => {
        startTimes[i] = new Date(element.start.dateTime);
        endTimes[i] = new Date(element.end.dateTime);
        // console.log(element.subject + " : " + startTimes[i] + " to " + endTimes[i]);
        i++;
      });

      startTimes[i] = new Date(endTime);

      startTimes.sort((a,b) => a-b);
      endTimes.sort((a,b) => a-b);

      let maxDiff = new Date(startTimes[0]) - new Date(startTime);

      let j, interval = 0, hourDiff = 0;
      for(j=1; j<=startTimes.length; j++) {
        var diff = new Date(startTimes[j]) - new Date(endTimes[j-1]);
        if(diff > maxDiff) {
          hourDiff = new Date(startTimes[j]).getHours() - new Date(endTimes[j-1]).getHours();
          maxDiff = diff;
          interval = j;
        }
      }

      var hour = (interval === 0 ? 15 : new Date(endTimes[interval-1]).getHours()) + ((hourDiff%2) === 0 ? hourDiff/2 : (hourDiff+1)/2);
      
      activityStartTime = new Date(startTime);
      activityStartTime.setHours(hour-7);
      activityStartTime.setMinutes(0);
      activityStartTime.setSeconds(0);
      activityStartTime.setMilliseconds(0);

      console.log("Looks Like we can book some active time on: " + activityStartTime);
      
      activityEndTime = new Date(startTime);
      activityEndTime.setHours(hour-7);
      activityEndTime.setMinutes(15);
      activityEndTime.setSeconds(0);
      activityEndTime.setMilliseconds(0);
    } catch (error) {
      console.log("Error in fetching calendar data: " + error.message);
    }
  }
    
  const createEvent = async () => {
    try {
      let addEventUrl = "https://graph.microsoft.com/v1.0/me/events";

      const options = {
        method: "POST",
        body: JSON.stringify(
          {  
            subject: "Some Activity",
            start: {
              dateTime: activityStartTime.toISOString(),
              timeZone: "Pacific Standard Time"
            },
            end: {
              dateTime: activityEndTime.toISOString(),
              timeZone: "Pacific Standard Time"
            },
            responseRequested: true,
            allowNewTimeProposals: true
          }
        ),
        headers: {
          "Content-type": "application/json",
          "Authorization": await getAuthorizationToken()
        }
      };

      var response = await fetch(addEventUrl, options);
      if(response.status >= 300) {
        throw new Error(response.statusText);
      }
      console.log("Event added. Please check your calendar!");
    } catch (error) {
      console.log("Error in creating calendar event: " + error.message);
    }
  }
  
  const getAuthorizationToken = async() => {
    // const authUrl = "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/v2.0/authorize?client_id=5404d196-ed30-4a60-be91-03a30990f73b&response_type=code&redirect_uri=http%3A%2F%2Flocalhost&response_mode=query&scope=Calendars.ReadWrite&state=12345";
    // var res = await fetch(authUrl);
    // console.log(res);
    // var jsonResponse = await res.json();
    // console.log(jsonResponse);

    // var details = {
    //   'client_id': "5404d196-ed30-4a60-be91-03a30990f73b",
    //   'scope': "Calendars.ReadWrite",
    //   'client_secret': "",
    //   'grant_type': "authorization_code",
    //   'redirect_uri': "http://localhost", 
    //   'code': ""
    // };
    
    // var formBody = [];
    // for (var property in details) {
    //   var encodedKey = encodeURIComponent(property);
    //   var encodedValue = encodeURIComponent(details[property]);
    //   formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");

    // const options = {
    //   method: "POST",
    //   body: formBody,
    //   headers: {
    //     "Content-type": "application/x-www-form-urlencoded"
    //   }
    // }

    // var tokenEndPoint = "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/v2.0/token";
    // var res = await fetch(tokenEndPoint, options);
    // console.log(res);

    // Paste Token from Graph Explorer Access Token tab until the generating auth token part above is complete
    return "";
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
          <button id="fetch" onClick={getAuthorizationToken}>
            Fetch My Calendar Data
          </button>
          <br/>
          <button id="create" onClick={createEvent}>
            Create an Event in my Calendar
          </button>
          <br/>
          <button id="activity" onClick={getActivityData}>
            Get Activity data
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;