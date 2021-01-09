import React from 'react';
import { Link } from 'react-router-dom';

import { Button,Badge } from 'react-bootstrap';
const data = (category:any) => {

    let catArr : any = [];
    for(let i = 0;i<category[0].length;i++)
    {
        catArr.push(
            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>                    
            <div className="company_profile_info">
                <div className="company-up-info">
                    <img src={category[0][i].imagePath} alt="" />
                    <h3>{category[0][i].name}</h3>
                </div>
                <Badge as={Link} to={`/u/event/${category[0][i].categoryId}`}>View Events</Badge>
                {/* <Button variant="primary" size="lg" as={Link} to={`/u/event/${category[0][i].categoryId}`}>View Events</Button> */}
                {/* <a href="company-profile.html" title="" className="view-more-pro">View Events</a> */}
            </div>
            </div>
            )
    }
    return catArr;
}

const EventCategory = (props: any) => {
    return <>
        <section className="companies-info">
            <div className="container">
                <div className="company-title">
                    <h3>All Category</h3>
                </div>
                <div className="companies-list">
                    <div className="row">
                        {data(props.category)}
                    </div>
                </div>
                <div className="process-comm">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default EventCategory;