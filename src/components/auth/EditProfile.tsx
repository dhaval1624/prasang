import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner'
import profileImg from '../../assets/images/resources/user-pro-img.png';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toast from 'react-bootstrap/Toast'
const EditProfile = (props: any) => {
  const [show, setShow] = useState(false);

  const [profile, setProfile] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    contact: '',
    image: '',
    bio:''
  })

  const [error, setError] = useState({
    usernameError: '',
    passwordError: '',
    nameError: '',
    emailError: '',
    endDateError: '',
    contactError: '',
    imageError: '',
    IsValid: true
  })
  useEffect(() => {
    if (props.userProfile != undefined) {
      let old = { ...profile };
      old.username = props.userProfile.username;
      old.password = props.userProfile.password;
      old.name = props.userProfile.name;
      old.email = props.userProfile.email;
      old.contact = props.userProfile.contactNo;
      old.image = props.userProfile.image;
      old.bio = props.userProfile.bio;
      setProfile(old);
    }
    if (props.errormsg) {
      if (props.errormsg === 'Username already exists') {
        setError({
          ...error,
          usernameError: props.errormsg,
          IsValid: false
        })
      }
      if (props.errormsg === 'Email already exists') {
        setError({
          ...error,
          emailError: props.errormsg,
          IsValid: false
        })
      }
      if (props.errormsg === 'ContactNo already exists') {
        setError({
          ...error,
          contactError: props.errormsg,
          IsValid: false
        })
      }
    }
  }, [props.errormsg, props.userProfile, error.IsValid])

  const onDataChange = (e: any, name: string) => {
    let oldData: any = { ...profile }
    // let errors = { ...error, IsValid : false };
    if (name === 'image') {
      const imagePath = e.target.files[0];
      // if(!imagePath.name.match(/\.(jpg|jpeg|png)$/)) {
      //   errors.imageError = "image Should be jpg,jpeg or png";
      //   errors.IsValid = false;
      // }
      // else
      // error.IsValid = true;
      oldData[name] = imagePath;
    }
    else {
      oldData[name] = e.target.value;
    }
    // setError(errors);
    setProfile(oldData);
  }
  const onFinish = async (values: any) => {
    let profileData = { ...profile }
    let errors = { ...error, IsValid: false };
    if (!profile.name || profile.name === "") {
      errors.nameError = "Name Is Required "
    }
    else {
      errors.IsValid = true;
      errors.nameError = ""
    }
    if (!profile.username || profile.username === "") {
      errors.usernameError = "Username Is Required "
    }
    else {
      errors.IsValid = true;
      errors.usernameError = ""
    }

    // if (!profile.contact || profile.contact === "") {
    //   errors.contactError = "Mobile No Is Required "
    // }
    // else {
    //   errors.IsValid = true;
    //   errors.contactError = "";
    // }

    setError(errors);
    // console.log(profileData);    
    if (errors.IsValid) {
      console.log('success');
      await props.userEdit(profileData.name, profileData.email, profileData.password, profileData.username, profileData.contact, profileData.image)
    }
  };
  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
      <div className="wrapper">
        
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="main-left-sidebar">
                      <div className="user_profile">
                        <div className="user-pro-img">
                          {(profile.image) ? <img src={profile.image} height="170px" width="170px" alt="" /> : <img src={profileImg} alt="" />}
                          {/* <img src={profile.image} alt="" height="170px" width="170px"/> */}
                          <div className="add-dp" id="OpenImgUpload">
                            <input type="file" id="file" name="image" onChange={(e) => onDataChange(e, 'image')} />
                            <label htmlFor="file">
                              <FontAwesomeIcon icon={faCamera} size="2x" style={{ color: "#e44d3a" }}></FontAwesomeIcon>
                            </label>
                          </div>
                        </div>
                        <div className="user_pro_status">
                          <ul className="flw-status">
                            <li>
                              <span>{profile.username}</span>
                            </li>
                            {/* <li>
                                <span>Followers</span>
                                <b>155</b>
                              </li> */}
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
                          <img src="images/logo2.png" alt="" />
                          <p><img src="images/cp.png" alt="" />Copyright 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">

                    <div className="acc-setting" style={{ backgroundColor: "#e2e2e2", borderStyle: "groove", borderTopLeftRadius: "107px" }}>
                      <h3 style={{ marginLeft: "254px" }}>My Profile</h3>
                      <Form>
                        <Form.Group className="cp-field" controlId="formBasicName">
                          <Form.Label style={{ fontWeight: 600, marginBottom: "10px" }}>Name</Form.Label>
                          <Form.Control isInvalid={(error.nameError) ? true : false} className="cpp-fiel" type="text" name="name" placeholder="Name" value={profile.name || ''} onChange={(e) => onDataChange(e, 'name')} />
                          <Form.Control.Feedback type="invalid">
                            {error.nameError}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="cp-field" controlId="formBasicusername">
                          <Form.Label style={{ fontWeight: 600, marginBottom: "10px" }}>Username</Form.Label>
                          <Form.Control isInvalid={(error.usernameError) ? true : false} className="cpp-fiel" name="username" placeholder="User Name" value={profile.username} onChange={(e) => onDataChange(e, 'username')} />
                          {/* <i className="fa fa-envelope"></i> */}

                          <Form.Control.Feedback type="invalid">
                            {error.usernameError}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="cp-field" controlId="formBasicEmail">
                          <Form.Label style={{ fontWeight: 600, marginBottom: "10px" }}>Email</Form.Label>
                          <Form.Control isInvalid={(error.emailError) ? true : false} className="cpp-fiel" name="email" placeholder="Email" value={profile.email || ''} onChange={(e) => onDataChange(e, 'email')} readOnly />
                          {/* <i className="fa fa-envelope"></i> */}
                          <Form.Control.Feedback type="invalid">
                            {error.emailError}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="cp-field" controlId="formBasiccontact">
                          <Form.Label style={{ fontWeight: 600, marginBottom: "10px" }}>Mobile No</Form.Label>
                          <Form.Control isInvalid={(error.contactError) ? true : false} className="cpp-fiel" name="contact" placeholder="Mobile No" value={profile.contact || ''} onChange={(e) => onDataChange(e, 'contact')} />
                          <Form.Control.Feedback type="invalid">
                            {error.contactError}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="cp-field" controlId="formBasicbio">
                          <Form.Label style={{ fontWeight: 600, marginBottom: "10px" }}>Bio</Form.Label>
                          <Form.Control className="cpp-fiel" name="bio" placeholder="bio" as="textarea" rows={3} value={profile.bio || ''} onChange={(e) => onDataChange(e, 'bio')} />
                          
                        </Form.Group>

                        {/* <Form.Group className="cp-field" controlId="formBasicPassword">
                      <Form.Label style={{fontWeight: 600 , marginBottom: "10px"}}>Password</Form.Label>
                      <Form.Control className="cpp-fiel" type="password" name="password" placeholder="Password" onChange={(e) => onDataChange(e, 'password')}/>
                      <i className="fa fa-envelope"></i>
                    </Form.Group> */}
                        {(props.load) ?
                          <Button disabled variant="primary" onClick={onFinish} style={{ marginLeft: "20px", marginBottom: "20px" }}>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            /> <span className="sr-only"> Submit</span>
                           
                    </Button> : <Button variant="primary" onClick={onFinish} style={{ marginLeft: "20px", marginBottom: "20px" }}>
                            Submit
                    </Button>
                        }
                      </Form>
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