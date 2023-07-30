import React from "react";
import '../MastHead/MastHead.css'

import img13 from "../../imgs/logos-07.png";
import img14 from "../../imgs/logo.png"
import Footer from "../../Component/Footer";
const MastHead =() =>{
    return(
       <div>
            <div className="MastHead">
            <div className="mast-head">
                <h4>Mast Head Page</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                     Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero </p>
            </div>
            <div className="names-div">
                <div className="name name-one">
                    <div className="name-top"></div>
                    <div className="name-bot"></div>
                    <h5>First Name</h5>
                </div>
                <div className="name name-two">
                    <div className="name-top"></div>
                    <div className="name-bot"></div>
                    <h5>First Name</h5>
                </div>
                <div className="name name-three">
                    <div className="name-top"></div>
                    <div className="name-bot"></div>
                    <h5>First Name</h5>
                </div>
                <div className="name name-four">
                    <div className="name-top"></div>
                    <div className="name-bot"></div>
                    <h5>First Name</h5>
                </div>
                <div className="name name-five">
                    <div className="name-top"></div>
                    <div className="name-bot"></div>
                    <h5>First Name</h5>
                </div>
            </div>
            
        </div>
        <div className="mast-footer">
        <Footer />
    </div>
       </div>
    )
}
export default MastHead;