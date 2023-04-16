import React, { Component } from 'react';
import Jamma from './carousel';
import Middle from './middle';
import axios from 'axios';

class Main extends Component {
    constructor(){
        super();
        this.state={
            main: [],
            middle: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/main').then(res=> {
            this.setState({
                main : res.data.main
            })
        }).catch(err =>{
            console.log(err)
        })

        axios.get('http://localhost:5000/middle').then(res => {
            this.setState({
                middle : res.data.middle
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        const {main, middle} = this.state
        return (
           <>
          <Jamma cdata= {main}/>
           <Middle mdata={middle} />
           
           </>
        );
    }
}

export default Main;