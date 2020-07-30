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
import Async from 'react-async';

import { Animation } from '@devexpress/dx-react-chart';

const datagraph = [
  { date: '7/22', steps: 12847 },
  { date: '7/23', steps: 10023 },
  { date: '7/24', steps: 8412 },
  { date: '7/25', steps: 11214 },
  { date: '7/26', steps: 13324 },
  { date: '7/27', steps: 6127 },
  { date: '7/28', steps: 6930 },
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
            var chartData = [];
            steps.forEach(element => {
              console.log(element.dateTime + " : " + element.value);
              dateArray.push(element.dateTime);
              stepsArray.push(element.value);
              chartArray = {date: element.dateTime, steps: parseInt(element.value)};
              chartData.push(chartArray);
            });
            setDate(date => dateArray);
            setSteps(steps => stepsArray);
            // setChartData(chartData => chartArray);
            console.log(chartData);
            console.log(datagraph);
            return chartData;
    
           /*  var documentLoaded = document.getElementById("button");
            var html = "<Paper> <Chart data={datagraph}> <ArgumentAxis /> <ValueAxis max={7} /> <BarSeries valueField='steps'  argumentField='date' /><Title text='Steps per day' /><Animation /></Chart></Paper>";
            var html1 = "<div><p>hiiii</p></div>"
            documentLoaded.innerHTML = html; */
            
            
           
          }
    
        } catch (error) {
          console.log("Error in getting Activity data: " + error.message);
        }
      }

      
     

    return (
       /*  <div>
           <button id="activity" onClick={getActivityData}>
            Get Activity data
        </button> */

        
          <div id="button">
            <Paper>
            <Chart data={datagraph}>
              <ArgumentAxis />
              <ValueAxis max={7} />
    
              <BarSeries
                valueField='steps'
                argumentField='date'
              />
              <Title text='Steps per day' />
              <Animation />
            </Chart>
          </Paper>
        </div>  

    /* <div className="container">
      <Async promiseFn={getActivityData}>
        {({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`

          if (data)
            return (
              <div>
                <div>
                  GOT DATA BACK
                </div>
                
              </div>
            )
        }}
      </Async>
    </div>  */
        
        // </div> 
        

    );


}
export default StepsGraph;