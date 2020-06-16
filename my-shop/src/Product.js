import React, { Component } from 'react';

export default class Product extends Component {

  showPrice()
  {
    alert("Price: "+this.props.item.price)
  }

  render() {
    let classToApply=this.props.item.selected?"selected":"";
    return (
      <li onClick={()=>this.props.selectHandler(this.props.item.code)} className={classToApply}>
          <h3>{this.props.item.name}</h3>
          <p>{this.props.item.description}</p>
      </li>
    );
  }
}
