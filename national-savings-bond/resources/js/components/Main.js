import React,{Component,Fragment} from "react";
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'; 
import { browserHistory } from 'react-router'
import Home from "./Home";
import Login from "./auth/Login";
import BondTypeList from  "./bond_types_hooks/List";

//const user=false;

export default class Main extends Component{

	constructor(props){
        super(props);
        
        this.state={
            user: false
        }
        
        /*try
        {
               console.log(this.props.params.state.results);	
	           this.setState({
	               user : this.props.location.state.results ? this.props.location.state.results : false
	        }) 
        }
        catch(Exception){

        }
        console.log('hello');*/
        
        const { history } = this.props;
        console.log('here i am : '+history);
    }

	   render(){
	   	 return(
		   	 	<Router>
		           <Switch>
		                  <Route exact path='/' component={Login}/>
		                  {/*<Route exact path='/dashboard' component={Home}/>*/}
		           </Switch>
		        </Router>
           );

	  }

	
	
}

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
