import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import AuthCommon from './AuthCommon';
import Imgs from '../../assets/images/resources/cover-img.jpg';
import profileImg from '../../assets/images/resources/user-pro-img.png';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaCamera } from 'react-icons/fa';
const EditProfile = (props: any) => {
	const [auth, setAuth] = useState({
		username: '',
		password: '',
		name: '',
		email: ''
	})
	const onDataChange = (e: any, name: string) => {
		let oldData: any = { ...auth }
		oldData[name] = e.target.value;
		console.log(oldData);
		setAuth(oldData);
	}
	const onFinish = async (values: any) => {
		let registerData = { ...auth }
		await props.userRegisters(registerData.name, registerData.email, registerData.password, registerData.username)
	};
	return (
        <>
        <div className="wrapper">
          <section className="cover-sec">
            <img src={Imgs} alt="" />
            <div className="add-pic-box">
              <div className="container">
                <div className="row no-gutters">
                </div>
              </div>
            </div>
          </section>
          <main>
            <div className="main-section">
              <div className="container">
                <div className="main-section-data">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="main-left-sidebar">
                        <div className="user_profile">
                          <div className="user-pro-img">
                            <img src={profileImg} alt="" />
                            <div className="add-dp" id="OpenImgUpload">
                              <input type="file" id="file" />
                              <label htmlFor="file">
                                <FontAwesomeIcon icon={faCamera} size="2x" style={{color: "#e44d3a"}}></FontAwesomeIcon>
                              </label>
                            </div>
                          </div>
                          <div className="user_pro_status">
                            <ul className="flw-status">
                              <li>
                                <span>Following</span>
                                <b>34</b>
                              </li>
                              <li>
                                <span>Followers</span>
                                <b>155</b>
                              </li>
                            </ul>
                          </div>
                          
                          </div>
                          <div className="tags-sec full-width" style={{}}>
                            <ul>
                            <li><a href="#" title="">Help Center</a></li>
                            <li><a href="#" title="">About</a></li>
                            <li><a href="#" title="">Privacy Policy</a></li>
                            <li><a href="#" title="">Community Guidelines</a></li>
                            <li><a href="#" title="">Cookies Policy</a></li>
                            <li><a href="#" title="">Career</a></li>
                            <li><a href="#" title="">Language</a></li>
                            <li><a href="#" title="">Copyright Policy</a></li>
                            </ul>
                            <div className="cp-sec">
                            <img src="images/logo2.png" alt=""/>
                            <p><img src="images/cp.png" alt=""/>Copyright 2019</p>
                            </div>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                    
                    <div className="acc-setting" style={{backgroundColor: "#e2e2e2",borderStyle: "groove",borderTopLeftRadius: "107px"}}>
                    <h3 style={{marginLeft: "254px"}}>My Profile</h3>
                    <form>
                    <div className="cp-field">
                    <h5>Name</h5>
                    <div className="cpp-fiel">
                    <input type="text" name="name" placeholder="Name"/>
                    <i className="fa fa-envelope"></i>
                    </div>
                    </div>
                    
                    <div className="cp-field">
                    <h5>Username</h5>
                    <div className="cpp-fiel">
                    <input type="text" name="username" placeholder="User Name"/>
                    <i className="fa fa-envelope"></i>
                    </div>
                    </div>

                    <div className="cp-field">
                    <h5>Email</h5>
                    <div className="cpp-fiel">
                    <input type="text" name="email" placeholder="Email"/>
                    <i className="fa fa-envelope"></i>
                    </div>
                    </div>
                    <div className="cp-field">
                      <h5>Mobile No</h5>
                      <div className="cpp-fiel">
                        <input type="number" name="username" placeholder="Mobile No"/>
                        <i className="fa fa-envelope"></i>
                      </div>
                    </div>
                    
                    <div className="cp-field">
                    <h5>Password</h5>
                    <div className="cpp-fiel">
                    <input type="password" name="password" placeholder="Password"/>
                    <i className="fa fa-lock"></i>
                    </div>
                    </div>
                    <div className="save-stngs pd3">
                    <ul>

                    <li><button type="submit">Save</button></li>
                    </ul>
                    </div>
                    </form>
                    </div>

                    </div>
                    {/* <div className="col-lg-3">

                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="footy-sec mn no-margin">
              <div className="container">
                <ul>
                  <li><a href="help-center.html">Help Center</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Community Guidelines</a></li>
                  <li><a href="#">Cookies Policy</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="forum.html">Forum</a></li>
                  <li><a href="#">Language</a></li>
                  <li><a href="#">Copyright Policy</a></li>
                </ul>
                <p><img src="images/copy-icon2.png" alt="" />Copyright 2019</p>
                <img className="fl-rgt" src="images/logo2.png" alt="" />
              </div>
            </div>
          </footer>
        </div>
		</>
	)
}

export default EditProfile;