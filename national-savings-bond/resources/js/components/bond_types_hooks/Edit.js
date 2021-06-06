import React,{Component,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GLOBAL from './../global.js';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Footer from './../Footer.js';

const div_style="form-group";
const div_style_error="form-group has-danger";
const form_style="form-control";
const form_style_error="form-control form-control-danger";

export default function Edit(props){

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
        getData();
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
      
      // console.log(object);
      setErrors({ ...object  });
   }

   const getData = (e) =>{
       axios.get(GLOBAL.url+'bondtype/edit/'+props.match.params.id,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
        .then(response=>{
            // console.log(response.data);
            setState({
              id:response.data.data.id,
              amount:response.data.data.amount,
              status:response.data.data.status,
              first_prize:response.data.data.first_prize,
              second_prize:response.data.data.second_prize,
              third_prize:response.data.data.third_prize
            });

            console.log(state);
        });
   }

   const onUpdate = (e)=>{

      console.log(state)
                    
      axios.patch(GLOBAL.url+'bondtype/update',state,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
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
                    // setState({
                    //        amount_error: 1,
                    //        amount_error_message: res.data.errors.amount[0]
                    //  });
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
                                                <div class={ state.amount_error ? div_style_error : div_style }>
                                                    <label class="control-label">Amount</label>
                                                    <input type="number" id="amount" name="amount" class={ state.amount_error ? form_style_error : form_style }  onChange={onChange} value={state.amount} />
                                                    <small class="form-control-feedback">{state.amount_error_message}</small> </div>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <div class="form-group has-success">
                                                    <label class="control-label">Status</label>
                                                    <select class="form-control custom-select" id="status" name="status" onChange={onChange}>
                                                        <option value="1" >Active</option>
                                                        <option value="0" >Inactive</option>
                                                    </select>
                                                    <small class="form-control-feedback"></small> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            
                                            <div class="col-md-6">
                                                <div class={ state.first_prize_error ? div_style_error : div_style }>
                                                    <label class="control-label">First Prize</label>
                                                    <input type="number" id="first_prize" name="first_prize" class={ state.first_prize_error ? form_style_error : form_style } onChange={onChange} value={state.first_prize}/>
                                                    <small class="form-control-feedback">{state.first_prize_error_message}</small> </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class={ state.second_prize_error ? div_style_error : div_style }>
                                                    <label class="control-label">Second Prize</label>
                                                    <input type="number" id="second_prize" name="second_prize" class={ state.second_prize_error ? form_style_error : form_style } onChange={onChange} value={state.second_prize}/>
                                                    <small class="form-control-feedback">{state.second_prize_error_message}</small> </div>
                                            </div>

                                        </div>

                                        <div class="row">

                                            <div class="col-md-6">
                                                <div class={ state.third_prize_error ? div_style_error : div_style }>
                                                    <label class="control-label">Third Prize</label>
                                                    <input type="number" id="third_prize" name="third_prize" class={ state.third_prize_error ? form_style_error : form_style } onChange={onChange}  value={state.third_prize}/>
                                                    <small class="form-control-feedback"> {state.third_prize_error_message} </small> </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="form-actions">
                                        <button type="button" onClick={onUpdate} class="btn btn-success"> <i class="fa fa-check"></i> Edit</button>
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
