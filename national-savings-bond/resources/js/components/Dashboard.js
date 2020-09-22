import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FlashMassage from 'react-flash-message'
import axios from 'axios';
import swal from 'sweetalert';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import GLOBAL from './global.js';
import Pusher from 'pusher-js';

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        
        this.state={
            bondtype_count:0
        }

    }

    getData(e){        
       axios.get(GLOBAL.url+'dashboard/stats',{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
        .then(response=>{
            console.log(response.data);
            this.setState({
              bondtype_count:response.data.bondtype_count
            });
        });
   }

   pusher_run(){
        
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher('c4a08f4726d206f07602', {
            cluster: 'ap1',
            forceTLS: true
        });

        const this2=this;

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {

                this2.getData();
                

            });
    }

   componentDidMount(){
       this.getData();
       this.pusher_run();
   }

    render(){
        return (
            <div class="page-wrapper">
                
                <div class="container-fluid">
                        
                     <div class="row">
                        <div class="col-lg-3">
                            <div class="card bg-info">
                                <div class="card-body">
                                    <div class="d-flex no-block">
                                        <div class="m-r-20 align-self-center"><img src="../assets/images/icon/income-w.png" alt="Income" /></div>
                                        <div class="align-self-center">
                                            <h6 class="text-white m-t-10 m-b-0">Bond Types</h6>
                                            <h2 class="m-t-0 text-white">{ this.state.bondtype_count }</h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card bg-success">
                                <div class="card-body">
                                    <div class="d-flex no-block">
                                        <div class="m-r-20 align-self-center"><img src="../assets/images/icon/expense-w.png" alt="Income" /></div>
                                        <div class="align-self-center">
                                            <h6 class="text-white m-t-10 m-b-0">Total Expense</h6>
                                            <h2 class="m-t-0 text-white">236,000</h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card bg-primary">
                                <div class="card-body">
                                    <div class="d-flex no-block">
                                        <div class="m-r-20 align-self-center"><img src="../assets/images/icon/assets-w.png" alt="Income" /></div>
                                        <div class="align-self-center">
                                            <h6 class="text-white m-t-10 m-b-0">Total Assets</h6>
                                            <h2 class="m-t-0 text-white">987,563</h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card bg-danger">
                                <div class="card-body">
                                    <div class="d-flex no-block">
                                        <div class="m-r-20 align-self-center"><img src="../assets/images/icon/staff-w.png" alt="Income" /></div>
                                        <div class="align-self-center">
                                            <h6 class="text-white m-t-10 m-b-0">Total Staff</h6>
                                            <h2 class="m-t-0 text-white">987,563</h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <footer class="footer"> © 2017 Admin Pro by wrappixel.com </footer>

            </div>
        );
    }
}

