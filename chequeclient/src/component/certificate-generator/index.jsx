import React, { Component } from 'react'
import { PDFDocument, rgb, degrees, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import FileSaver from "file-saver";

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    capitalize(str, lower = false) {
        (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
            match.toUpperCase()
        )}
    
    async generatePDF(name) {
        const url = "https://res.cloudinary.com/oluwapelumi/image/upload/v1620365168/recipe/cert-converted-converted.pdf"
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
              x: 300,
              y: 270,
              size: 58,
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

    _submitBtn(e) {
        e.preventDefault()
        const userName = document.getElementById("name").value;
        console.log(this.state.name)
        console.log(userName)
        //const val = this.capitalize(userName);
        //console.log(val)
        //check if the text is empty or not
        if (userName.trim() !== "") {
            this.generatePDF(userName);
         } 
    }

    setName(e) {
        this.setState({name: e.target.value})
    }
    render() {
        return (
            <div>
                <h4>Get your certificate here</h4>
                <main>
                    <label for="name">Type Your Name</label>
                    <input required type="text" name="Name" autocomplete="name" placeholder="John Doe" id="name" minlength="3" maxlength="16" value={this.state.name} onChange={this.setName.bind(this)}/>
                    <button id="submitBtn" onClick={this._submitBtn.bind(this)}> Get Certificate</button>
                </main>
            </div>
        )
    }
}
