import React from 'react';

const Map = ({address}) => {

  return (
		<iframe width="600" height="450" frameBorder="0"
		src={`https://www.google.com/maps/embed/v1/place?q=${address}&key=AIzaSyDWV8V7xIvuuHBRsveTpU9SPGyti-e3CIc`} allowFullScreen></iframe>
  );
};

export default Map;