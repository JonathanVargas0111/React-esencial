import React from 'react';
import Header  from "./components/header";
import Dish  from "./components/dish";
import NewDish  from "./components/newDish";

import './styles/App.css';
import './styles/dish.css';


let dish = "tacos"; 
let dishes = ["Tacos", "Ceviche","Paella"];

function App() {
  return (
    <div>
      <Header></Header>
      <NewDish></NewDish>
      <Dish name={dish} qty="3"></Dish>
      Yo como {dish}
    <ul>
      {
        dishes.map( (dish,index) => <li key={index}>{dish}</li>)
      }
    </ul>
    </div>
  );
}

export default App;
