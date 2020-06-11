import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GLOBAL from './../global.js';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';

const div_style="form-group";
const div_style_error="form-group has-danger";
const form_style="form-control";
const form_style_error="form-control form-control-danger";

export default class Add extends Component {

    constructor(props){
        super(props);
        
        this.state={
            id:0,
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
            message:''
        }

    }

    onChange(e) {

       this.setState({
           [e.target.name]: e.target.value
        },function(){

               this.Validate();               
        });
    
   }

   getData(e){
       axios.get(GLOBAL.url+'bondtype/edit/'+this.props.match.params.id,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
        .then(response=>{
            console.log('jins');
            console.log(response.data);
            this.setState({
              id:response.data.data.id,
              amount:response.data.data.amount,
              status:response.data.data.status,
              first_prize:response.data.data.first_prize,
              second_prize:response.data.data.second_prize,
              third_prize:response.data.data.third_prize
            });
        });
   }

   onUpdate(e){
      
       //console.log(this.Validate());

       if(this.Validate())
       {
                  const data = {
                  id:this.state.id,
                  amount:this.state.amount,
                  status:this.state.status,
                  first_prize:this.state.first_prize,
                  second_prize:this.state.second_prize,
                  third_prize:this.state.third_prize
              }
              
              axios.post(GLOBAL.url+'bondtype/update',data,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
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
                                   amount_error_message: res.data.errors.amount[0]
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
       this.getData();
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
                                                            <input type="number" id="amount" name="amount" class={ this.state.amount_error ? form_style_error : form_style }  onChange={this.onChange.bind(this)} value={this.state.amount} />
                                                            <small class="form-control-feedback">{this.state.amount_error_message}</small> </div>
                                                    </div>
                                                    
                                                    <div class="col-md-6">
                                                        <div class="form-group has-success">
                                                            <label class="control-label">Status</label>
                                                            <select class="form-control custom-select" id="status" name="status" onChange={this.onChange.bind(this)}>
                                                                <option value="1" selected = { this.state.status==1 ? 'true' : '' }>Active</option>
                                                                <option value="0" selected = { this.state.status==0 ? 'true' : '' }>Inactive</option>
                                                            </select>
                                                            <small class="form-control-feedback"></small> </div>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    
                                                    <div class="col-md-6">
                                                        <div class={ this.state.first_prize_error ? div_style_error : div_style }>
                                                            <label class="control-label">First Prize</label>
                                                            <input type="number" id="first_prize" name="first_prize" class={ this.state.first_prize_error ? form_style_error : form_style } onChange={this.onChange.bind(this)} value={this.state.first_prize}/>
                                                            <small class="form-control-feedback">{this.state.first_prize_error_message}</small> </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class={ this.state.second_prize_error ? div_style_error : div_style }>
                                                            <label class="control-label">Second Prize</label>
                                                            <input type="number" id="second_prize" name="second_prize" class={ this.state.second_prize_error ? form_style_error : form_style } onChange={this.onChange.bind(this)} value={this.state.second_prize}/>
                                                            <small class="form-control-feedback">{this.state.second_prize_error_message}</small> </div>
                                                    </div>

                                                </div>

                                                <div class="row">

                                                    <div class="col-md-6">
                                                        <div class={ this.state.third_prize_error ? div_style_error : div_style }>
                                                            <label class="control-label">Third Prize</label>
                                                            <input type="number" id="third_prize" name="third_prize" class={ this.state.third_prize_error ? form_style_error : form_style } onChange={this.onChange.bind(this)}  value={this.state.third_prize}/>
                                                            <small class="form-control-feedback"> {this.state.third_prize_error_message} </small> </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="form-actions">
                                                <button type="button" onClick={this.onUpdate.bind(this)} class="btn btn-success"> <i class="fa fa-check"></i> Edit</button>
                                            </div>
                                        </form>
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
