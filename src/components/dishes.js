import React, {Component} from "react";
import { Button, List, ListItem, ListSubheader, ListItemText, ListItemIcon, GridList } from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import data from '../assets/data/dishes.json'
import Dish from "./dish";


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
                {/* {data.dishes.map(
                    dish =>(
                        <List
                            component='nav'
                            subheader={<ListSubheader component="div">Platillo </ListSubheader>}
                            >
                            
                            {data.dishes.map((dish, index) => 
                                <ListItem button key={index}>
                                    <ListItemIcon>
                                        <RestaurantIcon/>
                                    </ListItemIcon>
                                    <ListItemText inset primary={dish.name}/>
                                </ListItem>
                            )}
                        </List>
                    )
                )} */}

                <GridList>
                    {data.dishes.map((dish, index)=>(
                        <Dish key={index} name={dish.name} ingrendients={dish.ingedientes}/>
                    ))}
                </GridList>

                
            </idv>
        )
    }
}

export default Dishes;