import React from 'react';

const NavBar = () => {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">Restaurant</a>
		    </div>
		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav">
		        <li><a href="#reservation-form">Reserve a Table</a></li>
		        <li><a href="#menu">Menu</a></li>
		        <li><a href="#map">Map</a></li>
		      </ul>
		    </div>
		  </div>
		</nav>
	)
}

export default NavBar;
