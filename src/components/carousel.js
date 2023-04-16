import React, { Component } from 'react';
import '../styles/jamma.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class Jamma extends Component {
    render() {
        const { cdata } = this.props;
        return (
            <>
                              <Carousel showThumbs={false}>
                                   {
                                        cdata.map((item, index) => {
                                            return (
                                                <div>
                                                    <img key={index} src={item.image} alt="img" className='jekka'/>
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
            
            </>
        );
    }
}

export default Jamma;

