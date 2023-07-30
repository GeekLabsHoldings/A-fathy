import React from "react";
import ImageSlider from '../../Component/ImageSlider';
import { SliderData } from '../../Component/SliderData';
import img12 from "../../imgs/logos-05.png";
import './Caps.css'
import Footer from "../../Component/Footer";



const Caps = () => {
    return (
        <div>
            <div className="caps">
            <h2>Small Caps Universe</h2>
            <div className="caps-slider">
                <p>Lorem ipsum dolor sit  amet, consectetuer  amet, consectetuer </p>
                {/* <div className="slid">
                    <ImageSlider slides={SliderData} />
                </div> */}
            </div>
            <div className="caps-flex">
                <div className="flex-left">
                    <div className="left-1"></div>
                    <p className="caps-p">Lorem ipsum dolor sit  amet, consectetuer  amet, consectetuer </p>
                </div>
                <div className="flex-right">
                    <div className="left-2"></div>
                    <p className="caps-p">Lorem ipsum dolor sit  amet, consectetuer  amet, consectetuer </p>
                </div>

            </div>
            <div className="caps-flex-2">
                <div className="flex-left-2">
                    <div className="left-1"></div>
                    <p className="caps-p">Lorem ipsum dolor sit  amet, consectetuer  amet, consectetuer </p>
                </div>
                <div className="flex-right-2">
                    <div className="left-2"></div>
                    <p className="caps-p">Lorem ipsum dolor sit  amet, consectetuer  amet, consectetuer </p>
                </div>

            </div>

            <div className="test">
                <div class="r-l">

                    <p class="pp2">Dress To Impress <br />Dress To Invest!</p>
                    <p class="pp3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt u</p>
                    <button><a href="#">See More</a></button>
                    <img src={img12} />

                </div>
            </div>
            <div className="caps-flex-3">
                <div className="flex-left-3">
                    <div className="left-1"></div>
                    <p className="caps-p">Lorem ipsum dolor sit  amet, consectetuer  amet, consectetuer </p>
                </div>
                <div className="flex-right-3">
                    <div className="left-2"></div>
                    <p className="caps-p">Lorem ipsum dolor sit  amet, consectetuer  amet, consectetuer </p>
                </div>

            </div>
            <div>
            
            </div>
            

          

        </div>
         <div className="caps-footer">
         <Footer />
        </div>
        </div>
    )
}
export default Caps;