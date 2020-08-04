import React, {Component , Fragment} from "react";
import { IconButton, List, ListItem, ListSubheader, ListItemText, ListItemIcon, Card, CardContent, GridList, TextField} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
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

    state = {
        edit: false,
        name: this.props.name
    };

    edit = e => {
        this.setState({ edit : !this.state.edit})
    };

    handleChange = e =>{
        let newState = {...this.state};
        newState.name = e.currentTarget.value;

        this.setState(newState);    
        this.props.onUpdateDish(this.props.index , newState.name);

    };

    render(){
        //const { params} = this.props.match;
        return(
            <Card className="card">
                <CardContent>
                    <List 
                        component="nav"
                        subheader={
                            <ListSubheader component="div">
                                {this.state.edit ?(
                                <TextField
                                    label = "Platillo..."
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    value = {this.state.name}
                                    onChange = {this.handleChange}
                                    />
                                    
                                    ):(
                                        this.props.name
                                    )}
                                    <IconButton size="small" onClick={this.edit}>
                                        <EditIcon/>
                                    </IconButton>
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