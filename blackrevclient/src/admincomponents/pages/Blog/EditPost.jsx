import React, { Component } from "react";
import SideBarNav from "../../layout/sideNavigation";

import Axios from "axios";
import { MDBBtn } from "mdbreact";
import {adminGetSingleBlogPost } from "../../../components/apidata/api";

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      info: "",
      content: "",
      id:'',
      isLoading:false
    };
  }
  async componentDidMount() {
    
    
      const post = await adminGetSingleBlogPost(this.props.match.params.id)
      console.log(post)
      if(post){
          this.setState({
              author:post.author, title:post.title, content:post.content,id:post._id
          })
      }
  }

  async BlogTitle(e) {
    this.setState({ title: e.target.value });
   
  }
  async handleTextField(e) {
    this.setState({ content: e.target.value });
    console.log(this.state.content);
  }
  async SubmitBlogPut(e) {
    e.preventDefault();

     this.setState({ isLoading: true });
   

    try {
        const id=this.state.id
      const blog = {
      
        title: this.state.title,
        content: this.state.content,
      };
        Axios.put(`/api/v1/blog/post/update/${id}`, blog)

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
    } catch (error) {
         this.setState({ isLoading: false });
      return error.message;
    }
  }
  render() {
      const{author,title, content}= this.state
    return (
      <div className="flexible-content">
        <SideBarNav />
        <div id="content" className="container col-12 col-md-9 col-lg-9 p-2">
          {" "}
          <h2>Edit Post</h2>
          <div className="form-group">
    <p className="text-light">Author:{author}</p>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={this.BlogTitle.bind(this)}
              placeholder="post title"
            />
          </div>
          <div className="form-group">
            <textarea
              id=""
              cols="30"
              rows="10"
              className="form-control"
              value={content}
              placeholder="post content"
              onChange={this.handleTextField.bind(this)}
            >
              {" "}
            </textarea>
          </div>
          <br />
          {this.state.info !== "" ? (
            <div className="alert alert-warning">{this.state.info}</div>
          ) : null}
          <div className="form-group">
            <MDBBtn
              className="btn btn-primary"
              onClick={this.SubmitBlogPut.bind(this)}
            >
              Post &nbsp;{this.state.isLoading===true? <span>publishing..</span>:null}
            </MDBBtn>
          </div>
        </div>
      </div>
    );
  }
}
