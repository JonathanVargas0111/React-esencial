import React, {Component} from "react";
import { Button } from '@material-ui/core';


export class Dishes extends Component{

    goBack=e=>{
        e.preventDefault();
        this.props.history.push("/");
    };

    render(){
        return(
            <idv>
                <h1>Platillos</h1>
                <Button variant="contained" color="primary"
                onClick={this.goBack}>
                    Regresar
                </Button>
            </idv>
        )
    }
}

export default Dishes;