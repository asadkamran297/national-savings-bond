import React,{Component,Fragment} from "react";
import ReactDOM from 'react-dom';
import Home from "./Home";
import Login from "./auth/Login";

const user=true;

export default class Main extends Component{

	   render(){
        
        if(user)
        {
		   	return(
	            
	             <Home />

		     );
        }
        else
        {
        	return(
	            
	             <Login />

		     );
        }

	  }

	
	
}

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
