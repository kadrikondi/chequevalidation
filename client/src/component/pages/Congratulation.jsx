import React, { Component } from 'react'
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import FileSaver from "file-saver";
import {Link} from "react-router-dom"
// import { FaWindowRestore } from 'react-icons/fa';


export default class Congratulation extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            imag:"",
            fname:"",
            surname:""
        }
    }
 async componentDidMount(){
   let qr =   await localStorage.getItem("qr")
   let username=await localStorage.getItem("firstname").toLocaleUpperCase()
  let sname = await localStorage.getItem("surname").toLocaleUpperCase()
   this.setState({imag:qr, fname:username, surname:sname})
  }
    capitalize(str, lower = false) {
        (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
            match.toUpperCase()
        )}
    
    async generatePDF(name){
        const url ="https://res.cloudinary.com/kondipress/image/upload/v1631335826/Blackman_RevolutionCertificate_of_Membership.pdf"
        //"https://res.cloudinary.com/oluwapelumi/image/upload/v1621569930/recipe/Certificate_of_membership.pdf"
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
        //"https://res.cloudinary.com/kondipress/image/upload/v1626008946/IDCardFor_MemberOfVanguardsForThe_Revolution.pdf"
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
        const hstyle={
            color:'blue',
            lineHeight:1,
            fontStyle:'bold',

            btndownload:{
                backgroundColor:'blue'

            },
            btnmainweb:{
                fontFamily:'roboto ,san serif',
                fontWeight:500,

            },
            congrats:{
                fontStyle:'bold',
                fontFamily:'roboto'
            }
        }
        return (
            <div>
                <div className="container mt-5 mb-2 text-center">               <div className="card p-3">
                     {/* <button classNam="btn btn-primary">Register new person</button> */}
                     <h2 style={hstyle.congrats}> Congratulation! Congratulation!! Congratulation!!! </h2>  

                     <p className="alert alert-success">{this.state.surname}&nbsp;{this.state.fname}</p>
                          <h5 style={hstyle} className="mt-3">
                       You have successfully Joined The Blackman's Revolution!!!
                         </h5>

                    <br></br> <p>Click button below to download your certificate and ID Card </p>
                 

          <div className=" card mt-3 " >
              <div className=" lg-6">
                   <button style={hstyle.btndownload} className="btn btn-success" onClick={this._submitBtnForCertificate.bind(this)}> Download Your Certificate</button>
                   </div>
                   <div className=" lg-6 mt-2">
                   <button style={hstyle.btndownload} className="btn btn-success" onClick={this._BtnForIDCard.bind(this)}> Download Your ID Card</button>
                   </div>


                   
</div>        
<div className="text-center">  
{/* <p> Qr Code</p>    */}
          {/* <img src={this.state.imag} alt="" style={{width:'250px' ,height:"250px"}} /> */}
          </div>
               <div className="mt-5">
                  <Link to="/" style={hstyle.btnmainweb} className="mt-5 pr-2 btn btn-outline no-shadow "> Home</Link>
                   <Link to="/join" className="mt-5 btn btn-outline" style={hstyle.btnmainweb}>Register New Person</Link>
                  </div>
                   </div> 
</div>
            </div>
        )
    }
}
