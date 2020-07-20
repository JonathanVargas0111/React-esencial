import React, {Component , Fragment} from "react";
import GridList from '@material-ui/core/GridList';


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
    render(){        
        return(
        <div className="dish">
            <GridList cellHeight={160} cols={3}>
                <div className="dish">
                        <div>
                            {this.props.name}
                        </div>
                        {this.props.ingredientes.map(
                            (ingredientes, index) =>(
                            <div key={index}>{ingredientes}</div>
                            ))}
                </div>
            </GridList>
        </div>
        )        
    }
}

export default Dish;