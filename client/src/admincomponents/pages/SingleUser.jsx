import React, { Component } from 'react'
import SideBarNav from '../layout/sideNavigation'
import { userProfile, adminDeleteUser} from '../../component/apidata/api'
import {Link} from "react-router-dom"
import { Button } from 'react-bootstrap'
import Axios from 'axios'
import uservater from '../../component/asset/img/undraw_profile.svg'
// idcard pdf
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import FileSaver from "file-saver";


export default class SingleUser extends Component {
    constructor(){
        super()
        this.state={
            surname: "",
            lastname: "",
             firstname: "",
            email: "",
            education: "",
            phone: "",
               worktype: "",
                  state : "",
            gender: "",
            agegroup: "",
            confirmdel: '',
            country: "",
            id: "",
            visitId: "",
            photo: null,
            info: "",
            project: [],
          isLoading:false,
            loading: true,
            userId:"",
        }
    }
    async componentDidMount() {

        const token = JSON.parse(localStorage.getItem("admintoken"));
        const visitId = JSON.parse(localStorage.getItem("adminuserId"));
        this.setState({ visitId: visitId })
        console.log(visitId)
        if (token) {
            const data = await userProfile(this.props.match.params.id);
           const user =data.info
console.log(user)
            if (!user ) {
                alert("You have to log re-Login");
                this.props.history.push("/signin");
            } else {
             
                this.setState({
                    firstname: user.firstname,
                      surname: user.surname,
                        lastname: user.lastname,
                    email: user.email,
                    id: user._id,
                    userId:user.userId,
                    education: user.education,
                    phone: user.phone,
                    worktype: user.worktype,
                    agegroup: user.agegroup,
                    gender: user.gender,
                    country: user.country,
                      state: user.state,
                    photo: user.photo,
                    info: user.message,
                    project: user.project,
                    loading: false,
                    suspension:user.suspension
                });


            window.localStorage.setItem("surname", user.surname)
            window.localStorage.setItem("firstname", user.firstname)
            window.localStorage.setItem("id", user._id)
            window.localStorage.setItem( "imgurl", user.photo) 
            window.localStorage.setItem( "userId", user.userId) 
            window.localStorage.setItem("qr", data.qrcode)
            }
        }
        }
    async handleDeleteUser() {
        const id = this.props.match.params.id
        console.log(id)
        if (window.confirm('are you sure you want to delete')) {
           
            const deletePost = await adminDeleteUser(this.props.match.params.id)
             
            
            alert(deletePost)
            if(deletePost){
                this.props.history.push('/admin/users')
            }
        }
    }
    async SubmitSuspendUser(e) {
        e.preventDefault();

        this.setState({ isLoading: true });


        try {
            const id = this.state.id
            const suspension= {

                suspension: true,
              
            };
          await   Axios.put(`/user/suspension/${id}`, suspension)

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

    async SubmitActivateUser(e) {
        e.preventDefault();

        this.setState({ isLoading: true });


        try {
            const id = this.state.id
           
          await Axios.put(`/user/activate/${id}`)

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





    //idcard and certificate generation and print
        capitalize(str, lower = false) {
        (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
            match.toUpperCase()
        )}
    
    async generatePDF(name){
        const url ="https://res.cloudinary.com/kondipress/image/upload/v1631335826/Blackman_RevolutionCertificate_of_Membership.pdf"
        //  "https://res.cloudinary.com/oluwapelumi/image/upload/v1621148584/recipe/Certificate_of_Achievement.pdf"
        // "https://res.cloudinary.com/oluwapelumi/image/upload/v1620365168/recipe/cert-converted-converted.pdf"
            const existingPdfBytes = await fetch(url).then((res) =>
              res.arrayBuffer()
            );

            // Load a PDFDocument from the existing PDF bytes
           const pdfDoc = await PDFDocument.load(existingPdfBytes);
            pdfDoc.registerFontkit(fontkit);

            //get font
            // const fontBytes = await fetch(StandardFonts.Helvetica).then((res) =>
            //   res.arrayBuffer()
            // );

            // Embed our custom font in the document
            const SanChezFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
            console.log("Four")
            // Get the first page of the document
            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
           
            // Draw a string of text diagonally across the first page
            const { width, height } = firstPage.getSize()
            console.log(width, height)
            firstPage.drawText(name, {
              x: 285,
              y: 240,
              size: 35,
              font: SanChezFont,
              color: rgb(0.2, 0.84, 0.67),
            });
          
            // Serialize the PDFDocument to bytes (a Uint8Array)
            const pdfBytes = await pdfDoc.save();
            console.log("Done creating");
          
            // this was for creating uri and showing in iframe
          
            // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
            // document.getElementById("pdf").src = pdfDataUri;
          
            var file = new File(
              [pdfBytes],
              "Black Revolution Certificate.pdf",
              {
                type: "application/pdf;charset=utf-8",
              }
            );
            //file.save()
           FileSaver.saveAs(file);
    };

    async _submitBtnForCertificate(e) {
        e.preventDefault()
        let sname = await window.localStorage.getItem("surname")
        let fname = await window.localStorage.getItem("firstname")
        const userName = sname + " " + fname
        console.log(userName)
        //const val = this.capitalize(userName);
        //console.log(val)
        //check if the text is empty or not
        if (userName.trim() !== "") {
            this.generatePDF(userName.toUpperCase());
        } 
    }

    async embedNameForIDCard() {

    }
    async embedImageForIDCard(name, imageUrl, userId,qr) {
        const jpgUrl = imageUrl
      const qrcodeurl= qr
        const pdfUrl = "https://res.cloudinary.com/kondipress/image/upload/v1631335540/Blackman_s_member_ID.pdf"
        // "https://res.cloudinary.com/kondipress/image/upload/v1625959529/BlackRevolutionMembershipCard.pdf"
        // https://res.cloudinary.com/oluwapelumi/image/upload/v1623735016/recipe/blackRevIDCard.pdf"
        //https://res.cloudinary.com/oluwapelumi/image/upload/v1622441426/recipe/black_rev_IDCard.pdf
        // "https://res.cloudinary.com/oluwapelumi/image/upload/v1621257742/recipe/Black_and_Yellow_School_ID_Card.pdf"
        
        const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
        const qrcodeBytes = await fetch(qrcodeurl).then((res) => res.arrayBuffer())


        const existingPdfBytes = await fetch(pdfUrl).then((res) =>
            res.arrayBuffer()
        );

        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        pdfDoc.registerFontkit(fontkit);


        // Embed our custom font in the document
        const SanChezFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
        const jpgDims = jpgImage.scale(0.5)
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        // qr code insert to pdf
        const qrImage = await  pdfDoc.embedPng(qrcodeBytes)
        const qrDims = qrImage.scale(0.5);
        const qrpages = pdfDoc.getPages();
        const qrfirstPage = qrpages[1];

        console.log(jpgDims.width) //360
        console.log(jpgDims.height) // 240
        console.log(firstPage.getWidth()) // 242.87999
        console.log(firstPage.getHeight())  // 153.00000002
        // x: firstPage.getWidth() / 4 - jpgDims.width / 4 + 75,
        // y: firstPage.getHeight() / 4 - jpgDims.height + 250,
        // Draw an image diagonally across the first page
        firstPage.drawImage(jpgImage, {
            x: 5,
            y: 20,
            width: jpgDims.width / 4,
            height: jpgDims.height / 4,
        })
   
        // draw qr code
  qrfirstPage.drawImage(qrImage, {
            x: 80,
            y: 15,
            width: qrDims.width / 2,
            height: qrDims.height / 2,
        })


         
        // Draw user name diagonally across the first page
        firstPage.drawText(name, {
           x: 80,
           y: 55,
           size: 14,
           font: SanChezFont,
           color: rgb(0.2, 0.84, 0.67), 
        });

        // Draw user id diagonally across the first page
        firstPage.drawText(userId, {
            x: 100,
            y: 38,
            size: 8,
            font: SanChezFont,
            color: rgb(0, 0, 0), 
         });

        const pdfBytes = await pdfDoc.save()

        var file = new File(
            [pdfBytes],
            "Black Revolution IDCard.pdf",
            {
              type: "application/pdf;charset=utf-8",
            }
          );
          //file.save()
         FileSaver.saveAs(file);
    }

    async _BtnForIDCard(e) {
        e.preventDefault()
        let sname = await window.localStorage.getItem("surname").toLocaleUpperCase()
        let fname = await window.localStorage.getItem("firstname").toLocaleUpperCase()
        let imgurl = await window.localStorage.getItem("imgurl")
        let userId = await window.localStorage.getItem("userId").toLocaleUpperCase()
        let qr =await window.localStorage.getItem("qr")
        const userName = sname + " " + fname
        this.embedImageForIDCard(userName, imgurl, userId,qr)
    }


    render() {
        const {
            surname,firstname,lastname,
            email,
            id,
          
            phone,
            education,
            worktype,
            country,
            agegroup,
            state,
            photo,
       
            visitId,
            gender,
            userId

        } = this.state;
        return (
            <div className="flexible-content">
                <SideBarNav />
                <div id="content" className="p-2 container row">
 
   <div className="card mt-3 col-lg-6 col-md-6 col-8" >
                {/* <!-- Card image --> */}
                <div className="text-light">
                            <button className='btn btn-sm btn-danger' id="delete"  onClick={this.handleDeleteUser.bind(this)}>delete</button>
                  {/* {this.state.suspension == true ? <button className='btn btn-sm btn-success' id="delete" onClick={this.SubmitActivateUser.bind(this)}>activate {this.state.isLoading == true ? <span>...</span> : null}</button> 
                  : <button className='btn btn-sm btn-warning' onClick={this.SubmitSuspendUser.bind(this)}>suspend  {this.state.isLoading == true ? <span>...</span> : null}</button> }   */}
                </div>
                <div className="view overlay">
                  {photo == null && id === visitId ? (
                    <div className="text-center">
                      {" "}
                      <img
                        className="card-img-top circle "
                        src={uservater} alt ='user profile'/>
                      <Link
                        to={`/updateprofile/${id}`}
                        className="text-center btn btn-sm btn-primary"
                      >
                        Update profile
                      </Link>{" "}
                    </div>
                  ) : (
                    <div>
                      <img
                        className="card-img-top circle "
                        src={photo}
                        height="300" alt ='user profile'
                      />
                      <a href={`${photo}`}>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                  )}
                </div>

                {/* <!-- Card content --> */}
                <div className="card-body text-left py-0 ">
                  {/* <!-- Title --> */}
                  <h4 className="card-title text-center text-capitalize ">
                    {surname} {firstname} {lastname}
                  </h4>
                  {/* <!-- Text --> */}
                  <p className="font-italic text-center"> Worktype: {worktype}</p>
                 <p className='text-center'><strong>User Id:&nbsp;</strong> {userId}</p> 
                  <div className="card-text ">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Email:&nbsp;</strong>
                        {email}
                      </li>
                      <li className="list-group-item">
                        <strong>Phone:&nbsp;</strong>
                        {phone}
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <strong>Gender:&nbsp;</strong>
                        {gender}
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <strong>Education level:&nbsp;</strong>
                        {education}
                      </li>
                     
                      <li className="list-group-item">
                        {" "}
                        <strong>country:&nbsp;</strong>
                        {country}
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <strong>state:&nbsp;</strong>
                        {state}
                      </li>
                       <li className="list-group-item">
                        {" "}
                        <strong>agegroup:&nbsp;</strong>
                        {agegroup}
                      </li>
                      <li className="list-group m-2">
                        {" "}
                        <strong></strong>
                      </li>
                    </ul>



                    
                  </div>
                  {id === visitId ? (
                    <div>
                      <Link to={`/updateprofile/${id}`} className="text-center">
                        {" "}
                        <button className="btn btn-outline btn-sm text-primary text-center ">
                          update profile
                        </button>
                      </Link>{" "}
                     
                    </div>
                  ) : null}
        

                  
                </div>

                <div className="card-footer">
                 <Button  variant="primary" size="sm" onClick={this._submitBtnForCertificate.bind(this)} >  Download  Certificate</Button> 
                  <Button  variant="primary" size="sm"  onClick={this._BtnForIDCard.bind(this)} >  Download  Id Card</Button>
                </div>
              </div>
  
                </div>
                
            </div>
        )
    }
}
