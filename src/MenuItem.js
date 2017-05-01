import React from 'react'

const MenuItem = ({item}) => {
  const {name, description, price} = item

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

export default MenuItem