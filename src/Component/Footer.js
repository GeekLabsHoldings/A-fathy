import React from "react";
import "./Footer.css"
import img14 from "../imgs/logo.png"
import img13 from "../imgs/logos-07.png";
const Footer =() =>{
    return(
        <div className="footer">
        <div class="one">
            <p>Lorem ipsum dolor sit amet, consectetuer<br /> adipiscing elit, sed diam nonummy nibh </p>
            <img src={img14} />
        </div>
        <div class="two">
            <img src={img13} />
            <p>Lorem ipsum dolor sit amet, consectetuer<br /> adipiscing elit, sed diam nonummy nibh </p>
        </div>
        <div class="three">
            <p>Lorem ipsum dolor sit amet, consectetuer<br /> adipiscing elit, sed diam nonummy nibh </p>
            <button><a>Shop Now</a></button>
        </div>
    </div> 
    )
}
export default Footer 



