import React, { Component } from "react";
import SideBarNav from "../../layout/sideNavigation";

import Axios from "axios";
import { MDBBtn } from "mdbreact";
import { AdminData } from '../../../components/apidata/api'




export default class CreatePost extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
     
      author: "",
      title: "",
      info: "",
      content: "",
      isLoading:false,
      file:''
    };
  }
  async componentDidMount() {
    const id = await JSON.parse(localStorage.getItem("adminuserId"));
    const token = JSON.parse(localStorage.getItem("admintoken"));
    if (token) {
      const admin = await AdminData(id);
      console.log("res " + admin.name);
      if (admin) {
        this.setState({
          author: admin.name,
        });
        console.log("ok" + this.state.author);
      }
    }
  }
 
  async BlogTitle(e) {
    this.setState({ title: e.target.value });
    console.log(this.state.title);
  }
  async handleTextField(e){
    this.setState({ content: e.target.value });
    console.log(this.state.content);
  }
  async handleFile(e) {

    this.setState({
      file: e.target.files[0]})
    }
  async SubmitBlogPost(e) {
    e.preventDefault();

    

     try {
       this.setState({ isLoading: true });
       const blog = new FormData();
    blog.append("author", this.state.author);
       blog.append("title", this.state.title);
       blog.append("content", this.state.content);
       blog.append("avatar", this.state.file);
     ;
       Axios.post(`/api/v1/blog/new`, blog)

      .then((response) => {
        console.log(response);
        this.setState({ info: response.data.message });
           this.setState({ isLoading: false });
           this.componentDidMount()
      })
      .catch((err) => {
           this.setState({ isLoading: false });
        this.setState({ info: err.message });
        console.log(err);
      });
     }
     catch (error) {
       this.setState({ isLoading: false });
       return error.message;
     }
  }
  render() {
    return (
      <div className="flexible-content">
        <SideBarNav />
        <div id="content" className="container col-12 col-md-9 col-lg-9 p-2">
          {" "} <h3 className='text-light '>Blog Post</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={this.BlogTitle.bind(this)}
              placeholder="post title"
            />
          </div><div className="form-group">
          <textarea id="" cols="30" rows="10" className ="form-control"onChange={this.handleTextField.bind(this)} > </textarea>
          </div>
          <div className="form-group">
            <p className='text-light'>Feature image</p>
         <input type="file"onChange={this.handleFile.bind(this)} className="form-control" />
          </div>
          <br />
          {this.state.info !== "" ? (
            <div className="alert alert-warning">{this.state.info}</div>
          ) : null}

          <div className="form-group">
            <MDBBtn
              className="btn btn-primary"
              onClick={this.SubmitBlogPost.bind(this)}
            >
            Post {this.state.isLoading===true? <span>....</span>:null}
            </MDBBtn>
          </div>
        </div>
      </div>
    );
  }
}
