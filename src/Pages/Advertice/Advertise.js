import React from "react";
import './Advertise.css'
import img13 from "../../imgs/logos-07.png";
import img14 from "../../imgs/logo.png"
import IMG from '../../imgs/IMG9.PNG.png'
import Footer from "../../Component/Footer";
const Advertise = () => {
    return (
        <div>
            <div className="advertise">
            <img className="abs-img" src={IMG} alt=""/>
            <div className="ad-with-us">
                <h2>Advertise<br /> With Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                    ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                </p>
            </div>
            <div className="benfits">
                <h2>Benfits</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                    ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                </p>
            </div>
            <div className="adv-form">
                <h2>Kindly Fill The<br /> Form Below</h2>
                <div className="la-in">
                    <label>Your Name</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="text" />
                    <label>Your Message</label>
                    <input className="ch-in" type="text" />
                    <button>Submit</button>
                </div>
            </div>
            
        </div>
        <div className="adv-footer">
        <Footer />
    </div>
        </div>
    )
}
export default Advertise;