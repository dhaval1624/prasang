import React from 'react';
import { faHome, faCalendarAlt, faUserCircle, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Header.module.css'

const Header = (props: any) => {
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
								<FontAwesomeIcon icon={faHome} className={classes.faHeaderIcon} size="2x" />
							</li>
							<li>
								<FontAwesomeIcon icon={faCalendarAlt} className={classes.faHeaderIcon} size="2x" />
							</li>
							<li>
								<FontAwesomeIcon icon={faUserCircle} className={classes.faHeaderIcon} size="2x" />
							</li>
						</ul>
					</nav>
					<div className="user-account">
						<div className="user-info">
							<FontAwesomeIcon icon={faUserCog} className={classes.faHeaderIcon} size="2x" />
						</div>
					</div>
				</div>
			</div>
		</header>
	</>;
}

export default Header;