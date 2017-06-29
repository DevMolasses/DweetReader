import { Button } from 'react-bootstrap';
const React = require('react');
const request = require('../util/request');

class Default extends React.Component {
  constructor() {
    super();
    this.state = {
      thing: "",
      created: "",
      ip: ""
    };
  }

  getDweetJSON(){
    this.setState({
      thing: request.then((response) => response.with.thing),
      created: request.then((response) => response.with.created),
      ip: request.then((response) => response.with.content.ip),
    });
  }

  render() {
    return (
      <div className="well clearfix">
        <Button bsStyle="primary" onClick={()=>this.getDweetJSON()}>Get IP Address</Button>
        <br/><br/>
        <ul>
          <li>{this.state.thing}</li>
          <li>{this.state.created}</li>
          <li>{this.state.ip}</li>
        </ul>
      </div>
    );
  }
}

module.exports = Default;
