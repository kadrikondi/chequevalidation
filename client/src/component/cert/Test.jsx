import React, { Component } from 'react'

import Resizer from "react-image-file-resizer";
export default class Test extends Component {
  constructor(){
       super();
 this.state = {
     photo:'',
     img:''

 }
  }


resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      480,
      638,
      "JPEG",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  onChange = async (event) => {
    const file = event.target.files[0];
    const image = await this.resizeFile(file);
    this.setState({img:image})
    console.log(image);
  };
  




     async handleFile(e) {
    
    this.setState({ photo: e.target.files[0], fileSize: (e.target.files[0].size / 1024 / 1024).toFixed(2) });
    let file = e.target;
    if (/\.(heic|jpeg|jpg|png|)$/i.test(file.files[0].name) === false) {
     await  this.setState({filesupport:"file type not supported"});
    
    }else{
      await this.setState({ filesupport: "file type supported" });

    }
    
    
  }

    render() {
     
        return (
            <div className="container">
                <div className="form-group">
                <input
                    id="file"
                      type="file"
                      // accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
                      className="form-control"
                      onChange={this.handleFile.bind(this)}
                    />
                    </div>


     <input onChange={this.onChange} type="file" />


                    <img src={this.state.photo} alt='user'/>
                      <img src={this.state.img} alt='tt'/>
                     
            </div>
        )
    }
}
