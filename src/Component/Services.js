import React from 'react'
import './Services.css';
export default function Services() {
    let data = [
        {
            image: "./images/desktop.png",
            heading: "Development",
            massgae: "A software developer, a programmer or more recently a coder, is a person who creates computer software"
        },
        {
            image: "./images/rocket.png",
            heading: "SEO Optimization",
            massgae: " reviews and implements changes to websites so they are optimized for search engines"
        },
        {
            image: "./images/datasecurity.jpg",
            heading: "Data Security",
            massgae: " Designing, implementing, maintaining, overseeing, and upgrading all security measures needed to protect organizations' data, systems, and networks."
        },
        {
            image: "./images/database.png",
            heading: "Data Base",
            massgae: "Data engineers work in a variety of settings to build systems that collect, manage, and convert raw data into usable information for data scientists and business analysts to interpret"
        }
        
    ]
    return (
        <div className="myservices">

            {data.map((item, index) => {
                return (
                    <div className="data">
                        <div className="image">
                            <img src={item.image} alt="demo"></img>
                        </div>
                        <div className="heading">
                            <h3>{item.heading}</h3>
                        </div>
                    <div className="massage">
                        <p>{item.massgae}</p>
                    </div>
                    </div>
                );
            })}


        </div>
    );
}
