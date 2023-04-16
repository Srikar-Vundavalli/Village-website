import React, { Component } from 'react';
import About from './components/about';
import Nbar from './components/navbar';
import Places from './components/places';

class routing extends Component {
    render() {
        return (
            <div>

                <About/>
                <Places/>
                <Nbar/>
                
                
            </div>
        );
    }
}

export default routing;