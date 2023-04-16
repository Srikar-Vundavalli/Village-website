import React, { Component } from 'react';
import '../styles/middle.css';


class Middle extends Component {
    render() {
      const { mdata } = this.props;
        return (
            <>
            {
              mdata.map((mid) =>{
                return(
                  <>
                  <div className='conatiner middle mt-5'>

                  <h2 class="text1 mt-3 mx-4">{mid.stitle}</h2>
  
                  <div className='row row1'>
                      <div className=' col-5 godavari mt-4'>
                      <a class="c-preview" href="/godavari">
                        <div class="c-preview__img"></div>
                         <h2 class="c-preview__title text-white">{mid.s1}</h2>
                        </a>
                      </div>
                      <div className='godavari mt-4 col-5'>
                      <a class="c-preview" href="/ruralareas">
                        <div class="c2-preview__img"></div>
                         <h2 class="c-preview__title text-white">{mid.s2}</h2>
                        </a>
                      </div>
                  </div>
                    
               </div>
  
               <div className='container middledetail mt-5'>
                   <h1 className='midhead pt-5 mx-4'>{mid.ktitle}</h1>
                   <p className='pt-3 mx-5 midtext pb-5'>
                  
                     {mid.kdata}
                   </p>
               </div>
               </>
                )
              })
            }

            </>
        );
    }
}

export default Middle;