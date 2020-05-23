import React,{Component,Fragment} from "react";
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'; 
import { browserHistory } from 'react-router'
import Home from "./Home";
import Login from "./auth/Login";

//const user=false;

export default class Main extends Component{

	constructor(props){
        super(props);
        
        this.state={
            user: false
        }
        console.log('here');
        try
        {
               console.log(this.props.params.state.results);	
	           this.setState({
	               user : this.props.location.state.results ? this.props.location.state.results : false
	        }) 
        }
        catch(Exception){

        }
        console.log('hello');
    }

	   render(){
        
        if(this.state.user)
        {
		   	return(
	            
	             <Home />

		     );
        }
        else
        {
        	return(
	            
	             <Login/>

		     );
        }

	  }

	
	
}

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
