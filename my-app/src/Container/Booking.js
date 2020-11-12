import React, { Component, Fragment } from 'react';

const url = 'http://localhost:1000/bookings'

class Booking extends Component{
    constructor(){
        super()

        this.state = {
          randomNumber:parseInt(Math.random()*1000),
          hotel:'',
          name:'',
          phone:'',
          address:'',
          persons:''
        }

    }

    
    handleCustomerName = (event) => {
      this.setState({name:event.target.value})

    }
    handlePhone = (event) => {
      this.setState({phone:event.target.value})

    }
    handleAddress = (event) => {
      this.setState({address:event.target.value})

    }
    handlePersons = (event) => {
      this.setState({persons:event.target.value})

    }

    handleSubmit = () => {
      const data = {
        'order_id':this.state.randomNumber,
        'hotel_name':this.state.hotel.name,
        'name':this.state.name,
        'phone':this.state.phone,
        'address':this.state.address,
        'persons':document.getElementById('inputState').value
      }
      if (data.address==='' || data.name==='' || data.phone===""){
        alert('Please fill all the fields')
      }
      else if (data.address===undefined || data.name===undefined || data.phone===undefined){
        alert('Please fill all the fields')
      }
      else if (data.phone.length!=10){
        alert('Please enter valid phone number')
      }
      else{
        fetch(url,{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(this.props.history.push('/'))
      }
    }

    render(){
        return(
            <Fragment>
                <div className="card border-info mb-3 mt-3">
                  <div className="card-header bg-info text-light">
                      <h4>Place your Order</h4>
                  </div>
                  <div className="card-body ">
                    <form >
                      <div className="form-group">
                        <label htmlFor="exampleInputOrderId1">Order Id</label>
                        <input type="text" className="form-control" id="exampleInputOrderId1" aria-describedby="emailHelp" readOnly value={this.state.randomNumber}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputHotelName1">Hotel Name</label>
                        <input type="text" className="form-control" id="exampleInputHotelName1" readOnly value={this.state.hotel?this.state.hotel.name:'loading.. '}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputCustomerName1">Customer Name</label>
                        <input type="text" className="form-control" id="exampleInputCustomerName1" required onChange={this.handleCustomerName}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPhoneNumber1">Phone Number</label>
                        <input type="text" className="form-control" id="exampleInputPhoneNumber1" required onChange={this.handlePhone} minLength='10' maxLength='10'/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputAddress1">Address</label>
                        <textarea className="form-control" id="exampleInputAddress1" required  onChange={this.handleAddress}/>
                      </div>
                      <div className="form-group">
                      <label htmlFor="inputState">Number of persons</label>
                          <select id="inputState" className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                      </div>
                      <button type="submit" className="btn btn-info "  onClick={this.handleSubmit}>Submit</button>
                    </form>
                  </div>
              </div>
            </Fragment>
        )
    }
    componentDidMount(){
      fetch(`https://developerfunnel.herokuapp.com/hotelsdetails/${this.props.match.params.hotelid}`)
        .then(response => response.json())
        .then(data => this.setState({
            hotel:data[0]
        }));
    }
}


export default Booking
