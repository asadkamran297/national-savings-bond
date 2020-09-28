import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GLOBAL from './../global.js';
import Footer from './../Footer.js';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';

const div_style="form-group";
const div_style_error="form-group has-danger";
const form_style="form-control";
const form_style_error="form-control form-control-danger";

export default class Add extends Component {

    constructor(props){
        super(props);
        
        this.state={
/*            inputs:[
                 { type: 'email', placeholder: 'Email Address' },
                 { type: 'name', placeholder: 'Email Address' }
            ],*/
            amount:0,
            amount_error:0,
            amount_error_message:'',
            status:1,
            status_error:0,
            status_error_message:'',
            first_prize:0,
            first_prize_error:0,
            first_prize_error_message:'',
            second_prize:0,
            second_prize_error:0,
            second_prize_error_message:'',
            third_prize:0,
            third_prize_error:0,
            third_prize_error_message:'',
            message:'',
            loading:false
        }

        /*this.state.inputs.map( function(item, i) {
        console.log(item.type);
      }.bind(this))*/
    }

    onChange(e) {

       this.setState({
           [e.target.name]: e.target.value
        },function(){

               this.Validate();               
        });
    
   }

   onSave(e){
      
       //console.log(this.Validate());

       if(this.Validate())
       {
                  /*const data = {
                  amount:this.state.amount,
                  status:this.state.status,
                  first_prize:this.state.first_prize,
                  second_prize:this.state.second_prize,
                  third_prize:this.state.third_prize
              }*/

              this.setState({
                   loading: true
              });

              axios.post(GLOBAL.url+'bondtype/store',this.state,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
              .then(res=>{
                    
                    if(res.data.status)
                    {
                          //console.log(res.data.message);
                          const { history } = this.props;

                          history.push({
                            pathname:'/bond/types/list',
                            state: { message: res.data.message }
                         });
                    }
                    else
                    {
                        if(res.data.errors)
                        {
                            this.setState({
                                   amount_error: 1,
                                   amount_error_message: res.data.errors.amount[0],
                                   loading: false
                             });
                        }
                    }
              }); 
       }       

    }

    

   Validate(){

         let amount_error=0;
         let first_prize_error=0;
         let second_prize_error=0;
         let third_prize_error=0;

         if(this.state.amount <= 0){
             amount_error=1;
             this.setState({
                   amount_error: 1,
                   amount_error_message:'The Amount Should be Greater than Zero'
             });
         }
         else
         {
            amount_error=0;
            this.setState({
                   amount_error: 0,
                   amount_error_message:''
             });
         }

         if(this.state.first_prize <= 0){
             first_prize_error=1;
             this.setState({
                   first_prize_error: 1,
                   first_prize_error_message:'The Amount Should be Greater than Zero'
             });
         }
         else
         {
            first_prize_error=0;
            this.setState({
                   first_prize_error: 0,
                   first_prize_error_message:''
             });
         }

         if(this.state.second_prize <= 0){
             second_prize_error=1;
             this.setState({
                   second_prize_error: 1,
                   second_prize_error_message:'The Amount Should be Greater than Zero'
             });
         }
         else
         {
            second_prize_error=0;
            this.setState({
                   second_prize_error: 0,
                   second_prize_error_message:''
             });
         }

         if(this.state.third_prize <= 0){
             third_prize_error=1;
             this.setState({
                   third_prize_error: 1,
                   third_prize_error_message:'The Amount Should be Greater than Zero'
             });
         }
         else
         {
            third_prize_error=0;
            this.setState({
                   third_prize_error: 0,
                   third_prize_error_message:''
             });
         }
         
         if(amount_error || first_prize_error || second_prize_error || third_prize_error)
         {
            return false;
         }
         else
         {
            return true;  
         }
         
   }

   componentDidMount(){
   }


    render(){
            return (
                <div class="page-wrapper">
                    
                    <div class="container-fluid">
                            
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-header bg-info">
                                        <h4 class="m-b-0 text-white">Add Bond Types</h4>
                                    </div>
                                    <div class="card-body">
                                        <div style={{ textAlign: 'right' }}>
                                                <Link to="/bond/types/list"><button type="button" class="btn waves-effect waves-light btn-primary">Back</button></Link>
                                        </div>
                                        <form action="#">
                                            <div class="form-body">
                                                <div class="row p-t-20">
                                                    
                                                    <div class="col-md-6">
                                                        <div class={ this.state.amount_error ? div_style_error : div_style }>
                                                            <label class="control-label">Amount</label>
                                                            <input type="number" id="amount" name="amount" class={ this.state.amount_error ? form_style_error : form_style }  onChange={this.onChange.bind(this)} placeholder="0"/>
                                                            <small class="form-control-feedback">{this.state.amount_error_message}</small> </div>
                                                    </div>
                                                    
                                                    <div class="col-md-6">
                                                        <div class="form-group has-success">
                                                            <label class="control-label">Status</label>
                                                            <select class="form-control custom-select" id="status" name="status" onChange={this.onChange.bind(this)}>
                                                                <option value="1">Active</option>
                                                                <option value="0">Inactive</option>
                                                            </select>
                                                            <small class="form-control-feedback"></small> </div>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    
                                                    <div class="col-md-6">
                                                        <div class={ this.state.first_prize_error ? div_style_error : div_style }>
                                                            <label class="control-label">First Prize</label>
                                                            <input type="number" id="first_prize" name="first_prize" class={ this.state.first_prize_error ? form_style_error : form_style } onChange={this.onChange.bind(this)} placeholder="0"/>
                                                            <small class="form-control-feedback">{this.state.first_prize_error_message}</small> </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class={ this.state.second_prize_error ? div_style_error : div_style }>
                                                            <label class="control-label">Second Prize</label>
                                                            <input type="number" id="second_prize" name="second_prize" class={ this.state.second_prize_error ? form_style_error : form_style } onChange={this.onChange.bind(this)} placeholder="0"/>
                                                            <small class="form-control-feedback">{this.state.second_prize_error_message}</small> </div>
                                                    </div>

                                                </div>

                                                <div class="row">

                                                    <div class="col-md-6">
                                                        <div class={ this.state.third_prize_error ? div_style_error : div_style }>
                                                            <label class="control-label">Third Prize</label>
                                                            <input type="number" id="third_prize" name="third_prize" class={ this.state.third_prize_error ? form_style_error : form_style } onChange={this.onChange.bind(this)} placeholder="0"/>
                                                            <small class="form-control-feedback"> {this.state.third_prize_error_message} </small> </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="form-actions">
                                                <button type="button" 
                                                   onClick={this.onSave.bind(this)} 
                                                   class="btn btn-success"
                                                   disabled={this.state.loading}> 
                                                   <i class="fa fa-check"></i> { this.state.loading ? "Loading..." : "Save"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <Footer/>

                </div>
            );
   }
}
