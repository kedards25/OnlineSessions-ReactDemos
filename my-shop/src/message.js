import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    let message
    let current_day=new Date().getDay()

    // This is a comment
    if(current_day===0){
      message=<div>Sorry..we are not open on Sundays</div>
    }
    else{
        message=<div>Welcome..How can we help you?</div>
    }
    return message
  }
}
