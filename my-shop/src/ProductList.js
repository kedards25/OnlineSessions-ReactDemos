import React, { Component } from 'react';
import './ProductList.css'
import Product from './Product';
import './products.json';
export default class ProductList extends Component {
  

  render() {

    let productComponents=[];
    let products=[];
    products=this.props.items.products;

  console.log("Data: "+products)

    for (let product of products) {
        productComponents.push(<Product item={product} selectHandler={this.props.selectHandler} />)
    }
    return (
      <div>
        <ul>
           {productComponents}
        </ul>
       </div>
    );
  }
}
