import React,{Component,Fragment} from "react";
import ReactDOM from 'react-dom';

export default class Login extends Component{

    

       render(){

        return(
            
            <html lang="en">

            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>
                <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('admin/assets/images/favicon.png') }}"/>
                <title>Teksopt | login</title>
                <link href="{{ asset('admin/assets/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet"/>
                <link href="{{ asset('admin/css/pages/login-register-lock.css') }}" rel="stylesheet"/>
                <link href="css/style.css" rel="stylesheet"/>
                
                <link href="{{ asset('admin/css/colors/default-dark.css') }}" id="theme" rel="stylesheet"/>
            </head>

            <body>
                <div class="preloader">
                    <div class="loader">
                        <div class="loader__figure"></div>
                        <p class="loader__label">Teksopt</p>
                    </div>
                </div>
                <section id="wrapper" class="login-register login-sidebar" style="background-image:url({{ asset('admin/assets/images/logo.jpg') }}">
                    <div class="login-box card">
                        <div class="card-body">
                            <form class="form-horizontal form-material" id="loginform" method="post">
                                <a href="javascript:void(0)" class="text-center db"><img src="{{ asset('admin/assets/images/logo-icon.png') }}" alt="Home" /><br/><img src="{{ asset('admin/assets/images/logo-text.png') }}" alt="Home" /></a>
                                <div class="form-group m-t-20">
                                    <div class="col-xs-12">
                                        <input class="form-control" value="{{ old('email') }}" type="email" name="email" required="email" placeholder="Email"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <input class="form-control" name="password" type="password" required="" placeholder="Password"/>
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
                                        <button class="btn btn-info btn-lg btn-block text-uppercase btn-rounded" type="submit">Log In</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>
                <script src="{{ asset('admin/assets/plugins/jquery/jquery.min.js') }}"></script>
                <script src="{{ asset('admin/assets/plugins/bootstrap/js/popper.min.js') }}"></script>
                <script src="{{ asset('admin/assets/plugins/bootstrap/js/bootstrap.min.js') }}"></script>

                
            </body>

            </html>

         );

      }

    
    
}

