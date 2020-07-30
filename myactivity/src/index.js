import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ConfigTile from './ConfigTile';
import StepsData from './StepsData';
import StepsGraph from './StepsGraph';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <a href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BVTP&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">
      Login to Fitbit
    </a>
  </div>
    <App />
    <ConfigTile />
    <StepsGraph />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
