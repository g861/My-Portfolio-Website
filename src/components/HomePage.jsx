import React from 'react'
import HomeBackground from '../assets/HomeBackground.gif'
import "./css/HomePage.css"
function HomePage() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <span className="homeBackground">
                            <img src={HomeBackground} alt="This is home Background"  />
                        </span>
                        <span className="heading_text">
                            Welcome To My <br /> Portfolio Website <br />
                            <button className="my_projects"><i class="far fa-sticky-note"></i> My Projects</button>
                            <button className="contact_me"><i class="fas fa-phone-alt"></i> Contact Me</button>
                            
                        </span>
                    </div>
                </div>
               
            </section>
        </div>
    )
}

export default HomePage
