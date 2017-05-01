import React from 'react';

const ReservationForm = () => {
  return (
		<form>
      <h3 id="reservation-form" className="text-center">Make a Reservation</h3>
		  <div className="form-group">
		    <label htmlFor="name">Name</label>
		    <input type="text" className="form-control" id="name" placeholder="Name" value="Jerry" />
		  </div>
		  <div className="form-group">
		    <label htmlFor="email">Email address</label>
		    <input type="email" className="form-control" id="email" placeholder="Email" />
		  </div>
		  <div className="form-group">
		    <label htmlFor="time">Time</label>
		    <input type="time" id="time" className="form-control" />
		  </div>
		  <div className="form-group">
		    <label htmlFor="numGuests">Number of Guests</label>
		    <input type="number" id="numGuests" className="form-control" />
		  </div>

		  <button type="submit" className="btn btn-default">Submit</button>
		</form>
  );
};

export default ReservationForm;
