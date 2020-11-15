import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import './Loader.css'

// const Home = () => {
//     return(
//         <Fragment>
//             <center>
//                 <div className='mt-2 mb-2'>
//                     <h3> This is home page. </h3>
//                 </div>
//             </center>
//         </Fragment>
//     )
// }

const cityapiurl ='https://developerfunnel.herokuapp.com/location'
const tripapiurl ='https://developerfunnel.herokuapp.com/booking'
const hotelapiurl = 'https://developerfunnel.herokuapp.com/hotels?city='

class Home extends Component{
    constructor(){
        super()

        this.state = {
            city:'',
            hotel:'',
            hotelcode:'',
            trip:''
        }
    }

    // changeColor = () => {
    //     if (this.state.color=='')
    //     this.setState({
    //         color:'red'
    //     })
    //     else{
    //         this.setState({
    //             city:''
    //         })
    //     }
    // }

//     > x = [1,2,3,5,6,7]
// [ 1, 2, 3, 5, 6, 7 ]
// > x.map((item)=>{return item})
// [ 1, 2, 3, 5, 6, 7 ]



    getCityList = (data) => {
        if (data){
            return(data.map((item)=>{
                return(
                    <option value={item.city} key={item._id}>{item.city_name}</option> 
                )
            }))
        }
        else{
            return(
                <option>loading...</option> 
            )
        }
    }

    getHotelList = (data) => {
        if (data){
            return(data.map((item)=>{
                return(
                    <option value={item._id} key={item._id}>{item.name}</option> 
                )
            }))
        }
        else{
            return(
                <option>Sorry! No hotels found</option> 
            )
        }
    }

    handleCity = (event) => {
        let code = event.target.value
        fetch(`${hotelapiurl}${code}`)
        .then(response => response.json())
        .then(data => this.setState({
            hotel:data
        }));
    }

    handleHotel = (event) => {
        this.setState({
            hotelcode:event.target.value
        })
    }



    handleViewHotelButton = (data) => {
        if (data){
            return(
               <Link to={`/hotel/${this.state.hotelcode}`}> <button className='btn btn-success mt-4'>View Hotel</button></Link>
            )
        }
    }

    handleTriptype = (data) => {
        if (data){
            return(
                data.map((item)=> {
                    return(
                        <div className='col-lg-3 col-md-6'>
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt="..." height='160px'/>
                                    <div className="card-body text-center">
                                        <Link to={`/trip/${item.trip}`} className="btn btn-info">{item.name}</Link>
                                    </div>
                                </div>
                            </div>
                    )
                })
            )
        }
        else{
            return(
                <Fragment>
                    <div className='col-md-12'>
                        <div class="loader"></div>
                    </div>
                </Fragment>
            )
        }
    }   

    render(){
        return(
            <Fragment>
                   <div className='mt-2 mb-2'>
                        <div style={{position:'relative'}} className='border border-success img-thumbnail'>
                            <img src="background.jpg" className="img-fluid rounded " alt='background.jpg'/>
                            
                            <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'35%'}}>
                                <select className="custom-select w-100" onChange={this.handleCity} >
                                    <option value='-'> Select City for hotels</option> 
                                    {this.getCityList(this.state.city)}
                                </select>
                                <select className="custom-select w-100 mt-4" onChange={this.handleHotel}>
                                    <option value=''> Select Hotels</option>
                                    {this.getHotelList(this.state.hotel)}
                                </select>
                                {this.handleViewHotelButton(this.state.hotelcode)}
                           </div>
                            
                        </div>
                    </div>
                    <div className='mt-2'>
                        <center>
                            <h4 className='mt-5 mb-5 p-2' style={{background:'#17a2b8',color:'white'}}>Search by triptype</h4>
                        </center>
                        <div className='row'>
                            {this.handleTriptype(this.state.trip)}  
                            
                        </div>
                    </div>
                    
            </Fragment>
        )
    }
    componentDidMount(){
        fetch(cityapiurl)
        .then(response => response.json())
        .then(data => this.setState({
            city:data
        }));

        fetch(tripapiurl)
        .then(response => response.json())
        .then(data => this.setState({
            trip:data
        }));
        
    }
}

export default Home