import { Component } from "react";
import './styles.css'

export class Launch extends Component{
 
    render(){
      
        return(
            <div className='container-launch'>
                 <div className='launch-image'>
                    <img src={this.props.img} alt="spaceImg"/>
                </div>

                <div className='launch-data'>
                    <div className='launch-data-info'>
                        <h1>Title: {this.props.title}</h1>
                        <h2>Date: {this.props.date}</h2>
                    </div>
                    <div className='para'>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            
            </div>
        )
    }
}