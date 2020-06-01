import React from "react";
import {Switch,Route} from "react-router-dom";
import PageA from "./components/pages/pageA"
import PageB from "./components/pages/pageB"
import PageC from "./components/pages/pageC"
class Router extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" component={PageA}></Route>
                <Route path="/a" component={PageA}></Route>
                <Route path="/b" component={PageB}></Route>
                <Route path="/c" component={PageC}></Route>
            </Switch>
        )
    }
}
export default Router;