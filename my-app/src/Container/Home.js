import React, { Component, Fragment } from 'react';

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

const apiurl ='https://developerfunnel.herokuapp.com/location'

class Home extends Component{
    constructor(){
        super()

        this.state = {
            city:''
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
                    <option value="1" key={item.city}>{item.city_name}</option> 
                )
            }))
        }
        else{
            return(
                <option>No city available</option> 
            )
        }
    }

    render(){
        console.log(this.state.city)
        return(
            <Fragment>
                <center>
                    <div className='mt-2 mb-2'>
                        <h3> Select hotel </h3>
                        <select className="custom-select" style={{width:'50%'}}>
                            {this.getCityList(this.state.city)}
                        </select>
                    </div>
                </center>
            </Fragment>
        )
    }
    componentDidMount(){
        fetch(apiurl)
        .then(response => response.json())
        .then(data => this.setState({
            city:data
        }));
    }
}

export default Home