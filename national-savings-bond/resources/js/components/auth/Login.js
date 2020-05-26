import React,{Component,Fragment} from "react";
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'; 
import { browserHistory } from 'react-router';
import axios from 'axios';



export default class Login extends Component{

constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
            redirect:false,
            message:''
        }

       /*console.log('The State is: '+this.props.location.state);

        if(this.props.location.state != undefined)
        {
              const { history } = this.props;

              history.push({
                pathname:'/dashboard',
             });
        }*/

        //console.log(localStorage.getItem("login"));

        const { history } = this.props;
        console.log('here i am : '+history)
        
        if (localStorage.getItem("login") != null) {
           
           const { history } = this.props;

              history.push({
                pathname:'/dashboard',
             });

        }

    }

onChange(e) {

       this.setState({
       [e.target.name]: e.target.value
    },function(){

    });
    
}


onLogin(e){
        
         const login = {
          email:this.state.email,
          password:this.state.password,
      }

      axios.post('http://127.0.0.1:8000/api/login',login)
      .then(res=>{
        console.log(res.data.success);

          if(res.data.success)
          {
               const { history } = this.props;

              localStorage.setItem("login", "Smith");

              history.push({
                pathname:'/dashboard',
                //state: { detail: 'johnny' }
             });
          }
          else
          {
              this.setState({
                   message: 'The Credidentials Did not Match'
                },function(){
                    console.log(this.state.message);
              });
          }

      });


      
    }

    componentDidMount(){

        
    }


       render(){

        return(
            
            <html lang="en">

            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>
                <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/images/favicon.png') }}"/>
                <title>Teksopt | login</title>
                <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="../css/pages/login-register-lock.css" rel="stylesheet"/>
                <link href="../css/style.css" rel="stylesheet"/>
                
                <link href="../css/colors/default-dark.css" id="theme" rel="stylesheet"/>
            </head>

            <body>

            

                <section id="wrapper" class="login-register login-sidebar" style={{ backgroundImage: "url(" + "../assets/images/logo.jpg" + ")" }}>
                    <div class="login-box card">
                        <div class="card-body">
                            <form class="form-horizontal form-material" id="loginform" method="post">
                                <a href="javascript:void(0)" class="text-center db"><img src="../assets/images/logo-icon.png" alt="Home" /><br/><img src="../assets/images/logo-text.png" alt="Home" /></a>
                                <div class="form-group m-t-20">
                                    <div class="col-xs-12">
                                        <input class="form-control" onChange={this.onChange.bind(this)} type="email" id="email" name="email" required="email" placeholder="Email"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <input class="form-control" onChange={this.onChange.bind(this)} id="password" name="password" type="password" required="" placeholder="Password"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <div class="checkbox checkbox-primary pull-left p-t-0">
                                            <input id="checkbox-signup" name="remember" value="1" type="checkbox" class="filled-in chk-col-light-blue"/>
                                            <label for="checkbox-signup"> Remember me </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-center m-t-20">
                                    <div class="col-xs-12">
                                        <button onClick={this.onLogin.bind(this)} class="btn btn-info btn-lg btn-block text-uppercase btn-rounded" type="button" >Log In</button>
                                    </div>
                                </div>
                                
                                <div style={{textAlign: 'center'}}>{this.state.message}</div>

                            </form>

                        </div>
                    </div>
                </section>
                <script src="../assets/plugins/jquery/jquery.min.js"></script>
                <script src="../assets/plugins/bootstrap/js/popper.min.js"></script>
                <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>

                
            </body>

            </html>

         );

      }

    
    
}

