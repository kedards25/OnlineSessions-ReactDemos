import React, { Component } from 'react';

export default class Greet extends Component {
  render() {
    return (
      <div> 
        <h1>Welcome {this.props.usr}</h1>  
     </div>
    );
  }
}
