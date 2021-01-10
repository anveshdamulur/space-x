import { Component } from "react";
import axios from 'axios';
import './style.css'
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
const zoomOutProperties = {
    duration: 1000,
    transitionDuration: 500,
    infinite : true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }
export class LaunchView extends Component{


    state={
        launchData : {
            links:{
                flickr_images: []
            }
        }
     
    }
    componentDidMount=()=>{
        const flightNum =this.props.match.params.flight_number
        this.getSingleLaunch(flightNum)
    }

    getSingleLaunch=(flightNum)=>{
        console.log(flightNum)
        axios.get('https://api.spacexdata.com/v3/launches/'+ flightNum)
        .then((launch)=>{
            console.log(launch.data)
           this.setState({
               launchData : launch.data
           })
          
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  
    launchAttribute= (title, key)=>{

        const value = this.state.launchData[key]
        return(
            <div className='attribute'>
                    <div className='title'>
                    <h1>{title}</h1>
                    </div>
                    <div className='data'>
                     <p>{value}</p>
                    </div>
            </div>
        )
    }
    
   
    render(){
        const hasImages = this.state.launchData.links.flickr_images.length >0;
        const details = this.state.launchData.details ==='' ? '' : this.state.launchData.details;
        return(
            
            <div className='container-launchview'>
                {this.launchAttribute('Name',['mission_name'] )}
                {this.launchAttribute('Flight Number',['flight_number'])}
                {this.launchAttribute('Date',['launch_date_local'])}
                
                {hasImages && (
                     <Zoom {...zoomOutProperties}>
                     {this.state.launchData.links.flickr_images.map((each, index) =>
                     <img key={index} style={{width : "100%"}} alt="FlikerImages" src={each} />
                     )}
                 </Zoom>
                )
                }
               {details && (this.launchAttribute('Details',['details']))}

            </div>
        )
    }
}