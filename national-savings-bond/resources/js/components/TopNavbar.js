import React,{Component} from "react";
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'; 
import { browserHistory } from 'react-router';

export default class TopNavbar extends Component {

    constructor(props) {
    super(props);
    
    const { history } = this.props;
    //console.log('here i am : '+history)
}

    onLogout(e){
        
        const { history } = this.props;

        console.log('clicked');
        localStorage.removeItem("login"); 

                  history.push({
                    pathname:'/',
                 });
    }

   render(){
            return (
                <header class="topbar">
                    <nav class="navbar top-navbar navbar-expand-md navbar-light">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="index.html">
                                     <b>
                                    <img src="../assets/images/logo-icon.png" alt="homepage" class="dark-logo" />
                                    <img src="../assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />
                                </b>
                                <span>
                                 <img src="../assets/images/logo-text.png" alt="homepage" class="dark-logo" />
                                 <img src="../assets/images/logo-light-text.png" class="light-logo" alt="homepage" /></span> </a>
                        </div>
                        <div class="navbar-collapse">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                                <li class="nav-item"> <a class="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                                
                            </ul>
                            <ul class="navbar-nav my-lg-0">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-message"></i>
                                        <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                                        <ul>
                                            <li>
                                                <div class="drop-title">Notifications</div>
                                            </li>
                                            <li>
                                                <div class="message-center">
                                                    <a href="#">
                                                        <div class="btn btn-danger btn-circle"><i class="fa fa-link"></i></div>
                                                        <div class="mail-contnet">
                                                            <h5>Luanch Admin</h5> <span class="mail-desc">Just see the my new admin!</span> <span class="time">9:30 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div class="btn btn-success btn-circle"><i class="ti-calendar"></i></div>
                                                        <div class="mail-contnet">
                                                            <h5>Event today</h5> <span class="mail-desc">Just a reminder that you have event</span> <span class="time">9:10 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div class="btn btn-info btn-circle"><i class="ti-settings"></i></div>
                                                        <div class="mail-contnet">
                                                            <h5>Settings</h5> <span class="mail-desc">You can customize this template as you want</span> <span class="time">9:08 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div class="btn btn-primary btn-circle"><i class="ti-user"></i></div>
                                                        <div class="mail-contnet">
                                                            <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <a class="nav-link text-center" href="javascript:void(0);"> <strong>Check all notifications</strong> <i class="fa fa-angle-right"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>


                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" class="profile-pic" /></a>
                                    <div class="dropdown-menu dropdown-menu-right animated flipInY">
                                        <ul class="dropdown-user">
                                            <li>
                                                <div class="dw-user-box">
                                                    <div class="u-img"><img src="../assets/images/users/1.jpg" alt="user"/></div>
                                                    <div class="u-text">
                                                        <h4>Steave Jobs</h4>
                                                        <p class="text-muted">var@gmail.com</p><a href="pages-profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                                </div>
                                            </li>
                                            <li><a href="javascript:;" onClick={this.onLogout.bind(this)}><i class="fa fa-power-off"></i>Logout</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            );
   }
}