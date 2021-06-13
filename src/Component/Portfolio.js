import React from 'react';
 import Menu from './Menu.js';
 import Profile from './Profile';
 import  Details from './Details';
 
 import './Portfolio.css';
const Portfolio=()=> {
    return (
        <div className="portfoliocss">
            <div className="left">
                {/* <h1>Hello menu</h1> */}
                <Menu/>
            </div>
            <div className="middle">
             <Profile/>

                
            </div>
            <div className="right">
            <Details/>
             

            </div>
            
        </div>
    );
}

export default Portfolio;
