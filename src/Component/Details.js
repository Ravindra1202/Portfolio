import React from 'react'
import "./Details.css";
import Aboutme from './Aboutme'
import Services from './Services'
export default function Details() {
    return (
        <div className="details">
            <Aboutme/>
            <hr/>
            <h2>My Services</h2>
            <Services/>
            
        </div>
    )
}
