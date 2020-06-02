import React from "react";
import {Switch,Route} from "react-router-dom";
import MyButtonController from "./components/MyButtonController"
class Router extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={MyButtonController}></Route>
               
            </Switch>
        )
    }
}
export default Router;