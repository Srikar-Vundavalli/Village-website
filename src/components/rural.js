
import '../styles/rural.css';
import { Carousel } from 'react-responsive-carousel';
import '../styles/godavari.css';
import axios from 'axios';
import React, { Component } from 'react';

class Rural extends Component {

    constructor(){
        super();
        this.state={
            kona:[],
            rural:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/kona').then(res=>{
            this.setState({
                kona : res.data.kona
            })
        }).catch(err => {
            console.log(err)
        });

        axios.get('http://localhost:5000/rural').then(res=>{
            this.setState({
                rural : res.data.rural
            })
        }).catch(err => {
            console.log(err)
        });
    }
    render() {
        const {kona, rural} = this.state;
        return (
          <>
          <div className='container mt-4 kona'>
            {
                kona.map((item) =>{
                    return(
                        <>
                        <h1 className='rural-head'>{item.head}</h1>
                        <p className='rural-text'>
                           {
                            item.text
                           }
                     
                     
                        </p>
                        </>
                    )
                })
            }
          

          </div>

          {
            rural.map((item) => {
                return(
                    <>
                      <div className='container rural mt-4'>
                      <div className='row kon'>
                      <div className='col-3'>

</div>
              <div className='col-12 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12 kon-box mt-3'>
              <Carousel showThumbs={false} className="">
                <div>
                    <img className='rural-img' src={item.img1} />
                   
                </div>
                <div>
                    <img className='rural-img' src={item.img2} />
                   
                </div>
                <div>
                    <img className='rural-img' src={item.img3} />
                   
                </div>
            </Carousel> 
            
            <h1 className='kon-head mt-2 mx-2'>{item.head}</h1>

            <p className='kon-text mt-3 mx-2'>
                {item.text}
            </p>
           
          </div>
    <div className='col-3'>

    </div>

    </div>
                      </div>
                    </>
                )
            })
          }

         
          </>
        );
    }
}

export default Rural;

