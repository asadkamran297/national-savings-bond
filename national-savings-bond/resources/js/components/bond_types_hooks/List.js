import React,{Component,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import FlashMassage from 'react-flash-message'
import axios from 'axios';
import swal from 'sweetalert';
import Footer from './../Footer.js';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import GLOBAL from './../global.js';
import { Button,Modal } from 'react-bootstrap';


export default function List(){

            const [bonds, setData] = useState([]);
            const [pages, setPage] = useState([]);

            useEffect(()=>{
                fetch_data();               
            },[]);

            const fetch_data = (page=1)=>{
               axios.get(GLOBAL.url+'bondtype/list/'+page,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
                .then(response=>{
                    console.log(response.data.data);
                    setData(response.data.data);
                    setPage(response.data.total_pages);     
                });
            }

            const onDelete = (id)=>{

                swal({
                    title: "Are you sure?",
                    text: "Are you sure you want to delete this Record",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                          
                            axios.delete(GLOBAL.url+'bondtype/delete/'+id,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
                            .then(res=>{
                                  console.log(res.data);
                                  if(res.data.status)
                                      fetch_data();
                            });
                    } 
                });      
          }
            
            console.log(bonds);
    
            return (

                   <div class="page-wrapper">
              
                          <div class="container-fluid">

                              <div class="row">
                                  
                                  <div class="col-12">
                                      <div class="card">
                                          <div class="card-body">
                                              <h4 class="card-title">Bond Types Hook</h4>
                                              <h6 class="card-subtitle">This is the listing for Bond types</h6>
                                              <div style={{ textAlign: 'right' }}>
                                                  <Link to="/bond/add"><button type="button" class="btn waves-effect waves-light btn-primary">Add</button></Link>
                                              </div>

                                              <br/>

                                              <div class="table-responsive">
                                                  <table class="table table-bordered">
                                                      <thead>
                                                          <tr>
                                                              <th>Amount</th>
                                                              <th>First Prize</th>
                                                              <th>Second Prize</th>
                                                              <th>Third Prize</th>
                                                              <th class="text-nowrap">Action</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          
                                                          {
                                                                bonds.map((value,i)=>{

                                                                  return(

                                                                        <tr>
                                                                            <td>{value.amount}</td>
                                                                            <td>{value.first_prize}</td>
                                                                            <td>{value.second_prize}</td>
                                                                            <td>{value.third_prize}</td>
                                                                            <td class="text-nowrap">
                                                                                <Link to={`/bond/edit/${value.id}`} > <i class="fa fa-pencil text-inverse m-r-10"></i> </Link>
                                                                                <a href="javascript:;" onClick={ onDelete.bind(this,value.id) } data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
                                                                            </td>
                                                                        </tr>

                                                                    )
                                                                })
                                                            }
                                                            
                                                      </tbody>
                                                  </table>
                                              </div>
                                              
                                              <div style={{ textAlign: "center" }} >
                                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" >
                                                  <div class="btn-group mr-2" role="group" aria-label="First group">
                                                     {
                                                        pages.map((value,i)=>{

                                                           return(
                                                              <button type="button" class="btn btn-secondary" onClick={ fetch_data.bind(this,++i) }>{ i++ }</button>
                                                           )
                                                        })
                                                     }
                                                      
                                                  </div>
                                                </div>
                                            </div>

                                          </div>
                                      </div>
                                  </div>

                              </div>
                                  
                              
                          </div>


                      </div>
            );
}
