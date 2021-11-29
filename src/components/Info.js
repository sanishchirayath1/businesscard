import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="./assets/businessCard.png" alt="potrait"/>
            <div>
                <h2> Sanish Chirayath</h2>
                <p className="designation">Frontend Developer</p>
                <small className="site">sanishchirayath.portfolio.site</small>
            </div>
            <div className="buttons">
                <a href="mailto:sanishchirayath@gmail.com" className="button"><img src="./assets/email.png" />  Email</a>
                <a href="https://www.linkedin.com/in/sanishchirayath/" className="button linkedin"><img src="./assets/linkedin.png" />  LinkedIn</a>          
            </div>    
        </div>
    )
}