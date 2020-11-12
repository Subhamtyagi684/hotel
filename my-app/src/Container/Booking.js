import React, { Component, Fragment } from 'react';

class Booking extends Component{
    render(){
        return(
            <Fragment>
                <div className="card border-info mb-3 mt-3">
  <div className="card-header bg-info text-light">
      <h4>Place your Order</h4>
  </div>
  <div className="card-body ">
      
<form>
  <div className="form-group">
    <label for="exampleInputOrderId1">Order Id</label>
    <input type="text" className="form-control" id="exampleInputOrderId1" aria-describedby="emailHelp" readOnly disabled/>
  </div>
  <div className="form-group">
    <label for="exampleInputHotelName1">Hotel Name</label>
    <input type="text" className="form-control" id="exampleInputHotelName1" readOnly disabled/>
  </div>
  <div className="form-group">
    <label for="exampleInputCustomerName1">Customer Name</label>
    <input type="text" className="form-control" id="exampleInputCustomerName1" required/>
  </div>
  <div className="form-group">
    <label for="exampleInputPhoneNumber1">Phone Number</label>
    <input type="text" className="form-control" id="exampleInputPhoneNumber1" required/>
  </div>
  <div className="form-group">
    <label for="exampleInputAddress1">Address</label>
    <textarea className="form-control" id="exampleInputAddress1" required/>
  </div>
  <div className="form-group">
  <label for="inputState">Person</label>
      <select id="inputState" className="form-control" required>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
  </div>
  <button type="submit" className="btn btn-info ">Submit</button>
</form>
  </div>
</div>
            </Fragment>
        )
    }
}


export default Booking
