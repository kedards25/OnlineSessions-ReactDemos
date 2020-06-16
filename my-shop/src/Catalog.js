import React, { Component } from 'react';
import './Catalog.css'
import ProductList from './ProductList';

export default class Catalog extends Component {

  constructor()
    {
        super();
        this.state={products:[]};
        fetch("products.json")//API call
        .then(response=>response.json())//Convert to JSON
        .then(json=>{console.log("Pr: "+json);this.setState({products:json});}) //Operation to be performed with JSON
        .catch(error=>console.log(error))//Error Handling
    }

    select(productCode){
      let productList=this.state.products.map(function(p){
        if(p.code===productCode)
        {
          p.selected=(!p.selected)
        }
        return p;
      });
      this.setState({products:productList})
    }

  render() {
    let title="Catalog for the day: "+new Date().toDateString();

    return (
      <div> 
            <h2>
                {title}
            </h2> 
            <ProductList items={this.state.products} selectHandler={this.select}/>
      </div>
    );
  }
}



