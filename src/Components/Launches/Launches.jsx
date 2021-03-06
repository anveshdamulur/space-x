import { Component } from "react";
import {Launch} from '../Launch/Launch.jsx'
import axios from 'axios';
import { Link } from "react-router-dom";
export class Launches extends Component{
    state ={
        launch :[]
    }
    componentDidMount=()=>{
        this.getData()
    }
    getData = () =>{
        // Make a request for a user with a given ID
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((response)=>{
            this.setState({
                launch : response.data
            })
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }   
    LaunchListData = () =>{
       const LaunchList = this.state.launch.map((ele, index)=>{
           const image = ele.links.flickr_images.length === 0 ? 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg' : ele.links.flickr_images[0] 

           return (
           <Link  key={`Launch_${index}`} to={`/LaunchView/${ele.flight_number}`}>
           <Launch 
                   
                    title = {ele.mission_name}
                    date = {ele.launch_date_local}
                    img = {image}
                    description ={ele.details}
                 />
            </Link>
           )
            
        })
    return LaunchList;
       
    }

    render(){
        return(
            <div>
            {this.LaunchListData()}
            </div>
        )
    }
}