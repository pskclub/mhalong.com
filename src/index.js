import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './page/home';
import About from './page/about';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={About}/>
            <Route exact path="/about" component={Home}/>
        </div>
    </Router>,
  document.getElementById('root')
);
