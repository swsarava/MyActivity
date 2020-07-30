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
                    <Card.Title>My Configurations</Card.Title>
                    <hr></hr>
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
                                    <option value="00">12:00 am</option>
                                    <option value="01">1:00 am</option>
                                    <option value="02">2:00 am</option>
                                    <option value="03">3:00 am</option>
                                    <option value="04">4:00 am</option>
                                    <option value="05">5:00 am</option>
                                    <option value="06">6:00 am</option>
                                    <option value="07">7:00 am</option>
                                    <option value="08" selected="selected">8:00 am</option>
                                    <option value="09">9:00 am</option>
                                    <option value="10">10:00 am</option>
                                    <option value="11">11:00 am</option>
                                    <option value="12">12:00 pm</option>
                                    <option value="13">1:00 pm</option>
                                    <option value="14">2:00 pm</option>
                                    <option value="15">3:00 pm</option>
                                    <option value="16">4:00 pm</option>
                                    <option value="17">5:00 pm</option>
                                    <option value="18">6:00 pm</option>
                                    <option value="19">7:00 pm</option>
                                    <option value="20">8:00 pm</option>
                                    <option value="21">9:00 pm</option>
                                    <option value="22">10:00 pm</option>
                                    <option value="23">11:00 pm</option>
                                </select>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <select name="end time" id="endTime" onChange={() => setEndTime(handleEndTime)}>
                                    <option value="00">12:00 am</option>
                                    <option value="01">1:00 am</option>
                                    <option value="02">2:00 am</option>
                                    <option value="03">3:00 am</option>
                                    <option value="04">4:00 am</option>
                                    <option value="05">5:00 am</option>
                                    <option value="06">6:00 am</option>
                                    <option value="07">7:00 am</option>
                                    <option value="08" >8:00 am</option>
                                    <option value="09">9:00 am</option>
                                    <option value="10">10:00 am</option>
                                    <option value="11">11:00 am</option>
                                    <option value="12">12:00 pm</option>
                                    <option value="13">1:00 pm</option>
                                    <option value="14">2:00 pm</option>
                                    <option value="15">3:00 pm</option>
                                    <option value="16">4:00 pm</option>
                                    <option value="17" selected="selected">5:00 pm</option>
                                    <option value="18">6:00 pm</option>
                                    <option value="19">7:00 pm</option>
                                    <option value="20">8:00 pm</option>
                                    <option value="21">9:00 pm</option>
                                    <option value="22">10:00 pm</option>
                                    <option value="23">11:00 pm</option>
                                </select>
                                <br /> <br />
                                <b> Active Duration </b> <br />
                                <select name="activity duration" id="activityDuration" onChange={() => setDuration(handleDuration)}>
                                    <option value="15" selected="selected">15 min</option>
                                    <option value="30">30 min</option>
                                    <option value="45">45 min</option>
                                    <option value="59">1 hr</option>
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
  var calendar = document.getElementById("calendar");

  if (checkBox.checked == true){
    text.style.display = "block";
    // calendar.style.visibility = "visible";
    const Autobook = true;
    console.log("Autobook is " + Autobook);
    
  } else {
    text.style.display = "none";
    // calendar.style.visibility = "hidden";
    const Autobook = false;
    console.log("Autobook is " + Autobook);
  }
}

export default ConfigTile;
