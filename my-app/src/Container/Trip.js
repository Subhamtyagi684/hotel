import React, { Component, Fragment } from 'react';
import './Loader.css'
import {Link} from 'react-router-dom'

const hoteltripurl ='https://developerfunnel.herokuapp.com/hotellist/'

class Trip extends Component {
    constructor(){
        super()
        this.state = {
            hotellist:''
        }
    }

    handleHotelList = (data) => {
        if (data){
            return(
                data.map((item)=> {return (
                    <Fragment>
                        <tr key={item._id}>
                            <td>
                               <Link to={`/hotel/${item._id}`}> <img src={item.thumb} className='card-img' height='280px'/></Link>
                            </td>
                            <td>
                            <Link to={`/hotel/${item._id}`}>{item.name}</Link>
                            </td>
                            <td> {item.locality}</td>
                            <td> 
                            <Link to={`/hotel/${item._id}`}>  <button className='btn btn-info'>View Details</button></Link>
                            </td>
                        </tr>
                    </Fragment>
                )})
            )
        }
        else{
            return(
                <Fragment>
                    <tr className='text-center'>
                        <td colSpan='4'>
                            <div className="loader"></div>
                        </td>
                    </tr>
                </Fragment>
            )
        }
    }

    render(){
        return(
            <Fragment>
                <table className='w-100 text-center' border='1' cellPadding='10'>
                    <tbody>
                        <tr>
                            <th>
                                Hotel Image
                            </th>
                            <th>
                                Hotel Name
                            </th>
                            <th>
                                Hotel Locality
                            </th>
                            <th>
                                Details
                            </th>
                        </tr>
                        {this.handleHotelList(this.state.hotellist)}
                    </tbody>
                </table>
            </Fragment>
        )

    }
    componentDidMount(){
        fetch(`${hoteltripurl}${this.props.match.params.tripid}`)
        .then(response => response.json())
        .then(data => this.setState({
            hotellist:data
        }));

        sessionStorage.setItem('tripType',this.props.match.params.tripid)

    }
}


export default Trip