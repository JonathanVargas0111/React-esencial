import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom";

import App from "./../App";
import Dishes from "./dishes";
import Dish from "./dish";
import Countries from "./countries";
import NotFound from "./notfound";


const Router =()=>(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/Platillos" component={Dishes}/>
                <Route exact path="/Platillo/:name" component={Dish}/>
                <Route exact path="/Countries" component={Countries}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );

export default Router;
