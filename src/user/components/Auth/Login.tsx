import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Main from '../../containers/images/cm-logo.png';
import Img from '../../containers/images/cm-main-img.png';
const Login = (props : any) => {
    const [auth,setAuth] = useState({
        username:'',
        password:''
      })
    const onDataChange = (e:any,name:string) => {
        let oldData : any = { ...auth }
        oldData[name] = e.target.value;
        console.log(oldData);
        setAuth(oldData);
    }
    const onFinish = async (values : any) => {
        let loginData = {...auth}
        
        await props.userAdmin(loginData.username,loginData.password)     
    };
    return ( <> 
        <div className="wrapper" style={{background: "#e44d3a"}}>
          <div className="sign-in-page">
            <div className="signin-popup">
              <div className="signin-pop">
                <div className="row">
                  <div className="col-lg-6">
                  <div className="cmp-info">
                      <div className="cm-logo">
                        <img src={Main} alt="" />
                        <p>Workwise, is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                      </div>
                      <img src={Img} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="login-sec">
                      <ul className="sign-control">
                        <li data-tab="tab-1" className="current"><Link to="/user/login">Sign in</Link></li>
                        <li data-tab="tab-2"><Link to="/user/register">Sign up</Link></li>
                      </ul>
                      <div className="sign_in_sec current" id="tab-1">
                        <h3>Sign in</h3>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            {/* <i className="la la-user" /> */}
                            <Form.Control type="email" name="username" placeholder="Enter email" onChange={(e) => onDataChange(e,'username')} />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPassword">
                            {/* <i className="la la-user" /> */}
                            <Form.Control type="password" name="password" placeholder="Enter password" onChange={(e) => onDataChange(e,'password')} />
                        </Form.Group>
                          <div className="row">
                            {/* <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="text" name="username" placeholder="Username" />
                                <i className="la la-user" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="password" name="password" placeholder="Password" />
                                <i className="la la-lock" />
                              </div>
                            </div> */}
                            <div className="col-lg-12 no-pdd">
                              <div className="checky-sec">
                                <div className="fgt-sec">
                                    <span>{(props.errormsg)?<h4 style={{color:'red'}}>Wrong Username Or Password</h4>:null}</span>
                                </div>
                                <a href="#" >Forgot Password?</a>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              {/* <button type="submit" value="submit">Sign in</button> */}
                              <Button onClick={onFinish} variant="light">Sign in</Button>
                            </div>
                          </div>
                        </Form>
                        <div className="login-resources">
                          <h4>Login Via Social Account</h4>
                          <ul>
                            <li><a href="#"  className="fb"><i className="fa fa-facebook" />Login Via Facebook</a></li>
                            <li><a href="#"  className="tw"><i className="fa fa-twitter" />Login Via Twitter</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footy-sec">
              <div className="container">
                <ul>
                  <li><a href="help-center.html" >Help Center</a></li>
                  <li><a href="about.html" >About</a></li>
                  <li><a href="#" >Privacy Policy</a></li>
                  <li><a href="#" >Community Guidelines</a></li>
                  <li><a href="#" >Cookies Policy</a></li>
                  <li><a href="#" >Career</a></li>
                  <li><a href="forum.html" >Forum</a></li>
                  <li><a href="#" >Language</a></li>
                  <li><a href="#" >Copyright Policy</a></li>
                </ul>
                <p><img src="images/copy-icon.png" alt="" />Copyright 2019</p>
              </div>
            </div>
          </div>
        </div>
    
    
     </>)
}

export default Login;