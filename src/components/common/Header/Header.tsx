import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faCalendarAlt, faUserCircle, faUserCog,faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Header.module.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
const Header = (props: any) => {
	const drop =  <DropdownButton menuAlign="right" title="Dropdown right" id="dropdown-menu-align-right">
	<Dropdown.Item eventKey="/u/profile">My Profile</Dropdown.Item>
	<Dropdown.Item eventKey="/u/changepassword">Change Password</Dropdown.Item>
	<Dropdown.Divider />
	<Dropdown.Item eventKey="/u/logout">Logout</Dropdown.Item>
</DropdownButton> 
	return <>
		<header>
			<div className="container">
				<div className="header-data">
					<div className="logo">
						<FontAwesomeIcon icon={faUserCircle} className={classes.faHeaderIcon} size="2x" />
					</div>
					{/* <div className="search-bar">
						<form>
							<input type="text" name="search" placeholder="Search..." />
							<button type="submit"><i className="la la-search" /></button>
						</form>
					</div> */}
					<nav>
						<ul>
							<li>
								<Link to={"/u/home"}>
									<FontAwesomeIcon icon={faHome} className={classes.faHeaderIcon} size="2x" />
								</Link>
							</li>
							<li>
								<Link to={"/u/category"}>
									<FontAwesomeIcon icon={faCalendarAlt} className={classes.faHeaderIcon} size="2x" />
								</Link>
							</li>
							<li>
								<Link to={"/u/profile"}>
									<FontAwesomeIcon icon={faUserCircle} className={classes.faHeaderIcon} size="2x" />
								</Link>
							</li>
						</ul>
					</nav>
					 {/* <div className="user-account">
						<div className="user-info">
							<Link to={"/u/profile"}>
							<FontAwesomeIcon icon={faUserCog } className={classes.faHeaderIcon} size="2x"/>
							</Link>		 
						</div>
					</div>  */}

					<div className="user-account">
						<div className="user-info">
							<Link to={"/u/changepassword"}>
							<FontAwesomeIcon icon={faCog} className={classes.faHeaderIcon} size="2x"/>
							{/* {drop} */}
							</Link>		 
						</div>
					</div>
				</div>
			</div>
		</header>
	</>;
}

export default Header;