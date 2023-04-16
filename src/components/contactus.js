import React, { Component } from 'react';
import '../styles/middle.css';

class Contact extends Component {
    render() {
        return (
            <>
              <div class='container-fluid mt-5 contact pb-4'>
                <div class='row'>
                    <div class='col-4 emp'>
                  
                     
                    </div>
                    <div class='col-12 col-xl-4 col-lg-4 col-md-6 col-sm-8  con'>
                          <h4 class="conhead pt-4" >Contact Us On</h4>
                          <span class="cond mx-3">Content Owned by Konaseema</span><br/>
                          <span class="cond mx-3" >@ konaseema developed and hosted by <strong>srikar Vundavalli</strong></span>
                          
                          <div class="mt-4 mx-5">
                          <a href="https://www.facebook.com/profile.php?id=100070504010099&mibextid=ZbWKwL" class="fa fa-facebook mx-3"></a>
                          <a href="https://www.linkedin.com/in/srikar-v-22b760201" class="fa fa-linkedin mx-3"></a>
                          <a href="https://github.com/Srikar-Vundavalli" class="fa fa-github mx-3"></a>
                          <a href="https://instagram.com/srikar_krishna__vundavalli?igshid=MGNiNDI5ZTU=" class="fa fa-instagram mx-3"></a>
                          </div>
                         
                         
                          
                         
                    </div>
                    <div class='col-4 emp'>
                      
                    </div>
                </div>
              </div>
            </>
        );
    }
}

export default Contact;