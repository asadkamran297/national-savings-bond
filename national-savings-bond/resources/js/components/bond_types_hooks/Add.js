import React,{Component,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GLOBAL from './../global.js';
import Footer from './../Footer.js';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { withRouter } from 'react-router';

const div_style="form-group";
const div_style_error="form-group has-danger";
const form_style="form-control";
const form_style_error="form-control form-control-danger";

export default function Add(props){

    const [loading, setLoading] = useState(false);

    const [state,setState] = useState({
      amount:0,
      status:true,
      first_prize:0,
      second_prize:0,
      third_prize:0
    });

    const [errors,setErrors] = useState({
      amount:'',
      status:'',
      first_prize:'',
      second_prize:'',
      third_prize:''
    });

    const [errors_state,setErrorsState] = useState({
      amount:0,
      status:0,
      first_prize:0,
      second_prize:0,
      third_prize:0
    });

    useEffect(()=>{
        // validate();
    },[]);

    const onChange = (e)=> {
       setState({ ...state, [e.target.name]: e.target.value });
       validate();
    }

   function validate()
   {
      console.log(state);
      let obj = state;
      let object = {};

      Object.keys(obj).forEach(function(key) {
        // console.log(key, obj[key]);
        
        if(obj[key] <= 0)
           object[key] = 'The '+key+' should be greater than zero';
        else
           object[key] = '';
      });

      console.log(object);
      setErrors({ ...object  });
   }

   const onSave = (e)=>{
      
      setLoading(true);

      axios.post(GLOBAL.url+'bondtype/store',state,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
      .then(res=>{
            
            if(res.data.status)
            {
                  const { history } = props;

                  history.push({
                    pathname:'/bond/types/list',
                    state: { message: res.data.message }
                 });
            }
            else
            {
                if(res.data.errors)
                {

                }
            }
      }); 
    }



    return (
        <div class="page-wrapper">
            
            <div class="container-fluid">
                    
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-info">
                                <h4 class="m-b-0 text-white">Add Bond Types Hooks</h4>
                            </div>
                            <div class="card-body">
                                <div style={{ textAlign: 'right' }}>
                                        <Link to="/bond/types/list"><button type="button" class="btn waves-effect waves-light btn-primary">Back</button></Link>
                                </div>
                                <form action="#">
                                    <div class="form-body">
                                        <div class="row p-t-20">
                                            
                                            <div class="col-md-6">
                                                <div>
                                                    <label class="control-label">Amount</label>
                                                    <input type="number" id="amount" name="amount" onChange={onChange.bind(this)} placeholder="0"/>
                                                    <small class="form-control-feedback">{errors.amount}</small> </div>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <div class="form-group has-success">
                                                    <label class="control-label">Status</label>
                                                    <select class="form-control custom-select" id="status" name="status" onChange={onChange.bind(this)}>
                                                        <option value="1">Active</option>
                                                        <option value="0">Inactive</option>
                                                    </select>
                                                    <small class="form-control-feedback">{errors.status}</small> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            
                                            <div class="col-md-6">
                                                <div>
                                                    <label class="control-label">First Prize</label>
                                                    <input type="number" id="first_prize" name="first_prize" onChange={onChange.bind(this)} placeholder="0"/>
                                                    <small class="form-control-feedback">{errors.first_prize}</small> </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div>
                                                    <label class="control-label">Second Prize</label>
                                                    <input type="number" id="second_prize" name="second_prize" onChange={onChange.bind(this)} placeholder="0"/>
                                                    <small class="form-control-feedback">{errors.second_prize}</small> </div>
                                            </div>

                                        </div>

                                        <div class="row">

                                            <div class="col-md-6">
                                                <div>
                                                    <label class="control-label">Third Prize</label>
                                                    <input type="number" id="third_prize" name="third_prize" onChange={onChange.bind(this)} placeholder="0"/>
                                                    <small class="form-control-feedback">{errors.third_prize}</small> </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="form-actions">
                                        <button type="button" 
                                           onClick={onSave.bind(this)} 
                                           class="btn btn-success"
                                           disabled={loading}> 
                                           <i class="fa fa-check"></i> { loading ? "Loading..." : "Save"}
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
