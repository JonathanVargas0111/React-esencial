import React, { Component } from 'react';
import Header  from "./components/header";
import Dish  from "./components/dish";
import NewDish  from "./components/newDish";
import { Button } from '@material-ui/core';

import './styles/App.css';
import './styles/dish.css';
import { render } from '@testing-library/react';

class App extends Component {

  dish = "tacos"; 
  dishes = ["Tacos", "Ceviche","Paella"];
  showDishes=e=>{
    e.preventDefault();
    this.props.history.push("/Platillos");
  };

  render(){
    return (
      <div>
        <Header></Header>
        <NewDish></NewDish>
        {/*  <Dish name={dish} qty="3"></Dish> */}

        <Button variant="contained" color="primary"
        onClick={this.showDishes}>
          Primary
        </Button>
        Yo como {this.dish}
      <ul>
        {
          this.dishes.map( (dish,index) => <li key={index}>{dish}</li>)
        }
      </ul>
      </div>
    );
  }
}

export default App;
