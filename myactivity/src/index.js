import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ConfigTile from './ConfigTile';
import StepsData from './StepsData';
import StepsGraph from './StepsGraph';
import logo from './myActivity.png';

ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* <h1 style={{color: '#007bff', textAlign: 'center'}}>My Activity</h1> */}
      <img src={logo} style={{width: '150px', height: '170px', marginLeft: '45%'}} alt="logo" />

      <br/><br/>
      <table style={{width:"80%"}}>
        <tr>
          <td style={{width:"20%"}}></td>
          <td><ConfigTile /></td>
          {/* <td style={{width:"3%"}}></td> */}
          <td><App /></td>
        </tr>
      </table>
      <br/><br/>
      <table style={{width:"80%"}}>
        <tr>
          <td style={{width:"13%"}}></td>
          <td style={{width:"50%"}}><StepsGraph /></td>
        </tr>
      </table>
      <br/><br/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
