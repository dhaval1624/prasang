import React from 'react';
import { Image } from 'react-bootstrap';
import { faCalendarAlt, faComment, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './main';

import userImage from '../assets/images/resources/s1.png';
import Header from '../components/common/Header/Header';
import UserCard from '../components/home/UserCard/UserCard';
import Post from '../components/home/Post/Post';
import TrandingEvents from '../components/home/Events/Events';
import Peoples from '../components/home/TopViewedPeople/Peoples';
import Categories from '../components/home/EventsCategories/Categories';


const Home = (props: any) => {
	return (
		<>
			<Header />
			<div className="wrapper">
				<main>
					<div className="main-section">
						<div className="container">
							<div className="main-section-data">
								<div className="row">
									<div className="col-lg-3 col-md-4 pd-left-none no-pd">
										<div className="main-left-sidebar no-margin">
											{/* User Profile */}
											<UserCard />

											{/* Categories */}
											<Categories />

											{/* Links */}
											<div className="tags-sec full-width">
												<ul>
													<li><a href="#">Help Center</a></li>
													<li><a href="#">About</a></li>
													<li><a href="#">Privacy Policy</a></li>
													<li><a href="#">Community Guidelines</a></li>
													<li><a href="#">Cookies Policy</a></li>
													<li><a href="#">Career</a></li>
													<li><a href="#">Language</a></li>
													<li><a href="#">Copyright Policy</a></li>
												</ul>
												<div className="cp-sec">
													<img src="images/logo2.png" alt="" />
													<p><img src="images/cp.png" alt="" />Copyright 2019</p>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-md-8 no-pd">
										<div className="main-ws-sec">
											<div className="post-topbar">
												<div className="user-picy">
													<img src="images/resources/user-pic.png" alt="" />
												</div>
												<div className="post-st">
													<ul>
														<li><a className="post_project active" href="#">Add a Photo</a></li>
														<li><a className="post-jb" href="#">Participate in Event</a></li>
													</ul>
												</div>
											</div>

											<div className="posts-section">
												{/* [Posts] */}
												<Post />

												{/* Profiles */}
												<div className="top-profiles">
													<div className="pf-hd">
														<h3>Top Profiles</h3>
														<i className="la la-ellipsis-v" />
													</div>
													<div className="profiles-slider">
														<div className="user-profy">
															<img src="images/resources/user1.png" alt="" />
															<h3>John Doe</h3>
															<span>Graphic Designer</span>
															<ul>
																<li><a href="#" className="followw">Follow</a></li>
																<li><a href="#" className="envlp"><img src="images/envelop.png" alt="" /></a></li>
																<li><a href="#" className="hire">hire</a></li>
															</ul>
															<a href="#">View Profile</a>
														</div>
													</div>
												</div>
												
												{/* Loading */}
												<div className="process-comm">
													<div className="spinner">
														<div className="bounce1" />
														<div className="bounce2" />
														<div className="bounce3" />
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 pd-right-none no-pd">
										<div className="right-sidebar">
											<div className="widget widget-about">
												<img src="images/wd-logo.png" alt="" />
												<h3>Track Time on Workwise</h3>
												<span>Pay only for the Hours worked</span>
												<div className="sign_link">
													<h3><a href="sign-in.html">Sign up</a></h3>
													<a href="#">Learn More</a>
												</div>
											</div>

											<TrandingEvents />
											<Peoples />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Home;