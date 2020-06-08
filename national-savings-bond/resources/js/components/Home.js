import React,{Component,Fragment} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'; 
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import Login from "./auth/Login";
import doSomething from "./helper/functions";
import GLOBAL from './global.js';


export default class Home extends Component{


	constructor(props){
        super(props);
        
    }

    componentDidMount(){

    	

        //console.log(this.props.location.state.detail);
        console.log(localStorage.getItem("lastname"));
        console.log(localStorage.hasOwnProperty("lastnam"))
        console.log(this.props.location);


        if(this.props.location.state != undefined)
        {
        	  const { history } = this.props;

		      history.push({
		        pathname:'/',
		     });
        }

        console.log('beer');
        doSomething();
        console.log(GLOBAL.token);
    }

	

	   render(){
            
	   	return(
            
                 <html>

					<head>

					    <meta charset="utf-8"/>
					    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
					    <meta name="viewport" content="width=device-width, initial-scale=1"/>
					    <meta name="description" content=""/>
					    <meta name="author" content=""/>
					    <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon.png"/>
					    <title>{ GLOBAL.screen1 }</title>
					    <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
					    <link href="../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet"/>
					    <link href="../assets/plugins/chartist-js/dist/chartist.min.css" rel="stylesheet"/>
					    <link href="../assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css" rel="stylesheet"/>
					    <link href="../assets/plugins/switchery/dist/switchery.min.css" rel="stylesheet" />
					    <link href="../assets/plugins/c3-master/c3.min.css" rel="stylesheet"/>
					    <link href="../css/style.css" rel="stylesheet"/>
					    <link href="../css/pages/dashboard2.css" rel="stylesheet"/>
					    <link href="../css/colors/default-dark.css" id="theme" rel="stylesheet"/>
					    <link href="../assets/plugins/sweetalert/sweetalert.css" rel="stylesheet" type="text/css"/>
					    <link href="../assets/plugins/bootstrap-tagsinput/dist/bootstrap-tagsinput.css" rel="stylesheet" />
					    <link href="../assets/plugins/dropify/dist/css/dropify.min.css" rel="stylesheet" />
					    <link href="../assets/plugins/Magnific-Popup-master/dist/magnific-popup.css" rel="stylesheet"/>
					    <link href="../css/pages/user-card.css" rel="stylesheet"/>

					    
					</head>

					<body class="fix-header fix-sidebar card-no-border">

					    <div id="main-wrapper">
					        
					        {/*===========Injecting history into nested or child components==========*/}

					        <TopNavbar history={this.props.history} />
                            <Sidebar/>
					        
					    </div>


					    
					    <script src="../assets/plugins/jquery/jquery.min.js"></script>
					    <script src="../assets/plugins/bootstrap/js/popper.min.js"></script>
					    <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
					    <script src="../js/perfect-scrollbar.jquery.min.js"></script>
					    <script src="../js/waves.js"></script>
					    <script src="../js/sidebarmenu.js"></script>
					    <script src="../js/custom.min.js"></script>

					    <script src="../assets/plugins/sweetalert/sweetalert.min.js"></script>
					    <script src="../assets/plugins/sweetalert/jquery.sweet-alert.custom.js"></script>

					    <script src="../assets/plugins/chartist-js/dist/chartist.min.js"></script>
					    <script src="../assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js"></script>
					    <script src="../assets/plugins/d3/d3.min.js"></script>
					    <script src="../assets/plugins/c3-master/c3.min.js"></script>
					    <script src="../assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>
					    <script src="../assets/plugins/sparkline/jquery.sparkline.min.js"></script>
					    <script src="../js/dashboard3.js"></script>
					    <script src="../assets/plugins/datatables/jquery.dataTables.min.js"></script>
					    <script src="../assets/plugins/switchery/dist/switchery.min.js"></script>

					    <script src="../assets/plugins/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"></script>
					    <script src="../assets/plugins/styleswitcher/jQuery.style.switcher.js"></script>
					    <script src="../assets/plugins/dropify/dist/js/dropify.min.js"></script>

					    <script src="../assets/plugins/Magnific-Popup-master/dist/jquery.magnific-popup.min.js"></script>
					    <script src="../assets/plugins/Magnific-Popup-master/dist/jquery.magnific-popup-init.js"></script>
					    <script src="../assets/plugins/tinymce/tinymce.min.js"></script>
					    

					</body>

			 </html>

	     );

	  }

	
	
}

