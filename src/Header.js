import React from 'react';

const Header = ({ props }) => {
  const { image, headline, tagline } = props;

  return (
    <div className="jumbotron">
      <img className="header-image" src={ image.url } alt={ image.alt } />
      <h1>{ headline }</h1>
      <p>{ tagline }</p>
    </div>
  );
};

export default Header;
