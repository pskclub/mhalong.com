import React, {Component} from 'react';
import Navbar from '../../components/navbar'
import profileImg from "../../../public/profile.jpg";
import  './contact.css'


export default class extends Component {
    render() {
        return (
            <div>
                <div className="contact-wrapper">
                    <header>
                        <Navbar/>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">

                                    <img className="img-circle avatar" alt="Passakon Puttasuwan" src={profileImg}/>
                                    <h3 className="name">Passakon Puttasuwan</h3>
                                    <h2 className="position">Android & Web Developer</h2>
                                    <ul className="social">
                                        <li>
                                            <a href="https://mhalong.com" target="_blank">
                                                <i className="fa fa-globe " aria-hidden="true"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://fb.me/itcyberclub" target="_blank">
                                                <i className="fa fa-facebook-square " aria-hidden="true"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/pskclub" target="_blank">
                                                <i className="fa fa-github-square " aria-hidden="true"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/user/long5111" target="_blank">
                                                <i className="fa fa-youtube-square " aria-hidden="true"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/passakon_p" target="_blank">
                                                <i className="fa fa-twitter-square " aria-hidden="true"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://steamcommunity.com/id/pskclub/" target="_blank">
                                                <i className="fa fa-steam-square " aria-hidden="true"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/pskclub/" target="_blank">
                                                <i className="fa fa-instagram" aria-hidden="true"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-offset-2 col-md-6">
                                    <dl className="dl-horizontal">
                                        <dt title="อีเมล">E-mail</dt>
                                        <dd title="passakon_p@hotmail.com">passakon_p@hotmail.com <br/>
                                            passakon.p@gmail.com <br/> passakon_p@kmi.tl
                                        </dd>
                                        <dt title="เบอร์โทร">Tel</dt>
                                        <dd title="080-568-1438">080-568-1438</dd>
                                        <dt>Line ID
                                        </dt>
                                        <dd title="line id : pskclub">pskclub</dd>
                                        <dt>Fan Page</dt>
                                        <dd><a href="https://www.facebook.com/mhalongcom" target="_blank">fb.com/mhalongcom</a>
                                        </dd>
                                        <dt><i className="fa fa-graduation-cap"/></dt>
                                        <dd title="เรียนอยู่สาขาวิทยาการคอมพิวเตอร์ที่สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง">
                                            Computer Science @ KMITL
                                        </dd>
                                    </dl>

                                </div>
                            </div>

                        </div>
                    </header>

                </div>
            </div>
        );
    }
}