/**
 * Created by passa on 10/4/2560.
 */
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

import logo from './mhalong_logo_light_sm.png'
import './navbar.css'

export default class extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
                <nav id="top" className="container">
                    <a href="#">
                        <img className="logo" src={logo}/>
                    </a>
                    <div className="nav-extra">
                        <NavLink className="hireme button-mywall" to="/"  activeClassName="active" exact>HOME</NavLink>
                        <a className="hireme button-mywall" href="https://blog.mhalong.com" target="_blank">BLOG</a>
                        {/*<NavLink className="hireme button-mywall" to="/about" activeClassName="active">ABOUT</NavLink>*/}
                    </div>
                </nav>
            </div>
        );
    }
}
