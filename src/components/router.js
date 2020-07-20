import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom";

import App from "./../App";
import Dishes from "./dishes";
import Dish from "./dish";
import Countries from "./countries";
import NotFound from "./norfound";


const Router =()=>(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/Dishes" component={Dishes}/>
                <Route exact path="/Countries" component={Countries}/>
            </Switch>
        </BrowserRouter>
    );

export default Router;
