import React from 'react';
import ProfileProps from '../profile/profileSettings';
import moment from 'moment';
import { FcLike,FcComments } from 'react-icons/fc'
import { MdDateRange } from 'react-icons/md'
import {ListGroup , Accordion , Button } from 'react-bootstrap'

const MyAllPhotos = (props: any) => {

    const photos = (photo: any) => {
        let myArr: any = [];
        if (photo[0].length==0) {
            myArr.push(<div className="acc-setting"><div className="notifications-list">
            <div className="notfication-details">
                Empty Photo
            </div></div>
        </div>)
        }
        else
         {
            // if()
            
            for (let i = 0; i < photo[0].length; i++) {
                // photo[0][i].comments.map((cmt : any,index:any) => {
                //     console.log(cmt);
                // })
               
                myArr.push(<div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                    <div className="company_profile_info">
                        <div className="company-up-info" style={{ padding: "0px" }}>
                            <img src={photo[0][i].imageUrl} alt="" style={{ float: "none", marginBottom: "6px", height: "200px", objectFit: "initial", borderRadius: "0px", width: "280px" }} />
                            <h3>{photo[0][i].participant.event.title}</h3>
                            <h4><span style={{ float: "left",marginRight:"10px" }}><MdDateRange />{"  " + moment(+photo[0][i].participant.event.startDate).format("D/MM/yyyy")}</span>
                            <span style={{ float: "right" }}>
                            <FcLike />{photo[0][i].likes}</span>                            
                            </h4>
                            <h4 style={{marginTop: "-21px", marginRight: "-57px"}}>
                            <Accordion>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={"i"+i} style={{marginLeft:"128px"}}>
                                            <FcComments/>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={"i"+i}>
                                        <div>
                                            <ListGroup style={{maxHeight:"90px",width:"293px",overflow:"scroll"}}>

                                            {/* <ul key={"u1"} className="list-group" style={{maxHeight: '170px',overflow:'scroll'}}> */}
                                             
                                             {(photo[0][i].comments.length == 0) ? "No Comments":   
                                            
                                                photo[0][i].comments.map((cmt : any,index:any) => {
                                                    return <ListGroup.Item key={"li"+index} style={{paddingBottom:"0px"}}>
                                                           <div>
                                                                <img src={cmt.user.image} height="30px" width="30px" style={{float: "left",height: "34px"}}/>
                                                                <div style={{paddingRight:"137px",color:"black"}}>{cmt.user.username}</div>
                                                                <div style={{paddingTop: "4px",paddingRight: "124px"}}>{cmt.text}</div>
                                                            </div> 
                                                            {/* <div className="job-status-bar">
                                                            <ul className="like-com">
                                                            <li>
                                                            <a href="#" className="active"><i className="fas fa-heart"></i> Like</a>
                                                            <img src="images/liked-img.png" alt=""/>
                                                            <span>25</span>
                                                            </li>
                                                            <li><a href="#" className="com"><i className="fas fa-comment-alt"></i> Comments 15</a></li>
                                                            </ul>
                                                            <a href="#"><i className="fas fa-eye"></i>Views 50</a>
                                                            </div> */}
                                                        </ListGroup.Item>
                                                    
                                                })
                                            }
                                            {/* </ul>  */}
                                            </ListGroup>
                                            
                                            </div>
                                    </Accordion.Collapse>
                            </Accordion>
                            </h4>
                        </div>
                    </div>
                </div>)
            }
        }
        return myArr;
    }
    return <>
        <ProfileProps type="myphotos">
            <div className="acc-setting">
                <div className="acc-setting">
                    <div className="acc-setting" style={{ marginBottom: "0px", backgroundColor: "#e44d3a", color: "white", textTransform: "uppercase" }}>
                        <h3 style={{ color: "white" }}>My Photo</h3>
                    </div>
                    <div className="companies-list">
                        <div className="row">
                            {photos(props.photo)}
                        </div>
                    </div>
                </div>
            </div>
        </ProfileProps>
    </>
}

export default MyAllPhotos;