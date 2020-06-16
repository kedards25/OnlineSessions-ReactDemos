import React, { Component } from 'react';

export default class componentName extends Component {
    

    constructor()
    {
        super();
        this.state={posts:[]};
        fetch("https://jsonplaceholder.typicode.com/posts")//API call
        .then(response=>response.json())//Convert to JSON
        .then(json=>{this.setState({posts:json});}) //Operation to be performed with JSON
        .catch(error=>console.log(error))//Error Handling
    }

  render() {
    //this makes sure that list will not be initialized again with other type
    const list =[];

    for(let post of this.state.posts)
    {
      //console.log(post);
      list.push(<div>{post.id}:{post.title}<br/>{post.body}</div>)  
     
    }
    return ( <div> {list} </div>)
}
}
