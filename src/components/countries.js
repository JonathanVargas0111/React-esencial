import React, {Component} from "react";
import Button from "@material-ui/core/Button";
export class Countries extends Component{
    getCountries(){
        fetch("https://restcountries.eu/rest/v2/lang/es").then
        (
            response =>
            response.json()
        )
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
    render(){
        return (
            <div>
                <h1>Countries</h1>
                <Button variant="contained" color="primary"
                    onClick={this.getCountries}
                    >
                    Cargar lista
                </Button> 
            </div>
        )
    }

}

export default Countries;