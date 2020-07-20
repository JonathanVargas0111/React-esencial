import React, {Component , Fragment} from "react";


//Clase del componente
class Flag extends Component{
    render(){
        return(
        <div>
            <h1>Bandera</h1>
        </div>
        )        
    }
}
class Ingredient extends Component{
    render(){
        return(
        <Fragment>
            <h4>Ingredientes</h4>
            <h4>Ingredientes</h4>
        </Fragment>
        )        
    }
}



class Dish extends Component{
    dishes = ["Tacos", "Ceviche","Paella"];
    countIngredients(){
        return this.dishes.length;
    }
    render(){
        const { params} = this.props.match;
        return(
        <div className="dish">
            <h1>{params.name} </h1>
            <h1>{this.props.name} </h1>
            <h3>{this.countIngredients()}</h3>
            <Ingredient/>            
        </div>
        )        
    }
}

export default Dish;