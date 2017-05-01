import React from 'react';

const Header = ({ props }) => {
  const { image, headline, tagline } = props;

  return (
    <div className="container">
      <div className="jumbotron">
        <img src={ image.url } alt={ image.alt } />
        <h1>{ headline }</h1>
        <p>{ tagline }</p>
      </div>
    </div>
  );
};

export default Header;
