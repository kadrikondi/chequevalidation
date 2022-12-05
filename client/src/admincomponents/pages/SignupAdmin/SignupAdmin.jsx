
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './SignupAdmin.css'

class SignupAdmin extends Component{
 constructor(){
	 super()
	 this.state={
	        name:'',
			email:'',
            password:'',
            gender:'',
            password1:'',
            info:'',
            agree:'off',
            isLoading:false
		}
     this.handleEmail = this.handleEmail.bind(this)
     this.handleName = this.handleName.bind(this)
     this.handlePassword =this.handlePassword.bind(this)
     
     this.handlePassword1= this.handlePassword1.bind(this)
     
         }
         
         handleSubmit=()=>{
            if (this.state.password !== this.state.password1) {
              this.setState({ info: `password not match` });
            }

            if (this.state.info === `password not match`) {
              this.setState({ isLoading: false });
            } else {
              this.setState({ isLoading: true });
            }
             
           fetch("/api/v1/admin/register", { 
               method:'POST',
               headers:{
                   'Accept':'application/json',
                   'Content-Type':'application/json'
               },
               body:JSON.stringify({
                   name:this.state.name,
                   email:this.state.email,
                   password:this.state.password
               })

           } )
           .then(res => res.json())
           .then((res) => {console.log(res)
            this.setState({isLoading:false})
               
               if (res.message === "created") {
                 this.props.history.push("/adminsignin");
               } else {
                 this.setState({ info: res.message });
               }
        })
           .catch(err =>{ console.log(err)
            this.setState({isLoading:false})
        })

        

         }
         handleName(e){
             this.setState({name:e.target.value})
         }
         handleEmail(e){
             this.setState({email:e.target.value})
         }
         handlePassword(e){
             this.setState({password:e.target.value})
         }
         handlePassword1(e){
            this.setState({password1:e.target.value})
        }
     
      

	 
  render(){


//     if(this.state.info===''){
//         document.getElementById('info').style.display='none'
//   }
const noshowinfo={
    display:'none'
}


    return(
        
        <div>



{/* <!--Form with header--> */}
<div className="card mt-5 bg-dark text-light" id="signup">
    <div className="card-body ">
                  
        <div  className="card-header  text-center py-2 ">
                        <a
                            className="navbar-brand mr-1" 
                            href="/"
                            style={{ fontSize: "2.2em",color: "022B69", fontWeight: "bold" }}
                        >
                            RevolutionADmin;
          </a>
            <h5><i className="fa fa-user-plus"></i> AdminRegister</h5>
             
            
        </div>

        {/* <!--Body--> */}
        <div className="md-form mt-4">
            {/* <i className="fa fa-user prefix"></i> */}
            <input type="text" id="form3" required="required" className="form-control" value={this.state.name} onChange={this.handleName}/>
            <label for="form3">
            <span className="fa fa-user"></span> Name</label>
        </div>
        <div className="md-form">
            {/* <i className="fa fa-envelope prefix"></i> */}
            <input type="text" id="form2" className="form-control" value={this.state.email} onChange={this.handleEmail} />
            <label for="form2">
            <span className="fa fa-envelope"></span> Email</label>
        </div>


       

   

        <div className="md-form">
            {/* <i class="fa fa-lock prefix"></i> */}
            <input type="password" id="form4" className="form-control" value={this.state.password} onChange={this.handlePassword}/>
            <label for="form4">
            <span className="fa fa-lock"></span> Password</label>
        </div>



        
        <div className="md-form">
            {/* <i class="fa fa-lock prefix"></i> */}
            <input type="password" id="form10" className="form-control" 
            name="password1" value={this.state.password1} onChange={this.handlePassword1}/>
            <label for="form10">
            <span className="fa fa-lock"></span> Confirm Password</label>
        </div>

       

      { this.state.info===''||this.state.info===undefined ?
    
   (<div className="alert alert-danger" style={noshowinfo} id="info">){this.state.info}</div>) :
   (<div className="alert alert-danger"id="info">{this.state.info}</div>)} 


                    
                    
                    
                    
                    
                    
 
        <div className="text-center">
  
                        <button className="btn  mdi mdi-account-plus" onClick={this.handleSubmit} style={{ backgroundColor: '#022B69', textTransform:"capitalize"}}> &nbsp;Signup  
                    <div style={{ margin: 'auto', width: '50%', }}>
                        { this.state.isLoading===true ?
                        <div className="loader" ></div>:
                        null
                    }
                    </div> 
           </button>
        
        </div>
        <p className="pt-3 text-right"> Aready a admin
      <Link to="/adminsigninlog"> Login</Link>
    </p>


    </div>
</div>


















</div>


        
	)
}
}


export default SignupAdmin