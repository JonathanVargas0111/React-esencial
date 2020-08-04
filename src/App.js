import React, { Component } from 'react';
import Header  from "./components/header";
import Dish  from "./components/dish";
import NewDish  from "./components/newDish";
import Dishes from './components/dishes';

import data from './assets/data/dishes.json'


import './styles/App.css';
import './styles/dish.css';
import { render } from '@testing-library/react';

class App extends Component {

  state = {
    dish :"tacos",
    dishes : data
  }

  showDishes=e=>{
    e.preventDefault();
    this.props.history.push("/Platillos");
  };

  updateDish = (index, updatedName) =>{

    let newState = {...this.state};
    newState.dishes.dishes[index].name = updatedName;

    this.setState(newState);

  };

  addDish = (dishName) => {
    let newState = {...this.state};

    const newDish={
      id: newState.dishes.dishes.length,
      name: dishName,
      country: "Mexico",
      ingedientes:["Semillas", "Pollo", "Arroz"]
    };
    newState.dishes.dishes.push(newDish)

    this.setState(newState);
  };


  render(){
    return (
      <div>
        <Header></Header>
        <NewDish onAddDish={this.addDish}></NewDish>
        {/*  <Dish name={dish} qty="3"></Dish> */}
        <Dishes data={this.state.dishes} onUpdateDish={this.updateDish}></Dishes>

        {/* <ul>
          {
            this.dishes.map( (dish,index) => <li key={index}>{dish}</li>)
          }
        </ul> */}
      </div>
    );
  }
}

export default App;
