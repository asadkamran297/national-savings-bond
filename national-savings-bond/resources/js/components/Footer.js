import React,{Component,Fragment} from "react";
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'; 
import { browserHistory } from 'react-router'
import Home from "./Home";
import Login from "./auth/Login";
import GLOBAL from './global.js';

//const user=false;

export default class Footer extends Component{

	constructor(props){
        super(props);
        
    }

    modalToggle(check){
             GLOBAL.modal = check;
             console.log(GLOBAL.modal);
    }

	   render(){
	   	 return(
               <div>
		   	 	  <footer class="footer"> © 2020 Admin Pro by wrappixel.com </footer>
                  {/*<button onClick={ ()=> this.props.modalchange(true) } >{ this.props.name }</button>*/}
                  <button onClick={ this.modalToggle.bind(this,true) } >{ this.props.name }</button>
               </div>
           );

	  }

	
	
}
