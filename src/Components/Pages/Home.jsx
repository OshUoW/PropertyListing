import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Home.css'
import Navbar from '../Navbar/Navbar'

// Define and export the Home component
export default function Home() {
  return (
    <div>
      <Navbar/>
      <section className="homewrapper">
        <div className="paddings ineerWidth flexCenter homecontainer">
          <div className="homeleft">
            <div className="hometitle">
              <h1>Discover <br/>
              More Suitable <br/>
              Property</h1>
            </div>
            <div className="orangecircle"/>
            <div className=" homedes">
            <span>At UOW PROPERTIES,</span> <br/>
            <span> we understand that finding the right property is a big decision.  </span>
            <br />
            <span>That's why we're dedicated to providing a wide variety  </span>
            <br />
            <span>of the latest and most desirable apartments for sale,</span>
            <br />
            <span>tailored to your specific needs and preferences.</span>
            <br />
            <span>Our team of experts is here to guide you every step of the way, </span>
            <br />
            <span>from browsing our collection to making a purchase.</span>
            </div>
            <Link to='/Properties' class="homebtn">Browse Properties</Link>
          </div>
            <div className="flexColCenter homeright">
              <div className="homeimagecontainer">
              <img src='images/himage.jpg' alt=''/>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}
