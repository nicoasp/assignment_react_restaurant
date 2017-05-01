import React from 'react';

const NavBar = () => {
	return (
		<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">Restaurant</a>
		    </div>
		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav">
		        <li><a href="#">Link</a></li>
		        <li><a href="#">Link</a></li>
		      </ul>
		    </div>
		  </div>
		</nav>
	)
}

export default NavBar;
