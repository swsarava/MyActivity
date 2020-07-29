import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import logo from './logo.svg';
import './App.css';

function ConfigTile() {
    
    const [value, setValue] = "";
//    const handleChange = (val) => setValue(val);

  return (
      <div className = "container">
        <div className = "row">
            <Card style={{ width: '40rem' }} border="primary" bg="secondary">
                <Card.Body>
                    <Card.Title>My Configurations</Card.Title>
                    <Form>
                        <Card.Text>
                            <p><Card.Header><Card.Subtitle>Notification Configuration &nbsp;</Card.Subtitle></Card.Header>
                                <Form.Label> <Card.Subtitle> Notification:&nbsp;&nbsp;</Card.Subtitle> </Form.Label>
                                <ToggleButtonGroup type="radio" name = "notificationOptions" defaultValue={1} onChange="">
                                    <ToggleButton value={1}>AM only</ToggleButton>
                                    <ToggleButton value={2}>PM only</ToggleButton>
                                    <ToggleButton value={3}>Either</ToggleButton>
                                </ToggleButtonGroup> 
                                <br/><br/>
                                <Form.Label> <Card.Subtitle> Workhours:&nbsp;&nbsp;</Card.Subtitle> </Form.Label> 
                                <ToggleButtonGroup type="radio" name = "workhourOptions" defaultValue={2} onChange="">
                                    <ToggleButton value={1}>Workhours only</ToggleButton>
                                    <ToggleButton value={2}>Anytime</ToggleButton>
                                </ToggleButtonGroup> 
                            </p>
                            <p><Card.Header><Card.Subtitle>Booking Configuration &nbsp;</Card.Subtitle></Card.Header>
                                <Form.Label> <Card.Subtitle> Booking:&nbsp;&nbsp;</Card.Subtitle> </Form.Label>
                                <ToggleButtonGroup type="radio" name = "bookingOptions" defaultValue={3} onChange="">
                                    <ToggleButton value={1}>15 mins</ToggleButton>
                                    <ToggleButton value={2}>30 mins</ToggleButton>
                                    <ToggleButton value={3}>45 mins</ToggleButton>
                                    <ToggleButton value={4}>60 mins</ToggleButton>
                                </ToggleButtonGroup> 
                                <br/><br/>
                                <Form.Label> <Card.Subtitle> Autobook:&nbsp;&nbsp; </Card.Subtitle> </Form.Label>
                                <Form.Check inline
                                    type="switch"
                                    id="custom-switch"
                                    label="ON/OFF"
                                />
                            </p>
                    </Card.Text>
                    </Form>
                    <Button variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
  </div>
  );
}

export default ConfigTile;
