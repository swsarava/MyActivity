import React from 'react';
import './StepsGraph.css';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const datagraph = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];
// const chartData = [];

function StepsGraph() {
    const [date, setDate] = React.useState([]);
    const [steps, setSteps] = React.useState([]);
    const [chartData, setChartData] = React.useState([]);
    

    const getActivityData = async () => {
        console.log("loading data...");
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
    
            var  dateArray = [];
            var stepsArray = [];
            var chartArray = [];
            // var chartData = [];
            steps.forEach(element => {
              console.log(element.dateTime + " : " + element.value);
              dateArray.push(element.dateTime);
              stepsArray.push(element.value);
              chartArray = {date: element.dateTime, steps: parseInt(element.value)};
              chartData.push(chartArray);
            });
            setDate(date => dateArray);
            setSteps(steps => stepsArray);
            setChartData(chartData => chartArray);
            console.log(chartData);
            console.log(datagraph);
    
            var documentLoaded = document.getElementById("button");
            documentLoaded.innerHTML = "test value"; 
            // React.state = {data: chartData};
            {/* <div>
                <Paper>
            <Chart data={chartData}>
              <ArgumentAxis />
              <ValueAxis max={10} />
    
              <BarSeries
                valueField="steps"
                argumentField="date"
              />
              <Title text="Steps per day" />
              <Animation />
            </Chart>
          </Paper>
            </div> */}
           
          }
    
        } catch (error) {
          console.log("Error in getting Activity data: " + error.message);
        }
      }

      
     

    return (
        <div id="button">
           <button id="activity" onClick={getActivityData}>
            Get Activity data
        </button>
        

        
        </div>
        

    );


}
export default StepsGraph;