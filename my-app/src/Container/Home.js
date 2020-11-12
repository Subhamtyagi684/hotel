import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
// const Home = () => {
//     return(
//         <Fragment>
//             <center>
//                 <div classNameName='mt-2 mb-2'>
//                     <h3> This is home page. </h3>
//                 </div>
//             </center>
//         </Fragment>
//     )
// }

const cityapiurl ='https://developerfunnel.herokuapp.com/location'
const hotelapiurl = 'https://developerfunnel.herokuapp.com/hotels?city='

class Home extends Component{
    constructor(){
        super()

        this.state = {
            city:'',
            hotel:'',
            hotelcode:'',
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

    render(){
        return(
            <Fragment>
                <center>
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
                </center>
            </Fragment>
        )
    }
    componentDidMount(){
        fetch(cityapiurl)
        .then(response => response.json())
        .then(data => this.setState({
            city:data
        }));
        
    }
}

export default Home