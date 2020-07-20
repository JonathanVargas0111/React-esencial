import React, {Component} from "react";
import { Button } from '@material-ui/core';

import Data from "../assets/data/dishes.json";
import Dish from "./dish";

export class Dishes extends Component{

    goBack=e=>{
        e.preventDefault();
        this.props.history.push("/");
    };

    render(){
        return(
            <div>
                <h1>Platillos</h1>
                <Button variant="contained" color="primary"
                onClick={this.goBack}>
                    Regresar
                </Button>              

                {Data.dishes.map((dish, index)=>(
                <Dish key={index} name={dish.name} ingredientes={dish.ingedientes}/>
                ))}
            </div>
        )
    }
}

export default Dishes;