import React, { Component } from 'react';
import axios from 'axios';
import '../styles/about.css';

class About extends Component {

    constructor(){
        super();
        this.state ={
            about:[]
        }

    }

    componentDidMount(){
        axios.get(`http://localhost:5000/about`
        ).then(res => {
            this.setState({
                about : res.data.about
            })
        }) 
        .catch(err => {
           console.log(err)
        })
    }
    render() {
       const {about} = this.state
        return (
           <>

           {
            about.map(dat =>{
                return (
                    <div className='container about mt-5'>
                        <h1 className='abntitle pt-4'>{dat.title}</h1>

                        <p className='abcont pt-3'>
                            {dat.maintext}
                        </p>
                    </div>
                )

                
            })
           }
           
           </>
        );
    }
}

export default About;