import React from 'react';
import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import Msg from './message';
import ProductList from './ProductList';
import Greet from './Greet';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 className="App-title">The Catalog App</h1>
        {/* this is a comment */}
      </header>
      <Greet usr="Kedar"/>
      <Catalog/>
      <Msg/>
      {/* <ProductList/> */}
      {/* <Posts/> */}
    </div>
  );
}

export default App;
