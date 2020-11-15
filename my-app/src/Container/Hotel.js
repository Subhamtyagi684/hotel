import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'

class Hotel extends Component {
    constructor(){
        super()

        this.state =  {
            hotel:''
        }
    }

    handleHotel = (data) =>{
        if (data){
            return(
                data.map((item)=> {
                    return(
                        <Fragment>
                            <div className="card border-info mb-3 text-left" >
                                <div className="card-header bg-info border-info">
                                    <h3 className='card-title text-light text-center'>{item.name} - {item.city_name}</h3>
                                </div>
                                <div className="card-body text-success">
                                    <img src={item.thumb} className="img-fluid w-100" alt={item.thumb}/>
                                </div>
                                <div className="card-body">
                                    <p className="card-text"><strong className='mr-3'> Address : </strong> {item.address}</p>
                                    <p className="card-text"><strong className='mr-3'>City:</strong> {item.city_name}</p>
                                    <p className="card-text"><strong className='mr-3'>Locality:</strong> {item.locality}</p>
                                    <p className="card-text"><strong className='mr-3'>Cost: </strong> Rs. {item.cost} /-</p>
                                </div>
                                <div className="card-footer bg-transparent border-success">
                                    <Link to={`/booking/${item._id}`}><button className='btn btn-success'>Book Hotel</button></Link>
                                    <Link to={`/trip/${sessionStorage.getItem('tripType')}`}><button className='btn btn-danger ml-3'>Cancel</button></Link>
                                </div>
                                
                            </div>
                        </Fragment>
                    )
                })
            )
        }
        else{
            return(
                'Please wait while loading !!'
            )
        }
    }

    render(){
        return(

            <Fragment>
                <center>
                    <div className='mt-2 mb-2'>
                        {this.handleHotel(this.state.hotel)}
                    </div>
                </center>
            </Fragment>
        )
    }
    componentDidMount(){
        fetch(`https://developerfunnel.herokuapp.com/hotelsdetails/${this.props.match.params.hotelid}`)
        .then(response => response.json())
        .then(data => this.setState({
            hotel:data
        }));

        
    }
}


export default Hotel