import React from "react";
import './Error.css'
import img0 from '../imgs/404-1.png'
import img1 from '../imgs/404-02.png'
import img2 from '../imgs/404-04.png'
import Footer from "../Component/Footer";
const Error = () => {
    return (
        <div className="error">
            <div>
            <img className="img1" src={img0} />
            <img className="img2" src={img1} />
            <img className="img3" src={img2} />
            {/* 
             */}
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis </p>
            </div>
            {/* <div className="error-footer">
                <Footer />
            </div> */}
        </div>
    )
}
export default Error