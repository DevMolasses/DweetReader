import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
const React = require('react');
const request = require('../util/request');

class Default extends React.Component {
  constructor() {
    super();
    this.state = {
      thing: "",
      created: "",
      ip: "",
      hasError: false,
      errorMsg: "",
      buttonPressed: false,
      selectValue: "ThingSpeakNotifierPi",
    };
  }

  getDweetJSON(){
    request(this.state.selectValue).then((response) => {
      if (response.this != "failed") {
        this.setState({
          thing: response.with[0].thing,
          created: response.with[0].created,
          ip: response.with[0].content.ip,
          hasError: false,
          buttonPressed: true,
        });
      } else {
        this.setState({
          hasError: true,
          errorMsg: "This device couldn't be reached at dweet.io",
          buttonPressed: true,
        });
      }
    });
  }

  handleChange(event){
    this.setState({selectValue: event.target.value});
  }

  dweetResults(){
    if(this.state.buttonPressed) {
      if(!this.state.hasError) {
        return (
          <div>
            <br/><br/>
            <ul>
              <li>{this.state.thing}</li>
              <li>{this.state.created}</li>
              <li>{this.state.ip}</li>
            </ul>
          </div>
        );
      }else{
        return (
          <div>
            <h3>{this.state.errorMsg}</h3>
          </div>
        )
      }
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="well clearfix">
        <Form inline>
          <FormGroup controlId="formInlineDevice">
            <ControlLabel>Device</ControlLabel>
            {' '}
            <FormControl componentClass="select"
                         placeholder="Select Device"
                         onChange={(e)=>this.handleChange(e)}
                         value={this.state.selectValue}>
              <option value="ThingSpeakNotifierPi">ThingSpeakNotifierPi</option>
              <option value="PiClock">PiClock</option>
            </FormControl>
          </FormGroup>
          {' '}
          <Button bsStyle="primary" onClick={()=>this.getDweetJSON()}>Get IP Address</Button>
        </Form>
        {this.dweetResults()}
      </div>
    );
  }
}

module.exports = Default;
