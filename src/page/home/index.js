import React, { Component } from 'react';
import Navbar from '../../components/navbar'
// import  './home.css'


export default class extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <header>
                    <Navbar/>
                </header>
                <div className="container">
                    <h1 className="text-center">kuy por</h1>
                </div>
            </div>

        );
    }
}