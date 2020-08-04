import React, {Component} from "react";
import { Button, List, ListItem, ListSubheader, ListItemText, ListItemIcon, GridList } from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Dish from "./dish";


export class Dishes extends Component{

    goBack=e=>{
        e.preventDefault();
        this.props.history.push("/");
    };

    updateDish = (index, updatedName)=>{
        this.props.onUpdateDish(index, updatedName);
    };

    render(){
        return(
            <div>
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
                    {this.props.data.dishes.map((dish, index)=>(
                        <Dish key={index} name={dish.name} ingrendients={dish.ingedientes}
                        index={index}
                        onUpdateDish={this.updateDish}/>
                    ))}
                </GridList>

                
            </div>
        )
    }
}

export default Dishes;