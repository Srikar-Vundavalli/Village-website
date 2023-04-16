import React, { Component } from 'react';

import '../styles/places.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';


class Places extends Component {
    constructor(){
        super()
        this.state = {
            places: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/places').then(res=>{
            this.setState({
                places : res.data.places
            })
        })
        .catch(err=> {
            console.log(err);
        })
    }
    render() {
        const {places} = this.state
        return (
           <>
           
                {
                    places.map((item, index) => {
                        return (
                            <div className='container place mt-5 pb-4'>
                                <h1 key={index} className='placehead pt-4 mx-4'>{item.place}</h1>
                               
                                 <Carousel showThumbs={false} className="plaro mt-4">
                                   <div>
                                      <img class="rjy" src={item.img1} />
                   
                                    </div>
                                    <div>
                                      <img class="rjy" src={item.img2} />
                   
                                    </div>
                                     <div>
                                       <img class="rjy" src={item.img3} />
                   
                                    </div>

                                 </Carousel>
                                <p key={index} className="place1 mt-4">{item.text}</p>
                            </div>
                        )
                    })
                }
           </>
        );
    }
}

export default Places;