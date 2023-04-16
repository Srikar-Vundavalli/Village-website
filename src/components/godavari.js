
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../styles/godavari.css';

import axios from 'axios';

import React, { Component } from 'react';

class Godavari extends Component {
    constructor(){
        super()
        this.state = {
            godavari: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/godavari').then(res=>{
            this.setState({
                godavari : res.data.godavari
            })
        })
        .catch(err=> {
            console.log(err);
        })
    }
    render() {
        const {godavari} = this.state;
        return (
           <>
           {
            godavari.map((item) =>{
                return(
                    <div className='container godavar pb-4 mt-5'>
                    <h1 className='god-head mx-4 pt-4'>{item.head}</h1>
                    <Carousel showThumbs={false} className="mt-4">
                     <div>
                         <img className='god-img' src={item.img1} />
                        
                     </div>
                     <div>
                         <img className='god-img' src={item.img2} />
                        
                     </div>
                     <div>
                         <img className='god-img' src={item.img3} />
                        
                     </div>
                 </Carousel>  
                    <p className='god-text mt-4'>
                     {item.text}
                    </p>
                </div>
                )
            })
           }

           </>
        );
    }
}

export default Godavari;




