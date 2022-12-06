import React, { Component } from 'react'
import './contact.css'
import '../../asset/loading.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {FaFacebook, FaTwitter,FaInstagram, FaYoutube,FaEnvelope} from 'react-icons/fa'
export default class ContactUs extends Component {
  constructor(){
 super()
 this.state = {
            subject: '',
        message: '',
            info: '',
            isLoading: false,
            username: '',
            userId: '',
            email:''
        }

  }

  async handleMessageUs(e) {
        e.preventDefault()
        this.setState({ isLoading: true });
        console.log( this.state.userId,
             this.state.username,
          this.state.email,
         this.state.subject,
         this.state.message)

        try {


            const messages = {
                userId: this.state.userId||'new user not login',
                username: this.state.username,
                email:this.state.email,
                subject: this.state.subject,
                message: this.state.message
            };
            axios.post(`/api/v1/contactus`, messages)

                .then(response => {
                    console.log(response)
                    this.setState({ info: response.data.message })
                    this.setState({ isLoading: false });
                    
                })
                .catch(err => {
                    this.setState({ isLoading: false });
                    this.setState({ info: err.message })
                    console.log(err)
                })
        } catch (error) {
            this.setState({ isLoading: false });
            return error.message
        }

    }

    async handleName(e) {
        this.setState({ username: e.target.value })
    }
    async handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    async handleSubject(e) {
        this.setState({ subject: e.target.value })
    }
    async handleMessageDetail(e) {
        this.setState({ message: e.target.value })

    }


    render() {
       
        return (
            <div>
            
              <section id="contact" className="contact">
        <div className="container mt-5">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-10">
              <div className="info-wrap">
                <div className="row">
                 
                  <div className="col-lg-6 info mt-4 mt-lg-0">
                    <i className="icofont-envelope" ><FaEnvelope/></i>
                    <h4>Email:</h4>
                    <p>info@theblackmanrevolution.com<br />theblackmanrevolution@gmail.com</p>
                  </div>
                  <div className="col-lg-6 info mt-4 mt-lg-0">
                    <i className="icofont-phone" />
                    <h4>Social Media:</h4>
                    <p> <Link to="#" className="twitter"><i className="bx bxl-twitter" ><FaTwitter/></i></Link>
              <a href="https://www.facebook.com/theblackmansrevolution" className="facebook"><i className="bx bxl-facebook" ><FaFacebook/></i></a>
              <Link to="#" className="instagram"><i className="bx bxl-instagram" ><FaInstagram/></i></Link>
              <a href="https://www.youtube.com/channel/UC3VEdtuSCCwRooTYT6yqciA" className="google-plus"><i className="bx bxl-skype" ><FaYoutube/></i></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center" data-aos="fade-up">
            <div className="col-lg-10">
              <div role="form" className="php-email-form">
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={this.handleName.bind(this)} required ="required" />
                    <div className="validate" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={ this.handleEmail.bind(this)} required ="required" />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" onChange={this.handleSubject.bind(this)}  required ="required" />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} onChange={this.handleMessageDetail.bind(this)} required ="required" />
                  <div className="validate" />
                </div>
                <div className="form-group">
                   {this.state.info !== '' && this.state.info !== null ? <div className="text-center alert alert-info"> {this.state.info}</div> : null}
                </div>
               
                <div className="text-center " ><button className="btn btn-lg " style={{backgroundColor:'#095a24', color:'#fff'}} onClick={this.handleMessageUs.bind(this)}> &nbsp; Send Message{this.state.isLoading === true ? (

                          <span className="lds-ellipsis">..<span></span><span></span><span></span> </span>
                          ):null}</button></div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Contact Section */}
            </div>
        )
    }
}
