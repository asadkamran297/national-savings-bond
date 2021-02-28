import React,{Component} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'; 
import Dashboard from "./Dashboard";
import Main from "./Main";
import Example from "./Example";
import BondTypeList from  "./bond_types/List";
import BondTypeAdd from  "./bond_types/Add";
import BondTypeEdit from  "./bond_types/Edit";
import BondList from  "./bonds/List";
//import "./imports.js";





export default function Sidebar() {
    return (
          <Router>
                <aside class="left-sidebar">
                    <div class="scroll-sidebar">
                        <nav class="sidebar-nav">
                            <ul id="sidebarnav">
                            
                                <li> 
                                   <Link class="has-arrow waves-effect waves-dark" to="/" aria-expanded="false"><i class="mdi mdi-bullseye"></i><span class="hide-menu">Home</span></Link>
                                </li>
                                <li> 
                                   <Link class="has-arrow waves-effect waves-dark" to="/bond/types/list" aria-expanded="false"><i class="mdi mdi-bullseye"></i><span class="hide-menu">Bond Types</span></Link>
                                </li>
                                <li> 
                                   <Link class="has-arrow waves-effect waves-dark" to="/bond/list" aria-expanded="false"><i class="mdi mdi-bullseye"></i><span class="hide-menu">Bonds</span></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <Switch>
                  <Route exact path='/' component={Main}/>
                  <Route exact path='/dashboard' component={Dashboard}/>
                  <Route exact path='/bond/add' component={BondTypeAdd} />
                  <Route exact path='/bond/types/list' component={BondTypeList}/>
                  <Route exact path='/bond/edit/:id' component={BondTypeEdit}/>
                  <Route exact path='/bond/list' component={BondList} />
                </Switch>
           </Router>
    );
}

