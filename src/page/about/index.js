import React, {Component} from "react";

import Navbar from "../../components/navbar";
import profileImg from "./profile.jpg";
import "./about.css";


export default class extends Component {
    render() {
        return (
            <div>
                <div className="about-wrapper">
                    <header>
                        <Navbar/>
                        <div className="container">
                            <img className="img-circle avatar" alt="Passakon Puttasuwan" src={profileImg}/>
                            <h1 className="name">Passakon Puttasuwan</h1>
                            <h2 className="position">Developer & Programmer</h2>
                            <p className="quotes">คุณไม่ได้ไม่เก่ง คุณแค่ไม่ฝึก</p>
                            <ul className="social">
                                <li>
                                    <a href="https://mhalong.com" target="_blank">
                                        <i className="fa fa-globe fa-3x" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://fb.me/itcyberclub" target="_blank">
                                        <i className="fa fa-facebook-square fa-3x" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/pskclub" target="_blank">
                                        <i className="fa fa-github-square fa-3x" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/user/long5111" target="_blank">
                                        <i className="fa fa-youtube-square fa-3x" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/passakon_p" target="_blank">
                                        <i className="fa fa-twitter-square fa-3x" aria-hidden="true"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                </div>
            </div>
        );
    }
}
