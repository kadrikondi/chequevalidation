import React, { Component } from 'react'
import SideBarNav from "../../layout/sideNavigation";
import {
    MDBRow,
    MDBCol,
    MDBView,
    MDBCard,
    MDBCardBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdbreact";
import {Col ,Row ,Card,} from "react-bootstrap"
import {Link} from 'react-router-dom'
import moment from 'moment'
import {adminGetAllBlogPost ,adminDeleteBlogPost} from '../../../components/apidata/api'
export default class AllPost extends Component {
    constructor(){
        super()
        this.state={
            allpost:[]
        }
    }
    async componentDidMount(){
const allpost =  await adminGetAllBlogPost()
 if(allpost){
     this.setState({allpost:allpost})
 }
    }
    


    async handleDeletePost() {
        if (window.confirm('are you sure you want to delete')) {
            const btnn = document.getElementById("delete");
            const pid = btnn.value
            console.log(pid)
            const deletePost = await adminDeleteBlogPost(pid)

            this.componentDidMount()
            alert(deletePost)
        }
    }




    render() {
        const {allpost}=this.state
        return (
            <div className="flexible-content">
               
                <SideBarNav/>
                <div id="content"className="p-2" >
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBCard className="mt-5">
                                <MDBView className="gradient-card-header blue d">
                                    <h4 className="h4-responsive text-white">
                                        {" "}
                   BlogPost
                    </h4>
                                </MDBView>
                                <MDBCardBody>
                                    <MDBTable
                                        striped
                                        scrollY
                                        maxHeight="400px"

                                      
                                        hover
                                        className="text-dark"
                                    >
                                        <MDBTableHead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>date</th>
                                                <th>author</th>
                                                <th>Title</th>
                                                <th>content</th>
                                                <th>image</th>
                                                <th>action</th>
                                               
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {allpost ? (
                                            allpost.map((posts, index) => {
                                                    const {
                                                        author,
                                                        _id,
                                                        date,
                                                        title,
                                                        content,
                                                        avater
                                                    }  = posts;
                                                    
                                                        return (
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{moment(date).format("DD/MM/YY")}</td>
                                                                <td>{author}</td>
                                                                <td>{title}</td>
                                                                <td> {content.substring(0, 40)}...</td>
                                                                <td><img src={avater} alt="post" style={{width:'100px',height:'100px'}}/></td>

                                                                <td><Link className='btn btn-sm btn-warning'   to={`/admin/post/edit/${_id}`} >edit</Link> <button className='btn btn-sm btn-danger' id="delete" value={_id}onClick={this.handleDeletePost.bind(this)}>delete</button></td>

                                                               
                                                            </tr>
                                                        );
                                                    
                                                })
                                            ) : (
                                                    <p>NO CASHOUT RECORDS</p>
                                                )}
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>


                </div>
            </div>
        )
    }
}
