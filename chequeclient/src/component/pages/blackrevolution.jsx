import React, { Component } from "react";
import axios from "axios";
import Countries from "./africans.json";
import SimpleReactValidator from "simple-react-validator";
import Resizer from "react-image-file-resizer";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { allUsers } from "../apidata/api";

// import '../../component/asset/loading.css'
import "../asset/loading.css";
// import textToImage from 'text-to-image';

class BlackRevRegistration extends Component {
  constructor(props) {
    super();
    this.state = {
      surname: "",
      firstname: "",
      middlename: "",
      agree: "off",
      email: "",
      worktype: "",
      agegroup: "",
      phone: "",
      photo: "",
      filesupport: "",
      id: "",
      fileSize: "",
      notif: "",
      isLoading: false,
      error: false,
      info: "",
      gender: "",
      education: "",
      Countriess: [],
      country: "",
      region: "",

      shortcode: "",
      allusers: [],
    };
    this.validator = new SimpleReactValidator();
    this.handleSurname = this.handleSurname.bind(this);
    // this.handleCountries = this.handleCountries.bind(this);
    this.handleMiddleName = this.handleMiddleName.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleAgreed = this.handleAgreed.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAgeGroup = this.handleAgeGroup.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    this.handleWorkType = this.handleWorkType.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleGender = this.handleGender.bind(this);
    // this.handleState= this.handleState.bind(this)
  }

  async componentWillMount() {
    const allusers = await allUsers();

    this.setState({ allusers: allusers });
  }

  async componentDidMount() {
    // let schools = await NGSchool;

    let Country = await Countries;

    this.setState({ Countriess: Country });

    // console.log(typeof this.state.institutions )
  }
  //   handledata=()=>{
  // let gud= this.state.country.substr(0, 2)
  // console.log(gud)

  //   }
  // componentWillMount() {
  //   const id = localStorage.getItem("userId");
  //   this.setState({ id: id });
  // }

  handleSubmit = () => {
    //  this.setState({ isLoading: true });

    this.setState({ isLoading: true });
    if (this.validator.allValid()) {
      if (this.state.agree === "off") {
        this.setState({
          info: "Click the CheckBox Beside Your Name  to Agreed",
          isLoading: false,
        });
      } else if (
        this.state.filesupport === "file type not supported" ||
        this.state.fileSize > 3
      ) {
        this.setState({
          info: "Image not supported or image size exceed 3mb ",
          isLoading: false,
        });
      } else if (this.state.photo === "" || this.state.photo === undefined) {
        this.setState({ info: "Select photo" });
      } else {
        // alert('You submitted the form and stuff!');

        const formdata = new FormData();
        formdata.append("photo", this.state.photo);

        formdata.append("surname", this.state.surname);
        formdata.append("firstname", this.state.firstname);
        formdata.append("lastname", this.state.middlename);
        formdata.append("education", this.state.education);
        formdata.append("country", this.state.country);
        formdata.append("agegroup", this.state.agegroup);
        formdata.append("email", this.state.email);
        formdata.append("phone", this.state.phone);
        formdata.append("worktype", this.state.worktype);
        formdata.append("gender", this.state.gender);
        formdata.append("state", this.state.region);

        axios
          .post(`/api/v1/user/register`, formdata)
          .then((response) => {
            this.setState({ isLoading: false });
            console.log(response.data);
            this.setState({ info: response.data.message });
            if (response.data.message === "success") {
              window.localStorage.setItem("surname", this.state.surname);
              window.localStorage.setItem("firstname", this.state.firstname);
              window.localStorage.setItem("id", response.data.info._id);
              window.localStorage.setItem("imgurl", response.data.info.photo);
              window.localStorage.setItem("userId", response.data.info.userId);
              window.localStorage.setItem("qr", response.data.qrcode);
              this.setState({ info: response.data.message });
              alert(`New Check Generated Click and Download`);
              setTimeout(() => {
                this.props.history.push("/congrats");
              }, 1000);
            }
            console.log(response);
          })

          .catch((err) => {
            this.setState({ info: err.message });
            console.log(err);

            this.setState({
              isLoading: false,
              info: err,
            });
          });
      }
    } else {
      this.validator.showMessages();
      this.setState({ isLoading: false });
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  };

  async handleSurname(e) {
    this.setState({ surname: e.target.value });
  }
  // async handleCountries(e) {
  //   this.setState({country: e.target.value });
  //    console.log(this.state.country, e.target.value)
  // }

  handleAgreed(e) {
    this.setState({ agree: e.target.value });
  }

  // handleSchool(e) {
  //   this.setState({ school: e.target.value });
  // }
  handleMiddleName(e) {
    this.setState({ middlename: e.target.value });
  }
  handleFirstName(e) {
    this.setState({ firstname: e.target.value });
  }
  async handlePhone(e) {
    this.setState({ phone: e.target.value });
  }
  async handleGender(e) {
    this.setState({ gender: e.target.value });
    // console.log(this.state.gender, e.target.value)
  }
  async handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  async handleEducation(e) {
    this.setState({ education: e.target.value });
  }
  async handleWorkType(e) {
    this.setState({ worktype: e.target.value });
  }
  async handleAgeGroup(e) {
    this.setState({ agegroup: e.target.value });
  }

  async handleFile(e) {
    this.setState({
      photo: e.target.files[0],
      fileSize: (e.target.files[0].size / 1024 / 1024).toFixed(2),
    });
    let file = e.target;
    if (/\.(heic|jpeg|jpg|bmp|png|)$/i.test(file.files[0].name) === false) {
      await this.setState({ filesupport: "file type not supported" });
    } else {
      await this.setState({ filesupport: "file type supported" });
    }
  }

  selectCountry(val) {
    this.setState({ country: val, shortcode: val.substr(0, 2).toLowerCase() });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  // imgage resize

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

  onChangehandleImgResize = async (event) => {
    const file = event.target.files[0];
    const image = await this.resizeFile(file);

    let fileimg = event.target;
    if (/\.(heic|jpeg|jpg|bmp|png|)$/i.test(fileimg.files[0].name) === false) {
      await this.setState({ filesupport: "file type not supported" });
    } else {
      await this.setState({ filesupport: "file type supported" });

      // change the image back to file

      this.setState({
        photo: image,
        fileSize: (event.target.files[0].size / 1024 / 1024).toFixed(2),
      });
    }
  };

  render() {
    const {
      surname,
      middlename,
      firstname,
      country,
      phone,
      email,
      eduacation,
      region,
      fileSize,
      filesupport,
      allusers,
    } = this.state;

    if (this.state.error) {
      return <h1>Something went wrong, please try again.</h1>;
    }
    return (
      <div>
        {/* <UserHeader/> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-5 d-flex flex-column justify-content-start"></div>
            <div className="col-lg-6 col-sm-8 col-md-6 mt-5  needs-validation">
              {/* <!--Form with header--> */}
              <div className="card    mt-3" id="addprojec">
                {/* <!--Header--> */}
                <div className="card-header   text-center ">
                  <h3>
                    <i className="mdi mdi-note-plus py-4" />
                    Cheques Generator
                  </h3>
                </div>

                {this.state.notif === "empty field" ? (
                  <div className="alert alert-danger">{this.state.notif}</div>
                ) : (
                  <div
                    className="alert alert-danger"
                    style={{ display: "none" }}
                  >
                    {this.state.notif}
                  </div>
                )}

                <div className="card-body  pt-0  ">
                  {/* <!--Body--> */}
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      id="form3"
                      name="topic"
                      className="form-control"
                      value={surname}
                      onChange={this.handleSurname}
                      placeholder="Surname"
                      required
                    />
                    <span className="text-danger">
                      {this.validator.message(
                        "surname",
                        this.state.surname,
                        "required|alpha_num_space"
                      )}
                    </span>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      id="form3"
                      required
                      name="topic"
                      className="form-control"
                      value={firstname}
                      onChange={this.handleFirstName}
                      placeholder="First Name"
                    />
                    <span className="text-danger">
                      {this.validator.message(
                        "firstname",
                        this.state.firstname,
                        "required|alpha_num_space"
                      )}
                    </span>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      id="form3"
                      required
                      name="topic"
                      className="form-control"
                      value={middlename}
                      onChange={this.handleMiddleName}
                      placeholder="Middle Name"
                    />

                    <span className="text-danger">
                      {this.validator.message(
                        "middlename",
                        this.state.middlename,
                        "required|alpha_num_space"
                      )}
                    </span>
                  </div>

                  <div className="form-group mt-3">
                    <input
                      type="email"
                      id="form3"
                      required
                      name="topic"
                      className="form-control"
                      value={email}
                      onChange={this.handleEmail}
                      placeholder="Email"
                    />
                    <span className="text-danger">
                      {this.validator.message(
                        "email",
                        this.state.email,
                        "required|email"
                      )}
                    </span>
                  </div>

                  <div className="form-group">
                    <CountryDropdown
                      value={country}
                      onChange={(val) => this.selectCountry(val)}
                      className="form-control"
                    />

                    <span className="text-danger">
                      {this.validator.message(
                        "country",
                        this.state.country,
                        "required|alpha_num_space"
                      )}
                    </span>
                  </div>
                  {/* <CountryRegionData
      
          value={countryShortCode}
          onChange={(val) => this.selectCountry(val)} className="form-control"/> */}
                  <div className="form-group">
                    <RegionDropdown
                      country={country}
                      value={region}
                      onChange={(val) => this.selectRegion(val)}
                      className="form-control"
                    />

                    <span className="text-danger">
                      {/* {this.validator.message('region', this.state.region, 'required|alpha_num_space')} */}
                    </span>
                  </div>

                  {/*          
                   <div className="form-group">
<PhoneInput
    country={''}
  value={this.state.phone}
  onChange={phone => this.setState({ phone })}
/>
</div> */}
                  <div className="form-group mt-3">
                    <input
                      type="tel"
                      id="form3"
                      required
                      name="topic"
                      className="form-control"
                      value={phone}
                      onChange={this.handlePhone}
                      placeholder="Phone Number Eg+2348038863055"
                      maxLength="15"
                    />
                    <span className="text-danger">
                      {this.validator.message(
                        "phone",
                        this.state.phone,
                        "required|phone"
                      )}
                    </span>
                  </div>

                  <div className="form-group">
                    <label className="text-left"> Age Group</label>
                    <select
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Age group"
                      onChange={this.handleAgeGroup.bind(this)}
                      value={this.state.agegroup}
                    >
                      <option>--Select Age Group--</option>
                      <option value="1-15">1-15</option>
                      <option value="16-40">16-40</option>
                      <option value="41-60"> 41-60 </option>
                      <option value="Above 60"> above 60 </option>
                    </select>
                    <span className="text-danger">
                      {this.validator.message(
                        "agegroup",
                        this.state.agegroup,
                        "required|alpha_num_dash_space"
                      )}
                    </span>
                  </div>
                  <div className="form-group">
                    {/* <select  className="form-control " id="form2"
                     value={gender} 
                     onChange={this.handleGender}>
                        
                        <option value="Male">Select Gender</option>
                          <option value="Male">Male</option>
                        <option value="Female">Female</option>
                           
                    </select> */}
                    <div onChange={this.handleGender} className="text-left">
                      <label>Gender</label>&nbsp; &nbsp;&nbsp; &nbsp;
                      <input type="radio" value="Male" name="gender" /> Male
                      &nbsp; &nbsp;
                      <input type="radio" value="Female" name="gender" /> Female
                    </div>

                    <span className="text-danger">
                      {this.validator.message(
                        "gender",
                        this.state.gender,
                        "required|alpha_num"
                      )}
                    </span>
                  </div>

                  <div className="form-group">
                    <label className="text-left">
                      {" "}
                      <i className="text-left"></i>Education attained
                    </label>
                    <select
                      type="text"
                      id="form2"
                      className="form-control"
                      name="Education"
                      value={eduacation}
                      onChange={this.handleEducation}
                      placeholder="Education"
                    >
                      <option>--Select--</option>
                      <option value="Elementary"> Elementary </option>
                      <option value="Seconadry"> Secondary School </option>
                      <option value="Degree"> Degree</option>
                      <option value="Master"> Masters</option>
                      <option value="PhD"> PhD</option>
                    </select>
                    <span className="text-danger">
                      {this.validator.message(
                        "education",
                        this.state.education,
                        "required|alpha_num_space"
                      )}
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="text-left">
                      {" "}
                      <i></i>Work Type
                    </label>
                    <select
                      className="form-control "
                      id="form2"
                      value={this.state.worktype}
                      onChange={this.handleWorkType}
                    >
                      <option>--Select--</option>
                      <option value="Academic">Academic </option>
                      <option value="Commerce">Commerce</option>
                      <option value="Commerce"> Finance</option>
                      <option value="Banking"> Banking</option>
                      <option value="Public Sector"> Public Sector</option>
                      <option value="Self Employed"> Self Employed</option>
                      <option value="Business"> Business Owner </option>
                      <option value="Student"> Student </option>
                      <option value="Umemployement"> Umemployement </option>
                      <option value="Private Sector"> Private Sector </option>
                    </select>
                    <span className="text-danger">
                      {this.validator.message(
                        "worktype",
                        this.state.worktype,
                        "required|alpha_num_space"
                      )}
                    </span>
                  </div>

                  <div className="form-group">
                    <p className="text-left">
                      {" "}
                      Upload signature
                      <br />{" "}
                      {fileSize !== "" ? (
                        <span className="alert alert-info">
                          file size= {fileSize}MB
                        </span>
                      ) : null}
                      {filesupport === "file type not supported" ? (
                        <span className="alert alert-danger">
                          {filesupport}
                        </span>
                      ) : null}{" "}
                      {filesupport === "file type supported" ? (
                        <span className="alert alert-success">
                          {filesupport}
                        </span>
                      ) : null}
                    </p>

                    <input
                      id="file"
                      type="file"
                      // accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
                      className="form-control"
                      onChange={this.onChangehandleImgResize}
                    />
                  </div>
                  {filesupport === "file type not supported" &&
                  filesupport !== "" ? (
                    <div className="alert alert-warning">
                      select image jpg or png{" "}
                    </div>
                  ) : null}
                  {fileSize > 3.0 ? (
                    <div className="alert alert-warning">
                      Too Big!! Image max size is 3mb{" "}
                    </div>
                  ) : null}

                  <div className="text-center">
                    <span>
                      <small
                        className="alert alert-info"
                        style={{ fontStyle: "italic" }}
                      >
                        Check the box below
                      </small>
                    </span>
                    <div className="form-check">
                      <p className="p-1">
                        {" "}
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="flexCheckDefault"
                          required="required"
                          onChange={this.handleAgreed}
                        />{" "}
                        I [ {surname.toUpperCase()}&nbsp;{" "}
                        {firstname.toLocaleUpperCase()}&nbsp;
                        {middlename.toUpperCase()} ] Agree tothe policy of
                        Cheque Clearance and validation system{" "}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    {/* <div className="text-center"  id="loader" />  */}
                    {this.state.info !== "" ? (
                      <div className="alert alert-warning">
                        {this.state.info}
                      </div>
                    ) : null}
                    {/* {this.state.isLoading === true ? (
                      (document.getElementById("btnaddProject").style.display =
                        "none") && 
                       <div className="lds-ellipsis"><div></div><div></div><div></div> </div>
                       
                    ) : ( */}
                    <button
                      type="button"
                      id="btnaddProject"
                      className="btn btn-primary btn-lg "
                      onClick={this.handleSubmit.bind(this)}
                    >
                      {" "}
                      &nbsp; Submit{" "}
                      {this.state.isLoading === true ? (
                        <span className="lds-ellipsis">
                          ING..<span></span>
                          <span></span>
                          <span></span>{" "}
                        </span>
                      ) : null}
                    </button>
                    {/* )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BlackRevRegistration;
