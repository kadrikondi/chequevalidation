import React, { Component } from 'react';
import './SigninAdmin.css'
// import '../../assets/mdb/css/style.css'
import Useloader from '../../../component/asset/useloader'

import {Link, Redirect} from 'react-router-dom';


class SignInPageAdmin extends Component{

  constructor(){
    super()
    this.state={
       email:'',
       password:'',
       isLoading:false,
       info:'',
       error:false,
       token:false
       
     }
  
      this.handleEmail = this.handleEmail.bind(this)
      this.handlePassword =this.handlePassword.bind(this)
          }
          //    with axios u dont need headers and res.json bt its needed for fetch
          handleSubmit=(e)=>{
            e.preventDefault()
            this.setState({isLoading:true})
            fetch("/api/v1/admin/login", { 
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                
                    email:this.state.email,
                    password:this.state.password
                })
            } )
            .then(res => res.json())
            .then(res =>{       
              console.log(res)
            this.setState({isLoading:false})
            this.setState({info:res.message})
            
              if(res.code === 'OK'){
                window.localStorage.setItem('adminuserId', JSON.stringify(res.id))
                window.localStorage.setItem('admintoken', JSON.stringify(res.token)) 
                this.setState({token:true})
                this.props.history.push("/admindashboard");
               
                
              }
              
            } )
            .catch(err => {console.log(err)
              this.setState({isLoading:false})
            })
 
          
 
          }
         
          handleEmail(e){
              this.setState({email:e.target.value})
          }
          handlePassword(e){
              this.setState({password:e.target.value})
          }
 
  


render(){
  if(!this.state.token){
    return(
      <div>




        {/* /login */}


        {/* <!-- Material form login --> */}
       <div className="card mt-5 bg-dark text-light" id="signin">
          <div className="card-header text-center">
          <a
            className="navbar-brand mr-1 "
            href="/"
            style={{ fontSize: "2.2em", color: "#022B69", fontWeight: "bold" }}
          >
          RevolutionAdmin
          </a>
          
          <h5 className=" dark-text text-center py-2">
            
            <strong className="mdi mdi-account-key">Admin Sign-in</strong><br/>
           
          </h5>
        </div>
          {/* <!--Card content--> */}
          <div className="card-body px-lg-5 pt-0">

            {/* <!-- Form --> */}
            <div className="text-center" style={{ color: '#757575' }}>

              {/* <!-- Email --> */}
              <div className="md-form mt-5" >
                <input type="email" id="materialLoginFormEmail" className="form-control text-white" value={this.state.email} onChange={this.handleEmail} />
                <label htmlFor="materialLoginFormEmail" className="fa fa-envelope text-white"> Email</label>
              </div>

              {/* <!-- Password --> */}
              <div className="md-form mt-2 text-white">
                <input type="password" id="materialLoginFormPassword" className="form-control text-white" value={this.state.password} onChange={this.handlePassword} />
                <label htmlFor="materialLoginFormPassword" className="fa fa-lock text-white"> Password</label>
              </div>
              {this.state.info === '' || this.state.info === undefined ?
                (<p className="alert alert-warning" style={{ display: 'none' }}>{this.state.info}</p>) : (<p className="alert alert-danger">{this.state.info}</p>)}
              {this.state.isLoading===true ? <Useloader/>:<div></div>}
  

              {/* <!-- Sign in button --> */}
              <button id="loginbtn" className="btn btn-outline-blue btn-rounded btn-block my-4 waves-effect z-depth-0 mt-5 mdi mdi-account-check" type="submit" onClick={this.handleSubmit}> Sign in
          
</button>

              {/* <!-- Register --> */}
              <p>Not a member?
      <Link to="/adminblackmans"> Register</Link>
              </p>


            </div>
            {/* <!-- Form --> */}

          </div>

        </div>
        {/* <!-- Material form login --> */}



      </div>
    )
  }
  else{
    return <Redirect to='/dashboard'/>
  }
  // if(this.state.isLoading){
  //       return(<Loader/>)
  // }

  // return(






  // )








}



}


export default SignInPageAdmin