import React from "react";
import '../Authors/Authors.css';
import img14 from "../../imgs/logo.png"
import img13 from "../../imgs/logos-07.png";
import ImageSlider from '../../Component/ImageSlider';
import { SliderData } from '../../Component/SliderData';
import Footer from "../../Component/Footer";

const Authors = () =>{
    return(
        <div className="authors">
           <div className="auth-slider">
             <ImageSlider slides={SliderData} />
           </div> 
           <div className="authors-topics">
            <h5>Author`s Top Articles</h5>
            <div className="auth-flex">
                <div className="auth auth-1">
                    <img src='' className="auth-img"/>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed </p>
                </div>
                <div className="auth auth-1">
                    <img src='' className="auth-img"/>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed </p>
                </div>
                <div className="auth auth-1">
                    <img src='' className="auth-img"/>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed </p>
                </div>
                <div className="auth auth-1">
                    <img src='' className="auth-img"/>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed </p>
                </div>
                <div className="auth auth-1">
                    <img src='' className="auth-img"/>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed </p>
                </div>
            </div>
           </div>
            <div className="auth-footer">
                <Footer />
            </div>
        </div>
    )
}
export default Authors;