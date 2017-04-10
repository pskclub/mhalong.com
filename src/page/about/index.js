import React, {Component} from 'react';

import Navbar from '../../components/navbar'
import profileImg from './profile.jpg'
import './about.css'


export default class extends Component {
    render() {
        return (
            <div>
                <div className="about-wrapper">
                    <header>
                        <Navbar/>
                        <div className="container">
                            <img className="img-circle imgsus" alt="Passakon Puttasuwan" src={profileImg}/>
                            <h1 className="name-boss">Passakon Puttasuwan</h1>
                            <h2 className="main-details">Developer & Programmer</h2>
                            <p className="extend-details">คุณไม่ได้ไม่เก่ง คุณแค่ไม่ฝึก</p>
                        </div>
                    </header>

                </div>
            </div>
        );
    }
}
