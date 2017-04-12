import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Notfound from "./page/notfound";

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={About}/>
                <Route path="/about" component={Home}/>
                <Route component={Notfound}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);
