import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FlashMassage from 'react-flash-message'
import axios from 'axios';
import swal from 'sweetalert';
import Footer from './../Footer.js';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import GLOBAL from './../global.js';
import { Button,Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class List extends Component {

    constructor(props){
        super(props);
        
        this.state={
            data:[],
            pages:[],
            message:'',
            button:'Add',
            start_date:new Date()
        }
        console.log(this.state.start_date);

    }

    componentDidMount(){

    }

    goBack(){
        this.props.history.goBack();  
    }

    add(){

        /*this.state.data.push({
            bondtype:'1',
            serial_no:'1001',
            start_date:'2020-02-22'
        });*/

        this.setState({
               data: this.state.data.concat({
                bondtype:'1',
                serial_no:'1001',
                start_date:new Date()
            })
        },function(){
              console.log(this.state.data)
              console.log(this.state.data[0].serial_no)

              /*var stateCopy = this.state.data;
              console.log(stateCopy)
              stateCopy[0].serial_no = "4000";
              this.setState({
                data:stateCopy
              },function(){
                  console.log(this.state.data)
              });*/

              //console.log(stateCopy[0])
        })

        
        //stateCopy.items[0].= 1;
        //this.setState(stateCopy);



        /*this.setState({
               data: this.state.data.concat({
                bondtype:'1',
                serial_no:'1001',
                start_date:'2020-02-22'
            })
        },function(){
              console.log(this.state.data)
        })*/

    }

    remove(id){

         var stateCopy = this.state.data;
         console.log(stateCopy)
         stateCopy.splice(id, 1);

          this.setState({
            data:stateCopy
          },function(){
              console.log(this.state.data)
          });
          
    }

    onChange(i,e) {
      
        //alert(e.target.name);

        var stateCopy = this.state.data;
        console.log(stateCopy)
        stateCopy[i][e.target.name] = e.target.value;
        this.setState({
          data:stateCopy
        },function(){
            console.log(this.state.data)
        });

    
   }

   ondateChange(i,date) {
      
        alert(date);

        var stateCopy = this.state.data;
        console.log(stateCopy)
        stateCopy[i]['start_date'] = date;
        this.setState({
          data:stateCopy
        },function(){
            console.log(this.state.data)
        });

    
   }

   onSave(e){

          
      
          //alert($('.text-danger').length);
          axios.post(GLOBAL.url+'bond/store',this.state.data,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
          .then(res=>{
                
                if(res.data.status)
                {
                     
                }
                else
                {
                    //console.log(Object.values(res.data.errors)[0][0])
                    $('.serial_no_info').each(function(index,item){

                          try {
                            $(this).text(Object.values(res.data.errors)[index][0].replace(index+'.',''))
                          }
                          catch(err) {
                          } 
                          //alert($(this).text('none man'));
                    })
                }
          }); 

    }



    render(){
            return (
                
                 <div class="page-wrapper">
            
                        <div class="container-fluid">

                            <div class="row">
                                
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">

                                            <h4 class="card-title">Bond Types</h4>
                                            <h6 class="card-subtitle">This is the listing for Bond types</h6>
                                            <div style={{ textAlign: 'right' }}>
                                                <button type="button" onClick={ this.add.bind(this) } class="btn waves-effect waves-light btn-primary">{this.state.button}</button>
                                                <button type="button" onClick={ this.onSave.bind(this) } class="btn waves-effect waves-light btn-primary">Save</button>
                                            </div>

                                            {
                                                this.state.message !='' ? (
                                                    <FlashMassage duration={2000}>
                                                        <div class="alert alert-success">{this.state.message}</div>
                                                    </FlashMassage>
                                                 ):'' 
                                            }
                                            <br/>
                                            <DatePicker selected={this.state.start_date}/>
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Bond Type</th>
                                                            <th>Serial No.</th>
                                                            <th>Start Date</th>
                                                            <th class="text-nowrap">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                              {
                                                                this.state.data.map((value,i)=>{

                                                                  return(

                                                                        <tr>
                                                                            <td>{value.bondtype}</td>
                                                                            <td>
                                                                               <input type="number" id="serial_no" name="serial_no" value={this.state.data[i].serial_no} onChange={this.onChange.bind(this,i)}/>
                                                                               <small className="text-danger serial_no_info">
                                                                                  Must be 8-20 characters long.
                                                                                </small>    
                                                                            </td>
                                                                            <td>
                                                                               <DatePicker selected={this.state.data[i].start_date} onChange={this.ondateChange.bind(this,i)}/>
                                                                            </td>
                                                                            <td>
                                                                               <a href="javascript:;" onClick={ this.remove.bind(this,i) } data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
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
                                                        this.state.pages.map((value,i)=>{

                                                           return(
                                                              <button type="button" class="btn btn-secondary" onClick={ this.fetch_data.bind(this,++i) }>{ i++ }</button>
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

                        <Footer name="Jeem" />

                    </div>

            );
   }
}
