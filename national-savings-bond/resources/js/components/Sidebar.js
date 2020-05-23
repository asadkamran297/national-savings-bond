import React,{Component} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'; 
import Dashboard from "./Dashboard";
import Main from "./Main";
import Example from "./Example";

export default function Sidebar() {
    return (
          <Router>
                <aside class="left-sidebar">
                    <div class="scroll-sidebar">
                        <nav class="sidebar-nav">
                            <ul id="sidebarnav">
                                <li class="user-profile">
                                    <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><img src="../assets/images/users/profile.png" alt="user" /><span class="hide-menu">Steave Jobs </span></a>
                                    <ul aria-expanded="false" class="collapse">
                                        <li><a href="javascript:void()">Logout</a></li>
                                    </ul>
                                </li>
                                <li class="nav-devider"></li>
                                <li> <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i class="mdi mdi-gauge"></i><span class="hide-menu">Dashboard <span class="label label-rouded label-themecolor pull-right">4</span></span></a>
                                    <ul aria-expanded="false" class="collapse">
                                        <li><a href="index.html">Minimal </a></li>
                                        <li><a href="index2.html">Analytical</a></li>
                                        <li><a href="index3.html">Demographical</a></li>
                                        <li><a href="index4.html">Modern</a></li>
                                    </ul>
                                </li>
                                <li> 
                                   <Link class="has-arrow waves-effect waves-dark" to="/" aria-expanded="false"><i class="mdi mdi-bullseye"></i><span class="hide-menu">Home</span></Link>
                                </li>
                                <li> 
                                   <Link class="has-arrow waves-effect waves-dark" to="/example" aria-expanded="false"><i class="mdi mdi-bullseye"></i><span class="hide-menu">Form</span></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <Switch>
                  <Route exact path='/' component={Main}/>
                  <Route exact path='/dashboard' component={Dashboard}/>
                  <Route exact path='/example' component={Example}/>
                </Switch>
           </Router>
    );
}

