import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import logo from './logo.svg';
import './ConfigTile.css';

function ConfigTile() {
    
    const [value, setValue] = "";
    const [Sunday, setSunday] = React.useState(false);
    const handleSunday = () => setSunday(!Sunday)
    console.log("Sunday : " + Sunday);

    const [Monday, setMonday] = React.useState(true);
    const handleMonday = () => setMonday(!Monday)
    console.log("Monday : " + Monday);

    const [Tuesday, setTuesday] = React.useState(true);
    const handleTuesday = () => setTuesday(!Tuesday)
    console.log("Tuesday : " + Tuesday);

    const [Wednesday, setWednesday] = React.useState(true);
    const handleWednesday = () => setWednesday(!Wednesday)
    console.log("Wednesday : " + Wednesday);

    const [Thursday, setThursday] = React.useState(true);
    const handleThursday = () => setThursday(!Thursday)
    console.log("Thursday : " + Thursday);

    const [Friday, setFriday] = React.useState(true);
    const handleFriday = () => setFriday(!Friday)
    console.log("Friday : " + Friday);

    const [Saturday, setSaturday] = React.useState(false);
    const handleSaturday = () => setSaturday(!Saturday)
    console.log("Saturday : " + Saturday);

    const [StartTime, setStartTime] = React.useState("8:00AM");
    const handleStartTime = () => {
        var startTime = document.getElementById("startTime");
        var result = startTime.options[startTime.selectedIndex].value;
        setStartTime(result);
    }
    console.log("Start Time : " + StartTime);

    const [EndTime, setEndTime] = React.useState("5:00PM");
    const handleEndTime = () => {
        var endTime = document.getElementById("endTime");
        var result = endTime.options[endTime.selectedIndex].value;
        setEndTime(result);
    }
    console.log("End Time : " + EndTime);

    const [Duration, setDuration] = React.useState("15min");
    const handleDuration = () => {
        var duration = document.getElementById("activityDuration");
        var result = duration.options[duration.selectedIndex].value;
        setDuration(result);
    }
    console.log("Duration : " + Duration);






  return (
      <div className = "container">
        <div className = "row">
            <Card>
                <Card.Body>
                    <Card.Title>My Configurations
                    </Card.Title><hr></hr>
                    <Form>
                        <Card.Text>
                            
                                <b>Autobook into Calendar</b>
                                <span class = "titleline"></span>
                                 <label class="switch">
                                     <input type="checkbox" id="expand" onChange={openConfig} />
                                     <span class="slider round"></span>
                                 </label>
                             <br />
                             <div id="text" style={{display: "none"}}>
                                    Set a schedule for when MyActivity is active <br /> <br />
                                    <b> Active Days </b> <br />
                                
                                <input type="checkbox" id="sunday" checked={Sunday} onClick={handleSunday}/>
                                &nbsp; Sun &nbsp; &nbsp;
                                 <input type="checkbox" id="monday" defaultChecked={true} onClick={handleMonday} />
                                 &nbsp;   Mon &nbsp;&nbsp;
                                <input type="checkbox" id="tuesday" defaultChecked={true} onClick={handleTuesday} />
                                &nbsp;   Tues &nbsp;&nbsp;
                                <input type="checkbox" id="wednesday" defaultChecked={true} onClick={handleWednesday} />
                                &nbsp;   Wed &nbsp;&nbsp;
                                <input type="checkbox" id="thursday" defaultChecked={true} onClick={handleThursday} />
                                &nbsp;   Thurs &nbsp;&nbsp;
                                <input type="checkbox" id="friday" defaultChecked={true} onClick={handleFriday} />
                                &nbsp;   Fri &nbsp;&nbsp;
                                <input type="checkbox" id="saturday" onClick={handleSaturday} />
                                &nbsp;  Sat &nbsp;&nbsp;
                                <br /> <br />
                                <b> Active Hours </b> <br />
                                Start time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; End time <br />
                                <select name="start time" id="startTime" onChange={() => setStartTime(handleStartTime)}>
                                    <option value="12:00AM">6:00 am</option>
                                    <option value="1:00AM">1:00 am</option>
                                    <option value="2:00AM">2:00 am</option>
                                    <option value="3:00AM">3:00 am</option>
                                    <option value="4:00AM">4:00 am</option>
                                    <option value="5:00AM">5:00 am</option>
                                    <option value="6:00AM">6:00 am</option>
                                    <option value="7:00AM">7:00 am</option>
                                    <option value="8:00AM" selected="selected">8:00 am</option>
                                    <option value="9:00AM">9:00 am</option>
                                    <option value="10:00AM">10:00 am</option>
                                    <option value="11:00AM">11:00 am</option>
                                    <option value="12:00PM">12:00 am</option>
                                    <option value="1:00PM">1:00 pm</option>
                                    <option value="2:00PM">2:00 pm</option>
                                    <option value="3:00PM">3:00 pm</option>
                                    <option value="4:00PM">4:00 pm</option>
                                    <option value="5:00PM">5:00 pm</option>
                                    <option value="6:00PM">6:00 pm</option>
                                    <option value="7:00PM">7:00 pm</option>
                                    <option value="8:00PM">8:00 pm</option>
                                    <option value="9:00PM">9:00 pm</option>
                                    <option value="10:00PM">10:00 pm</option>
                                    <option value="11:00PM">11:00 pm</option>
                                </select>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <select name="end time" id="endTime" onChange={() => setEndTime(handleEndTime)}>
                                    <option value="12:00AM">6:00 am</option>
                                    <option value="1:00AM">1:00 am</option>
                                    <option value="2:00AM">2:00 am</option>
                                    <option value="3:00AM">3:00 am</option>
                                    <option value="4:00AM">4:00 am</option>
                                    <option value="5:00AM">5:00 am</option>
                                    <option value="6:00AM">6:00 am</option>
                                    <option value="7:00AM">7:00 am</option>
                                    <option value="8:00AM">8:00 am</option>
                                    <option value="9:00AM">9:00 am</option>
                                    <option value="10:00AM">10:00 am</option>
                                    <option value="11:00AM">11:00 am</option>
                                    <option value="12:00PM">12:00 am</option>
                                    <option value="1:00PM">1:00 pm</option>
                                    <option value="2:00PM">2:00 pm</option>
                                    <option value="3:00PM">3:00 pm</option>
                                    <option value="4:00PM">4:00 pm</option>
                                    <option value="5:00PM" selected="selected">5:00 pm</option>
                                    <option value="6:00PM">6:00 pm</option>
                                    <option value="7:00PM">7:00 pm</option>
                                    <option value="8:00PM">8:00 pm</option>
                                    <option value="9:00PM">9:00 pm</option>
                                    <option value="10:00PM">10:00 pm</option>
                                    <option value="11:00PM">11:00 pm</option>
                                </select>
                                <br /> <br />
                                <b> Active Duration </b> <br />
                                <select name="activity duration" id="activityDuration" onChange={() => setDuration(handleDuration)}>
                                    <option value="15min" selected="selected">15 min</option>
                                    <option value="30min">30 min</option>
                                    <option value="45min">45 min</option>
                                    <option value="1hr">1 hr</option>
                                </select>
                                < br /> < br />
                             </div>
                             
                             
                        </Card.Text>
                        
                    </Form>
                </Card.Body>
            </Card>
        </div>
  </div>
  );
}

function openConfig() {
  var checkBox = document.getElementById("expand");
  var text = document.getElementById("text");

  if (checkBox.checked == true){
    text.style.display = "block";
    const Autobook = true;
    console.log("Autobook is " + Autobook);
    
  } else {
    text.style.display = "none";
    const Autobook = false;
    console.log("Autobook is " + Autobook);
  }
}




export default ConfigTile;
