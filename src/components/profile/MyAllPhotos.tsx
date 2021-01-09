import React from 'react';
import ProfileProps from '../profile/profileSettings';
import moment from 'moment';
import { FcLike } from 'react-icons/fc'
import { MdDateRange } from 'react-icons/md'

const MyAllPhotos = (props: any) => {

    const photos = (photo: any) => {
        let myArr: any = [];
        console.log(photo[0])
        if (photo[0].length==0) {
            myArr.push(<div className="acc-setting"><div className="notifications-list">
            <div className="notfication-details">
                Empty Photo
            </div></div>
        </div>)
        }
        else {

            // if()
            for (let i = 0; i < photo[0].length; i++) {
                myArr.push(<div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                    <div className="company_profile_info">
                        <div className="company-up-info" style={{ padding: "0px" }}>
                            <img src={photo[0][i].imageUrl} alt="" style={{ float: "none", marginBottom: "6px", height: "100%", objectFit: "initial", borderRadius: "0px", width: "100%" }} />
                            <h3>{photo[0][i].participant.event.title}</h3>
                            <h4><span style={{ float: "left" }}><MdDateRange />{"  " + moment(+photo[0][i].participant.event.startDate).format("D/MM/yyyy")}</span><span style={{ float: "right" }}><FcLike />{photo[0][i].likes}</span></h4>
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
                    <h3>My Photo</h3>
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