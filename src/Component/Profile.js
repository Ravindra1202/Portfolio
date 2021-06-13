import React from 'react';
 import './Profile.css';
 
export default function Profile(){
    return (
        <div className="profile">
              <div className="profilephoto">
                <img src="/images/ravindra_p.jpg"></img>
                </div>

                <div className="name">
                    <h1>Ravindra Patel</h1>
                    <h5>Software Developer</h5>
                </div>

                <div className="profilesocial">
                    <img src="/images/fb.png" alt=""></img>
                    <img src="/images/whatsapp.png" alt=""></img>
                    <img src="/images/instagram.jpg" alt=""></img>
                    <img src="/images/linkedin.png" alt=""></img>
                </div>
               
        </div>
    )
}
