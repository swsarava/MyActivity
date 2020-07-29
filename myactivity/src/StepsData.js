import React from 'react'
  
    const StepsData = ({ stepsData }) => {
      return (
        <div>
          <center><h1>Number of steps per day</h1></center>
          {StepsData.map((stepsData) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{stepsData.dateTime}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{stepsData.value}</h6>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default StepsData