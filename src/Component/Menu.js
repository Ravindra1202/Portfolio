import React from 'react'
 import "./Profile.css";
 import "./Menu.css"
export default function Menu() {
    return (
        <div className="menu">
            <div className="menuicon">
                <img src="./images/menu.png"></img>
            </div>

            <div className="menucontact">
            <img src="./images/man.png"></img>
            <img src="./images/call.png"></img>
            <img src="./images/edit.png"></img>
            <img src="./images/bag.png"></img>
            <img src="./images/eyesglass.png"></img>
            </div>

            <div className="menucloud">
            <img src="./images/cloud.jpg"></img>
            </div>
            
            
        </div>
    )
}
