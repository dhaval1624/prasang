import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import { Badge } from 'react-bootstrap';


const EventCategory = (props: any) => {
    const [hover, setHover] = useState(0);
    const data = (category:any) => {
        
        let catArr : any = [];
        for(let i = 0;i<category[0].length;i++)
        {
            // const className = (hover == i) ? 'Active' : 'Actives';
            const hoverHandler = (id: any) => {
                setHover(id);
            }
            catArr.push(
                <div className="col-lg-3 col-md-4 col-sm-6" key={i}>                    
                <div className="company_profile_info" style={{boxShadow:"1px 1px 12px"}}>
                    <div className="company-up-info">
                        <img src={category[0][i].imagePath} alt="" />
                        <h3>{category[0][i].name}</h3>
                    </div>
                    
                    <Badge as={Link} className={'Active1'} onClick={() => hoverHandler(i)} to={`/u/event/${category[0][i].categoryId}`}>View Events</Badge>
                    {/* <Button variant="primary" size="lg" as={Link} to={`/u/event/${category[0][i].categoryId}`}>View Events</Button> */}
                    {/* <a href="company-profile.html" title="" className="view-more-pro">View Events</a> */}
                </div>
                </div>
                )
        }
        return catArr;
    }
    return <>
        <section className="companies-info">
            <div className="container" >
                <div className="company-title">
                    <h3 style={{ marginBottom: "0px", backgroundColor: "#e44d3a", color: "white", textTransform: "uppercase" }}>All Category</h3>
                </div>
                <div className="companies-list">
                    <div className="row">
                        {data(props.category)}
                    </div>
                </div>
                {/* <div className="process-comm">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div> */}
            </div>
        </section>
    </>
}

export default EventCategory;