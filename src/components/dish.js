import React, {Component , Fragment} from "react";
import { Button, List, ListItem, ListSubheader, ListItemText, ListItemIcon, Card, CardContent, GridList} from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';


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
        //const { params} = this.props.match;
        return(
            <Card className="card">
                <CardContent>
                    <List 
                        component="nav"
                        subheader={
                            <ListSubheader component="div">
                                {this.props.name}
                            </ListSubheader>
                        }
                    >
                        {this.props.ingrendients.map((ingrendient, index)=>(
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    <ScatterPlotIcon/>
                                </ListItemIcon>
                                <ListItemText
                                    inset primary={ingrendient}
                                />
                            </ListItem>
                        ))}              

                    </List>
                </CardContent>

            </Card>

        )        
    }
}

export default Dish;