import React, { Component } from 'react';

class Header extends Component {
	render () {
		const { image, headline, tagline } = this.props.props;
	  return (
	    <div className="jumbotron">
	      <img className="header-image" src={ image.url } alt={ image.alt } />
	      <h1>{ headline }</h1>
	      <p>{ tagline }</p>
	    </div>
	  )		
	}
}





export default Header;


Header.defaultProps = {
	props: {
	  image: {
	    url: 'restaurant.jpg',
	    alt: 'A lovely restaurant'
	  },
	  headline: 'A Beautiful Restaurant',
	  tagline: 'This is a website about a beautiful restaurant'
	}
}
;