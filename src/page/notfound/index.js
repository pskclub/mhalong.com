import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "../../components/navbar";
import "./notfound.css";


export default class extends Component {
    render() {
        return (
            <div>
                <div className="notfound-wrapper">
                    <header>
                        <Navbar/>
                        <div className="container">
                            <div className="detail">
                                <h1 className="big">404 Not Found</h1>
                                <Link to='/' className="btn btn-warning">
                                    <i className="fa fa-home" aria-hidden="true"/> Back to Home
                                </Link>
                            </div>
                        </div>
                    </header>

                </div>
            </div>
        );
    }
}
