import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuItem extends Component {
  render() {
    const {name, description, price} = this.props.item;

    return (
  		<div className="panel panel-default">
  		  <div className="panel-heading">
  		    <h3 className="panel-title">{name}</h3>
  		  </div>
  		  <div className="panel-body">
  		    <p>{description}</p>
  		    <p>{price}</p>
  		  </div>
  		</div>
    )
  }
}

MenuItem.propTypes = {
  item: PropTypes.object
};

export default MenuItem;
